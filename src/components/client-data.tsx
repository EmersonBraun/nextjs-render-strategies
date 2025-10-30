"use client"

import { useEffect, useState } from "react"

export function ClientDataComponent() {
  const [userAgent, setUserAgent] = useState('')
  const [clientTimestamp, setClientTimestamp] = useState('')
  useEffect(() => {
    setUserAgent(typeof window !== 'undefined' ? window.navigator.userAgent.slice(0, 30) + '...' : 'Not available')
    setClientTimestamp(new Date().toLocaleTimeString())
  }, [])
  return (
    <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
        📊 Client Data Details:
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <div className="flex justify-between">
          <span className="text-blue-700 dark:text-blue-300">Client Timestamp:</span>
          <span className="text-blue-800 dark:text-blue-200">{clientTimestamp}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-blue-700 dark:text-blue-300">User Agent:</span>
          <span className="text-blue-800 dark:text-blue-200">{userAgent}</span>
        </div>
      </div>
      <div className="mt-3 p-2 bg-blue-100 dark:bg-blue-900 rounded text-xs text-blue-700 dark:text-blue-300">
        <strong>💡 Key Point:</strong> This data was fetched directly on the client, no server-side API calls needed!
      </div>
    </div>
  )
}

