import { connect } from "react-redux";
import Username from "../components/Username";

// this function gets given the global state
// it returns an object which gets passed in as the props
const mapStateToProps = state => ({
    username: state.get("username"),
});




export default connect(mapStateToProps)(Username);