import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
export const Dashboard = () =>{
    return (
        
        <div className="flex flex-col">
            <AppBar></AppBar>
            <Balance/>
            <Users></Users>
        </div>
    )
}

