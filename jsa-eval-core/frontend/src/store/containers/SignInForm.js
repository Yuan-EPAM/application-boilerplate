import FormArea from '../../components/SignIn/FormArea';
import { connect } from 'react-redux';

import { auth } from '../thunk/authAction';

const mapStateToProps = ({ auth }) => {
  return {
    authedEmail: auth.email,
    token: auth.token,
    redirectPath: auth.redirectPath,
    error: auth.error,
  }
};

const mapDispatchToProps = dispatch => ({
  onAuth: (email, pwd, history) => dispatch(auth(email, pwd, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormArea);
