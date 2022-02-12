import { BaseSyntheticEvent } from "react";
import classNames from 'classnames';

import { MAX_ITEM, PAGE_LIMITATION } from "constants/const";

import useStyles from './styles';

interface IPeginatopnProps {
  onChange: (newPage: number) => void;
  currentPage: number;
}

type PageItem = number | string;
const latestPage = MAX_ITEM/PAGE_LIMITATION;
const DOTS = 'DOTS';
let pages: PageItem[] = [...Array(latestPage)].map((_, index) => (index));

const Pagination = ({ onChange, currentPage }: IPeginatopnProps) => {
  const styles = useStyles();
  const pagination = [1, 2, 3, 4, DOTS, currentPage - 1, currentPage, currentPage + 1, DOTS, latestPage - 1, latestPage];

  const uniqueArray = pagination.filter(function(item, pos) {
    if(item === DOTS) {
      return true;
    }

    if(item > latestPage) {
      return false;
    }

    return item && pagination.indexOf(item) == pos;
  });

  const clickHandler = (e: BaseSyntheticEvent) => {
    const id = e.target.dataset.id;
    onChange(Number(id));
  }

  return <div onClick={clickHandler}>
    {uniqueArray.map((page, index) => {
      if(page === DOTS) {
        return <span key={index} className={styles.dots}>...</span>
      }
      return <span key={index} data-id={page} className={classNames(styles.item, {active: page === currentPage})}>{page}</span>
    })}
  </div>
}

export default Pagination;
