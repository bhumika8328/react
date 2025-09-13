function Profile(){
    const name="bhumika"
    const age=19
    const isStudent=true
    return(
        <div>
        <p>name:{name}</p>
        <p>age:{age}</p>
        <p>{isStudent===true?"iam astudent":"iam not astudent"}</p>
        </div>
)
}
export default Profile;