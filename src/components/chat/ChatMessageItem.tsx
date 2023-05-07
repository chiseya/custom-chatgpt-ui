import { AcademicCapIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { ChatMessageRole } from '@/models/message';

export type ChatMessageItemProps = {
  message: {
    content: string;
    role: ChatMessageRole;
  };
};

export const ChatMessageItem = ({ message }: ChatMessageItemProps) => {
  return (
    <div className="flex items-start px-6 py-3">
      {message.role === 'user' ? (
        <UserCircleIcon className="w-6 h-6 flex-shrink-0 mr-2" />
      ) : (
        <AcademicCapIcon className="w-6 h-6 flex-shrink-0 mr-2" />
      )}
      <p className="whitespace-pre-wrap flex-grow">{message.content}</p>
    </div>
  );
};
