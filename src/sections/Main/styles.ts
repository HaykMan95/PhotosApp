import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    display: 'flex',
  },
  modal: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: '#000000c2',
    textAlign: 'center'
  },
  modalImage: {
    position: 'relative',
    top: 'calc(50% - 300px)',
  }
});

export default useStyles;
