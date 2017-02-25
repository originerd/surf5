import { connect } from 'react-redux';

import Home from '../components/Home';

const mapStateToProps = state => ({
  state: state.tab,
});

export default connect(mapStateToProps)(Home);
