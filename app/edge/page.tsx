import { ENV } from 'varlock/env';

export const dynamic = "force-dynamic";
export const runtime = "edge";

export default async function ServerOnlyPage({
  searchParams,
}: {
  searchParams: Promise<{ leak?: string }>;
}) {
  const { leak } = await searchParams;
  const shouldLeak = leak !== undefined;

  console.log("ENV.x", {
    ENV_SPECIFIC_ITEM: ENV.ENV_SPECIFIC_ITEM,
    VAR_FROM_UI: ENV.VAR_FROM_UI,
    SECRET_ITEM: ENV.SECRET_ITEM,
  });
  console.log("process.env.x", {
    ENV_SPECIFIC_ITEM: process.env.ENV_SPECIFIC_ITEM,
    VAR_FROM_UI: process.env.VAR_FROM_UI,
    SECRET_ITEM: process.env.SECRET_ITEM,
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <h1 className="text-2xl font-bold mb-4">Edge Page</h1>

          {shouldLeak ? (
              <p>SECRET_ITEM = <code>{ENV.SECRET_ITEM}</code></p>
          ) : ''}

          <ul>
            <li>ENV_SPECIFIC_ITEM = {ENV.ENV_SPECIFIC_ITEM}</li>
            <li>VAR_FROM_UI = {ENV.VAR_FROM_UI}</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
