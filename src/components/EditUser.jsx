import { useFormik } from "formik";
import { CloudCog } from "lucide-react";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { object, string } from "yup";

export function EditUser() {
    const { id } = useParams();
    
    const [user, setUser] = useState(null);
    
    console.log(id);
    useEffect(() => {
        fetch(`https://69e1c27ab1cb62b9f3173069.mockapi.io/users/${id}`)
            .then((data) => data.json())
            .then((userInfo) => setUser(userInfo));

    }, []);

    return user ? <EditUserForm user={user} /> : <p style={{textAlign:"center"}}>loading....</p>;
  
}

export function EditUserForm({ user }) {
    const navigate = useNavigate();
    const userValidationSchema = object({
        name: string().required(),
        pic: string().url().required(),
        bio: string().min(10).required(),
    })
      const { handleSubmit, handleChange, errors, touched, values, handleBlur } = useFormik({
        initialValues: {
            name: user?.name,
            pic: user?.pic,
            bio: user?.bio,
        },
        enableReinitialize: true,
        validationSchema: userValidationSchema,
        onSubmit: (newUser) => {
            console.log(newUser)
            fetch(`https://69e1c27ab1cb62b9f3173069.mockapi.io/users/${id}`, {
                method: "PUT",
                body: JSON.stringify(newUser),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(() => navigate("/users"));

        }
    })
    console.log("user name : ", user.name)
    console.log("values name : ", values.name)


    return (
        <>
            <h1>Edit User Page</h1>

            <form onSubmit={handleSubmit} className="add-user-form">
                <input
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                />
                {touched.name && errors.name ? <p>{errors.name}</p> : null}

                <input
                    value={values.pic}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="pic"
                    type="text"
                    placeholder="Pic"
                    required
                />
                {touched.pic && errors.pic ? <p>{errors.pic}</p> : null}

                <input
                    value={values.bio}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="bio"
                    type="text"
                    placeholder="Bio"
                    required
                />
                {touched.bio && errors.bio ? <p>{errors.bio}</p> : null}

                <button type="submit">Save</button>
            </form>
        </>

    );
}