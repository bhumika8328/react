import "./App.css"
import{useState} from "react"
function App() {
  const[count,setCount]=useState(0)
  const[email,setEmail]=useState("")

  const[FormData,setFormData]=useState({
    email:"",
  password:""
  })
  const handleEmail=(event)=>{
    setEmail(event.target.value)
  }
   const handlePassword=(event)=>{
    setPassword(event.target.value)
  }
  const handleChange=(event)=>{
    // console.log(event.target.value)
    // console.log(event.target.value)
    setformData({
      ...formData,
      [event.target.name]:event.target.value

    })
  }
  const handleSubmit=(event)=>{
    event.prevent.Default();
    alert(`email: ${email}\n password: ${password}\n you are logged in sucessfull`)
  }
  
  
  const handleIncrement=()=>{
    setCount((prevcount)=>prevcount+1)
    console.log(count)
  }

  //const handleclick = (name) => {
    // alert("hello " + name)
    //console.log("you clicked the button")
    //alert("you clicked the button")
// }
 // const handleChange = (event) => {
   // console.log(event.target.name)
    //console.log(event.target.value)

 // }
  //const handleSubmit = () => {
    //alert("login sucessfull")
 // }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>enter your email</p>
      <input type="text" name="email"placeholder="enter your email" onChange={handleEmail}/>
      <p>enter your paasword</p>
      <input type="text" name="email"placeholder="enter your password" onChange={handlePassword}/>
     < button type="submit">login</button>
      <button onClick={handleSubmit}>Increment</button>
      <p>{count}</p>
      <button onClick={handleIncrement}></button>increment
    </form>

    </div >




  )


}

export default App;