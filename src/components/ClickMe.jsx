function ClickMe() {
    // return <button onClick={ () => console.log("Clicked")}>Click me</button>

    const onUserClick = () => console.log("Clicked");

    return <button onClick={onUserClick}>Click me</button>
}
export default ClickMe