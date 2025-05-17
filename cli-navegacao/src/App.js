import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from "react-router-dom";

import { Home } from './pages/home/index';
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";
import { Test } from "./pages/test";

import {GlobalStyle} from './styles/global';
 
function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
