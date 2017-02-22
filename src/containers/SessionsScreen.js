import { connect } from 'react-redux';

import { navigationNavigate } from '../actions/navigation';
import Sessions from '../components/Sessions';

const mapDispatchToProps = dispatch => ({
  navigate: (routeName) => { dispatch(navigationNavigate(routeName)); },
});

export default connect(null, mapDispatchToProps)(Sessions);
