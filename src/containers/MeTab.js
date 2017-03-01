import { connect } from 'react-redux';

import {
  mePrepend,
  meSetLikeCount,
  meSetLikes,
} from '../actions/me';
import { usersLoad } from '../actions/users';
import Me from '../components/Me';

const mapStateToProps = state => ({
  surfs: state.me,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  surfsPrepend(...surfs) {
    dispatch(mePrepend(...surfs));
  },
  surfsSetLikeCount(sid, likeCount) {
    dispatch(meSetLikeCount(sid, likeCount));
  },
  surfsSetLikes(sid, likes) {
    dispatch(meSetLikes(sid, likes));
  },
  usersLoad(uid) {
    dispatch(usersLoad(uid));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Me);
