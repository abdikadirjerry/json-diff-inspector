import React from "react";

export const Header = ({ onLoadSample, onSwapInputs }) => {
  return (
    <header className="border-b border-slate-800 bg-slate-950/90 px-6 md:px-10 py-4 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-30 backdrop-blur-md font-mono">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center font-bold text-xs">
          {"{ }"}
        </div>
        <div>
          <h1 className="text-xs font-bold uppercase tracking-wider text-slate-100">
            DiffLens // JSON Payload Comparator
          </h1>
          <p className="text-[10px] text-slate-400">
            REACT + JAVASCRIPT + TAILWIND CSS
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onSwapInputs}
          className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
        >
          ⇄ Swap Sides
        </button>
        <button
          onClick={onLoadSample}
          className="bg-teal-600 hover:bg-teal-500 text-slate-950 font-bold text-xs px-4 py-1.5 rounded-lg transition-colors cursor-pointer"
        >
          Reset Sample
        </button>
      </div>
    </header>
  );
};
