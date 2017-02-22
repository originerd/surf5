import { connect } from 'react-redux';

import { navigationReset } from '../actions/navigation';
import Register from '../components/Register';

const mapStateToProps = (state) => {
  const { navigation: { index, routes } } = state;
  const name = (routes[index].params && routes[index].params.name) || 'SURF5';

  return { name };
};

const mapDispatchToProps = dispatch => ({
  resetToHome: () => {
    dispatch(navigationReset(0, [{ key: 'Home_0', routeName: 'Home' }]));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
