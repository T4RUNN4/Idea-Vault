import Image from "next/image";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/ideas/${id}`);
  const idea = await res.json();

  return {
    title: `${idea.title} - Idea Vault`,
    description: idea.shortDescription,
  };
}

export default async function DetailedIdea({ params }) {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/ideas/${id}`);
  const idea = await res.json();

  return (
    <div className="min-h-screen bg-base-100 px-6 py-12 md:px-8 lg:px-20">
      <div className="mx-auto w-full max-w-5xl">
        <div className="rounded-md  overflow-hidden border border-base-300 shadow-sm">
          <Image
            src={idea.imageUrl}
            alt={idea.title}
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl md:text-5xl font-bold text-base-content leading-tight">
              {idea.title}
            </h1>

            <p className="text-base md:text-lg text-base-content/70 leading-relaxed">
              {idea.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {idea.tags.map((tag, index) => (
                <span key={index} className="text-xs text-base-content/70">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl">
            <p className="text-xs text-base-content/50">Category</p>
            <p className="font-medium text-base-content mt-1">
              {idea.category}
            </p>
          </div>

          <div className="p-4 rounded-2xl">
            <p className="text-xs text-base-content/50">Budget</p>
            <p className="font-medium text-base-content mt-1">
              ${Number(idea.estimatedBudget).toLocaleString()}
            </p>
          </div>

          <div className="p-4 rounded-2xl">
            <p className="text-xs text-base-content/50">Target Audience</p>
            <p className="font-medium text-base-content mt-1">
              {idea.targetAudience}
            </p>
          </div>
        </div>

        <div className="mt-6 py-6 rounded-3xl">
          <h2 className="text-xl font-semibold text-base-content mb-4">
            About This Idea
          </h2>

          <p className="text-base-content/70 leading-relaxed whitespace-pre-line">
            {idea.detailedDescription}
          </p>
        </div>

        <div className="mt-4 py-6 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-500 py-4 px-6 rounded-md  text-white">
            <h2 className="text-xl font-semibold mb-4">Problem</h2>

            <p className="text-sm leading-relaxed">
              {idea.problemStatement}
            </p>
          </div>

          <div className="bg-green-500 py-4 px-6 rounded-md text-white">
            <h2 className="text-xl font-semibold mb-4">
              Solution
            </h2>

            <p className="text-sm leading-relaxed">
              {idea.proposedSolution}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
