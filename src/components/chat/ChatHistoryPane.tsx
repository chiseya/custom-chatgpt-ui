import { useChatHistory } from '@/hooks/chat/useChatHistory';
import { usePathname } from 'next/navigation';
import { NewChatButton } from '@/components/chat/NewChatButton';
import { ChatHistoryItem } from '@/components/chat/ChatHistoryItem';

export const ChatHistoryPane = () => {
  const pathname = usePathname();
  const { data, error } = useChatHistory();
  return (
    <div className="h-full overflow-y-auto flex-shrink-0 w-72 p-6 bg-slate-100">
      {error ? (
        <p className="text-red-500">{error.message || 'Error'}</p>
      ) : !data ? null : (
        <div className="flex flex-col">
          <NewChatButton />
          <h2 className="text-slate-700 text-xs tracking-widest uppercase ml-4 mb-2 mt-6">
            History
          </h2>
          {data.map((item) => (
            <ChatHistoryItem
              chatId={item.id}
              title={item.title}
              createdAt={item.createdAt}
              key={item.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};
