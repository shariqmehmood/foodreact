import React, { useState, useEffect } from "react"
import "./OrderList.css"
import { db,  getDocs, collection } from "../router/firebase";

export default function OrderList() {


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

    return (
        <div>
            <h1 style={{ color: "white", textAlign: "center" }}>OrderList</h1>



            <table className="table">
                <thead>
                    <tr>


                        <th>Sr#</th>
                        <th>Dish Name</th>
                        <th>Price</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        myorder.map(({ price, name }, index) => (

                            <tr key={name + index}>
                                <td>{index + 1}</td>
                                <td>{name}</td>
                                <td>RS:{price}</td>
                            </tr>

                        )


                        )
                    }

                </tbody>
            </table>

















        </div>
    )
}