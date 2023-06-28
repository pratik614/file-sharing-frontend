import React, { useEffect, useRef, useState } from 'react'
import { uploadFile } from './api/service';
import "./app.css"
const App = () => {

  const fileInputRef = useRef();
  const logo = "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  const onUploadclick = () => {
    fileInputRef.current.click();
  }
  const [file, setFile] = useState("");
  const[result,setResult]=useState("");
  console.log(file);

  useEffect(() => {

    const getImage = async () => {
      if (file) {
        
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
      let response = await uploadFile(data);
      setResult(response.path);
      }

    }

    getImage();

  }, [file])
  return (

    <div className='container'>
      <img src={logo} alt='image' />
      <div className='wrapper'>
        <h1>file sharing application</h1>
        <p>upload and share the download link</p>
        <button onClick={() => onUploadclick()} > Upload</button>
        <input type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <a href={result} target="_blank" >{result}</a>
      </div>
    </div>
  )
}

export default App
