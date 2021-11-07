import React ,{useState} from "react";
import "./form.css"
import  {Link, useHistory}  from "react-router-dom";
import { auth, signInWithEmailAndPassword} from '../router/firebase';




function Signin() {
  const  [email, setemail]=useState("")
  const  [password, setpassword]=useState("")
  const [userRole, setUserRole] = useState('seller');
  const [errMsg, setErrMsg] = useState('');
  const history = useHistory(); 
  const regester=async()=>{
    console.log(email,password,userRole);
    try {
      let { user } = await signInWithEmailAndPassword(auth, email, password);
      {userRole==="seller" ?history.push("/Dashboard") : history.push("/AllDish")}   
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
      <h1>Signin</h1>

   
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
                <option value='buyer'>Buyer</option>
            </select>
</div>
      <button className="submit"  onClick={regester}> Signin</button>
      {errMsg ? <p>{errMsg}</p> : null}   
        <div>


        </div>
        </div>
    </div>
           
        </div>
        </div>

        
    )
}

export default Signin;