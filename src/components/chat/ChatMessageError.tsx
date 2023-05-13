import { ReactNode } from 'react';

export type ChatMessageErrorProps = {
  children?: ReactNode;
};

export const ChatMessageError = ({ children }: ChatMessageErrorProps) => {
  return <p className="text-error text-sm pl-14 pr-6 py-3">{children}</p>;
};
