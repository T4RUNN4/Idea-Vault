"use client";
import { authClient } from "@/lib/auth-client";
import IdeaCard from "@/components/IdeaCard";

export default function MyIdeasPageClient({ ideas }) {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user?.email;
  const filteredIdeas = ideas.filter((idea) => idea.user === user);

  return (
    <div className="min-h-screen bg-base-100 px-4 py-12 md:px-8 lg:px-20">
      {filteredIdeas.length > 0 ? (
        <div className="mx-auto w-full max-w-5xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-base-content leading-tight">
              My <span className="text-lime-500">Startup Ideas</span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-base-content/70 max-w-2xl mx-auto">
              List of startup ideas submitted by you.
            </p>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredIdeas.map((idea) => (
              <IdeaCard key={idea._id} idea={idea} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-base-content">
            You haven't submitted any ideas yet.
          </h2>
          <p className="mt-4 text-base md:text-lg text-base-content/70">
            Start sharing your innovative ideas with the world!
          </p>
        </div>
      )}
    </div>
  );
}
