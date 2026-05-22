"use client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export default function AddIdeasClient() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      estimatedBudget: Number(data.estimatedBudget) || 0,
      tags: data.tags.split(",").map((tag) => tag.trim()) || [],
      user: user ? user.email : "Anonymous",
      createdAt: new Date().toISOString(),
      isTrending: false,
      comments: [],
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/ideas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    });

    const ret = await res.json();
    toast.success("Idea submitted successfully!");
    reset();
  };

  return (
    <div className="min-h-screen bg-base-100 px-4 py-12 md:px-8 lg:px-20">
      <div className="mx-auto w-full max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-base-content leading-tight">
            Have a <span className="text-lime-500">Startup Idea?</span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-base-content/70 max-w-2xl mx-auto">
            Share your vision with the community, get feedback, and inspire the
            next big innovation.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-base-200 border border-base-300 rounded-3xl shadow-sm p-6 md:p-10"
        >
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
          </div>

          <div className="space-y-10 mt-8">
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
                </div>

                <input
                  type="text"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  placeholder="Idea Vault — A platform to discover startup ideas"
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">Title is required</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="font-medium text-sm">
                    Short Description <span className="text-red-500">*</span>
                  </label>
                </div>

                <textarea
                  className="textarea textarea-bordered min-h-24 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  placeholder="A short and catchy overview of your startup idea..."
                  {...register("shortDescription", { required: true })}
                ></textarea>
                {errors.shortDescription && (
                  <p className="text-red-500 text-sm">
                    Short description is required
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium text-sm">
                  Detailed Description <span className="text-red-500">*</span>
                </label>

                <textarea
                  className="textarea textarea-bordered min-h-44 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  placeholder="Explain how your idea works, who it helps, and why it matters..."
                  {...register("detailedDescription", { required: true })}
                ></textarea>
                {errors.detailedDescription && (
                  <p className="text-red-500 text-sm">
                    Detailed description is required
                  </p>
                )}
              </div>
            </section>

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

                  <select
                    className="select select-bordered w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                    {...register("category", { required: true })}
                  >
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
                    {...register("tags")}
                  />

                  <p className="text-xs text-base-content/50">
                    Separate tags with commas
                  </p>
                </div>
              </div>
            </section>

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
                  {...register("imageUrl", { required: true })}
                />
                {errors.imageUrl && (
                  <p className="text-red-500 text-sm">Image URL is required</p>
                )}
              </div>
            </section>

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
                    Estimated Budget
                  </label>

                  <input
                    type="number"
                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                    placeholder="5000"
                    {...register("estimatedBudget")}
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
                    {...register("targetAudience", { required: true })}
                  />
                  {errors.targetAudience && (
                    <p className="text-red-500 text-sm">
                      Target audience is required
                    </p>
                  )}
                </div>
              </div>
            </section>

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
                  {...register("problemStatement", { required: true })}
                ></textarea>
                {errors.problemStatement && (
                  <p className="text-red-500 text-sm">
                    Problem statement is required
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium text-sm">
                  Proposed Solution <span className="text-red-500">*</span>
                </label>

                <textarea
                  className="textarea textarea-bordered min-h-32 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  placeholder="Describe how your solution works and why it's effective..."
                  {...register("proposedSolution", { required: true })}
                ></textarea>
                {errors.proposedSolution && (
                  <p className="text-red-500 text-sm">
                    Proposed solution is required
                  </p>
                )}
              </div>
            </section>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-base-300">
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
