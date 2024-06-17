import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Createuser = () => {
    let[name,setname]=useState('')
    let[image,setimage]=useState(null)
  

async function abc(){
    let formData=new FormData()
    formData.append('name',name)
    formData.append('image',image)
    console.log([...formData]);




    const response = await axios.post('http://localhost:3000/createpost', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
}

  return (
    <div>Createuser from 

<form method='post' onSubmit={(e)=>{e.preventDefault()}}>
<input type='text' name='name' placeholder='name' onChange={(e)=>{setname(e.target.value)}}  />
<input type='file' name='image' placeholder='image'onChange={(e)=>{setimage(e.target.files[0])}} />
<button onClick={abc}>submit</button>
</form>




    </div>
  )
}

export default Createuser