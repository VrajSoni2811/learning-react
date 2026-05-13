import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";

function AddUser() {
    const [name, setName] = useState("Hardik");
    const [pic, setPic] = useState("");
    const [bio, setBio] = useState("");

    
    const navigate = useNavigate()


    const addUser = () => {
        const newUser = {
            name,
            pic,
            bio
        };
        console.log(newUser)
        fetch(`https://69e1c27ab1cb62b9f3173069.mockapi.io/users`, {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json",
            },
        }).then (() => navigate("/"));
    };


    return(
        <div className="add-user-form">
            <input 
                onChange={(event) => setName(event.target.value)}
                type="text"
                value={name}
                placeholder="Name"
                />

                <input 
                onChange={(event) => setPic(event.target.value)}
                type="text"
                placeholder="Profile Pic Url"
                />

                <input 
                onChange={(event) => setBio(event.target.value)}
                type="text"
                placeholder="Bio"
                />
                <button onClick={addUser}>Add User</button>
        </div>
    );
}
export default AddUser