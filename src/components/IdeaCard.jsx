"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash } from "lucide-react";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function IdeaCard({ idea }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleDelete = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/ideas/${idea._id}`, {
      method: "DELETE",
    });
    toast.success("Idea deleted successfully!");
    my_modal_5.close();
    router.refresh();
  };

  return (
    <>
      <div className="card bg-base-200 border border-base-300 shadow-sm rounded-2xl px-4 py-4">
        <figure className="relative rounded-xl">
          <Image
            src={idea.imageUrl}
            alt={idea.title}
            width={600}
            height={400}
          />
        </figure>

        <div className="card-body p-5">
          <div className="flex items-start justify-between  mt-4 gap-3">
            <h2 className="card-title text-base-content text-lg font-semibold">
              {idea.title}{" "}
              {idea.isTrending && (
                <span className="badge bg-red-600 text-white text-xs px-3 py-1 shrink-0">
                  Trending
                </span>
              )}
            </h2>
            {pathname === "/my-ideas" && (
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="btn btn-ghost btn-sm rounded-md text-gray-500 hover:text-red-500 transition"
              >
                <Trash size={18} />
              </button>
            )}
          </div>

          <p className="text-sm text-base-content/70">
            {idea.shortDescription}
          </p>

          <div className="card-actions flex gap-2 mt-6">
            <Link
              href={`/ideas/${idea._id}`}
              className="btn bg-lime-500 rounded-md text-white font-medium text-sm hover:bg-lime-600 transition "
            >
              View details →
            </Link>
            {pathname === "/my-ideas" && (
              <button className="btn btn-ghost rounded-md text-white font-medium text-sm ">
                Update
              </button>
            )}
          </div>
        </div>
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you sure?</h3>
          <p className="py-4">
            Your idea will be permanently deleted and cannot be recovered.
          </p>
          <form method="dialog" className="flex gap-2 justify-end">
            <button type="button" onClick={handleDelete} className="btn btn-error">
              Yes, I am sure!
            </button>
            <button className="btn btn-ghost">No, keep it</button>
          </form>
        </div>
      </dialog>
    </>
  );
}
