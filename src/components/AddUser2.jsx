import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";

export function AddUser2() {
    const navigate = useNavigate()
    const userValidationschema = object({
        name: string().required(),
        pic: string().url().required(),
        bio: string().min(10).required(),
    })
    const formik = useFormik({
        initialValues: {
            name: "",
            pic: "",
            bio: "",
        },
        validationSchema: userValidationschema,
        onSubmit: (values) => {
            console.log(values);
            createUser(values)

        },
    });

    const createUser = (data) => {
        console.log("data : ", data);
        fetch(`https://69e1c27ab1cb62b9f3173069.mockapi.io/users`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => navigate("/"));
    }

    return (
        <form onSubmit={formik.handleSubmit} className="add-user-form">

            <input onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="name"
                type="text"
                placeholder="Name"
                required

            />
            {formik.touched.name && formik.errors.name ? (
                <p>{formik.errors.name}</p>
            ) : null}

            <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="pic"
                type="text"
                placeholder="Profile Pic Url"
                required
            />
            {formik.touched.pic && formik.errors.pic ? (
                <p>{formik.errors.pic}</p>
            ) : null}


            <input onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="bio"
                type="text"
                placeholder="Bio"
                required
            />
            {formik.touched.bio && formik.errors.bio ? (
                <p>{formik.errors.bio}</p>
            ) : null}

            {/* <p>Error</p> */}
            {/* <pre>{JSON.stringify(formik.errors)}</pre> */}
            <button type="submit">Add User</button>

        </form>
    );
}
