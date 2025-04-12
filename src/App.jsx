import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./sections/nav_contactFooter/navbar";
import HOMEPAGE from "./sections/HOMEPAGE";
import Our_works from "./sections/our_works";

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
      element: <HOMEPAGE />,
    },
    {
      id: 3,
      path: "/ishlar",
      element: <Our_works />,
    },
    {
      id: 4,
      path: "/narxlar",
      element: <HOMEPAGE />,
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
    </div>
  );
}

export default App;
