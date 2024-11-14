
import { useState, useContext, useEffect } from 'react';
import auThenContext from './context/authenContext';
const Login = () => {
    const [loginInfo, setLoginInfo] = useState({
        name: '',
        password: '',
        admin: false
    }); 
    const {currUser, setCurrUser} = useContext(auThenContext);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value, type, checked } = e.target;
        setLoginInfo({
            ...loginInfo,
            [name]: type === 'checkbox' ? checked : value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(loginInfo);
        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginInfo),
            });
            const data = await response.json();
            setCurrUser(data.data.value);
        } catch (error) {
            console.error('Error:', error);
        }
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
                }} onChange={handleChange} />
            </div>
            <div style={{
                width:"100%",
                display:"flex",
                justifyContent:"space-between",
                textAlign:"start"
            }}>
                <label htmlFor="pass">Password:</label>
                <input type="password" id="password" name="password" value={loginInfo.password} style={{
                    width:"100%"
                }} onChange={handleChange} />
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
                }} onChange={handleChange} />
            </div>
            <button type="submit" style={{
                width:"100px"
            }}>Login</button>
        </form>
    );
};

export default Login;