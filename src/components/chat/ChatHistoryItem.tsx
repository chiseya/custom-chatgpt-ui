import React from 'react';
import clsx from 'clsx';
import { formatRelative, parseISO } from 'date-fns';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChatHistoryDeleteButton } from '@/components/chat/ChatHistoryDeleteButton';

export type ChatHistoryItemProps = {
  chatId: string;
  title: string;
  createdAt: string;
};

export const ChatHistoryItem = ({
  chatId,
  title,
  createdAt,
}: ChatHistoryItemProps) => {
  const pathname = usePathname();
  const relativeDate = formatRelative(parseISO(createdAt), new Date());
  return (
    <li className="mt-1 first:mt-0">
      <Link
        className={clsx(
          'flex items-center group pl-3.5 pr-2 py-2',
          pathname === `/chat/${chatId}` ? 'active' : '',
        )}
        key={chatId}
        href={`/chat/${chatId}`}
      >
        <div className="flex-grow">
          <p className="line-clamp-2 break-words">{title}</p>
          <p className="text-xs opacity-50">{relativeDate}</p>
        </div>
        <div className="flex-shrink-0">
          <ChatHistoryDeleteButton chatId={chatId} />
        </div>
      </Link>
    </li>
  );
};
