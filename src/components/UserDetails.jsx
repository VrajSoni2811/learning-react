import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails({users}) {
    const {id} = useParams();
    console.log(id);
    const [user, setUser] = useState({});
    // const user = users[id];

    useEffect(() => {
        fetch(`https://69e1c27ab1cb62b9f3173069.mockapi.io/users/${id}`)
        .then((data) => data.json())
        .then((userInfo) =>{
            console.log("details : ", userInfo)
            setUser(userInfo)});
    },[]);
    return (
        <section className="user-details-container">
            <img className="user-profile-pic" src={user.pic} alt={user.name} />
            <div>
                <h2 className="user-name">{user.name}</h2>
                <p>{user.bio}</p>
            </div>
        </section>
    );
}
export default UserDetails;