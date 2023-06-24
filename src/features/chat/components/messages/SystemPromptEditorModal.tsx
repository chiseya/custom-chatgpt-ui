import { Modal } from '@/components/ui/modal/Modal';
import { ChangeEvent, RefObject, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { ModalRef } from '@/hooks/ui/useModalRef';

type SystemPromptEditorModalProps = {
  onSubmit: (value: string) => void;
  modalRef: RefObject<ModalRef>;
};
export const SystemPromptEditorModal = ({
  onSubmit,
  modalRef,
}: SystemPromptEditorModalProps) => {
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(value);
    modalRef.current?.close();
  };

  return (
    <Modal ref={modalRef}>
      <h2 className="font-bold text-xl">
        System Prompt{' '}
        <a
          href="https://platform.openai.com/docs/guides/chat"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faCircleQuestion} />
        </a>
      </h2>
      <div className="mt-4">
        <textarea
          className="textarea textarea-bordered w-full block"
          placeholder="You are a helpful assistant."
          rows={5}
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className="modal-action">
        <button type="button" className="btn" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </Modal>
  );
};
