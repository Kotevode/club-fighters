class JoinGame extends React.PureComponent {
	static propTypes = {
		joinGame: PropTypes.func.isRequired,
		loading: PropTypes.bool.isRequired
	}

	state = {
		address: ""
	};

	setAddress = e => this.setState({ address: e.target.value });

	join = () => {
		const { joinGame } = this.props;
		const { address } = this.state;
		joinGame(address);
	}

	render() {
		const { address } = this.state;
		const { loading } = this.props;
		return <div>
			<h1>Join Game</h1>
			<label>Enter address</label>
			<input type="text" value={address} onChange={this.setAddress} />
			<button type="button" onClick={this.join}>Join</button>
			{ loading && <div>Loading...</div> }
		</div>;
	}
}

export default JoinGame;
