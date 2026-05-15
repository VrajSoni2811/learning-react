import React from 'react'

const Logout = () => {

  function logoutAction() {
    localStorage.removeItem("user");
    console.log("Logout Successfully")
  }
  
  return (
    <div>
      Logout new file
      <button onClick={handleLogout}></button>
    </div>
  )
}

export default Logout
