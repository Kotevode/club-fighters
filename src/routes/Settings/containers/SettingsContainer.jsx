import { connect } from "react-redux";
import Settings from "../components/Settings";

const SettingsContainer = props => <Settings {...props} />;

export default connect(() => ({}))(SettingsContainer);
