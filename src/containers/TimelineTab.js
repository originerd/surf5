import { connect } from 'react-redux';

import { timelinePrepend } from '../actions/timeline';
import { usersLoad } from '../actions/users';
import Timeline from '../components/Timeline';

const mapStateToProps = state => ({
  timeline: state.timeline,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  timelinePrepend(...surfs) {
    dispatch(timelinePrepend(...surfs));
  },
  usersLoad(uid) {
    dispatch(usersLoad(uid));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
