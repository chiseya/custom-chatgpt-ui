import { ChatMessage } from '@/features/chat/types';
import { ChatMessageItem } from '@/features/chat/components/messages/ChatMessageItem';
import { ChatMessageError } from '@/features/chat/components/messages/ChatMessageError';
import { useLayoutEffect, useRef } from 'react';
import { SystemPrompt } from '@/features/chat/components/messages/SystemPrompt';

type ChatMessageListProps = {
  messages: ChatMessage[];
  systemPrompt?: string;
  error?: string;
};

export const ChatMessageList = ({
  messages,
  error,
  systemPrompt,
}: ChatMessageListProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollBottomRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    scrollBottomRef?.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className="flex-grow overflow-y-scroll" ref={scrollContainerRef}>
      {systemPrompt && <SystemPrompt value={systemPrompt} showBadge />}
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
