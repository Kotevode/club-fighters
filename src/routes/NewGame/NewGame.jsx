const NewGame = ({ loading, address }) => <div>
	<h1>New Game</h1>
	{ loading && <div>Loading...</div> }
	{ address && <div>{ address }</div> }
</div>;

NewGame.propTypes = {
	loading: PropTypes.bool.isRequired,
	address: PropTypes.string
};

export default NewGame;
