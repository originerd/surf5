import { connect } from 'react-redux';

import { followersSet } from '../actions/followers';
import { navigationNavigate } from '../actions/navigation';
import Home from '../components/Home';

const mapStateToProps = state => ({
  followers: state.followers,
  tab: state.tab,
});

const mapDispatchToProps = dispatch => ({
  followersSet(followers) {
    dispatch(followersSet(followers));
  },
  navigateToWrite() {
    dispatch(navigationNavigate('Write'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
