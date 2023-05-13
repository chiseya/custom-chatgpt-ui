import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useSetAtom } from 'jotai';
import { newChatKeyAtom } from '@/store/newChatKeyAtom';
import { nanoid } from 'nanoid';

export const NewChatButton = () => {
  const setNewChatKey = useSetAtom(newChatKeyAtom);
  const refreshNewChatKey = () => {
    setNewChatKey(nanoid());
  };
  const pathname = usePathname();

  return (
    <Link
      href="/chat"
      onClick={refreshNewChatKey}
      className={clsx(
        'flex items-center btn btn-primary',
        pathname === '/chat' ? '' : 'btn-outline',
      )}
    >
      <FontAwesomeIcon icon={faPlus} className="w-4 h-4 mr-2" />
      <span>New Chat</span>
    </Link>
  );
};
