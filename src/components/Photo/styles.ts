import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 300,
    cursor: 'pointer',
  },
  delete: {
    position: 'absolute',
    background: 'red',
    cursor: 'pointer',
  }
});

export default useStyles;
