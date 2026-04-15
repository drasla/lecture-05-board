import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/Home.tsx";
import Detail from "./routes/Detail.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/:id"} element={<Detail />} />
                <Route path={"/abc"} element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
