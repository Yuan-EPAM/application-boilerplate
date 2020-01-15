import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    border: '3px solid yellow',

    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 600
  },
  formArea: {
    border: '2px solid skyblue',
    display: 'flex',
    flexDirection: 'column',
  },
  inputItem: {
    border: '1px solid red',
    margin: 10
  },
  inputItemInvalid: {
    backgroundColor: '#e17055',
    margin: 10
    // opacity: "60%"
  },
  signupLink: {
    marginLeft: 10,
    textDecoration: 'underline',
    color: '#535c68',
    opacity: '60%'
  },
  button: {
    margin: 10,
    width: '40%',
    marginTop: 20
  }
}));

export default useStyles;
