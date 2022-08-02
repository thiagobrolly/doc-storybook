import { PlOutlineClose, PlOutlineSearch } from '@paylivre/icons';
import {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';

export interface SearchIconRef {
  setRenderSearch: () => void;
  setRenderCross: () => void;
}

interface SearchIcon {
  handleDelete?: () => void;
}

const SearchIcon: ForwardRefRenderFunction<SearchIconRef, SearchIcon> = (
  { handleDelete },
  searchIconRef,
) => {
  const [turnOnOff, setTurnOnOff] = useState(true);

  const setRenderSearch = useCallback(() => {
    setTurnOnOff(true);
  }, []);
  const setRenderCross = useCallback(() => {
    setTurnOnOff(false);
  }, []);

  useImperativeHandle(searchIconRef, () => ({
    setRenderSearch,
    setRenderCross,
  }));

  return turnOnOff ? (
    <PlOutlineSearch size={20} color="currentColor" />
  ) : (
    <PlOutlineClose
      size={16}
      color="currentColor"
      className="search-clear"
      onClick={handleDelete}
    />
  );
};

export default forwardRef(SearchIcon);
