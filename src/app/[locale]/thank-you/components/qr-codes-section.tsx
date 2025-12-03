"use client";

import { useEffect, useState } from "react";
import { QRCodeCard } from "@/components/qr-code-card";

interface QRCodesSectionProps {
  repositoryUrl: string;
  linkedinUrl: string;
  repositoryTitle: string;
  repositoryDescription: string;
  linkedinTitle: string;
  linkedinDescription: string;
}

export function QRCodesSection({
  repositoryUrl,
  linkedinUrl,
  repositoryTitle,
  repositoryDescription,
  linkedinTitle,
  linkedinDescription,
}: QRCodesSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setIsVisible(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-in fade-in duration-500">
      <QRCodeCard
        url={repositoryUrl}
        title={repositoryTitle}
        description={repositoryDescription}
      />
      <QRCodeCard
        url={linkedinUrl}
        title={linkedinTitle}
        description={linkedinDescription}
      />
    </div>
  );
}
