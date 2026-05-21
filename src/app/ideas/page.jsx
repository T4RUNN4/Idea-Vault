import IdeaCard from "@/components/IdeaCard";

export const metadata = {
  title: "Ideas - Idea Vault",
  description: "Browse startup ideas submitted by the community.",
};

export default async function Ideas() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/ideas`);
  const ideas = await res.json();

  return (
    <div className="min-h-screen bg-base-100 px-4 py-12 md:px-8 lg:px-20">
      <div className="mx-auto w-full max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-base-content leading-tight">
            Startup <span className="text-lime-500">Idea</span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-base-content/70 max-w-2xl mx-auto">
            List of startup ideas submitted by the community.
          </p>
        </div>

        <div className="p-6 grid grid-cols-3 gap-4">
          {ideas.map((idea) => (
            <IdeaCard key={idea._id} idea={idea} />
          ))}
        </div>
      </div>
    </div>
  );
}
