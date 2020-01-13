import { makeStyles } from '@material-ui/styles';
import { FormatUnderlined } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  inputItem: {
    border: '1px solid red',
    margin: 10
  },
  inputItemInvalid: {
    backgroundColor: '#e17055',
    margin: 10
    // opacity: "60%"
  }
}));

export default useStyles;
