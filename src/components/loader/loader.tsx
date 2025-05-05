import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="fixed z-20 inset-0 flex items-center justify-center bg-[var(--foreground)]/20">
      <Loader2 className="w-10 h-10 *:text-[var(--foreground)] animate-spin" />
    </div>
  );
};

export { Loader };
