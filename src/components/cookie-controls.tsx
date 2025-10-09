"use client"
import React from 'react'

export function CookieSettingsButtons() {
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => {
          window.dispatchEvent(new CustomEvent("sdw:open-cookie-settings"))
        }}
        className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
        aria-label="Re-open cookie settings"
      >
        Re-open cookie settings
      </button>
      <button
        type="button"
        onClick={() => {
          try {
            localStorage.removeItem("sdw_cookie_consent")
            window.location.reload()
          } catch {}
        }}
        className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
      >
        Reset preference
      </button>
    </div>
  )
}

export function OpenCookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent("sdw:open-cookie-settings"))}
      className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
    >
      Open cookie settings
    </button>
  )
}
