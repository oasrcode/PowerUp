import { Home } from "./Pages/Home";
import { Signup } from "./Pages/Signup";
import { Signin } from "./Pages/Signin";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
