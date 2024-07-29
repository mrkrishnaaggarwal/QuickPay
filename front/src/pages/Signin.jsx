import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export function Signin () {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const[userFound,setUserFound] = useState();
    const navigate = useNavigate();
    const handleSignin = async ()=>{
        try{
        const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
            username : email,
            password
        });
        setUserFound("");
        localStorage.setItem("token",response.data.token);
        navigate("/dashboard");}
        catch(error) {
            console.log("error found");
            setUserFound("User Not Found");
        }
    }
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="pt-6 rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label = {"Sign in"}></Heading>
                <SubHeading label = {"Enter your information to sign in"}></SubHeading>
                <InputBox onChange={e=>{
                    setEmail(e.target.value);
                }} label = {"Email"} placeholder={"krishna@gmail.com"}></InputBox>
                <InputBox onChange={e=>{
                    setPassword(e.target.value);
                }} label = {"Password"} placeholder={"12345678"}></InputBox>
                <div className="pt-4 text-red-500 underline">
                    {userFound}
                </div>
                <div className="pt-4">
                    <Button label={"Sign in"} onClick={handleSignin}></Button>
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText = {"Sign up"} to={"/signup"} ></BottomWarning>
            </div>
        </div>
    </div>
}