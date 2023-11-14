import { ItemDetailContainer, ItemListContainer, NavBar } from "./assets/components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";



export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};