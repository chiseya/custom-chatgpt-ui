import TextareaAutosize from 'react-textarea-autosize';
import { ChangeEvent, KeyboardEvent, useState } from 'react';

export type ChatMessageFormProps = {
  isDisabled?: boolean;
  onSubmit: (input: string) => void;
};

export const ChatMessageForm = ({
  isDisabled,
  onSubmit,
}: ChatMessageFormProps) => {
  const [input, setInput] = useState('');

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
    <div className="flex flex-shrink-0 items-start pb-3 px-6">
      <TextareaAutosize
        className="flex-grow px-3 py-2 focus:outline-slate-300 rounded-lg resize-none placeholder:text-slate-200"
        minRows={1}
        maxRows={4}
        autoFocus
        disabled={isDisabled}
        placeholder="Send a message"
        value={input}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <button
        className="flex-shrink-0 ml-4 bg-slate-100 rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-200 disabled:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-300 transition"
        type="button"
        disabled={!input.trim() || isDisabled}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};
