import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/Router";

// import "./assets/styles/_main.scss";
import "./assets/styles/_fahad-responsive.scss";

import "./assets/css/bootstrap.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Toaster } from "react-hot-toast";
import { ModalList } from "./components/common/ModalList";
import { ConfigProvider } from "antd";
function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            /* here is your component tokens */
            dotBorderColor: "#d9d9d9",
            railBg: "#d9d9d9",
            dotSize: 10,
            controlSize: 5,
            trackBg: "#4BADE5",
            dotActiveBorderColor: "#4BADE5",
            handleColor: "#4BADE5",
            handleActiveColor: "#4BADE5",
            handleActiveOutlineColor: "#4BADE5",
            handleSize: 15,
          },
        },
      }}
    >
      <Toaster />
      <RouterProvider router={router} />
      <ModalList />
    </ConfigProvider>
  );
}

export default App;
