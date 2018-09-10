import { connect } from "react-redux";
import { actions } from "actions/new-game";
import NewGame from "./NewGame";

class NewGameContainer extends React.PureComponent {
	static propTypes = {
		createGame: PropTypes.func.isRequired
	};

	componentWillMount() {
		const { createGame } = this.props;
		createGame();
	}

	render() {
		return <NewGame {...this.props} />;
	}
}

const mapStateToProps = state => ({ loading: state.newGame.loading, address: state.newGame.address });
const mapDispatchToProps = dispatch => ({ createGame: () => dispatch(actions.createGame()) });

export default connect(mapStateToProps, mapDispatchToProps)(NewGameContainer);
