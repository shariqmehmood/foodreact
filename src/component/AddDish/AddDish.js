
import React, { useState } from "react";
import "./AddDish.css"
import { db ,addDoc,collection} from "../router/firebase";





function AddDish() {
    
    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [type, settype] = useState("Free");
    const [color, setcolor] = useState("green");

    

    const [errMsg, setErrMsg] = useState('');

    const Adddish= async()=>{
      
if (name===""){
    setcolor("red")
     
    setErrMsg("Dish Name Required");
    setTimeout(() => {
        setErrMsg('');
    }, 5000)
}else if(price===""){
    setcolor("red")


    setErrMsg("Dish Price Requried");
    setTimeout(() => {
        setErrMsg('');
    }, 5000)
}
else if(type===""){
    setcolor("red")


    setErrMsg("Dish price Requried");
    setTimeout(() => {
        setErrMsg('');
    }, 5000)
}
else{


        try {
            let obj={
               name: name,
               Price:price,
               Dtype:type
            }
            setname("");
            let input_text=collection(db, "DISH");
            await addDoc(input_text,obj)
            
            setcolor("green")
            setErrMsg("Sucessfully Published Dish");
            setTimeout(() => {
                setErrMsg('');
            }, 5000)
        }
        catch  {
            setErrMsg("Failed To published Dish");
            setTimeout(() => {
                setErrMsg('');
            }, 5000)
        }
  
    }
}

        
        
        
        
        return (
        <div>
            <h1 style={{ color: "white", textAlign: "center" }}> ADD_DISH</h1>
            <div className="Addresturant-div">
            <input style={{marginLeft:290}} className="dropdown" placeholder="DISH_NAME" type="text" value={name} onChange={(e) => { setname(e.target.value) }} /><br />
            <input style={{marginLeft:290}} className="dropdown" placeholder="PRICE" type="text" value={price} onChange={(e) => { setprice(e.target.value) }} /><br />
            <select style={{marginLeft:290}}  name="type" className="dropdown" onChange={(e) => { settype(e.target.value) }}>
                <option value='Free'>FREE</option>
                <option value='Paid'>PAID</option>
            </select>
            <br/>
            <button style={{width:100, backgroundColor:"black",color:"White",textAlign:"center",marginLeft:400,marginTop:20}} onClick={Adddish}>add</button>
            {errMsg ? <p style={{marginLeft:-130,color:color,fontSize:20,textAlign:"center"}}>{errMsg}</p> : null}  
            </div>
        </div>
    )
}

export default AddDish;