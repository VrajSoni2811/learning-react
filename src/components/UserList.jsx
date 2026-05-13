import { useEffect, useState } from "react";
import User from "./User"
import { useNavigate } from "react-router-dom";
import { ClimbingBoxLoader, FadeLoader } from "react-spinners";

function UserList() {
    // const users = [];
    const [users, setUsers] = useState([]);
    let [loading, setLoading] = useState(true);
    const [showFormModel, setShowFormModel] = useState(false);
    const navigate = useNavigate()
    const override = {
        // display: "block",
        // margin: "0 auto",
        // borderColor: "red",
    };
    const getUsers = () => {
        fetch("https://69e1c27ab1cb62b9f3173069.mockapi.io/users")
            .then((data) => data.json())
            .then((userList) => setUsers(userList))
            .then(() => setLoading(false));
    };

    useEffect(() => {
        getUsers()
    }, []);

    const deleteUser = (id) => {
        fetch(`https://69e1c27ab1cb62b9f3173069.mockapi.io/users/${id}`, {
            method: "DELETE",
        })
            .then((data) => data.json())
            .then(() => getUsers());
    };

    console.log("user value : ", users)
    return (
        <div className="user-list-container">
            {/* <FadeLoader
                color="#9b2a2a"
                loading={loading}
                size={150}
                // cssOverride={override}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> */}
            {loading ? (
                [1, 2, 3, 4, 5, 6].map((u) => (
                    <section className="user-container">
                        <img className="user-profile-pic" style={{ backgroundColor: "gray" }} />
                        <h2 className="user-name">
                            <span className="user-first-name"></span>
                        </h2>
                        <button style={{ padding: "10px 20px" }}></button>
                        &emsp;
                        <button style={{ padding: "10px 20px" }}></button>
                        &emsp;
                        <button style={{ padding: "10px 20px" }}></button>

                    </section>
                ))

            ) : (
                users?.map((usr, index) => (
                    <User name={usr.name} pic={usr.pic} id={usr.id}
                        deleteButton={
                            <button onClick={() => deleteUser(usr.id)}>Delete</button>
                        }
                    />
                )))

            }

        </div >
    );
}
export default UserList