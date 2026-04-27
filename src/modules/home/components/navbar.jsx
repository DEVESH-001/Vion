"use client";

import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignUpButton, UserButton, Show } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  // const isScrolled = useScroll();

  return (
    <nav
      className={cn(
        "p-4 bg-transparent fixed top-0 left-0 right-0 z-50 transition-all , duration-200 border-b border-transparent",
        // isScrolled && "bg-background border-border"
      )}
    >
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={"/logo.svg"} alt="Vibe" width={32} height={24} />
        </Link>
        <Show when="signed-out">
          <div className="flex gap-2">
            <SignUpButton>
              <Button size={"sm"}>Sign Up</Button>
            </SignUpButton>
            <SignInButton>
              <Button variant={"outline"} size={"sm"}>
                Sign In
              </Button>
            </SignInButton>
          </div>
        </Show>

        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </nav>
  );
};
