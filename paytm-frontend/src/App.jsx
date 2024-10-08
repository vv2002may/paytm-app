
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Update from "./pages/Update";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/update" element={<Update/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
