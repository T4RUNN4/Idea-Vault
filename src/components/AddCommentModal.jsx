"use client";

import { useForm } from "react-hook-form";

export default function AddCommentModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    reset();
    document.getElementById("my_modal_7").close();
  };

  return (
    <dialog id="my_modal_7" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add a comment</h3>
        <p className="py-4">Share your thoughts on this idea</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <textarea
            className="textarea textarea-bordered min-h-28 w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
            placeholder="Share your thoughts..."
            {...register("comment", { required: true })}
          />

          {errors.comment && (
            <p className="text-red-500 text-sm">
              Comment is required
            </p>
          )}

          <div className="modal-action">
            <button
              type="submit"
              className="btn bg-lime-500 text-white hover:bg-lime-600"
            >
              Comment
            </button>

            <button
              type="button"
              className="btn btn-ghost"
              onClick={() =>
                document.getElementById("my_modal_7").close()
              }
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
