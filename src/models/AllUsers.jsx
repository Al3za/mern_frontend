import {  useState } from "react"


export default function AllUsers() {
    const [AllUsers, setAllUsers] = useState([]);
    // const {username,SetUsername}=useContext(contex)
    // const[password,SetPassword]=useState(null)
    // const[wrongLogin,setwrongLogin]=useState('')
    // const navigate=useNavigate()
    const URL_LOGIN='https://mern-backend-78xw.onrender.com/users'
   // const clear_token=localStorage.clear('token')

   // function handleOnSubmit(e){
        // e.preventDefault()
        // const PayLoad={ 
        //     username,
        //     password
        // }

        fetch(URL_LOGIN,{
            method:"GET",
            headers:{"Content-Type":"application/json"},
          //  body:JSON.stringify(PayLoad)
        })
        .then(res=>res.json())
        .then(data=>{
            // if(typeof(data)=='object'){
            //     localStorage.setItem("token",data.token)
           // console.log(data[1].username)
            setAllUsers(data)
            //     navigate('/SkapaToDos') 
            // }else{
            //     setwrongLogin(data)
            // }
        })
  //  }
    return(
        <>
            {/* <h1>Login</h1> */}
            <div >
            <h1 className="wrapper">See all users</h1>

            {AllUsers?.map((item,index) => {
                return <div className="wrapper" key={index} >
                    <u><p> {item.username} </p></u>
                </div>
            })}
                </div>
        {/* <form onSubmit={handleOnSubmit} >
            username <input type="text"
            placeholder="username"
            onChange={e=>SetUsername(e.target.value)}
            /><br/>
            password <input type="text" 
            placeholder="password"
            onChange={e=>SetPassword(e.target.value)}
            />
            <input type="submit" />
        </form> <br/>
        <h1>{wrongLogin}</h1>
        <Link to={'/'} > create user </Link> */}
        </>
    )
}
