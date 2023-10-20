import {Routes, Route} from 'react-router-dom';
import {HomePage} from './Pages/HomePage'
import Login from './Pages/Login'
import {MyContent} from './Pages/MyContent'

export const Router = () => {
    return (
        <Routes>
            <Route path = "/login" element={<Login />}/>
            <Route path = "/home" element={<HomePage/>}/>
            <Route path = "/content" element={<MyContent/>}/>
        </Routes>
    )
}