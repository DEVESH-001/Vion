import { Button } from "@/components/ui/button";
import { onBoardUser } from "@/modules/auth/actions";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    const result = await onBoardUser();
    if (result.success) {
      console.log(result.message);
    } else {
      console.error(result.message);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="fixed inset-0 -z-10 h-full bg-background dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] bg-[radial-gradient(#dadde2_1px,transparent_1px)] bg-size-[16px_16px]" />
      <Button>{userId ? "Dashboard" : "Home"}</Button>
    </div>
  );
}
