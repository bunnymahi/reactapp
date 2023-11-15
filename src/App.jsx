import axios from 'axios'
import React, { useState } from 'react'
const App = () => {

  const [image,setImage] = useState(null)
  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    console.log(formData);
    try{
      const response = await axios.post('http://localhost:8000/uploads',formData,{
        headers :{
          'content-Type':'multipart/form-data'
        }
      });
      console.log('Response from server:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }

  const uploadImage = (e)=>{
    console.log(e)
    console.log(e.target.files[0])
    setImage(e.target.files[0])

  }
  return (
    <div>
      <form onSubmit={submitImage}>
        <input type="file" accept='image/*' onChange={uploadImage}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App