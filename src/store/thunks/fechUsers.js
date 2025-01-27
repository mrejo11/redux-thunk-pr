import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers=createAsyncThunk('users/fetch', async ()=>{
    const response=await axios.get('http://localhost:3005/users')
    console.log(response)

    // only dev
    await pause(10000)
    return response.data
})

// only for dev
const pause=(duration)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,duration)
    })
}



export {fetchUsers}