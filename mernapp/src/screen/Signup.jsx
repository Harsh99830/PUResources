import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", location: "" });
    let navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("https://pu-resources-backend.onrender.com/api/createuser", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location })
        });
        const json = await response.json();
        if (!json.success) {
            alert(json.message); // Display the error message from the server
        } else {
            alert("Signup Successful, please login");
            navigate("/");
        }
    }

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    }

    return (
        <>
            <div className='container'>
                <form className='m-3' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input placeholder='Enter name' type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} placeholder="Enter email" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
                        <div>min 6 character</div>
                    </div>
                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to={"/login"} className='m-3 btn btn-danger'>Already have an Account</Link>
                </form>
            </div>
        </>
    );
}
