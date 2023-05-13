import React from 'react';
import { useBoolean } from 'usehooks-ts';
import { SystemPromptEditorModal } from '@/components/chat/SystemPromptEditorModal';

export type SystemPromptEditorProps = {
  onSubmit: (input: string) => void;
};

export const SystemPromptEditor = ({ onSubmit }: SystemPromptEditorProps) => {
  const {
    value: isOpen,
    setTrue: onOpen,
    setFalse: onClose,
  } = useBoolean(false);
  return (
    <>
      <button
        type="button"
        className="btn mt-8 btn-sm btn-secondary"
        onClick={onOpen}
      >
        Add system instructions
      </button>
      <SystemPromptEditorModal
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={onSubmit}
      />
    </>
  );
};
