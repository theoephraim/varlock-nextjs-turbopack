"use client";

import { useState } from "react";
import { logSecret } from "./actions";

export function LeakButtons() {
  const [result, setResult] = useState<string | null>(null);

  async function handleAction(leak: boolean) {
    const res = await logSecret(leak);
    if (res.leaked) {
      setResult(`Leaked: ${res.leaked}`);
    } else {
      setResult(res.message ?? "Done");
    }
  }

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => handleAction(false)}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Log Secret (no leak)
        </button>
        <button
          onClick={() => handleAction(true)}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Log Secret (leak to client)
        </button>
      </div>
      {result && (
        <p className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded">
          Result: {result}
        </p>
      )}
    </div>
  );
}
