"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState, useRef } from "react";

export function DiagramCard() {
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
          onClick={resetAnimation}
          className="px-6 py-3 text-base bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium shadow-md cursor-pointer"
        >
          {t("restart")}
        </button>
      </div>

      <div>

        {/* Build Time Section */}
            <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-950/30 border-2 border-dashed border-yellow-500 rounded-xl">
              <h4 className="text-xl font-bold text-center text-yellow-700 dark:text-yellow-400 mb-4">
                {t("buildTime")}
              </h4>
              
              {/* Build Time Steps */}
              <div className="space-y-6">
                {/* Step 1: Generate static shell */}
                <div className={`relative transition-all duration-500 ${
                  currentStep >= 0 ? "opacity-100" : "opacity-30"
                }`}>
                  <div className="border-2 border-solid border-indigo-500 rounded-xl p-6 bg-indigo-50/50 dark:bg-indigo-950/30 shadow-md">
                    <div className="font-semibold text-lg font-mono">React.renderToStaticMarkup()</div>
                    <div className="text-sm text-muted-foreground mt-2">{t("generateStaticShell")}</div>
                  </div>
                  {currentStep >= 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
                  )}
                </div>

                {/* Step 2: Store static shell */}
                <div className={`relative transition-all duration-500 ${
                  currentStep >= 1 ? "opacity-100" : "opacity-30"
                }`}>
                  {currentStep >= 0 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gray-400"></div>
                  )}
                  <div className="border-2 border-dashed border-green-500 rounded-xl p-6 bg-green-50/50 dark:bg-green-950/30 shadow-md">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-lg">{t("storeStaticShell")}</span>
                      {currentStep >= 1 && (
                        <span className="text-green-600 text-2xl animate-pulse">✓</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Runtime Section */}
            <div className="p-4 bg-gray-50 dark:bg-gray-950/30 border-2 border-dashed border-gray-500 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-center text-gray-700 dark:text-gray-400 mb-4">
                {t("runtime")}
              </h4>

              {/* Client-Server Communication */}
              <div className="flex justify-center items-center gap-6 mb-8 relative">
                <div className={`w-20 h-20 bg-blue-500 rounded-xl flex items-center justify-center text-white text-4xl shadow-lg transition-all duration-500 ${
                  currentStep >= 2 ? "opacity-100 scale-100" : "opacity-30 scale-90"
                }`}>
                  🌐
                </div>
                <div className="flex flex-col gap-3 relative">
                  {/* Request Arrow */}
                  <div className={`w-16 h-1 bg-blue-500 transition-all duration-500 ${
                    currentStep >= 2 ? "opacity-100" : "opacity-0"
                  }`}>
                    <div className="w-0 h-0 border-l-4 border-l-blue-500 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                  <div className="text-xs text-center text-muted-foreground font-medium">Request</div>
                  {/* Response Arrow */}
                  <div className={`w-16 h-1 bg-emerald-500 transition-all duration-500 ${
                    currentStep >= 4 ? "opacity-100" : "opacity-0"
                  }`}>
                    <div className="w-0 h-0 border-r-4 border-r-emerald-500 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute left-0 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                  <div className="text-xs text-center text-muted-foreground font-medium">Response</div>
                </div>
                <div className={`w-20 h-20 bg-gray-600 rounded-xl flex items-center justify-center text-white text-4xl shadow-lg transition-all duration-500 ${
                  currentStep >= 3 ? "opacity-100 scale-100" : "opacity-30 scale-90"
                }`}>
                  🖥️
                </div>
              </div>

              {/* Server Section */}
              <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-950/30 border-2 border-dashed border-gray-500 rounded-xl">
                <h4 className="text-xl font-bold text-center text-gray-700 dark:text-gray-400 mb-4">
                  {t("server")}
                </h4>
                <div className="space-y-6">
                  {/* Step 4: Server sends static shell */}
                  <div className={`relative transition-all duration-500 ${
                    currentStep >= 3 ? "opacity-100" : "opacity-30"
                  }`}>
                    <div className="border-2 border-dashed border-gray-500 rounded-xl p-6 bg-gray-50/50 dark:bg-gray-950/30 shadow-md">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg">{t("serverSendsStaticShell")}</span>
                        {currentStep >= 3 && (
                          <span className="text-gray-600 dark:text-gray-400 text-2xl animate-pulse">✓</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Step 6: Server fetches dynamic data */}
                  <div className={`relative transition-all duration-500 ${
                    currentStep >= 5 ? "opacity-100" : "opacity-30"
                  }`}>
                    <div className="border-2 border-solid border-gray-500 rounded-xl p-6 bg-gray-50/50 dark:bg-gray-950/30 shadow-md">
                      <span className="font-semibold text-lg">{t("serverFetchesDynamicData")}</span>
                    </div>
                  </div>

                  {/* Step 7: Server streams dynamic content */}
                  <div className={`relative transition-all duration-500 ${
                    currentStep >= 6 ? "opacity-100" : "opacity-30"
                  }`}>
                    <div className="border-2 border-solid border-gray-500 rounded-xl p-6 bg-gray-50/50 dark:bg-gray-950/30 shadow-md">
                      <span className="font-semibold text-lg">{t("serverStreamsDynamicContent")}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Section */}
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 border-2 border-dashed border-blue-500 rounded-xl">
                <h4 className="text-xl font-bold text-center text-blue-700 dark:text-blue-400 mb-4">
                  {t("client")}
                </h4>
                <div className="space-y-6 relative">
                  {/* Step 3: Client sends request */}
                  <div className={`relative transition-all duration-500 ${
                    currentStep >= 2 ? "opacity-100" : "opacity-30"
                  }`}>
                    <div className="border-2 border-dashed border-blue-500 rounded-xl p-6 bg-blue-50/50 dark:bg-blue-950/30 shadow-md">
                      <span className="font-semibold text-lg">{t("clientSendsRequest")}</span>
                    </div>
                    {currentStep >= 3 && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
                    )}
                  </div>

                  {/* Step 5: Client receives static shell */}
                  <div className={`relative transition-all duration-500 ${
                    currentStep >= 4 ? "opacity-100" : "opacity-30"
                  }`}>
                    {currentStep >= 3 && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gray-400"></div>
                    )}
                    <div className="border-2 border-dashed border-blue-500 rounded-xl p-6 bg-blue-50/50 dark:bg-blue-950/30 shadow-md">
                      <span className="font-semibold text-lg">{t("clientReceivesStaticShell")}</span>
                    </div>
                    {currentStep >= 5 && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
                    )}
                  </div>

                  {/* Step 8: Client receives dynamic content */}
                  <div className={`relative transition-all duration-500 ${
                    currentStep >= 7 ? "opacity-100" : "opacity-30"
                  }`}>
                    {currentStep >= 4 && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gray-400"></div>
                    )}
                    <div className="border-2 border-dashed border-blue-500 rounded-xl p-6 bg-blue-50/50 dark:bg-blue-950/30 shadow-md">
                      <span className="font-semibold text-lg">{t("clientReceivesDynamicContent")}</span>
                    </div>
                    {currentStep >= 8 && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
                    )}
                  </div>

                  {/* Step 9: React hydrates */}
                  <div className={`relative transition-all duration-500 ${
                    currentStep >= 8 ? "opacity-100" : "opacity-30"
                  }`}>
                    {currentStep >= 7 && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gray-400"></div>
                    )}
                    <div className="border-2 border-solid border-blue-500 rounded-xl p-6 bg-blue-50/50 dark:bg-blue-950/30 shadow-md">
                      <div className="font-semibold text-lg font-mono">React.hydrate()</div>
                    </div>
                    {currentStep >= 9 && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
                    )}
                  </div>

                  {/* Step 10: Page interactive */}
                  <div className={`relative transition-all duration-500 ${
                    currentStep >= 9 ? "opacity-100" : "opacity-30"
                  }`}>
                    {currentStep >= 8 && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-1 h-8 bg-gray-400"></div>
                    )}
                    <div className="border-2 border-solid border-blue-500 rounded-xl p-6 bg-blue-50/50 dark:bg-blue-950/30 shadow-md">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">✨</span>
                        <span className="font-semibold text-lg">{t("pageInteractive")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

