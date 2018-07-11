import Settings from "../components/Settings"
import { connect } from "react-redux"

const SettingsContainer = props => <Settings {...props} />

export default connect(state => ({}))(SettingsContainer)
