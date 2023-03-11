import { Link } from "react-router-dom";

export const Header = () => (
    <>
        <h1>Santa app</h1>
        <ul>
            <li><Link to='/gift'>Gitfs</Link></li>
            <li><Link to='/child'>Children</Link></li>
        </ul>
        <hr />
    </>
)