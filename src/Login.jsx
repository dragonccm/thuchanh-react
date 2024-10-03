
import { useState } from 'react';

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({
        name: '',
        password: '',
        admin: false
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value, type, checked } = e.target;
        setLoginInfo({
            ...loginInfo,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginInfo);
    };

    return ( 
        <form onSubmit={(e)=>handleSubmit(e)} style={{
            display:"flex",
            flexDirection:"column",
            border:"1px black solid",
            alignItems:"center",
            width:"400px"
        }}>
            <div style={{
                width:"100%",
                display:"flex",
                justifyContent:"space-between",
                textAlign:"start"
            }}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={loginInfo.name} style={{
                    width:"100%"
                }} onChange={(e)=>handleChange(e)} />
            </div>
            <div style={{
                width:"100%",
                display:"flex",
                justifyContent:"space-between",
                textAlign:"start"
            }}>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={loginInfo.password} style={{
                    width:"100%"
                }} onChange={(e)=>handleChange(e)} />
            </div>
            <div style={{
                width:"100%",
                display:"flex",
                justifyContent:"space-between",
                textAlign:"start"
            }}>
                <label htmlFor="admin">Admin:</label>
                <input type="checkbox" id="admin" name="admin" checked={loginInfo.admin} style={{
                    width:"100%"
                }} onChange={(e)=>handleChange(e)} />
            </div>
            <button type="submit" style={{
                width:"100px"
            }}>Login</button>
        </form>
    );
};

export default Login;