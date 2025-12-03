import { Activity, type ReactNode } from "react";

interface IntroSlideProps {
  title: string;
  description: string;
  showGradient?: boolean;
  children?: ReactNode;
}

export function IntroSlide({
  title,
  description,
  showGradient = false,
  children,
}: IntroSlideProps) {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center space-y-6 px-4 w-full">
      <Activity mode={showGradient ? "visible" : "hidden"}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent -z-10 rounded-3xl" />
      </Activity>
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-justify">
          {description}
        </p>
      </div>
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}
