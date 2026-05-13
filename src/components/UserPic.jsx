import styles from "../css/userprofile.module.css"
import { CarTaxiFront } from "lucide-react"

function UserPic() {
    // const styles = {
    //     height: "500px",
    //     width:"500px",
    //     aspectRatio: "1/1",
    //     borderRadius:"50%",
    //     objectFit:"cover",
    // };
    return (
        <div>
            <img
                // style={styles}
                // className="profile-pic"
                className={styles["profile-pic"]}
                src="https://images.unsplash.com/photo-1563387852576-964bc31b73af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fHww"
                alt="Mark"
            />
            <CarTaxiFront /><h1>Vraj Soni</h1>
        </div>
    );
}

export default UserPic