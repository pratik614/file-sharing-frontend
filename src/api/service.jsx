import axios from "axios";

//const API_URL ="http://localhost:8000"
export const  uploadFile = async(data)=>{
try {
  let response=  await axios.post("http://localhost:8000/upload",data);
    return response.data;
} catch (error) {
    console.error("error while calling api",error.message);
}

}