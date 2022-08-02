import {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import { Error as E } from './styles';

export interface ErrorRef {
  setRenderErrorTrue: () => void;
  setRenderErrorFalse: () => void;
}

interface ErrorProps {
  errorMessage?: string;
}

const Error: ForwardRefRenderFunction<ErrorRef, ErrorProps> = (
  { errorMessage },
  errorRef,
) => {
  const [turnOnOff, setTurnOnOff] = useState(false);

  const setRenderErrorTrue = useCallback(() => {
    setTurnOnOff(true);
  }, []);
  const setRenderErrorFalse = useCallback(() => {
    setTurnOnOff(false);
  }, []);

  useImperativeHandle(errorRef, () => ({
    setRenderErrorTrue,
    setRenderErrorFalse,
  }));
  return errorMessage !== undefined && turnOnOff ? <E>{errorMessage}</E> : null;
};

export default forwardRef(Error);
