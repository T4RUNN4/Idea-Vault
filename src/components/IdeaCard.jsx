export default function IdeaCard({ idea }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={idea.image} alt={idea.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {idea.title}
          {idea.isTrending && (
            <div className="badge badge-secondary">Trending</div>
          )}
        </h2>
        <p>{idea.description}</p>
        <div className="card-actions justify-end">
          <a href="#" className="text-lime-500 font-medium hover:underline">
            View details
          </a>
        </div>
      </div>
    </div>
  );
}
