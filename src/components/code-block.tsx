"use client";

import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { useTheme } from "next-themes";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({
  code,
  language = "typescript",
  className = "",
}: CodeBlockProps) {
  const { theme, systemTheme } = useTheme();
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    const shikiTheme = currentTheme === "dark" ? "github-dark" : "github-light";

    codeToHtml(code, {
      lang: language,
      theme: shikiTheme,
    })
      .then((html) => {
        setHighlightedCode(html);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error highlighting code:", error);
        setHighlightedCode(`<pre><code>${code}</code></pre>`);
        setIsLoading(false);
      });
  }, [code, language, theme, systemTheme]);

  if (isLoading) {
    return (
      <div className={`bg-muted rounded-lg p-4 overflow-x-auto ${className}`}>
        <pre className="text-sm">
          <code>{code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div
      className={`rounded-lg overflow-hidden ${className}`}
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
}

