import {React, useState} from 'react';
import axios from 'axios';

const Login=()=>{
    const [name, Setname] = useState('');
    const [email, Setemail] = useState('');
    
        const handleSubmit= async(e)=>{
            e.preventDefault();
            try{
               
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/users`, {
            // const res = await axios.post('http://localhost:3000/api/users',{
                name,
                email
            });
            console.log("login successful", res.data);
        }
        catch(err){
            console.error("login failed")
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                name="name"
                onChange={(e)=>Setname(e.target.value)}
                placeholder='enter name'
            />
            <br /><br />
            <input
                type="email"
                value={email}
                name="email"
                onChange={(e)=> Setemail(e.target.value)}
                placeholder='enter email'
            />  
            <br /><br />
            <button type='submit'>Submit</button>
        </form>
    );
}
export default Login;



