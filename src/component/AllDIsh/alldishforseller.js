import React, { useState, useEffect } from "react"
import loddimg from "../../images/looding.gif"
import icon from "../../images/carticon.jpg"
import "./AllDish.css"
import { db, addDoc, getDocs, collection } from "../router/firebase";
import  {Link, useHistory}  from "react-router-dom";




function AllDishforseller() {
    const history=useHistory()

    const [myDish, setMyDish] = useState([]);

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
  



    useEffect(async () => {

        let gettweet = collection(db, 'DISH');

        let alltweet = await getDocs(gettweet);
        let mytweetClone = myDish.slice(0);
        alltweet.forEach((doc) => {
            mytweetClone.push(doc.data());
        });
        setMyDish(mytweetClone);
    }, [])

    return (
        <div>
            

            <h1 className="h1">All Uploded Dishes</h1>
            
            
            
            {myDish.map(({ Price, Dtype, name }, index) => {



                return (


                    <div className="card" >
                        <img className="cardimg"  id={{ index }} style={{ width: 200, height: 200 }} src={loddimg} />
                        <h1 className="cardname">{name}</h1>
                        <h4 className="cardprice">{Price}$</h4>
                        <h6 className="cardd" >Delivery{Dtype}</h6>
                        










                    </div>
                )
            })}

        </div>







    )


}
export default AllDishforseller;