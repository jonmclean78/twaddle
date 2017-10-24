import { connect } from "react-redux";
import Followers from "../components/Followers";
import { fetchFollowers } from "../data/actions/api"

const mapStateToProps = state => ({
    loading: !state.get("loaded"),
    followers: state.get("followers"),
});


const mapDispatchToProps = (dispatch) => ({
    onMount: () => dispatch(fetchFollowers()),
});

export default connect(mapDispatchToProps)(Followers);
