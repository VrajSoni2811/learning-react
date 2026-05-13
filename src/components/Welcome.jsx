import { Link } from "react-router-dom";

function Welcome() {
    var name="vraj";
    return (
        <section>
            <h2 className="user-name">
                Hello, <span className="user-first-name">{name}</span>
            </h2>
            <h1><Link to="/photo">Click me!</Link></h1>
        </section>
    );
}

export default Welcome