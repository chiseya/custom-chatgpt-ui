import { ReactNode } from 'react';
import { signOut, useSession } from 'next-auth/react';

export type ChatLayoutProps = {
  children?: ReactNode;
};

export const ChatLayout = ({ children }: ChatLayoutProps) => {
  const { data } = useSession();
  return (
    <div className="h-full pb-8">
      <div className="bg-slate-100 border-t border-t-slate-200 border-opacity-75 h-8 absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 text-sm">
        <div className="flex items-center">
          {data?.user?.image && (
            <img
              className="w-4 h-4 rounded-full mr-2"
              src={data.user.image}
              alt=""
            />
          )}
          <p className="text-slate-800">{data?.user?.name ?? 'anonymous'}</p>
        </div>
        <button
          type="button"
          className="border text-slate-800 border-slate-400 rounded-lg px-2 py-0.5 ml-2 text-xs transition hover:bg-slate-50"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
      <div className="h-full flex">{children}</div>
    </div>
  );
};
