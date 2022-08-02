import React, { useEffect } from 'react';
import { PlOutlineClose } from '@paylivre/icons';
import { CSSTransition } from 'react-transition-group';
import FocusLock from 'react-focus-lock';
import { createPortal } from 'react-dom';
import { Heading } from '../Heading';

import * as S from './styles';

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onRequestClose: (newValue: boolean) => void;
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnEscClick?: boolean;
  scrollBarDisabled?: boolean;
  viewCloseButton?: boolean;
  title?: string;
  widthModal?: string;
};

export const Modal = ({
  isOpen,
  onRequestClose,
  shouldCloseOnOverlayClick = true,
  shouldCloseOnEscClick = true,
  scrollBarDisabled = true,
  viewCloseButton,
  children,
  title,
  widthModal,
  ...props
}: ModalProps) => {
  useEffect(() => {
    isOpen && scrollBarDisabled
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');

    function keyListener({ key }: KeyboardEvent) {
      if (key === 'Escape' && shouldCloseOnEscClick && isOpen) {
        onRequestClose(false);
      }
    }

    document.addEventListener('keydown', keyListener);

    return () => document.removeEventListener('keydown', keyListener);
  }, [onRequestClose, shouldCloseOnEscClick, isOpen, scrollBarDisabled]);

  return createPortal(
    <S.ModalRoot aria-hidden={!isOpen} aria-label="paylivre-modal">
      <CSSTransition
        in={isOpen}
        timeout={400}
        unmountOnExit
        classNames="paylivre-modal"
      >
        <S.ModalOverlay
          role="region"
          aria-label="overlay"
          isOpen={isOpen}
          shouldCloseOnEscClick={shouldCloseOnEscClick}
          shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
          onClick={() =>
            shouldCloseOnOverlayClick ? onRequestClose(false) : null
          }
        >
          <S.ModalContent
            role="dialog"
            aria-label="modal open"
            aria-modal
            aria-labelledby={title}
            data-state={isOpen ? 'open' : 'closed'}
            tabIndex={-1}
            isOpen={isOpen}
            widthModal={widthModal}
            onClick={(e) => e.stopPropagation()}
            {...props}
          >
            <FocusLock>
              <S.ModalHeader>
                {!!title && (
                  <Heading
                    bold
                    size="large"
                    color="black"
                    marginBottom="2.4rem"
                  >
                    {title}
                  </Heading>
                )}
                {!!viewCloseButton && (
                  <S.ModalCloseButton
                    onClick={() => onRequestClose(false)}
                    data-dismiss="modal"
                    aria-label="close modal"
                    role="button"
                  >
                    <PlOutlineClose size={14} color="currentColor" />
                  </S.ModalCloseButton>
                )}
              </S.ModalHeader>
              {children}
            </FocusLock>
          </S.ModalContent>
        </S.ModalOverlay>
      </CSSTransition>
    </S.ModalRoot>,
    document.body,
  );
};
