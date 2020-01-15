import SignOutButton from '../../components/SignOutButton';
import { connect } from 'react-redux';

import { signout } from '../actions/signout';

const mapDispatchToProps = dispatch => {
  return {
    onSignout: () => dispatch(signout())
  };
};

export default connect(null, mapDispatchToProps)(SignOutButton);
