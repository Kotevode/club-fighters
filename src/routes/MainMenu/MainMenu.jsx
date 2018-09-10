import { NavLink } from "react-router-dom";

const MainMenu = () => <div>
	<h1>Menu</h1>
	<NavLink to="/new-game">
		<div>New Game</div>
	</NavLink>
	<NavLink to="/join-game">
		<div>Join Game</div>
	</NavLink>
	<NavLink to="/settings">
		<div>Settings</div>
	</NavLink>
</div>;

export default MainMenu;
