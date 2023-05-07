import React from 'react';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export const ChatEmpty = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col">
      <ChatBubbleLeftRightIcon className="w-16 h-16 text-slate-200" />
      <p className="text-slate-300 mt-2 text-sm">Powered by GPT-4</p>
    </div>
  );
};
