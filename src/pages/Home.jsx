import React, { useState } from 'react'

const Home = () => {
  const [image, setImage] = useState("")

  const handleClick = () => {
    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', 'flseurfa')
    console.log(formData)
    fetch('https://api.cloudinary.com/v1_1/skypicture/image/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if(response.ok){
        return response.json()
      }
    })
    .then((data) => {
      console.log(data)
    })
  }

  return (
    <div>
      <input type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={() => handleClick()}>Send Image</button>
    </div>
    
   
    
  )
}

export default Home