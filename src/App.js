import { Explore, Feed, Login, SignUp, UserProfile } from "./pages";
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Mockman from "mockman-js";
import { PrivateRoute } from "./components";
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
        <Route path="/feed" element={<PrivateRoute><Feed /></PrivateRoute>} />
        <Route path="/mockman" element={<MockAPI />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile/:username" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
        <Route path='/explore' element={<PrivateRoute><Explore /></PrivateRoute>} />
      </Routes>
      <Toaster />
    </Router>

  );
}

export default App;
