import { useChatHistory } from '@/hooks/chat/useChatHistory';
import { NewChatButton } from '@/components/chat/NewChatButton';
import { ChatHistoryItem } from '@/components/chat/ChatHistoryItem';

export const ChatHistoryPane = () => {
  const { data, error } = useChatHistory();
  return (
    <div className="h-full overflow-y-auto flex-shrink-0 w-72 p-6 bg-base-200">
      {error ? (
        <p className="text-error">{error.message || 'Error'}</p>
      ) : !data ? null : (
        <div className="flex flex-col">
          <NewChatButton />
          <div className="divider mt-8 text-base-content/50 tracking-widest text-sm uppercase">
            History
          </div>
          <ul className="menu p-2 rounded-box -mx-3.5">
            {data.map((item) => (
              <ChatHistoryItem
                chatId={item.id}
                title={item.title}
                createdAt={item.createdAt}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
