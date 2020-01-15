import { connect } from 'react-redux';

import InputItem from '../../components/SignUp/InputItem';

import { inputValidityCheck } from '../actions/signup';

const mapStateToProps = ({ signup }) => ({
  itemsValidity: signup.itemsValidity
});

const mapDispatchToProps = dispatch => ({
  onItemsValidityCheck: (itemId, itemVal, validation) =>
    dispatch(inputValidityCheck(itemId, itemVal, validation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputItem);
