import type { ReactNode } from "react";

interface SlideSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  presentationMode?: boolean;
}

export function SlideSection({
  id,
  children,
  className = "",
  presentationMode = true,
}: SlideSectionProps) {
  if (presentationMode) {
    return (
      <section
        id={id}
        className={`h-screen flex flex-col justify-center items-center overflow-hidden py-4 px-4 ${className}`}
        style={
          {
            viewTransitionName: `slide-${id}`,
          } as React.CSSProperties
        }
      >
        <div className="w-full max-w-7xl flex-1 flex flex-col justify-center items-center overflow-y-auto">
          {children}
        </div>
      </section>
    );
  }

  // Normal mode: render as regular section without h-screen
  return (
    <section
      id={id}
      className={`flex flex-col justify-center items-center py-12 px-4 ${className}`}
    >
      <div className="w-full max-w-7xl flex flex-col justify-center items-center">
        {children}
      </div>
    </section>
  );
}
