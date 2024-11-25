import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/Router";
// import "./assets/styles/index.scss";
import "./assets/css/bootstrap.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
