import { connect } from 'react-redux';

import {
  surfsPrepend,
  surfsSetLikeCount,
  surfsSetLikes,
} from '../actions/surfs';
import { usersLoad } from '../actions/users';
import Surfs from '../components/Surfs';

const mapStateToProps = state => ({
  surfs: state.surfs,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  surfsSetLikeCount(sid, likeCount) {
    dispatch(surfsSetLikeCount(sid, likeCount));
  },
  surfsSetLikes(sid, likes) {
    dispatch(surfsSetLikes(sid, likes));
  },
  surfsPrepend(...surfs) {
    dispatch(surfsPrepend(...surfs));
  },
  usersLoad(uid) {
    dispatch(usersLoad(uid));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Surfs);
