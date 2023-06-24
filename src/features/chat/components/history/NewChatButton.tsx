import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import { useSetAtom } from 'jotai';
import { messengerPaneRefreshKeyAtom } from '@/features/chat/store/messengerPaneRefreshKey';
import { nanoid } from 'nanoid';
import { cn } from '@/lib/classname';

export const NewChatButton = () => {
  const setMessengerPaneRefreshKey = useSetAtom(messengerPaneRefreshKeyAtom);
  const refreshNewChatKey = () => {
    setMessengerPaneRefreshKey(nanoid());
  };
  const pathname = usePathname();

  return (
    <Link
      href="/chat"
      onClick={refreshNewChatKey}
      className={cn(
        'flex items-center btn btn-primary',
        pathname === '/chat' ? '' : 'btn-outline',
      )}
    >
      <FontAwesomeIcon icon={faPlus} className="w-4 h-4 mr-2" />
      <span>New Chat</span>
    </Link>
  );
};
