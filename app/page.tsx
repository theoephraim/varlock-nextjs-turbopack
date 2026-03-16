export default function Home() {
  // logging a secret but not in the code - to check if it is redacted
  console.log('secret logged on homepage:', ['shhh', 'im', 'secret'].join('-'));

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <p>choose a page in the nav</p>
        </div>
      </main>
    </div>
  );
}
