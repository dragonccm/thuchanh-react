import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import auThenContext from '../context/authenContext';

const PrivateRoutes = ({ component }, props) => {
    const { currUser } = useContext(auThenContext); // get current user data from global state

    if (currUser) {
        console.log('đã check ');
        return component;
    } else {
        console.log('lol check');

        return <Navigate to="/login" />;
    }
};

export { PrivateRoutes };