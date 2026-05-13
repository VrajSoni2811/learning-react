import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import { object, string } from "yup"

export function Register() {
    const navigate = useNavigate()
    const userValidationschema = object({
        firstname: string().required(),
        age: string().required(),
        phone: string().min(10).required(),
        birthdate: string().required(),
        image: string().url().required()
    })
    const { handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            firstname: "",
            age: "",
            phone: "",
            birthdate: "",
            image: "",
        },
        validationSchema: userValidationschema,
        onSubmit: (values) => {
            console.log(values);
            newUser(values)
        },
    });

    const newUser = (data) => {
        console.log("data : ", data);
        fetch(`https://69e1c27ab1cb62b9f3173069.mockapi.io/user-data`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => navigate("/"));
    }

    return (
        <form onSubmit={handleSubmit} className="add-user-form">
            <input onChange={handleChange}
                onBlur={handleBlur}
                name="firstname"
                type="text"
                placeholder="Firstname"
                required
            />
            {touched.firstname && errors.firstname ? (
                <p>{errors.firstname}</p>
            ) : null}

            <input onChange={handleChange}
                name="age"
                type="text"
                placeholder="Age"
                required
            />
            {touched.age && errors.age ? (
                <p>{errors.age}</p>
            ) : null}

            <input onChange={handleChange}
                name="phone"
                type="text"
                placeholder="Phone"
                required
            />
            {touched.phone && errors.phone ? (
                <p>{errors.phone}</p>
            ) : null}

            <input onChange={handleChange}
                name="birthdate"
                type="text"
                placeholder="Birthdate"
                required
            />
            {touched.birthdate && errors.birthdate ? (
                <p>{errors.birthdate}</p>
            ) : null}

            <input onChange={handleChange}
                name="image"
                type="text"
                placeholder="Image"
                required
            />
            {touched.image && errors.image ? (
                <p>{errors.image}</p>
            ) : null}
            <button type="submit">Submit</button>


        </form>
    );
}