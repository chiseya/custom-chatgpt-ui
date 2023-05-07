import { ChatContainer } from '@/components/chat/ChatContainer';

export type ChatPageProps = {
  params: {
    id: string;
  };
};
export default function ChatPage({ params }: ChatPageProps) {
  return <ChatContainer chatId={params.id} />;
}
