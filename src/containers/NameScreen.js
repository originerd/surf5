import { connect } from 'react-redux';

import { navigationNavigate } from '../actions/navigation';
import Name from '../components/Name';

const mapDispatchToProps = dispatch => ({
  navigateToRegister(name) {
    dispatch(navigationNavigate('Register', { name }));
  },
});

export default connect(null, mapDispatchToProps)(Name);
