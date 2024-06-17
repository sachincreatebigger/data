import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Createuser from './component/Createuser'
import axios from 'axios'
function App() {
  const [count, setCount] = useState([])
async function callapi(){
  try{
    let response= await axios.get('http://localhost:3000/createpost')
    setCount(response.data.response)
    console.log(response.data.response)


  }

catch(err){
  console.log(err)

}
}

useEffect(()=>{
  callapi()
},[])
function deletfun(id){
console.log(id)
let response = axios.delete(`http://localhost:3000/createpostdelet/${id}`)

console.log(response.data)

callapi()

}
  return (
    <>
    <div>
{
count.map((e,i)=>
<>
<h6>{e.name}</h6>
<h6>{e._id}</h6>
<button onClick={()=>deletfun(e._id)}>delet</button>
{/* <img src={e.image} style={{width:"155px",height:"155px"}}/> */}

<img src={`http://localhost:3000/images/${e.image}`} style={{ width: '155px', height: '155px' }} alt={e.name} />
      {console.log(`http://localhost:3000/images/${e.image}`)}

</>
)



}


    </div>
  <Createuser></Createuser>
        
    </>
  )
}

export default App
