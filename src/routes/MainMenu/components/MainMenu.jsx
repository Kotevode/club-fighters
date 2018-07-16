import { NavLink } from "react-router-dom";

const MainMenu = () => (
	<div>
		<h1>
			{ "Menu" }
		</h1>
		<div>
			{ "New Game" }
		</div>
		<NavLink to="/settings">
			{ "Settings" }
		</NavLink>
	</div>
);

export default MainMenu;
