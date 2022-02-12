import { IPhotos } from "types";

import useStyles from './styles';

interface IPhotosProps extends IPhotos {
  onClick: (url: string) => void,
}

const Photo = ({ title, url, thumbnailUrl, onClick}: IPhotosProps) => {
  const styles = useStyles();
  
  return <div className={styles.root} onClick={() => onClick(url)}>
    <img src={thumbnailUrl} />
    {title}
  </div>
}

export default Photo;