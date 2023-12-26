import React from 'react';
import {useParams,useNavigate} from "react-router-dom";

const User = () => {
    const params = useParams();
    const navigation = useNavigate();
    console.log(params.id)
  return (
    <div className='user'>
        User
        <button onClick={ () => navigation("/about")}>Clik Me</button> {/*it will open about page and see the pathhttp://localhost:3000/about*/} 
        <button onClick={ () => navigation("about")}>Clik Me</button>  {/*it will open about page and see the path http://localhost:3000/user/:id/about*/} 
    </div>
  )
}

export default User