import TextareaAutosize from 'react-textarea-autosize';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSliders } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

export type ChatMessageFormProps = {
  isSubmitting?: boolean;
  onSubmit: (input: string) => void;
};

export const ChatMessageForm = ({
  isSubmitting,
  onSubmit,
}: ChatMessageFormProps) => {
  const [input, setInput] = useState('');
  const isValid = input.trim().length > 0;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
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
        placeholder="Send a message"
        value={input}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <button
        className={clsx(
          'flex-shrink-0 ml-4 btn gap-2',
          isSubmitting && 'loading',
        )}
        type="button"
        disabled={!isValid || isSubmitting}
        onClick={handleSubmit}
      >
        {!isSubmitting && <FontAwesomeIcon icon={faPaperPlane} />}
        Submit
      </button>
      <button className="btn btn-square ml-2">
        <FontAwesomeIcon icon={faSliders} />
      </button>
    </div>
  );
};
