import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from "./components/Counter";
import * as actionCreators from './actions/actionCreators';

function mapStateToProps(state) {
  return state;
}
function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Counter);

export default App;