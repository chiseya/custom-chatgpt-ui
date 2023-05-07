import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useDeleteChatHistory } from '@/hooks/chat/useDeleteChatHistory';

export type ChatHistoryDeleteButtonProps = {
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
      className="opacity-0 disabled:opacity-25 disabled:cursor-wait group-hover:opacity-100 pointer-events-auto group-hover:pointer-events-auto rounded-full w-6 h-6 hover:bg-red-50 hover:text-red-600 text-slate-600 transition flex items-center justify-center"
      onClick={mutate}
    >
      <XMarkIcon className="w-4 h-4" />
    </button>
  );
};
