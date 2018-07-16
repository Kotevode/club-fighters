import { connect } from "react-redux";
import MainMenu from "../components/MainMenu";

const MainMenuContainer = props => <MainMenu {...props} />;

export default connect(() => ({}))(MainMenuContainer);
