import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import {CalendarScreen} from "../components/calendar/CalendarScreen";
import {LoginScreen} from "../components/auth/LoginScreen";

export const AppRouter=()=>{
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<CalendarScreen/>}/>
                    <Route path="/login" element={<LoginScreen/>}/>
                    <Route path="*" element={<CalendarScreen/>}/>

                </Routes>
            </Router>
        </div>
    )
}
