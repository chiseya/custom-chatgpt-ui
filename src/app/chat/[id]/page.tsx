import { ChatContainer } from '@/features/chat/components/ChatContainer';

type ChatPageProps = {
  params: {
    id: string;
  };
};
export default function ChatPage({ params }: ChatPageProps) {
  return <ChatContainer chatId={params.id} />;
}
