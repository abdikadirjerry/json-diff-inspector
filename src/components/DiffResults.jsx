import React, { useState } from "react";

const BADGE_STYLES = {
  ADDED: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  REMOVED: "bg-rose-500/10 text-rose-400 border-rose-500/30",
  MODIFIED: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  UNCHANGED: "bg-slate-800 text-slate-400 border-slate-700",
};

export const DiffResults = ({ diffs }) => {
  const [hideUnchanged, setHideUnchanged] = useState(true);

  const counts = {
    added: diffs.filter((d) => d.type === "ADDED").length,
    removed: diffs.filter((d) => d.type === "REMOVED").length,
    modified: diffs.filter((d) => d.type === "MODIFIED").length,
    unchanged: diffs.filter((d) => d.type === "UNCHANGED").length,
  };

  const visibleDiffs = hideUnchanged
    ? diffs.filter((d) => d.type !== "UNCHANGED")
    : diffs;

  return (
    <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-5 font-mono">
      {/* Header & Summary Badges */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-bold text-slate-200 uppercase mr-2">
            Diff Summary:
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            +{counts.added} Added
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
            -{counts.removed} Removed
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
            ~{counts.modified} Modified
          </span>
        </div>

        <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={hideUnchanged}
            onChange={(e) => setHideUnchanged(e.target.checked)}
            className="rounded border-slate-700 bg-slate-950 text-teal-500 focus:ring-0"
          />
          Hide unchanged keys ({counts.unchanged})
        </label>
      </div>

      {/* Diff Table */}
      {visibleDiffs.length === 0 ? (
        <div className="text-center py-10 text-xs text-slate-500">
          No differences detected between the two JSON payloads.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-[11px] uppercase text-slate-500">
                <th className="py-2.5 px-3">Change</th>
                <th className="py-2.5 px-3">JSON Path</th>
                <th className="py-2.5 px-3">Base Value (Left)</th>
                <th className="py-2.5 px-3">Target Value (Right)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70">
              {visibleDiffs.map((item) => (
                <tr key={item.path} className="hover:bg-slate-950/60">
                  <td className="py-3 px-3">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded border ${BADGE_STYLES[item.type]}`}
                    >
                      {item.type}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-bold text-teal-300">
                    {item.path}
                  </td>
                  <td className="py-3 px-3 text-rose-300/90 break-all">
                    {item.oldVal !== undefined
                      ? JSON.stringify(item.oldVal)
                      : "—"}
                  </td>
                  <td className="py-3 px-3 text-emerald-300/90 break-all">
                    {item.newVal !== undefined
                      ? JSON.stringify(item.newVal)
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};
