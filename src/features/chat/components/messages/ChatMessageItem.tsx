import { ChatMessageRole } from '@/features/chat/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { cn } from '@/lib/classname';

type ChatMessageItemProps = {
  message: {
    content: string;
    role: ChatMessageRole;
  };
};

export const ChatMessageItem = ({ message }: ChatMessageItemProps) => {
  return (
    <div
      className={cn(
        'flex items-start px-6 py-3',
        message.role === 'assistant' ? 'bg-base-200/50' : 'bg-base-100',
      )}
    >
      {message.role === 'assistant' ? (
        <FontAwesomeIcon
          icon={faRobot}
          className="w-6 h-6 p-0.5 flex-shrink-0 mr-2"
        />
      ) : (
        <FontAwesomeIcon
          icon={faUserCircle}
          className="w-5 h-5 p-1 flex-shrink-0 mr-2"
        />
      )}
      {message.role === 'assistant' ? (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="flex-grow prose max-w-none"
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  style={gruvboxDark}
                  customStyle={{ background: 'transparent' }}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {message.content}
        </ReactMarkdown>
      ) : (
        <p className="flex-grow whitespace-pre-wrap">{message.content}</p>
      )}
    </div>
  );
};
