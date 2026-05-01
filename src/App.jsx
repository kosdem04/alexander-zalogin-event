import { BrowserRouter } from "react-router-dom";

import AppRouter from "./router/AppRouter";
import ScrollProgressBar from "./components/ScrollProgressBar";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollProgressBar />
      <AppRouter />
    </BrowserRouter>
  );
}
