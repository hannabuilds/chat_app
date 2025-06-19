import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';

import { useAuthStore } from './store/useAuthStore.js';
import {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'; 
import { Loader } from 'lucide-react';


const App = () => {
  const {authUser, checkAuth} = useAuthStore()

  useEffect(() => {checkAuth ()}, {checkAuth});
   
  console.log({authUser});

  if(isCheckingAuth && !authUser) 
    return(
    <div className="flex items-center justify-center h-screen">
      <Loader className="sixe-10 animate-spin"/>
    </div>
  );

  return (
    <div >
      <Navbar />

      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login"/>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />

      </Routes>
  </div>
  ) 
};

export default App;