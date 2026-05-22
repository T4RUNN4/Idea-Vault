import IdeasClient from "@/components/IdeasClient";

export const metadata = {
  title: "Ideas - Idea Vault",
  description: "Browse startup ideas submitted by the community.",
};

export default async function Ideas() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/ideas`);
  const ideas = await res.json();

  return <IdeasClient ideas={ideas} />;
}
