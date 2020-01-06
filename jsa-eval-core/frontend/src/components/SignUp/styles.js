import { makeStyles } from '@material-ui/styles';

 const useStyles = makeStyles(theme => ({
  root: {
    border: '3px solid yellow',

    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 500
  },
  formArea: {
    border: '2px solid skyblue',
    display: 'flex',
    flexDirection: 'column'
  },
  inputItem: {
    border: '1px solid red',
    margin: 10
  },
  button: {
    margin: 10,
    width: '40%'
  }
}));

export default useStyles;
