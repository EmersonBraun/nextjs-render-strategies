import { ReactNode } from "react";

interface SlideSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SlideSection({ id, children, className = "" }: SlideSectionProps) {
  return (
    <section
      id={id}
      className={`h-screen flex flex-col justify-center items-center overflow-hidden py-4 px-4 ${className}`}
    >
      <div className="w-full max-w-7xl flex-1 flex flex-col justify-center items-center overflow-y-auto">
        {children}
      </div>
    </section>
  );
}

