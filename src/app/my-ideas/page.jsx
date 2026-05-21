import MyIdeasPageClient from "@/components/MyIdeasClient";

export const metadata = {
  title: "My Ideas - Idea Vault",
  description: "Your personal collection of ideas!",
};

export default async function MyIdeasPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/ideas`);
  const ideas = await res.json();

  return <MyIdeasPageClient ideas={ideas} />;
}
