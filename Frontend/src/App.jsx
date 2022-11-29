import { Home } from "./Pages/Home";
import { Signup } from "./Pages/Signup";
import { Signin } from "./Pages/Signin";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import { Lifts } from "./Pages/Lifts";
import { Profile } from "./Pages/Profile";
import { Progress } from "./Pages/Progress";
import { IMC } from "./Pages/IMC";
import { BodyFat } from "./Pages/BodyFat";
import { DailyCals } from "./Pages/DailyCals";
import { Protected } from "./Context/Protected";
import { Landing } from "./Pages/Landing";

function App() {
  return (
    <>
      <AuthContextProvider>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/app" element={<DashBoard />}>
            <Route index element={<WellcomeMessage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="lifts" element={<Lifts />} />
            <Route path="progress" element={<Progress />} />
            <Route path="imc" element={<IMC />} />
            <Route path="bodyfat" element={<BodyFat />} />
            <Route path="dailycals" element={<DailyCals />} />
          </Route>
        </Routes> */}
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Landing />} />
            <Route path="profile" element={<Profile/>}/>
            <Route path="lifts" element={<Lifts />} />
            <Route path="progress" element={<Progress />} />
            <Route path="imc" element={<IMC />} />
            <Route path="bodyfat" element={<BodyFat />} />
            <Route path="dailycals" element={<DailyCals />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

{
  /*   <Route path="profile" element={<Protected><Profile/></Protected>}/> */
}

export default App;
