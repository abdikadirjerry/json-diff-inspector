import React, { useState, useMemo } from "react";
import { SAMPLE_LEFT_JSON, SAMPLE_RIGHT_JSON } from "./data/samplePayloads";
import { computeJsonDiff, formatJsonString } from "./utils/jsonDiff";
import { Header } from "./components/Header";
import { JsonEditors } from "./components/JsonEditors";
import { DiffResults } from "./components/DiffResults";

export function App() {
  const [leftText, setLeftText] = useState(SAMPLE_LEFT_JSON);
  const [rightText, setRightText] = useState(SAMPLE_RIGHT_JSON);

  const { diffs, leftError, rightError } = useMemo(() => {
    let parsedLeft = null;
    let parsedRight = null;
    let lErr = "";
    let rErr = "";

    try {
      parsedLeft = JSON.parse(leftText);
    } catch (err) {
      lErr = err.message;
    }

    try {
      parsedRight = JSON.parse(rightText);
    } catch (err) {
      rErr = err.message;
    }

    if (lErr || rErr) {
      return { diffs: [], leftError: lErr, rightError: rErr };
    }

    return {
      diffs: computeJsonDiff(parsedLeft, parsedRight),
      leftError: "",
      rightError: "",
    };
  }, [leftText, rightText]);

  const handleFormatLeft = () => {
    try {
      setLeftText(formatJsonString(leftText));
    } catch {
      // Ignore format if invalid JSON
    }
  };

  const handleFormatRight = () => {
    try {
      setRightText(formatJsonString(rightText));
    } catch {
      // Ignore format if invalid JSON
    }
  };

  const handleSwapInputs = () => {
    setLeftText(rightText);
    setRightText(leftText);
  };

  const handleLoadSample = () => {
    setLeftText(SAMPLE_LEFT_JSON);
    setRightText(SAMPLE_RIGHT_JSON);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-teal-500 selection:text-slate-950">
      <Header onLoadSample={handleLoadSample} onSwapInputs={handleSwapInputs} />

      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 space-y-6">
        <JsonEditors
          leftText={leftText}
          rightText={rightText}
          onLeftChange={setLeftText}
          onRightChange={setRightText}
          onFormatLeft={handleFormatLeft}
          onFormatRight={handleFormatRight}
          leftError={leftError}
          rightError={rightError}
        />

        <DiffResults diffs={diffs} />
      </main>
    </div>
  );
}

export default App;
