import { ChatMessage, ChatMessageRole } from '@/features/chat/types';
import { useMemo, useState } from 'react';
import { useGenerateChatCompletion } from '@/features/chat/hooks/messages/useGenerateChatCompletion';
import { nanoid } from 'nanoid';
import { useRevalidateChatHistory } from '@/features/chat/hooks/history/useRevalidateChatHistory';
import { ChatMessageForm } from '@/features/chat/components/messages/ChatMessageForm';
import { ChatMessageList } from '@/features/chat/components/messages/ChatMessageList';
import { ChatEmpty } from '@/features/chat/components/messages/ChatEmpty';
import { useChatMessageHandler } from '@/features/chat/hooks/messages/useChatMessageHandler';

type ChatMessagesPaneProps = {
  chatId?: string;
  messages?: ChatMessage[];
};

export const ChatMessagesPane = ({
  chatId,
  messages: defaultMessages,
}: ChatMessagesPaneProps) => {
  const {
    messages,
    generateChatCompletion,
    cancelChatCompletion,
    isGenerating,
    error,
    systemPrompt,
    onSystemPromptChange,
  } = useChatMessageHandler({ chatId, defaultMessages });

  return (
    <div className="flex-grow h-full flex flex-col">
      {messages.length === 0 ? (
        <ChatEmpty
          systemPrompt={systemPrompt}
          onSystemPromptChange={onSystemPromptChange}
        />
      ) : (
        <ChatMessageList
          messages={messages}
          systemPrompt={systemPrompt}
          error={error}
        />
      )}
      <ChatMessageForm
        onSubmit={generateChatCompletion}
        onCancel={cancelChatCompletion}
        isSubmitting={isGenerating}
      />
    </div>
  );
};
