import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const[user,setUser]=useState()
 useEffect(() => {
        axios.get('http://localhost:4000/api/v1/user').then((response) => {
          setUser(response.data.reverse());
        });
      }, [user]);
     
const handleDelete =(id)=>{
  axios.delete(`http://localhost:4000/api/v1/user/${id}`).then((response) => {
    window.alert(response.data.message);
  });
}


    return (
        <div>
          <h2>Total User: {user?.length}</h2>
          <div >
           {user?.map(({_id,name,email,phone,role})=><div className="flex justify-between bg-indigo-500 p-3 m-3 text-white items-center">
            <h2>{name}</h2>
            <h5>{email}</h5>
            <p>{role}</p>
            <div className='flex space-x-2 items-center'>
        <Link to={`${_id}`}>
           <button className="text-white">Edit</button>
           </Link>
            <button onClick={()=>handleDelete(_id)} className='text-red-700'>Delete</button>
            </div>
           </div>)}
          </div>
        </div>
    );
};

export default Home;