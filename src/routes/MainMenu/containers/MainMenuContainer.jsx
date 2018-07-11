import MainMenu from "../components/MainMenu"
import { connect } from "react-redux"

const MainMenuContainer = props => <MainMenu {...props} />

export default connect(state => ({}))(MainMenuContainer)
