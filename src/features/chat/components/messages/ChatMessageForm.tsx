import TextareaAutosize from 'react-textarea-autosize';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faBan } from '@fortawesome/free-solid-svg-icons';

type ChatMessageFormProps = {
  isSubmitting?: boolean;
  onSubmit: (input: string) => void;
  onCancel: () => void;
};

export const ChatMessageForm = ({
  isSubmitting,
  onSubmit,
  onCancel,
}: ChatMessageFormProps) => {
  const [input, setInput] = useState('');
  const isValid = input.trim().length > 0;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    if (!input.trim()) return;
    setInput('');
    onSubmit(input);
  };
  return (
    <div className="flex flex-shrink-0 items-start py-3.5 px-6 bg-base-100">
      <TextareaAutosize
        className="flex-grow textarea textarea-bordered resize-none"
        minRows={1}
        maxRows={4}
        autoFocus
        placeholder="Type a message"
        value={input}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <button
        className="flex-shrink-0 ml-4 btn"
        type="button"
        disabled={!isValid || isSubmitting}
        onClick={handleSubmit}
      >
        {isSubmitting ? (
          <span className="loading loading-ring" />
        ) : (
          <FontAwesomeIcon icon={faPaperPlane} />
        )}
        {isSubmitting ? 'Generating' : 'Send'}
      </button>
      {isSubmitting && (
        <button
          className="flex-shrink-0 ml-2 btn btn-square  btn-error"
          type="button"
          aria-label="Stop generating"
          onClick={onCancel}
        >
          <FontAwesomeIcon icon={faBan} />
        </button>
      )}
    </div>
  );
};
