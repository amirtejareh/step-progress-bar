import "./assets/css/main.css";
import AppRoute from "./routes/app.routs";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <AppRoute />
        </BrowserRouter>
    );
}

export default App;
