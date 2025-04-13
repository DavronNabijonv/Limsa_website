import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./sections/nav_foot/navbar";
import HOMEPAGE from "./sections/HOMEPAGE";
import Our_works from "./sections/our_works";
import Our_benefits from "./sections/our_benefits";
import Contact from "./sections/contact";
import Footer from "./sections/nav_foot/footer";
import Prices from "./sections/prices";

function App() {
  const routes = [
    {
      id: 1,
      path: "/",
      element: <HOMEPAGE />,
    },
    {
      id: 2,
      path: "/xizmat",
      element: <Our_benefits />,
    },
    {
      id: 3,
      path: "/ishlar",
      element: <Our_works />,
    },
    {
      id: 4,
      path: "/narxlar",
      element: <Prices />,
    },
  ];

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Routes>
        {routes.map(({ id, ...rest }) => (
          <Route key={id} {...rest} />
        ))}
      </Routes>

      <Contact/>

      <Footer/>
    </div>
  );
}

export default App;
