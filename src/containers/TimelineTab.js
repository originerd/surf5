import { connect } from 'react-redux';

import {
  timelineAppend,
  timelinePrepend,
} from '../actions/timeline';
import Timeline from '../components/Timeline';

const mapStateToProps = state => ({
  timeline: state.timeline,
  users: state.users,
});

export default connect(mapStateToProps)(Timeline);
