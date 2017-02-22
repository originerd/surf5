import { connect } from 'react-redux';

import { navigationResetToFirstScreen } from '../actions/navigation';
import Initial from '../components/Initial';

const mapDispatchToProps = dispatch => ({
  resetToFirstScreen: () => { dispatch(navigationResetToFirstScreen()); },
});

export default connect(null, mapDispatchToProps)(Initial);
