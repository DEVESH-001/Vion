export default async function Layout({ children }) {
  return (
    <main className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* navbar */}
      <div className="fixed inset-0 -z-10 h-full bg-background dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] bg-[radial-gradient(#dadde2_1px,transparent_1px)] bg-size-[16px_16px]"/>
      <div className="flex-1 w-full mt-20">{children}</div>
    </main>
  );
}
