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
    <Link
      className={clsx(
        'rounded-xl mt-2 first:mt-0 pl-4 pr-2 py-2 transition text-slate-950 flex items-center group',
        pathname === `/chat/${chatId}`
          ? 'bg-white'
          : 'bg-slate-50 hover:bg-white text-opacity-75',
      )}
      key={chatId}
      href={`/chat/${chatId}`}
    >
      <div className="flex-grow">
        <p className="line-clamp-2">{title}</p>
        <p
          className={clsx(
            'text-slate-500 text-xs',
            pathname === `/chat/${chatId}`
              ? 'text-opacity-100'
              : 'text-opacity-50',
          )}
        >
          {relativeDate}
        </p>
      </div>
      <div className="flex-shrink-0">
        <ChatHistoryDeleteButton chatId={chatId} />
      </div>
    </Link>
  );
};
