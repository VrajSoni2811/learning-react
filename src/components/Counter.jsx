import { useState } from "react";

function Counter() {
    let [like, setLike] = useState(0);
    return (
        <div>
            {/* {camelcase} */}
            <button onClick={() => setLike(like + 1)}>Like</button>
                <h1>{like}</h1>
        </div>
    );
}
export default Counter