export const dynamic = "force-dynamic";

export default function ServerOnlyPage() {
  console.log("Env vars", {
    ENV_SPECIFIC_ITEM: process.env.ENV_SPECIFIC_ITEM,
    VAR_FROM_UI: process.env.VAR_FROM_UI,
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <h1 className="text-2xl font-bold mb-4">Server Only Page</h1>
          <ul>
            <li>ENV_SPECIFIC_ITEM = {process.env.ENV_SPECIFIC_ITEM}</li>
            <li>VAR_FROM_UI = {process.env.VAR_FROM_UI}</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
