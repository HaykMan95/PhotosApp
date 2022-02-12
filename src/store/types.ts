import { IPhotos } from "types";

export enum ActionTypesEnum {
  SET_PHOTOS,
  DELETE_PHOTOS,
  SET_SORTING,
  SET_PAGE,
}

export interface StateModel {
  photos?: IPhotos[];
  sorting: 'ASC' | 'DESC';
  page: 1,
}

export interface ActionModel {
  type: ActionTypesEnum;
  payload?: any;
}
