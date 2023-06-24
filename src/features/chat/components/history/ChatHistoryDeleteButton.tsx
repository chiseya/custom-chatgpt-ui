import React from 'react';
import { useDeleteChatHistory } from '@/features/chat/hooks/history/useDeleteChatHistory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

type ChatHistoryDeleteButtonProps = {
  chatId: string;
};

export const ChatHistoryDeleteButton = ({
  chatId,
}: ChatHistoryDeleteButtonProps) => {
  const { mutate, isLoading } = useDeleteChatHistory(chatId);
  return (
    <button
      type="button"
      disabled={isLoading}
      className="opacity-0 disabled:opacity-25 disabled:cursor-wait group-hover:opacity-100 btn btn-circle btn-xs btn-ghost"
      onClick={mutate}
      aria-label={`Delete chat history for ${chatId}`}
    >
      <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
    </button>
  );
};
