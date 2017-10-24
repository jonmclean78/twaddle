import { connect } from "react-redux";
import Input from "../components/Input";
import { 
	enterUsername,
 } from "../data/actions/actions";

// this function gets given the global state
// it returns an object which gets passed in as the props
const mapStateToProps = state => ({
    username: state.getIn("username"),
});

const mapDispatchToProps = dispatch => ({
    // add an update function to the props which dispatches our updateInput action
    onChange: (e) => dispatch(enterUsername(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);