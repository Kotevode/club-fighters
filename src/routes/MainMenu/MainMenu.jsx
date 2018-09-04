import { NavLink } from "react-router-dom";

const MainMenu = () => <div>
	<h1>Menu</h1>
	<NavLink to="/new-game">New Game</NavLink>
	<NavLink to="/join-game">Join Game</NavLink>
	<NavLink to="/settings">Settings</NavLink>
</div>;

export default MainMenu;
