import React from 'react';
import { SystemPromptEditorModal } from '@/features/chat/components/messages/SystemPromptEditorModal';
import { useModalRef } from '@/hooks/ui/useModalRef';

type SystemPromptEditorProps = {
  onSubmit: (input: string) => void;
};

export const SystemPromptEditor = ({ onSubmit }: SystemPromptEditorProps) => {
  const modalRef = useModalRef();
  return (
    <>
      <button
        type="button"
        className="btn mt-8 btn-sm btn-secondary"
        onClick={() => modalRef.current?.open()}
      >
        Add system instructions
      </button>
      <SystemPromptEditorModal modalRef={modalRef} onSubmit={onSubmit} />
    </>
  );
};
