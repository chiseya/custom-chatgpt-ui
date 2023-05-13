import { Modal } from '@/components/ui/modal/Modal';
import { ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

export type SystemPromptEditorModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (value: string) => void;
};
export const SystemPromptEditorModal = ({
  isOpen,
  onClose,
  onSubmit,
}: SystemPromptEditorModalProps) => {
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    onSubmit(value);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="font-bold text-xl">
        System Instructions{' '}
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
