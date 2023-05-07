import { ChatMessage } from '@/models/message';
import { ChatMessageItem } from '@/components/chat/ChatMessageItem';
import { ChatMessageError } from '@/components/chat/ChatMessageError';
import { useLayoutEffect, useRef } from 'react';

export type ChatMessageListProps = {
  messages: ChatMessage[];
  error?: string;
};

export const ChatMessageList = ({ messages, error }: ChatMessageListProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollBottomRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    scrollBottomRef?.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className="flex-grow overflow-scroll py-6" ref={scrollContainerRef}>
      <div className="flex flex-col">
        {messages.map((message, i) => (
          <ChatMessageItem message={message} key={message.id} />
        ))}
      </div>
      {error && <ChatMessageError>{error}</ChatMessageError>}
      <div ref={scrollBottomRef} />
    </div>
  );
};
