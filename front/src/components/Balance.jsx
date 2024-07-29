import axios from "axios";
import { useEffect, useState } from "react";


export const Balance = () => {
    const [balance,setBalance] = useState(0);
    useEffect(()=>{
        const getBalance = async () =>{
            const response = await axios.get("http://localhost:3000/api/v1/account/balance",{
                headers : {
                    Authorization : "Bearer " + localStorage.getItem("token")
                }
            })
            setBalance(response.data.balance);
        }
        getBalance();
    },[]);
    return <div className="w-100 h-14 flex justify-left shadow">
        <div className="flex">
            <div className="font-semibold flex flex-col justify-center px-4">
                Your Balance

            </div>
            <div className="font-medium flex flex-col justify-center pr-4">
                Rs. {balance}
            </div>
        </div>

    </div>
}