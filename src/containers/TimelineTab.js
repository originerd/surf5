import { connect } from 'react-redux';

import {
  timelineSetLikeCount,
  timelineSetLikes,
  timelinePrepend,
} from '../actions/timeline';
import { usersLoad } from '../actions/users';
import Timeline from '../components/Timeline';

const mapStateToProps = state => ({
  timeline: state.timeline,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  timelineSetLikeCount(sid, likeCount) {
    dispatch(timelineSetLikeCount(sid, likeCount));
  },
  timelineSetLikes(sid, likes) {
    dispatch(timelineSetLikes(sid, likes));
  },
  timelinePrepend(...surfs) {
    dispatch(timelinePrepend(...surfs));
  },
  usersLoad(uid) {
    dispatch(usersLoad(uid));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
