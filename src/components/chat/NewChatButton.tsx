import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/solid';

export const NewChatButton = () => {
  return (
    <Link
      href="/"
      className="shadow-xl px-4 py-2 flex items-center bg-slate-950 hover:bg-slate-900 transition text-slate-50 rounded-xl"
    >
      <PlusIcon className="w-4 h-4 mr-2" />
      <span>New Chat</span>
    </Link>
  );
};
