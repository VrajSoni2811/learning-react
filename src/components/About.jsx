import { useFormik } from "formik"
import { useNavigate } from "react-router-dom";

export function About() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            about : "",
            contact : "",
        },
        onSubmit: (values) => {
            fetch("https://69e1c27ab1cb62b9f3173069.mockapi.io/user-data",{
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(() => navigate("/"))
            console.log(values);
        },
    });
    

    return(
        <form onSubmit={formik.handleSubmit} className="add-user-form">
            <input onChange={formik.handleChange}
            name="about"
            type="text"
            placeholder="About"
            required
            />

             <input onChange={formik.handleChange}
            name="contact"
            type="text"
            placeholder="contact number"
            required
            />
             <input onChange={formik.handleChange}
            name="contact"
            type="text"
            placeholder="contact number"
            required
            />
             <input onChange={formik.handleChange}
            name="contact"
            type="text"
            placeholder="contact number"
            required
            />

            <button type="submit">Submit</button>
        </form>

    );
}
