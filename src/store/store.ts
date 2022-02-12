import { createContext, useContext } from 'react';


import { StateModel, ActionTypesEnum, ActionModel } from './types';


export const initialState: StateModel = {
  sorting: 'ASC',
  page: 1,
};

export const reducer = (state: StateModel, { type, payload }: ActionModel): StateModel => {
  switch (type) {
    case ActionTypesEnum.SET_PHOTOS:
      return {
        ...state,
        photos: payload,
      }
    case ActionTypesEnum.SET_SORTING:
      return {
        ...state,
        sorting: payload,
      }
    case ActionTypesEnum.SET_PAGE:
      return {
        ...state,
        page: payload,
      }
    default:
      return state;
  }
};

export const Store = createContext({
  state: initialState,
  dispatch: (args: any) => {},
});

export const useStore = () => useContext(Store);