export default function AddIdeas() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-20">
      <h1 className="text-4xl font-bold text-gray-800">
        Have an <span className="text-lime-500">Startup Idea?</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600 mb-8">
        Submit your startup idea and let it shine!
      </p>

      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border px-8 py-4">
          <div className="flex flex-col gap-1 items-center justify-center">
            <h1 className="fieldset-legend text-2xl font-medium text-lime-500">
              Submit Your Idea
            </h1>

            <p className="text-sm text-gray-500 ml-2">
              <span className="text-red-500 text-lg font-bold">*</span>
              {"  "}indicates required field
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col gap-1">
              <label className="label font-medium">
                Idea Title <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter your idea title"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="label">
                Short Description{" "}
                <span className="text-red-500 font-bold">*</span>
              </label>
              <textarea
                className="textarea w-full"
                placeholder="Describe your idea in short"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="label">
                Detailed Description{" "}
                <span className="text-red-500 font-bold">*</span>
              </label>
              <textarea
                className="textarea w-full"
                placeholder="Describe your idea in detail"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="label">
                  Category <span className="text-red-500 font-bold">*</span>
                </label>
                <select className="select w-full">
                  <option disabled selected>
                    Select a category
                  </option>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Education</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="label">Tags</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter tags for your idea (comma separated)"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="label">
                Image URL <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter the URL of your idea's image"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="label">Estimated Budget</label>
                <input
                  type="number"
                  className="input w-full"
                  placeholder="Enter the estimated budget for your idea"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="label">
                  Target Audience{" "}
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter the target audience for your idea"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="label">
                Problem Statement{" "}
                <span className="text-red-500 font-bold">*</span>
              </label>
              <textarea
                className="textarea w-full"
                placeholder="Describe the problem your idea addresses"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="label">
                Proposed Solution{" "}
                <span className="text-red-500 font-bold">*</span>
              </label>
              <textarea
                className="textarea w-full"
                placeholder="Describe your proposed solution for the problem"
              />
            </div>
          </div>

          <button type="submit" className="btn bg-lime-500 text-white mt-4">
            Submit Idea
          </button>
        </fieldset>
      </form>
    </div>
  );
}
