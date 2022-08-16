import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation-bar/navigation-bar.component";
import SignIn from "./routes/sign-in/sign-in.component";
import { Routes, Route } from "react-router-dom";

const App = () => {

  return (  
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />}/>
        <Route path='sign-in' element={<SignIn />}/>
      </Route>
    </Routes>
  );
}

export default App;
