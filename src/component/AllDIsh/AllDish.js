import React, { useState, useEffect } from "react"
import loddimg from "../../images/looding.gif"
import btn from "../../images/button.jpg"
import icon from "../../images/carticon.jpg"
import "./AllDish.css"
import { db, addDoc, getDocs, collection } from "../router/firebase";
import  {Link, useHistory}  from "react-router-dom";




function AllDish() {
    const history=useHistory()

    const [myDish, setMyDish] = useState([]);

    const [myorder, setmyorder] = useState([]);
    // const [totalprice, settotalprice] = useState([0]);

   


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

        let getdish = collection(db, 'DISH');

        let alldish = await getDocs(getdish);
        let mydishclone = myDish.slice(0);
        alldish.forEach((doc) => {
            mydishclone.push(doc.data());
        });
        setMyDish(mydishclone);
    }, [])

    return (
        <div>
            <div className="oo" onClick={()=>{history.push("/OrderList")}}>

            <h1 className="h1">ALL DIShES</h1>
            <div className="display">
                <img className="icon" src={icon}/>
                <p className="badge">{myorder.length}</p>
                
            </div>
            </div>
            <br/>
            
            {myDish.map(({ Price, Dtype, name }, index) => {



                return (


                    <div className="card" >
                        <img className="cardimg"  id={{ index }} style={{ width: 200, height: 200 }} src={loddimg} />
                        <h1 className="cardname">{name}</h1>
                        <h4 className="cardprice">RS:{Price}</h4>
                        <h6 className="cardd" >Delivery{Dtype}</h6>
                        <img className="cardbtn"  onClick={() => {
                            {       
                                    let obj = {
                                    name: name,
                                    price: Price,
                                }
                                
                             
                                alert("carted")
                                let input_text = collection(db, "CardfromCoustmer");
                                addDoc(input_text, obj)
                                console.log(obj)
                                
                            }
                        }} src={btn} />










                    </div>
                )
            })}

        </div>







    )


}
export default AllDish;