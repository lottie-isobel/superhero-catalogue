import {Route, Routes} from "react-router-dom";

import * as Pages from "./pages";
import {PageWrapper} from "./components";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<PageWrapper/>}>
                <Route index element={<Pages.Home/>}/>
                <Route path="/heroes" element={<Pages.AllHeroes/>}/>
                <Route path="/heroes/:id" element={<Pages.Hero/>}/>
            </Route>
        </Routes>
    );
}

export default App;
