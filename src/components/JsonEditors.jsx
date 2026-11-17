import React from "react";

export const JsonEditors = ({
  leftText,
  rightText,
  onLeftChange,
  onRightChange,
  onFormatLeft,
  onFormatRight,
  leftError,
  rightError,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 font-mono">
      {/* Left Editor */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-200 uppercase">
              Base Payload (Left)
            </span>
            {leftError ? (
              <span className="text-[10px] bg-rose-500/10 text-rose-400 border border-rose-500/30 px-2 py-0.5 rounded">
                Invalid JSON
              </span>
            ) : (
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">
                Valid
              </span>
            )}
          </div>
          <button
            onClick={onFormatLeft}
            className="text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
          >
            Format JSON
          </button>
        </div>

        <textarea
          rows={12}
          value={leftText}
          onChange={(e) => onLeftChange(e.target.value)}
          spellCheck={false}
          className="w-full bg-slate-950 border border-slate-800 focus:border-teal-500 rounded-xl p-3.5 text-xs text-slate-200 focus:outline-none resize-none leading-relaxed"
        />
        {leftError && <p className="text-[11px] text-rose-400">{leftError}</p>}
      </div>

      {/* Right Editor */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-200 uppercase">
              Target Payload (Right)
            </span>
            {rightError ? (
              <span className="text-[10px] bg-rose-500/10 text-rose-400 border border-rose-500/30 px-2 py-0.5 rounded">
                Invalid JSON
              </span>
            ) : (
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">
                Valid
              </span>
            )}
          </div>
          <button
            onClick={onFormatRight}
            className="text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
          >
            Format JSON
          </button>
        </div>

        <textarea
          rows={12}
          value={rightText}
          onChange={(e) => onRightChange(e.target.value)}
          spellCheck={false}
          className="w-full bg-slate-950 border border-slate-800 focus:border-teal-500 rounded-xl p-3.5 text-xs text-slate-200 focus:outline-none resize-none leading-relaxed"
        />
        {rightError && (
          <p className="text-[11px] text-rose-400">{rightError}</p>
        )}
      </div>
    </div>
  );
};
