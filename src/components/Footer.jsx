import {
  House,
  Lightbulb,
  Plus,
  User,
  MessageCircle,
  LogIn,
  UserPlus,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-lime-300 text-black p-10">
      <aside>
        <Link href="/" className="text-3xl font-bold">
          Idea Vault
        </Link>
        <p>A vault for your ideas, filled with startup ideas</p>

        <div className="flex gap-10 py-4">
          <p className="flex items-center gap-2">
            <Mail /> info@ideavault.com
          </p>
          <p className="flex items-center gap-2">
            <Phone /> +1 234 567 890
          </p>
        </div>

        <nav>
          <h6 className="footer-title">Follow Us</h6>
          <div className="grid grid-flow-col gap-4">
            <Link href="https://www.youtube.com/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </Link>
            <Link href="https://www.facebook.com/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div>
        </nav>

        <p className="mt-4 text-sm footer-title">
          Copyright © {new Date().getFullYear()} - All right reserved by Idea
          Vault
        </p>
      </aside>
      <div>
        <h6 className="footer-title">Our website</h6>
        <nav className="grid grid-cols-3 gap-4">
          <Link href="/" className="flex gap-2 link link-hover">
            <House /> Home
          </Link>
          <Link href="/ideas" className="flex gap-2 link link-hover">
            <Lightbulb /> Ideas
          </Link>
          <Link href="/add-ideas" className="flex gap-2 link link-hover">
            <Plus /> Add Ideas
          </Link>
          <Link href="/my-ideas" className="flex gap-2 link link-hover">
            <User /> My Ideas
          </Link>
          <Link href="/my-interactions" className="flex gap-2 link link-hover">
            <MessageCircle /> My Interactions
          </Link>
        </nav>
      </div>
    </footer>
  );
}
