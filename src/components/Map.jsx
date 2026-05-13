import Welcome from "./welcome";

function Map() {
    const names = ["Cuban", "Spencer", "Robert", "Einstein"];
    return (
        <div className="Map">
            {names.map((nm) => (
                <Welcome name={nm} />
            ))} 
        </div>
    );
}
export default Map