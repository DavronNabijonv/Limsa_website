import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./sections/nav_contactFooter/navbar";
import HOMEPAGE from "./sections/HOMEPAGE";

function App() {
  const routes = [
    {
      id: 1,
      path: "/",
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
