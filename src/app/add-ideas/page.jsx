"use client";

export default function AddIdeas() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-base-100 px-4 py-12 md:px-8 lg:px-20">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-base-content leading-tight">
            Have a <span className="text-lime-500">Startup Idea?</span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-base-content/70 max-w-2xl mx-auto">
            Share your vision with the community, get feedback, and inspire the
            next big innovation.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-base-200 border border-base-300 rounded-3xl shadow-sm p-6 md:p-10"
        >
          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-base-300">
            <div>
              <h2 className="text-2xl font-bold text-lime-500">
                Submit Your Idea
              </h2>

              <p className="text-sm text-base-content/60 mt-1">
                Fields marked with{" "}
                <span className="text-red-500 font-bold">*</span> are required
              </p>
            </div>

            <div className="w-full md:w-52">
              <div className="flex justify-between text-xs text-base-content/60 mb-1">
                <span>Completion</span>
                <span>0%</span>
              </div>

              <progress
                className="progress progress-success w-full"
                value="0"
                max="100"
              ></progress>
            </div>
          </div>

          <div className="space-y-10 mt-8">
            {/* BASIC INFO */}
            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-base-content">
                  Basic Information
                </h3>

                <p className="text-sm text-base-content/60">
                  Start with the core details of your startup idea
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="font-medium text-sm">
                    Idea Title <span className="text-red-500">*</span>
                  </label>

                  <span className="text-xs text-base-content/50">0/100</span>
                </div>

                <input
                  type="text"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  placeholder="Idea Vault — A platform to discover startup ideas"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="font-medium text-sm">
                    Short Description <span className="text-red-500">*</span>
                  </label>

                  <span className="text-xs text-base-content/50">0/200</span>
                </div>

                <textarea
                  className="textarea textarea-bordered min-h-24 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  placeholder="A short and catchy overview of your startup idea..."
                ></textarea>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium text-sm">
                  Detailed Description <span className="text-red-500">*</span>
                </label>

                <textarea
                  className="textarea textarea-bordered min-h-44 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  placeholder="Explain how your idea works, who it helps, and why it matters..."
                ></textarea>
              </div>
            </section>

            {/* CATEGORY */}
            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-base-content">
                  Categorization
                </h3>

                <p className="text-sm text-base-content/60">
                  Help users discover your idea more easily
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm">
                    Category <span className="text-red-500">*</span>
                  </label>

                  <select className="select select-bordered w-full focus:outline-none focus:ring-2 focus:ring-lime-400">
                    <option disabled selected>
                      Select a category
                    </option>

                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                    <option>Finance</option>
                    <option>AI & Automation</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm">Tags</label>

                  <input
                    type="text"
                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                    placeholder="AI, Startup, Productivity"
                  />

                  <p className="text-xs text-base-content/50">
                    Separate tags with commas
                  </p>
                </div>
              </div>
            </section>

            {/* MEDIA */}
            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-base-content">
                  Media & Branding
                </h3>

                <p className="text-sm text-base-content/60">
                  Add visuals to make your idea stand out
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium text-sm">
                  Image URL <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  placeholder="https://example.com/startup-image.png"
                />

                {/* Image Preview */}
                <div className="mt-3 border border-dashed border-base-300 rounded-2xl p-3">
                  <img
                    src="https://placehold.co/1200x600"
                    alt="Preview"
                    className="w-full h-56 object-cover rounded-xl"
                  />
                </div>
              </div>
            </section>

            {/* BUSINESS DETAILS */}
            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-base-content">
                  Business Details
                </h3>

                <p className="text-sm text-base-content/60">
                  Define your audience and market potential
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm">
                    Estimated Budget <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="number"
                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                    placeholder="5000"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm">
                    Target Audience <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                    placeholder="Students, freelancers, startups..."
                  />
                </div>
              </div>
            </section>

            {/* PROBLEM & SOLUTION */}
            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-base-content">
                  Problem & Solution
                </h3>

                <p className="text-sm text-base-content/60">
                  Clearly explain the issue and your approach
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium text-sm">
                  Problem Statement <span className="text-red-500">*</span>
                </label>

                <textarea
                  className="textarea textarea-bordered min-h-28 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  placeholder="What specific problem does your idea solve?"
                ></textarea>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium text-sm">
                  Proposed Solution <span className="text-red-500">*</span>
                </label>

                <textarea
                  className="textarea textarea-bordered min-h-32 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  placeholder="Describe how your solution works and why it's effective..."
                ></textarea>
              </div>
            </section>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-base-300">
            <p className="text-sm text-base-content/60">
              Your idea will be reviewed before publishing.
            </p>

            <button
              type="submit"
              className="btn bg-lime-500 hover:bg-lime-600 border-none text-white px-8 w-full sm:w-fit"
            >
              Submit Idea
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
