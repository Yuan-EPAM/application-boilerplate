import { connect } from 'react-redux';

import FormArea from '../../components/SignUp/FormArea';
import { signupMsgClean } from '../actions/signup';
import { signup } from '../thunk/signupAction';

const mapStateToProps = ({ signup }) => ({
  signupMsg: signup.msg,
  error: signup.error
});

const mapDispatchToProps = dispatch => {
  return {
    onSignup: (name, email, pwd, history) => dispatch(signup(name, email, pwd, history)),
    onCleanMsg: () => dispatch(signupMsgClean())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormArea);
