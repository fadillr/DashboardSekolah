import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./components/Dashboard";
import Class from "./components/Class";
import Matematika from "./components/Matematika";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route index Component={Dashboard}/>
          <Route path="class" Component={Class}/>
          <Route path="class/matematika" Component={Matematika}/>
        </Route>
        <Route path="login" Component={Login}/>
      </Routes>
    </div>
  );
};

export default App;
