import { useEffect, useState } from "react";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import axios from "axios";
import {useNavigate } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
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
    
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter);
        setUsers(response.data.user);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };

    fetchUsers();
  }, [filter]);

  return (
    <div className="flex flex-col p-4">
      <div className="text-lg font-bold flex flex-col justify-center">
        Users
      </div>
      <InputBox
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search users..."
        label=""
      />
      <div className="pt-4">
        {users
          .filter(
            (user)=> user.firstName!=firstName
          )
            .map((user) => (
          <User user={user} />
        ))}
      </div>
    </div>
  );
};

function User({ user }) {
    const navigate = useNavigate();
  return (
    <div className="flex justify-between py-2">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full">
        <Button label="Send Money" onClick={(e) =>{
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
        } } />
      </div>
    </div>
  );
}


