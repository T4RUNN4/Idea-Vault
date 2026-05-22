import RegisterClient from "@/components/RegisterClient";
import { Suspense } from "react";

export const metadata = {
  title: "Register - Idea Vault",
  description: "Register page of Idea Vault!",
};

export default function Page() {
  return (
    <Suspense
      fallback={<span className="loading loading-spinner loading-lg"></span>}
    >
      <RegisterClient />
    </Suspense>
  );
}
