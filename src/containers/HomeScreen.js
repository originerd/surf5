import { connect } from 'react-redux';

import Home from '../components/Home';
import { navigationNavigate } from '../actions/navigation';

const mapStateToProps = state => ({
  state: state.tab,
});

const mapDispatchToProps = dispatch => ({
  navigateToWrite() {
    dispatch(navigationNavigate('Write'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
