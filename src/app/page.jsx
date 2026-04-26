import { Button } from "@/components/ui/button";


export default function Home() {
  return (
   <div className="flex items-center justify-center h-screen">
    <div className="fixed inset-0 -z-10 h-full bg-background dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] bg-[radial-gradient(#dadde2_1px,transparent_1px)] bg-size-[16px_16px]"/>
    <Button>Home</Button>
   </div>
  );
}
