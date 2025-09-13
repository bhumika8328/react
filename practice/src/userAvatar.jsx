import "./userAvatar.css"
function userAvatar(){
    const username="bhumika"
    const userid="24VV1A0550"
    const userbloodgroup="ab+ve"
    const userdob="26/07/2006"

return(
    <div>
        <p className="username">username:{username}</p>
        <p className="userid">userid:{userid}</p>
        <p className="userbloodgroup">userbloodgroup:{userbloodgroup}</p>
        <p className="userdob">userdob:{userdob}</p>
        <img  loading="bhumika"src="girl.jpg" alt="describe girl image"  />
    </div>
)
}
export default userAvatar;