import { useEffect, useState } from "react"

function Counter1 () {
    let [like, setLike] = useState(0);
    let [dislike, setDisLike] = useState(0);
    useEffect(() => {
        console.log("like is updated",like);
    },[like]);
    return (
        <div>
            <button onClick={() => setLike(like + 1)}> Like {like}</button>
            <button onClick={() => setDisLike(dislike + 1)}> Dislike {dislike}</button>
        </div>
    );
}
export default Counter1