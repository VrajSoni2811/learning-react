import { useEffect, useState } from "react"
import { Pencil } from 'lucide-react';
import { Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";


function UserList2() {
    const [userData, setuserData] = useState([]);
    const navigate = useNavigate()

    const getUsers = () => {
        fetch("https://69e1c27ab1cb62b9f3173069.mockapi.io/user-data")
            .then((d) => d.json())
            .then((UserList2) => setuserData(UserList2));
    }

    useEffect(() => {
        getUsers()
    }, []);




    // <userData firstname={ud.firstname} age={ud.age} phone={ud.phone} birthdate={ud.birthdate} image={ud.image}/>
    console.log("user data", userData)
    return (
        <div className="user-list-container">
            <table border={1}>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Phone</th>
                    <th>Birth Date</th>
                    <th>Image</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {userData?.map((ud, index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{ud.firstname}</td>
                        <td>{ud.age}</td>
                        <td>{ud.phone}</td>
                        <td>{ud.birthdate}</td>
                        <td>
                            <img src={ud.image} alt={ud.firstname}/>

                        </td>
                        <td><Pencil /></td>
                        <td><Trash /></td>

                    </tr>
                ))}
            </table>
        </div>
    )
}
export default UserList2





