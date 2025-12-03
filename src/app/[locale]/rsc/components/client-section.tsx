"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/lib/use-intersection-observer";

export function ClientSection() {
  const t = useTranslations("pages.rsc.diagram");
  const [currentStep, setCurrentStep] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver();

  useEffect(() => {
    if (!isIntersecting) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setCurrentStep(0);
      return;
    }

    const startAnimation = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= 2) {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            return prev;
          }
          return prev + 1;
        });
      }, 1500);
    };

    startAnimation();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isIntersecting]);

  const resetAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCurrentStep(0);

    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= 2) {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            return prev;
          }
          return prev + 1;
        });
      }, 1500);
    }, 100);
  };

  return (
    <div ref={ref} className="w-full h-full flex flex-col">
      <div className="flex-1 flex flex-col justify-center">
        <button
          type="button"
          onClick={resetAnimation}
          className="px-4 py-2 text-sm bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium shadow-md cursor-pointer mb-4"
        >
          {t("restart")}
        </button>
        <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-dashed border-blue-500 rounded-xl">
          <h4 className="text-2xl font-bold text-center text-blue-700 dark:text-blue-400 mb-6">
            {t("client")}
          </h4>

          {/* Client Steps */}
          <div className="space-y-4 relative">
            {/* Step 1: Client receives RSC payload */}
            <div
              className={`relative transition-all duration-500 ${
                currentStep >= 0 ? "opacity-100" : "opacity-30"
              }`}
            >
              <div className="border-2 border-dashed border-blue-500 rounded-xl p-4 bg-blue-50/50 dark:bg-blue-950/30 shadow-md min-h-[70px] flex items-center">
                <span className="font-semibold text-lg text-blue-900 dark:text-blue-100">
                  {t("clientReceivesRSCPayload")}
                </span>
              </div>
              {currentStep >= 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
              )}
            </div>

            {/* Step 2: Client hydrates components */}
            <div
              className={`relative transition-all duration-500 ${
                currentStep >= 1 ? "opacity-100" : "opacity-30"
              }`}
            >
              {currentStep >= 0 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gray-400"></div>
              )}
              <div className="border-2 border-solid border-blue-500 rounded-xl p-4 bg-blue-50/50 dark:bg-blue-950/30 shadow-md min-h-[70px] flex flex-col justify-center">
                <div className="font-semibold text-lg font-mono text-blue-900 dark:text-blue-100">
                  React.hydrateRoot()
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {t("clientHydratesComponents")}
                </div>
              </div>
              {currentStep >= 2 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
              )}
            </div>

            {/* Step 3: Page interactive */}
            <div
              className={`relative transition-all duration-500 ${
                currentStep >= 2 ? "opacity-100" : "opacity-30"
              }`}
            >
              {currentStep >= 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gray-400"></div>
              )}
              <div className="border-2 border-solid border-blue-500 rounded-xl p-4 bg-blue-50/50 dark:bg-blue-950/30 shadow-md min-h-[70px] flex items-center">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✨</span>
                  <span className="font-semibold text-lg text-blue-900 dark:text-blue-100">
                    {t("pageInteractive")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
