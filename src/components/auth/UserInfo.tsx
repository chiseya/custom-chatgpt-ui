import { useSession } from 'next-auth/react';

export const UserInfo = () => {
  const { data } = useSession();
  return (
    <div className="flex items-center">
      {data?.user?.image && (
        <div className="avatar">
          <div className="w-4 rounded">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={data.user.image} alt="" />
          </div>
        </div>
      )}
      <p className="ml-2">{data?.user?.name ?? 'anonymous'}</p>
    </div>
  );
};
