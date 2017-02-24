import { connect } from 'react-redux';

import Register from '../components/Register';

const mapStateToProps = (state) => {
  const { navigation: { index, routes } } = state;
  const name = (routes[index].params && routes[index].params.name) || 'SURF5';

  return { name };
};

export default connect(mapStateToProps)(Register);
