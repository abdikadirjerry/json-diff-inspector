export function computeJsonDiff(leftObj, rightObj, prefix = "") {
  const diffs = [];
  const allKeys = new Set([
    ...Object.keys(leftObj || {}),
    ...Object.keys(rightObj || {}),
  ]);

  for (const key of allKeys) {
    const path = prefix ? `${prefix}.${key}` : key;
    const inLeft = Object.prototype.hasOwnProperty.call(leftObj || {}, key);
    const inRight = Object.prototype.hasOwnProperty.call(rightObj || {}, key);

    if (!inLeft && inRight) {
      diffs.push({
        path,
        type: "ADDED",
        oldVal: undefined,
        newVal: rightObj[key],
      });
    } else if (inLeft && !inRight) {
      diffs.push({
        path,
        type: "REMOVED",
        oldVal: leftObj[key],
        newVal: undefined,
      });
    } else {
      const valA = leftObj[key];
      const valB = rightObj[key];

      const bothObjects =
        valA !== null &&
        valB !== null &&
        typeof valA === "object" &&
        typeof valB === "object" &&
        !Array.isArray(valA) &&
        !Array.isArray(valB);

      if (bothObjects) {
        diffs.push(...computeJsonDiff(valA, valB, path));
      } else if (JSON.stringify(valA) !== JSON.stringify(valB)) {
        diffs.push({
          path,
          type: "MODIFIED",
          oldVal: valA,
          newVal: valB,
        });
      } else {
        diffs.push({
          path,
          type: "UNCHANGED",
          oldVal: valA,
          newVal: valB,
        });
      }
    }
  }

  return diffs;
}

export function formatJsonString(raw) {
  const parsed = JSON.parse(raw);
  return JSON.stringify(parsed, null, 2);
}
