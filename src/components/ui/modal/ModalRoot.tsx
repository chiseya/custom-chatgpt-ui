import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export type ModalRootProps = {
  children: ReactNode;
};
export const ModalRoot = ({ children }: ModalRootProps) => {
  const modalDom = document.getElementById('modal');
  if (!modalDom) return null;
  return createPortal(children, modalDom);
};
