"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export function DiagramCard() {
  const t = useTranslations("pages.streaming.diagram");
  const [currentStep, setCurrentStep] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startAnimation = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= 9) {
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
  }, []);

  const resetAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCurrentStep(0);

    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= 9) {
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
    <div>
      <div className="flex justify-center mb-6">
        <button
          type="button"
          onClick={resetAnimation}
          className="px-6 py-3 text-base bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium shadow-md cursor-pointer"
        >
          {t("restart")}
        </button>
      </div>

      <div>
        {/* Server Section */}
        <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-950/30 border-2 border-dashed border-gray-500 rounded-xl">
          <h4 className="text-xl font-bold text-center text-gray-700 dark:text-gray-400 mb-4">
            {t("server")}
          </h4>

          {/* Client-Server Communication */}
          <div className="flex justify-center items-center gap-6 mb-6 relative">
            <div
              className={`w-20 h-20 bg-blue-500 rounded-xl flex items-center justify-center text-white text-4xl shadow-lg transition-all duration-500 ${
                currentStep >= 0
                  ? "opacity-100 scale-100"
                  : "opacity-30 scale-90"
              }`}
            >
              🌐
            </div>
            <div className="flex flex-col gap-3 relative">
              {/* Request Arrow */}
              <div
                className={`w-16 h-1 bg-blue-500 transition-all duration-500 ${
                  currentStep >= 0 ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-0 h-0 border-l-4 border-l-blue-500 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
              </div>
              <div className="text-xs text-center text-muted-foreground font-medium">
                Request
              </div>
              {/* Response Arrow - Streaming */}
              <div
                className={`w-16 h-1 bg-emerald-500 transition-all duration-500 ${
                  currentStep >= 3 ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-0 h-0 border-r-4 border-r-emerald-500 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute left-0 top-1/2 transform -translate-y-1/2"></div>
              </div>
              <div className="text-xs text-center text-muted-foreground font-medium">
                Streaming
              </div>
            </div>
            <div
              className={`w-20 h-20 bg-gray-600 rounded-xl flex items-center justify-center text-white text-4xl shadow-lg transition-all duration-500 ${
                currentStep >= 0
                  ? "opacity-100 scale-100"
                  : "opacity-30 scale-90"
              }`}
            >
              🖥️
            </div>
          </div>

          {/* Server Steps */}
          <div className="space-y-6 relative">
            {/* Step 1: Server receives request */}
            <div
              className={`relative transition-all duration-500 ${
                currentStep >= 0 ? "opacity-100" : "opacity-30"
              }`}
            >
              <div className="border-2 border-dashed border-gray-500 rounded-xl p-6 bg-gray-50/50 dark:bg-gray-950/30 shadow-md">
                <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  {t("serverReceivesRequest")}
                </span>
              </div>
              {currentStep >= 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
              )}
            </div>

            {/* Step 2: Server starts rendering */}
            <div
              className={`relative transition-all duration-500 ${
                currentStep >= 1 ? "opacity-100" : "opacity-30"
              }`}
            >
              {currentStep >= 0 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gray-400"></div>
              )}
              <div className="border-2 border-solid border-gray-500 rounded-xl p-6 bg-gray-50/50 dark:bg-gray-950/30 shadow-md">
                <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  {t("serverStartsRendering")}
                </span>
              </div>
              {currentStep >= 2 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
              )}
            </div>

            {/* Step 3: Server renders fast content */}
            <div
              className={`relative transition-all duration-500 ${
                currentStep >= 2 ? "opacity-100" : "opacity-30"
              }`}
            >
              {currentStep >= 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gray-400"></div>
              )}
              <div className="border-2 border-solid border-gray-500 rounded-xl p-6 bg-gray-50/50 dark:bg-gray-950/30 shadow-md">
                <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  {t("serverRendersFastContent")}
                </span>
              </div>
              {currentStep >= 3 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
              )}
            </div>

            {/* Step 4: Server streams HTML chunk 1 */}
            <div
              className={`relative transition-all duration-500 ${
                currentStep >= 3 ? "opacity-100" : "opacity-30"
              }`}
            >
              {currentStep >= 2 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gray-400"></div>
              )}
              <div className="border-2 border-dashed border-gray-500 rounded-xl p-6 bg-gray-50/50 dark:bg-gray-950/30 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    {t("serverStreamsChunk1")}
                  </span>
                  {currentStep >= 3 && (
                    <span className="text-gray-600 dark:text-gray-400 text-2xl animate-pulse">
                      ✓
                    </span>
                  )}
                </div>
              </div>
              {currentStep >= 5 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
              )}
            </div>

            {/* Step 5: Server renders slow content (Suspense) */}
            <div
              className={`relative transition-all duration-500 ${
                currentStep >= 5 ? "opacity-100" : "opacity-30"
              }`}
            >
              {currentStep >= 4 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gray-400"></div>
              )}
              <div className="border-2 border-solid border-gray-500 rounded-xl p-6 bg-gray-50/50 dark:bg-gray-950/30 shadow-md">
                <div className="font-semibold text-lg font-mono text-gray-900 dark:text-gray-100">
                  &lt;Suspense&gt;
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {t("serverRendersSlowContent")}
                </div>
              </div>
              {currentStep >= 6 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
              )}
            </div>

            {/* Step 6: Server streams HTML chunk 2 */}
            <div
              className={`relative transition-all duration-500 ${
                currentStep >= 6 ? "opacity-100" : "opacity-30"
              }`}
            >
              {currentStep >= 5 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gray-400"></div>
              )}
              <div className="border-2 border-dashed border-gray-500 rounded-xl p-6 bg-gray-50/50 dark:bg-gray-950/30 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    {t("serverStreamsChunk2")}
                  </span>
                  {currentStep >= 6 && (
                    <span className="text-gray-600 dark:text-gray-400 text-2xl animate-pulse">
                      ✓
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Section */}
        <div className="p-4 bg-blue-50 dark:bg-blue-950/30 border-2 border-dashed border-blue-500 rounded-xl">
          <h4 className="text-xl font-bold text-center text-blue-700 dark:text-blue-400 mb-4">
            {t("client")}
          </h4>

          {/* Client Steps */}
          <div className="space-y-6 relative">
            {/* Step 7: Client receives and displays chunk 1 */}
            <div
              className={`relative transition-all duration-500 ${
                currentStep >= 4 ? "opacity-100" : "opacity-30"
              }`}
            >
              <div className="border-2 border-dashed border-blue-500 rounded-xl p-6 bg-blue-50/50 dark:bg-blue-950/30 shadow-md">
                <span className="font-semibold text-lg text-blue-900 dark:text-blue-100">
                  {t("clientReceivesChunk1")}
                </span>
              </div>
              {currentStep >= 7 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
              )}
            </div>

            {/* Step 8: Client receives and displays chunk 2 */}
            <div
              className={`relative transition-all duration-500 ${
                currentStep >= 7 ? "opacity-100" : "opacity-30"
              }`}
            >
              {currentStep >= 4 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gray-400"></div>
              )}
              <div className="border-2 border-dashed border-blue-500 rounded-xl p-6 bg-blue-50/50 dark:bg-blue-950/30 shadow-md">
                <span className="font-semibold text-lg text-blue-900 dark:text-blue-100">
                  {t("clientReceivesChunk2")}
                </span>
              </div>
              {currentStep >= 8 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
              )}
            </div>

            {/* Step 9: React hydrates */}
            <div
              className={`relative transition-all duration-500 ${
                currentStep >= 8 ? "opacity-100" : "opacity-30"
              }`}
            >
              {currentStep >= 7 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gray-400"></div>
              )}
              <div className="border-2 border-solid border-blue-500 rounded-xl p-6 bg-blue-50/50 dark:bg-blue-950/30 shadow-md">
                <div className="font-semibold text-lg font-mono text-blue-900 dark:text-blue-100">
                  React.hydrateRoot()
                </div>
              </div>
              {currentStep >= 9 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
              )}
            </div>

            {/* Step 10: Page interactive */}
            <div
              className={`relative transition-all duration-500 ${
                currentStep >= 9 ? "opacity-100" : "opacity-30"
              }`}
            >
              {currentStep >= 8 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gray-400"></div>
              )}
              <div className="border-2 border-solid border-blue-500 rounded-xl p-6 bg-blue-50/50 dark:bg-blue-950/30 shadow-md">
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
