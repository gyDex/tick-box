import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuPage, Welcome } from "./pages";
import './styles/main.css';
import { MenuProvider } from "./context/MenuContext";

function App() {
  return (
    <MenuProvider>
      <BrowserRouter  basename="/tick-box">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/menu" element={<MenuPage/>} />
        </Routes>
      </BrowserRouter>
    </MenuProvider>
  );
}

export default App;