import { ReactNode } from "react";

interface IntroSlideProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export function IntroSlide({ title, description, children }: IntroSlideProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-6 px-4">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}

