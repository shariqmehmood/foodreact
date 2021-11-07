import React ,{useState} from "react";
import "./form.css"
import { auth, createUserWithEmailAndPassword, db, setDoc, doc } from '../router/firebase';
import  {Link, useHistory}  from "react-router-dom";

  


function Signup() {
  const  [email, setemail]=useState("")
  const  [password, setpassword]=useState("")
  const [userRole, setUserRole] = useState('seller');
  const [errMsg, setErrMsg] = useState('');
  const history=useHistory()

  const regesterme=  async ()=>{
    console.log(email,password,userRole);


      try {
        console.log({ email, userRole })
        let { user } = await createUserWithEmailAndPassword(auth, email, password);
        let dataRef = doc(db, 'users', user.uid)
        await setDoc(dataRef, {
          email: user.email,
          uid: user.uid,
          userRole: userRole
         
        }
        );
        alert("Please sign in")
        history.push("/Signin")
          
        } catch (err) {
          setErrMsg(err.message);
          setTimeout(() => {
              setErrMsg('');
          }, 5000)
      }


  }


    return (
        <div>

       



        <div>

          
         
            <div className="center">
      <h1>Sign Up</h1>

   
        <div className="form">
          
        <div className="txt">
          <input value={email}   onChange={(ev) => { setemail(ev.target.value) }} type="text" required />
          <span></span>
          <label for="Username" >E-mail</label>
        </div>
        <div className="txt">
          <input value={password} onChange={(ev) => { setpassword(ev.target.value) }} type="password" required />
          <span></span>
          <label for="Password">Password</label>
        </div>
        <div className="txt">

        <select  name="role" className="dropdown" onChange={(e) => { setUserRole(e.target.value) }}>
                <option value='seller'>Seller</option>
                <option value='buyer'>buyer</option>
            </select>
</div>
      <button className="submit"  onClick={regesterme}> Regesterme</button>
      <button className="submit"  onClick={()=>{history.push("/Signin")}}> What are u Regester</button>

      {errMsg ? <p>{errMsg}</p> : null}   
        <div>


        </div>
        </div>
    </div>
           
        </div>
        </div>

        
    )
}

export default Signup;