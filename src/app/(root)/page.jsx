import ProjectForm from "@/modules/home/components/project-form";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center w-full px-4 py-8">
      <div className="max-w-5xl w-full">
        <section className="space-y-8 flex flex-col items-center">
          <div className="flex flex-col items-center">
            {/* <Image src="/hero.png" alt="Vion" width={500} height={500} className="hidden md:block invert dark:invert-0" /> todo:add logo  */}
            <h1 className="text-4xl font-bold">Vion</h1>
            <p className="text-muted-foreground">
              Your AI-powered website builder
            </p>
          </div>
          <p className="text-muted-foreground text-2xl md:text-5xl text-center">
            Build beautiful websites in minutes with Vion
          </p>
          <div className="max-w-3xl w-full">
            {/* project form */}
            <ProjectForm />
          </div>
        </section>
      </div>
    </div>
  );
}
