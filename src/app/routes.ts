import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import HotelPage from "./pages/HotelPage";
import PiscinasPage from "./pages/PiscinasPage";
import RestaurantePage from "./pages/RestaurantePage";
import ContactoPage from "./pages/ContactoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "hotel", Component: HotelPage },
      { path: "piscinas", Component: PiscinasPage },
      { path: "restaurante", Component: RestaurantePage },
      { path: "contacto", Component: ContactoPage },
    ],
  },
]);
