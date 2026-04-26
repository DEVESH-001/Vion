import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto w-full">
      <section className="pt-[16vh] space-y-6 2xl:pt-58">
        <SignIn />
      </section>
    </div>
  );
}
