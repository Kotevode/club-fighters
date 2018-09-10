import { connect } from "react-redux";
import { actions } from "actions/join-game";
import JoinGame from "./JoinGame";

const mapStateToProps = state => ({ loading: state.joinGame.loading });
const mapDispatchToProps = dispatch => ({ joinGame: address => dispatch(actions.joinGame(address)) });

export default connect(mapStateToProps, mapDispatchToProps)(JoinGame);
