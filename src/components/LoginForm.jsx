import { useState } from "react"

function LoginForm() {
    const [email, setEmail] = useState("mark@gmail.com");
    const [password, setPassword] = useState("secret123");

    return (
        <form className="login-form"
        onSubmit={(event) => {
            event.preventDefault();
            console.log(email, password);
        }}
        >

            <h1>Login Form</h1>
            <input value={email} onChange={(event) => setEmail(event.target.value)} 
            name="email" type="email" placeholder="username" />
            <input value={password} onChange={(event) => setPassword(event.target.value)}
            name="password" type="password" placeholder="password" />
            <button type="submit">Submit</button>
        </form>
    );
}
export default LoginForm