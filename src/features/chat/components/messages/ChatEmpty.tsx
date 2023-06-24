import { SystemPromptEditor } from '@/features/chat/components/messages/SystemPromptEditor';
import { SystemPrompt } from '@/features/chat/components/messages/SystemPrompt';
import { OpenAILogoMark } from '@/components/brand/OpenAILogoMark';

type ChatEmptyProps = {
  systemPrompt?: string;
  onSystemPromptChange: (input: string) => void;
};
export const ChatEmpty = ({
  systemPrompt,
  onSystemPromptChange,
}: ChatEmptyProps) => {
  return (
    <div className="h-full flex items-center justify-center flex-col text-center">
      <figure className="w-16 h-16 text-base-content/25">
        <OpenAILogoMark />
      </figure>
      <h1 className="text-base-content/25 text-3xl font-bold mt-4">
        {process.env.NEXT_PUBLIC_ORGANIZATION_NAME || 'Custom'} ChatBot Powered
        by OpenAI
      </h1>
      <p className="text-base-content/30 mt-1 text-sm">
        The default model is set to GPT-4 - enjoy the experience!
      </p>
      <SystemPromptEditor onSubmit={onSystemPromptChange} />
      {systemPrompt && <SystemPrompt className="mt-4" value={systemPrompt} />}
    </div>
  );
};
