"use client";
import IdeaCard from "@/components/IdeaCard";
import { useState } from "react";

export default function IdeasClient({ ideas }) {
  const [filter, setFilter] = useState("All");
  let filteredIdeas =
    filter === "All" ? ideas : ideas.filter((idea) => idea.category === filter);

  const handleFilter = (category) => {
    setFilter(category);
  };

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

        <div className="flex items-center justify-between p-6 mb-6">
          <div className="flex items-center gap-4">
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search" />
            </label>
            <button className="btn bg-lime-500 hover:bg-lime-600 text-white">
              Search
            </button>
          </div>
          <details className="dropdown">
            <summary className="btn bg-lime-500 hover:bg-lime-600 text-white m-1">
              Filter
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li>
                <button className={filter === "All" ? "bg-lime-500 text-white" : ""} onClick={() => handleFilter("All")}>
                  All
                </button>
              </li>
              <li>
                <button className={filter === "Technology" ? "bg-lime-500 text-white" : ""} onClick={() => handleFilter("Technology")}>
                  Technology
                </button>
              </li>
              <li>
                <button className={filter === "Healthcare" ? "bg-lime-500 text-white" : ""} onClick={() => handleFilter("Healthcare")}>
                  Healthcare
                </button>
              </li>
              <li>
                <button className={filter === "Education" ? "bg-lime-500 text-white" : ""} onClick={() => handleFilter("Education")}>
                  Education
                </button>
              </li>
              <li>
                <button className={filter === "Finance" ? "bg-lime-500 text-white" : ""} onClick={() => handleFilter("Finance")}>
                  Finance
                </button>
              </li>
              <li>
                <button className={filter === "AI & Automation" ? "bg-lime-500 text-white" : ""} onClick={() => handleFilter("AI & Automation")}>
                  AI & Automation
                </button>
              </li>
            </ul>
          </details>
        </div>

        {filteredIdeas.length > 0 ? (
          <div className="p-6 grid grid-cols-3 gap-4">
            {filteredIdeas.map((idea) => (
              <IdeaCard key={idea._id} idea={idea} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold text-base-content">
              No ideas submitted yet.
            </h2>
            <p className="mt-4 text-base md:text-lg text-base-content/70">
              Be the first to share your innovative idea with the world!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
