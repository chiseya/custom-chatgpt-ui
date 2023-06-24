export type ChatMessage = {
  id: string;
  role: ChatMessageRole;
  content: string;
};

export enum ChatMessageRole {
  System = 'system',
  User = 'user',
  Assistant = 'assistant',
}
