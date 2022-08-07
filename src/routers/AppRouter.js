import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import {CalendarScreen} from "../components/calendar/CalendarScreen";
import {LoginScreen} from "../components/auth/LoginScreen";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {startChecking} from "../actions/auth";
import {PublicRoute} from "./PublicRoute";
import {PrivateRoute} from "./PrivateRoute";

export const AppRouter=()=>{
    const dispatch=useDispatch()
    const {checking,uid}=useSelector(state => state.auth)
    useEffect(()=>{
        dispatch(startChecking())
        // console.log(uid)
    },[dispatch])
    if(checking){
        return (<h1>caregando...</h1>)
    }
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/login" element={
                        <PublicRoute isAuth={!!uid}>
                            <LoginScreen/>
                        </PublicRoute>

                    }/>
                    <Route path="/" element={
                        <PrivateRoute isAuth={!!uid}>
                            <CalendarScreen/>

                        </PrivateRoute>
                    }/>

                    <Route path="*" element={<CalendarScreen/>}/>


                </Routes>
            </Router>
        </div>
    )
}
