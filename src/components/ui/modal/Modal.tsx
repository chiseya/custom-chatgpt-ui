import { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { ModalRef } from '@/hooks/ui/useModalRef';

type ModalProps = {
  children: ReactNode;
};

export const Modal = forwardRef<ModalRef, ModalProps>(function Modal(
  { children },
  ref,
) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useImperativeHandle(ref, () => ({
    open: () => {
      dialogRef.current?.showModal();
    },
    close: () => {
      dialogRef.current?.close();
    },
  }));

  const dialogInnerRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dialogInnerRef, () => {
    dialogRef.current?.close();
  });

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box" ref={dialogInnerRef}>
        {children}
      </div>
    </dialog>
  );
});
