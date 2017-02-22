import { connect } from 'react-redux';

import { navigationReset } from '../actions/navigation';
import Login from '../components/Login';

const mapDispatchToProps = dispatch => ({
  resetToHome: () => {
    dispatch(navigationReset(0, [{ key: 'Home_0', routeName: 'Home' }]));
  },
});

export default connect(null, mapDispatchToProps)(Login);
