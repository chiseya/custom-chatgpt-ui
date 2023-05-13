import { ChatMessage } from '@/models/message';
import { ChatMessageItem } from '@/components/chat/ChatMessageItem';
import { ChatMessageError } from '@/components/chat/ChatMessageError';
import { useLayoutEffect, useRef } from 'react';
import { SystemPrompt } from '@/components/chat/SystemPrompt';

export type ChatMessageListProps = {
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
