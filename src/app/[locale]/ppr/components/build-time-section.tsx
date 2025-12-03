"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export function BuildTimeSection() {
  const t = useTranslations("pages.ppr.diagram");
  const [currentStep, setCurrentStep] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startAnimation = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= 6) {
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
          if (prev >= 6) {
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
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 flex flex-col justify-center">
        <button
          type="button"
          onClick={resetAnimation}
          className="px-4 py-2 text-sm bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium shadow-md cursor-pointer mb-4"
        >
          {t("restart")}
        </button>
        <div className="p-6 bg-yellow-50 dark:bg-yellow-950/30 border-2 border-dashed border-yellow-500 rounded-xl mb-6">
          <h4 className="text-2xl font-bold text-center text-yellow-700 dark:text-yellow-400 mb-6">
            {t("buildTime")}
          </h4>

          {/* Build Time Steps */}
          <div className="space-y-4 relative">
            {/* Step 1: Generate static shell */}
            <div
              className={`relative transition-all duration-500 ${
                currentStep >= 0 ? "opacity-100" : "opacity-30"
              }`}
            >
              <div className="border-2 border-solid border-indigo-500 rounded-xl p-4 bg-indigo-50/50 dark:bg-indigo-950/30 shadow-md min-h-[70px] flex flex-col justify-center">
                <div className="font-semibold text-lg font-mono text-indigo-900 dark:text-indigo-100">
                  React.renderToStaticMarkup()
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {t("generateStaticShell")}
                </div>
              </div>
              {currentStep >= 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
              )}
            </div>

            {/* Step 2: Store static shell */}
            <div
              className={`relative transition-all duration-500 ${
                currentStep >= 1 ? "opacity-100" : "opacity-30"
              }`}
            >
              {currentStep >= 0 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gray-400"></div>
              )}
              <div className="border-2 border-dashed border-green-500 rounded-xl p-4 bg-green-50/50 dark:bg-green-950/30 shadow-md min-h-[70px] flex items-center justify-between">
                <span className="font-semibold text-lg text-green-900 dark:text-green-100">
                  {t("storeStaticShell")}
                </span>
                {currentStep >= 1 && (
                  <span className="text-green-600 text-2xl animate-pulse">
                    ✓
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Runtime Section */}
        <div className="p-6 bg-gray-50 dark:bg-gray-950/30 border-2 border-dashed border-gray-500 rounded-xl">
          <h4 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-400 mb-6">
            {t("runtime")}
          </h4>

          {/* Client-Server Communication */}
          <div className="flex justify-center items-center gap-6 mb-6 relative">
            <div
              className={`w-20 h-20 bg-blue-500 rounded-xl flex items-center justify-center text-white text-4xl shadow-lg transition-all duration-500 ${
                currentStep >= 2
                  ? "opacity-100 scale-100"
                  : "opacity-30 scale-90"
              }`}
            >
              🌐
            </div>
            <div className="flex flex-col gap-4 relative">
              {/* Request Arrow */}
              <div
                className={`w-20 h-1 bg-blue-500 transition-all duration-500 ${
                  currentStep >= 2 ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-0 h-0 border-l-4 border-l-blue-500 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
              </div>
              <div className="text-sm text-center text-muted-foreground font-medium">
                Request
              </div>
              {/* Response Arrow */}
              <div
                className={`w-20 h-1 bg-emerald-500 transition-all duration-500 ${
                  currentStep >= 4 ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-0 h-0 border-r-4 border-r-emerald-500 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute left-0 top-1/2 transform -translate-y-1/2"></div>
              </div>
              <div className="text-sm text-center text-muted-foreground font-medium">
                Response
              </div>
            </div>
            <div
              className={`w-20 h-20 bg-gray-600 rounded-xl flex items-center justify-center text-white text-4xl shadow-lg transition-all duration-500 ${
                currentStep >= 3
                  ? "opacity-100 scale-100"
                  : "opacity-30 scale-90"
              }`}
            >
              🖥️
            </div>
          </div>

          {/* Server Steps */}
          <div className="space-y-4 relative">
            {/* Step 3: Server sends static shell */}
            <div
              className={`relative transition-all duration-500 ${
                currentStep >= 3 ? "opacity-100" : "opacity-30"
              }`}
            >
              <div className="border-2 border-dashed border-gray-500 rounded-xl p-4 bg-gray-50/50 dark:bg-gray-950/30 shadow-md min-h-[70px] flex items-center justify-between">
                <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  {t("serverSendsStaticShell")}
                </span>
                {currentStep >= 3 && (
                  <span className="text-gray-600 dark:text-gray-400 text-2xl animate-pulse">
                    ✓
                  </span>
                )}
              </div>
              {currentStep >= 5 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
              )}
            </div>

            {/* Step 4: Server fetches dynamic data */}
            <div
              className={`relative transition-all duration-500 ${
                currentStep >= 5 ? "opacity-100" : "opacity-30"
              }`}
            >
              {currentStep >= 3 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gray-400"></div>
              )}
              <div className="border-2 border-solid border-gray-500 rounded-xl p-4 bg-gray-50/50 dark:bg-gray-950/30 shadow-md min-h-[70px] flex items-center">
                <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  {t("serverFetchesDynamicData")}
                </span>
              </div>
              {currentStep >= 6 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
              )}
            </div>

            {/* Step 5: Server streams dynamic content */}
            <div
              className={`relative transition-all duration-500 ${
                currentStep >= 6 ? "opacity-100" : "opacity-30"
              }`}
            >
              {currentStep >= 5 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gray-400"></div>
              )}
              <div className="border-2 border-solid border-gray-500 rounded-xl p-4 bg-gray-50/50 dark:bg-gray-950/30 shadow-md min-h-[70px] flex items-center">
                <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  {t("serverStreamsDynamicContent")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
