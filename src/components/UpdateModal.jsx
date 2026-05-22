import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function UpdateModal({ idea, onUpdate }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      tags: data.tags.split(",").map((tag) => tag.trim()),
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/ideas/${idea._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    });

    if (response.ok) {
      toast.success("Idea updated successfully!");
      document.getElementById("my_modal_6").close();
      onUpdate();
    } else {
      toast.error("Failed to update idea. Please try again.");
    }
  };

  return (
    <dialog id="my_modal_6" className="modal">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-200 border border-base-300 rounded-md shadow-sm p-6 md:p-10 w-full max-w-3xl modal-box"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-base-300">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-lime-500">
                Edit Your Idea
              </h2>
              <p className="text-sm text-base-content/60 mt-1">
                Fields marked with{" "}
                <span className="text-red-500 font-bold">*</span> are required
              </p>
            </div>
          </div>

          <button
            onClick={() => document.getElementById("my_modal_6").close()}
            type="button"
            className="btn btn-ghost btn-sm rounded-md text-gray-500 hover:text-gray-300 transition"
          >
            ✕
          </button>
        </div>

        <div className="space-y-10 mt-8">
          <section className="space-y-5">
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
                defaultValue={idea.title}
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
                defaultValue={idea.shortDescription}
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
                defaultValue={idea.detailedDescription}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-medium text-sm">
                  Category <span className="text-red-500">*</span>
                </label>

                <select
                  className="select select-bordered w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  defaultValue={idea.category}
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
                  defaultValue={idea.tags}
                  {...register("tags")}
                />

                <p className="text-xs text-base-content/50">
                  Separate tags with commas
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm">
                Image URL <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                placeholder="https://example.com/startup-image.png"
                defaultValue={idea.imageUrl}
                {...register("imageUrl", { required: true })}
              />
              {errors.imageUrl && (
                <p className="text-red-500 text-sm">Image URL is required</p>
              )}
            </div>
          </section>

          <section className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-medium text-sm">Estimated Budget</label>

                <input
                  type="number"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                  placeholder="5000"
                  defaultValue={idea.estimatedBudget}
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
                  defaultValue={idea.targetAudience}
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
            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm">
                Problem Statement <span className="text-red-500">*</span>
              </label>

              <textarea
                className="textarea textarea-bordered min-h-28 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                placeholder="What specific problem does your idea solve?"
                defaultValue={idea.problemStatement}
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
                defaultValue={idea.proposedSolution}
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

        <div className="flex flex-col sm:flex-row items-center gap-2 mt-10 pt-6 border-t border-base-300">
          <button
            type="submit"
            className="btn bg-lime-500 hover:bg-lime-600 border-none text-white px-8 w-full sm:w-fit"
          >
            Update Idea
          </button>
          <button
            type="button"
            onClick={() => document.getElementById("my_modal_6").close()}
            className="btn btn-ghost px-8 w-full sm:w-fit"
          >
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  );
}
