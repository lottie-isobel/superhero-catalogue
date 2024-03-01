import {NavLink, Outlet} from "react-router-dom";

export default function PageWrapper() {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/heroes">All Heroes</NavLink>
                </nav>
            </header>
            <Outlet/>
            <footer>Superhero Catalogue, 2024</footer>
        </>
    );
}
