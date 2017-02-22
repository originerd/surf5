import { connect } from 'react-redux';

import { navigationGoBack } from '../actions/navigation';
import Navigation from '../components/Navigation';

const mapStateToProps = state => ({
  state: state.navigation,
});

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(navigationGoBack()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
