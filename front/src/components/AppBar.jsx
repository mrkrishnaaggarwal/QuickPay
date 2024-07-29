import axios from "axios"
import { useEffect, useState } from "react"

export const AppBar = () => {
    const [firstName,setFirstName] = useState('U');
    const [lastName,setlastName] = useState('U');
    useEffect(()=>{
        const fetchUser = async () => {
            const userData = await axios.get("http://localhost:3000/api/v1/user/profile",{
                headers: {
                    Authorization : "Bearer " + localStorage.getItem("token")
                }
            });
            setFirstName(userData.data.firstName)
            setlastName(userData.data.lastName)
            console.log(firstName);
        }
        fetchUser();
    },[firstName]);
    return(
        <div className="w-100 shadow flex justify-between h-14">

            <div className="flex flex-col justify-center h-full ml-4">
                PayTM
            </div>

            <div className="flex">

                <div className="flex flex-col justify-center h-full mr-4">
                    {firstName+" "+lastName}
                </div>

                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">

                    <div className="flex flex-col justify-center h-full text-xl">
                        {firstName[0]}
                    </div>

                </div>
            </div>

        </div>
    )
}