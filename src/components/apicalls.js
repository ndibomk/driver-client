import axios from "axios"

export const updatestatus= async (id,status)=>{
    try {
        const res=await axios.put(
           ` http://localhost:5000/users/${id}`,
           {status}
        )
        return res.data
    } catch (error) {
        return error.message
    }
}