import { useEffect, useState } from "react";
import userJSON from "../json/user2.json"

function Client() {
    const [clients, setClients] = useState([]);

    const getUsers = () => {
        fetch("https://69e1c27ab1cb62b9f3173069.mockapi.io/user-data")
            .then((d) => d.json())
            .then((c) => setClients(c));
    };

    useEffect(() => {
        getUsers()
    }, []);



    console.log("userJSON : ",userJSON)
    return (
        <>
        <div className="user-list-container">
            {
                clients?.map((x) => (
                    <section className="user-container">
                        <img className="user-profile-pic" src={x.pic} alt={x.name} />
                        <h2 className="user-name">
                            Hellooo <span className="user-first-name">{x.name}</span>
                        </h2>
                        <p>Email: {x.email}</p>
                        <p>Password: {x.password}</p>
                        <p>bio: {x.bio}</p>
                        {/* <button onClick={() => navigate }></button> */}
                    </section>

                ))
            }
            </div>
        </>
    )
}
export default Client  