import clsx from 'clsx';

export type SystemPromptProps = {
  className?: string;
  value: string;
  showBadge?: boolean;
};

export const SystemPrompt = ({
  value,
  className,
  showBadge,
}: SystemPromptProps) => {
  return (
    <div
      className={clsx(
        'flex items-center flex-col justify-center py-2',
        className,
      )}
    >
      <div className="flex items-start line-clamp-8 whitespace-pre-line rounded-lg px-4 py-2 border-secondary/50 border bg-secondary/10  text-sm">
        {showBadge && (
          <span className="badge badge-secondary flex-shrink-0 mr-2">
            Instruction
          </span>
        )}
        <span>{value}</span>
      </div>
    </div>
  );
};
