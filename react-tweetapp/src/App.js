import LoggedIn from './Components/LoggedIn';
import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';
import PostReply from './Components/PostReply';

function App() {
  const RequireAuth = () => {
    return (sessionStorage.getItem('token'))?<LoggedIn />:<Navigate to="/login"/>
    
  }

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />
          } />
          <Route path="/login" element={<Login />
          } />
          <Route path="/signup" element={<Register />
          } />
          <Route path="/forgot-password" element={<ForgotPassword />
          } />
          <Route path="/home/post-reply" element={<PostReply />
          } />
          <Route path="/home" element={<RequireAuth></RequireAuth>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
  
}

export default App;
