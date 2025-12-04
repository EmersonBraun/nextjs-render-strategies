"use client";

import { SlideNavigationClient } from "@/components/slide-navigation-client";
import { SlideSection } from "@/components/slide-section";
import { usePresentationStore } from "@/store/use-presentation-store";
import { IntroSlide } from "@/components/intro-slide";

interface HomeContentProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function HomeContent({ title, subtitle, children }: HomeContentProps) {
  const isPresentationMode = usePresentationStore(
    (state) => state.isPresentationMode,
  );

  // If in presentation mode, show only intro slide
  if (isPresentationMode) {
    const sectionIds = ["intro"];

    return (
      <>
        <SlideNavigationClient sectionIds={sectionIds} />
        <div className="max-w-7xl mx-auto">
          <SlideSection id="intro">
            <IntroSlide
              title={title}
              description={subtitle}
              showGradient
            />
          </SlideSection>
        </div>
      </>
    );
  }

  // Normal mode: show full content
  return <>{children}</>;
}

