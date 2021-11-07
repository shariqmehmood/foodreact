import React, { useState, useEffect } from "react"
import loddimg from "../../images/looding.gif"

import "./order.css"
import { db,  getDocs, collection } from "../router/firebase";

export default function Allorder(){
    const [myorder, setmyorder] = useState([]);
   
    useEffect(async () => {

        let getorder_from_fb = collection(db, 'CardfromCoustmer');

        let allorder = await getDocs(getorder_from_fb);
        let myorderclone = myorder.slice(0);
        allorder.forEach((doc) => {
            myorderclone.push(doc.data());
        });
        setmyorder(myorderclone);
    }, [])

    return(
        <div>

       
            <h1 style={{color:"white",textAlign:"center"}}>
                Order-From-Coustmer
            </h1>
              {
           myorder.map(({ price, Dtype, name }, index)=>{
            return (


                <div className="card" >
                    <img className="cardimg"  id={{ index }} style={{ width: 200, height: 200 }} src={loddimg} />
                    <h1 className="cardname">{name}</h1>
                    <h4 className="cardprice">{price}$</h4>
                    <h6 className="cardd" >Delivery{Dtype}</h6>
                    <button className="cardbt"> Recived</button>
                    <button className="cardbt"> pending</button>
                    <button className="cardbt" > Dissmis</button>
                    
                </div>
            )



           })
              }
         



          </div>
        
           
        
    )
}