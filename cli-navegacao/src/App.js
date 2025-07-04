import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Feed } from "./pages/feed";

import { Home } from './pages/home'
import { Login } from './pages/login'
import { GlobalStyle } from './styles/global';
import { Cadastro } from "./pages/cadastro";
import { AuthContextProviderProps } from "./context/auth";

function App() {
  return (
    <Router>
      <AuthContextProviderProps>
     <GlobalStyle />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/feed" element={<Feed />} />
         <Route path="/cadastro" element={<Cadastro />} />
      </Routes >
    </AuthContextProviderProps>
     </Router>
  );
}

export default App;