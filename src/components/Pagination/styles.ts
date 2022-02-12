import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  item: {
    padding: 10,
    border: '1px solid orange',
    background: '#FFF',
    cursor: 'pointer',
    marginRight: 5,
    '&.active': {
      boxShadow: '0px 0px 4px 2px #888888',
    }
  },
  dots: {
    padding: 10,

  }
});

export default useStyles;
