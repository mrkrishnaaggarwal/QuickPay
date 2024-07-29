import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import axios from "axios";
import { useState } from "react";

export const Send = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount,setAmount] = useState(0);
    const navigate = useNavigate();
    const [loading,setLoading] = useState("");

    const handleTransact = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/account/transfer", {
                to: id,
                amount
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            setLoading("Transaction Done");

            setTimeout(() => {
                navigate("/dashboard");
            }, 2000);
        } catch (error) {
            console.error('Error during transaction:', error);
            setLoading("Insufficient Funds");
            setTimeout(() => {
                navigate("/dashboard");
            }, 2000);
        }
    };
    
        
    return (
        <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
            <div className="w-2/6 h-1/2 flex flex-col items-center shadow-lg bg-white rounded-md p-8">
                <div className="pb-5">
                    <Heading label={"Send Money"} />
                </div>
                <div className="flex items-center space-x-4 mb-6">
                    <div className="rounded-full h-12 w-12 bg-green-500 flex justify-center items-center">
                        <div className="text-xl text-white">
                            {name[0]}
                        </div>
                    </div>
                    <div className="text-lg font-medium">
                        {name}
                    </div>
                </div>
                <div className="w-4/5 mb-6">
                    <InputBox onChange={e=>{
                        setAmount(e.target.value);
                    }}label={"Amount (in Rs.)"} placeholder={"Enter Amount"} />
                </div>
                <div>
                    <Button label={"Initiate Transfer"} onClick={handleTransact} />
                </div>
                <div className="text-red-500 underline">
                    {loading}
                </div>
            </div>
        </div>
    );
};
