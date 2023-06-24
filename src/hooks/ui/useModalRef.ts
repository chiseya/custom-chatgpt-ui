import { useRef } from 'react';

export type ModalRef = {
  open: () => void;
  close: () => void;
};

export function useModalRef() {
  return useRef<ModalRef>(null);
}
