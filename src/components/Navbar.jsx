"use client";
import { UserPlus, LogIn, LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    toast.success("Logged out successfully!");
    await authClient.signOut();
    router.refresh();
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-8 md:px-20 py-4">
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
              <Link
                className={pathname === "/" ? "bg-lime-500 text-white" : ""}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/ideas" ? "bg-lime-500 text-white" : ""
                }
                href="/ideas"
              >
                Ideas
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/add-ideas" ? "bg-lime-500 text-white" : ""
                }
                href="/add-ideas"
              >
                Add Ideas
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/my-ideas" ? "bg-lime-500 text-white" : ""
                }
                href="/my-ideas"
              >
                My Ideas
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/my-interactions"
                    ? "bg-lime-500 text-white"
                    : ""
                }
                href="/my-interactions"
              >
                My Interactions
              </Link>
            </li>
            {isPending ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : user ? (
              <li className="flex flex-row mt-2 md:hidden">
                <Image
                  src={user.image}
                  alt={user.name}
                  height={70}
                  width={70}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <Link href="/profile" className="btn btn-ghost">
                    {user.name}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex gap-1 text-red-500"
                  >
                    <LogOut /> Logout
                  </button>
                </div>
              </li>
            ) : (
              <>
                <li className="md:hidden mt-2">
                  <Link href="/login" className="btn">
                    <LogIn /> Login
                  </Link>
                </li>
                <li className="md:hidden mt-1">
                  <Link
                    href="/register"
                    className="btn btn-primary bg-lime-500 border-lime-500 text-white"
                  >
                    <UserPlus /> Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost text-3xl font-bold text-base-content"
        >
          <span className="text-lime-500">Idea</span> Vault
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              className={pathname === "/" ? "bg-lime-500 text-white" : ""}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/ideas" ? "bg-lime-500 text-white" : ""}
              href="/ideas"
            >
              Ideas
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/add-ideas" ? "bg-lime-500 text-white" : ""
              }
              href="/add-ideas"
            >
              Add Ideas
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/my-ideas" ? "bg-lime-500 text-white" : ""
              }
              href="/my-ideas"
            >
              My Ideas
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/my-interactions" ? "bg-lime-500 text-white" : ""
              }
              href="/my-interactions"
            >
              My Interactions
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-2 navbar-end">
        <ThemeToggle />
        {isPending ? (
          <span className="hidden lg:block loading loading-spinner loading-lg"></span>
        ) : user ? (
          <div className="hidden md:flex items-center gap-2">
            <Image
              src={user.image}
              alt={user.name}
              height={50}
              width={50}
              className="rounded-full"
            />
            <details className="dropdown">
              <summary className="btn m-1">{user.name}</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 p-2 shadow-sm">
                <li>
                  <Link href="/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-red-500">
                    <LogOut /> Logout
                  </button>
                </li>
              </ul>
            </details>
          </div>
        ) : (
          <div className="hidden md:flex gap-2">
            <Link href="/login" className="btn">
              <LogIn /> Login
            </Link>
            <Link
              href="/register"
              className="btn btn-primary bg-lime-500 border-lime-500 text-white"
            >
              <UserPlus /> Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
