import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { history } from "store";
import MainMenu from "./MainMenu";
import Settings from "./Settings";
import NewGame from "./NewGame";
import JoinGame from "./JoinGame";
import Fight from "./Fight";

const Router = () => <ConnectedRouter history={history}>
	<Switch>
		<Route exact path="/" component={MainMenu} />
		<Route path="/settings" component={Settings} />
		<Route path="/new-game" component={NewGame} />
		<Route path="/join-game" component={JoinGame} />
		<Route path="/fight" component={Fight} />
	</Switch>
</ConnectedRouter>;

export default Router;
