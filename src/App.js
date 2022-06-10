import { Feed, Home, Login, SignUp, UserProfile } from "./pages";
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Mockman from "mockman-js";
function MockAPI() {
  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/mockman" element={<MockAPI />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile/:username" element={<UserProfile />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
