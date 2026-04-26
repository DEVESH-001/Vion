import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto w-full">
      <section className="pt-[16vh] space-y-6 2xl:pt-58">
        <SignUp />
      </section>
    </div>
  );
}


