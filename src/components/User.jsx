import { useNavigate } from "react-router-dom"
function User({ name, pic, id, deleteButton,editButton}) {
    const navigate = useNavigate()
    return (
        <section className="user-container"
             >
            <img className="user-profile-pic" src={pic} alt={name} />
            <h2 className="user-name">
                Hello, <span className="user-first-name">{name}</span>
            </h2>
            <button onClick={() => navigate(`/users/${id}`)}>Info</button>
            &emsp;
            {deleteButton}&emsp;
            {deleteButton}&emsp;
            {deleteButton}&emsp;
            {deleteButton}&emsp;
            {deleteButton}&emsp;
            <button onClick={() => navigate(`/edituser/${id}`)}>Edit</button>

        </section>
    )
}
export default User
