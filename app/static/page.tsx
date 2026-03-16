import { ENV } from 'varlock/env';

export default async function StaticPage() {
  
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
          <h1 className="text-2xl font-bold mb-4">Static Page</h1>

          <table className="border border-gray-300">
            <thead>
              <tr>
                <td>key</td><td>ENV.*</td><td>process.env.*</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ENV_SPECIFIC_ITEM</td><td>{ENV.ENV_SPECIFIC_ITEM}</td><td>{process.env.ENV_SPECIFIC_ITEM}</td>
              </tr>
              <tr>
                <td>VAR_FROM_UI</td><td>{ENV.VAR_FROM_UI}</td><td>{process.env.VAR_FROM_UI}</td>
              </tr>
              <tr>
                <td>NEXT_PUBLIC_VAR</td><td>{ENV.NEXT_PUBLIC_VAR}</td><td>{process.env.NEXT_PUBLIC_VAR}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
