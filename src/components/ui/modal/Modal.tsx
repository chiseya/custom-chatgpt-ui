import { ReactNode, useRef } from 'react';
import { ModalRoot } from '@/components/ui/modal/ModalRoot';
import { useOnClickOutside } from 'usehooks-ts';

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, onClose);
  return (
    <ModalRoot>
      <input
        checked={isOpen}
        type="checkbox"
        readOnly
        id="system-prompt-editor-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box" ref={ref}>
          {children}
        </div>
      </div>
    </ModalRoot>
  );
};
