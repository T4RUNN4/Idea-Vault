import LoginClient from "@/components/LoginClient";
import { Suspense } from "react";

export const metadata = {
  title: "Login - Idea Vault",
  description: "Login page of Idea Vault!",
};

export default function Page() {
  return (
    <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
      <LoginClient />
    </Suspense>
  );
}
