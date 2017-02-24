import { connect } from 'react-redux';

import { navigationGoBack, navigationResetToFirstScreen } from '../actions/navigation';
import Navigation from '../components/Navigation';

const mapStateToProps = state => ({
  state: state.navigation,
});

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(navigationGoBack()),
  sessionManage: () => dispatch(navigationResetToFirstScreen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
