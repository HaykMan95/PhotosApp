import { BaseSyntheticEvent } from 'react';

import { IPhotos } from "types";

import useStyles from './styles';

interface IPhotosProps extends IPhotos {
  onClick: (url: string) => void,
  deleteAction: (id: number) => void,
}

const Photo = ({id, title, url, thumbnailUrl, onClick, deleteAction}: IPhotosProps) => {
  const styles = useStyles();

  const clickHandler = (e: BaseSyntheticEvent) => {
    e.stopPropagation();
    deleteAction(id);
  }
  
  return <div className={styles.root} onClick={() => onClick(url)}>
    <img src={thumbnailUrl} />
    {title}
    <p className={styles.delete} onClick={clickHandler}>Delete</p>
  </div>
}

export default Photo;