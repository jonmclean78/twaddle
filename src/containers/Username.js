import { connect } from "react-redux";
import Username from "../components/Username";
import { 
	getFollowers,
 } from "../data/actions/actions";

// this function gets given the global state
// it returns an object which gets passed in as the props
const mapStateToProps = state => {
	return ({
    username: state.get("username"),
})};

const mapDispatchToProps = dispatch => ({
    // add an update function to the props which dispatches our updateInput action
    onClick: (username) => dispatch(getFollowers(username)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Username);