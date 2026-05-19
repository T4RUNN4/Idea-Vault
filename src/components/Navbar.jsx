import { House, Lightbulb, Plus, User, MessageCircle, LogIn, UserPlus } from "lucide-react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-20 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/">
                <House /> Home
              </a>
            </li>
            <li>
              <a href="/ideas">
                <Lightbulb /> Ideas
              </a>
            </li>
            <li>
              <a href="/add-ideas">
                <Plus /> Add Ideas
              </a>
            </li>
            <li>
              <a href="/my-ideas">
                <User /> My Ideas
              </a>
            </li>
            <li>
              <a href="/my-interactions">
                <MessageCircle /> My Interactions
              </a>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-3xl font-bold text-lime-500">
          IdeaVault
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">
              <House /> Home
            </a>
          </li>
          <li>
            <a href="/ideas">
              <Lightbulb /> Ideas
            </a>
          </li>
          <li>
            <a href="/add-ideas">
              <Plus /> Add Ideas
            </a>
          </li>
          <li>
            <a href="/my-ideas">
              <User /> My Ideas
            </a>
          </li>
          <li>
            <a href="/my-interactions">
              <MessageCircle /> My Interactions
            </a>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 navbar-end">
        <a href="/login" className="btn">
          <LogIn /> Login
        </a>
        <a
          href="/register"
          className="btn btn-primary bg-lime-500 border-lime-500 text-white"
        >
          <UserPlus /> Register
        </a>
      </div>
    </div>
  );
}
