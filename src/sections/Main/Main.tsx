import { useEffect, ChangeEvent, useState, BaseSyntheticEvent } from "react";

import { useStore } from 'store';
import { ActionTypesEnum } from 'store/types';
import { getImages } from "actions";
import Photo from "components/Photo";
import Pagination from "components/Pagination";

import useStyles from './styles';

const Main = () => {
  const styles = useStyles();

  const { state: {
      photos,
      sorting,
      page,
    },
    dispatch,
  } = useStore();
  const [image, setImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    getImages(page, sorting).then(res => {
      dispatch({
        type: ActionTypesEnum.SET_PHOTOS,
        payload: res,
      });
    });
  }, [sorting, page]);

  const changeSorting = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: ActionTypesEnum.SET_SORTING,
      payload: e.target.value,
    });
  }

  const changePage = (newPage: number) => {
    dispatch({
      type: ActionTypesEnum.SET_PAGE,
      payload: newPage,
    });
  }

  const clickHandler = (image: string) => {
    setImage(image);
  }

  const closeModal = () => {
    setImage(undefined);
  }

  const stopPropagation = (e: BaseSyntheticEvent) => {
    e.stopPropagation();
  }

  return <div>
      Sorting albumId By <select id="lang" onChange={changeSorting}>
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </select>

      <div className={styles.list}>
        {photos && photos.map(photo => <Photo key={photo.id} {...photo} onClick={clickHandler} />)}
      </div>
      <Pagination onChange={changePage} currentPage={page} />
      {
        image && <div className={styles.modal} onClick={closeModal}>
          <img src={image} className={styles.modalImage} onClick={stopPropagation}/>
        </div>
      }
    </div>
}

export default Main
