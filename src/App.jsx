import { Route, Routes } from "react-router-dom"
import Layout from "./components/shared/Layout"
import Dashboard from "./components/Dashboard"
import Login from "./pages/Login"
import User from "./components/User"
import Class from "./components/Class"
import Report from "./components/Report"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route index Component={Dashboard}/>
          <Route path="user" Component={User}/>
          <Route path="class" Component={Class}/>
          <Route path="report" Component={Report}/>
        </Route>
        <Route path="login" Component={Login}/>
      </Routes>
    </div>
  )
}

export default App