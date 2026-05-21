import Link from "next/link";
import Image from "next/image";

export default function IdeaCard({ idea }) {
  return (
    <div className="card bg-base-200 border border-base-300 shadow-sm rounded-2xl px-4 py-4">
      <figure className="relative rounded-xl">
        <Image src={idea.imageUrl} alt={idea.title} width={600} height={400} />
      </figure>

      <div className="card-body p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="card-title text-base-content text-lg font-semibold mt-4">
            {idea.title}{" "}
            {idea.isTrending && (
              <span className="badge bg-red-600 text-white text-xs px-3 py-1 shrink-0">
                Trending
              </span>
            )}
          </h2>
        </div>

        <p className="text-sm text-base-content/70">{idea.shortDescription}</p>

        <Link
          href={`/ideas/${idea._id}`}
          className="btn bg-lime-500 rounded-md text-white font-medium text-sm hover:bg-lime-600 transition mt-2"
        >
          View details →
        </Link>
      </div>
    </div>
  );
}
