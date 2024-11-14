import Car from "./Car"
import Login from './Login';
import { Routes, Route } from "react-router-dom";
import Hello1 from "./Hello1"
import { PrivateRoutes } from "./router/privateRoute";
const Router = () => {
    return (
        <Routes>
            <Route path="/">
                <Route path="login" element={<Login/>} />
                <Route path="hello" element={<PrivateRoutes component={<Hello1 name={"hai dù"} />}/>} />
                <Route path="car" element={<PrivateRoutes component={<Car />}/>} />
                <Route path="*" />
            </Route>
        </Routes>
    );
}

export default Router;