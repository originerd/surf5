import { connect } from 'react-redux';

import { navigationGoBack } from '../actions/navigation';
import Write from '../components/Write';

const mapStateToProps = state => ({
  followers: state.followers,
});

const mapDispatchToProps = dispatch => ({
  navigationGoBack() {
    dispatch(navigationGoBack());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Write);
