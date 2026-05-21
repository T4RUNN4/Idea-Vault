import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function DeleteModal({ ideaId, onDelete }) {
  const handleDelete = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/ideas/${ideaId}`, {
      method: "DELETE",
    });
    toast.success("Idea deleted successfully!");
    my_modal_5.close();
    onDelete();
  };

  return (
    <dialog id="my_modal_5" className="modal">
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">Are you sure you want to delete this idea?</h3>
        <p className="py-4">This action cannot be undone.</p>
        <div className="modal-action">
          <button onClick={handleDelete} className="btn bg-red-600 text-white hover:bg-red-700 transition">
            Yes, delete it
          </button>
          <button className="btn btn-ghost">Cancel</button>
        </div>
      </form>
    </dialog>
  );
}
