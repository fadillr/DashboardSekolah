import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./components/Dashboard";
import Class from "./components/Class";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route index Component={Dashboard}/>
          <Route path="class" Component={Class}/>
        </Route>
        <Route />
      </Routes>
    </div>
  );
};

export default App;
