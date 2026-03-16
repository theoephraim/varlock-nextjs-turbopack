export const dynamic = "force-dynamic";

import { ENV } from "varlock/env";
import { LeakButtons } from "./leak-buttons";

export default async function LeakPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <h1 className="text-2xl font-bold mb-4">Server action test</h1>

          <section>
            <h2 className="text-xl font-semibold mb-2">Server Action Test</h2>
            <LeakButtons />
          </section>
        </div>
      </main>
    </div>
  );
}
