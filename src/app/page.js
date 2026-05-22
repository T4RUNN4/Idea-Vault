import Image from "next/image";
import Link from "next/link";
import IdeaCard from "@/components/IdeaCard";
import Carousel from "@/components/Carousel";

export const metadata = {
  title: "Home - Idea Vault",
  description: "Home page of Idea Vault!",
};

export default async function Home() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/ideas/trending`,
  );
  const ideas = await res.json();

  return (
    <div className="min-h-screen bg-base-100">
      <section className="max-w-6xl mx-auto px-4 md:px-8 lg:px-20 mt-16">
        <Carousel />
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 lg:px-20 mt-16">
        <h2 className="text-3xl font-bold text-base-content">Trending Ideas</h2>

        <p className="text-base-content/60 mt-2">
          Discover what’s gaining attention in the startup community
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea) => (
            <IdeaCard key={idea._id} idea={idea} />
          ))}
        </div>
      </section>

      <section className="mt-20 bg-base-200 border-y border-base-300">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-20 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-base-content">
              Validate Your Startup Ideas Faster
            </h2>

            <p className="mt-4 text-base-content/70 leading-relaxed">
              Stop guessing. Share your idea with real users, get feedback, and
              improve before you build. Reduce risk and increase your chances of
              success.
            </p>

            <Link
              href="/add-ideas"
              className="btn bg-lime-500 rounded-md text-white font-medium text-sm hover:bg-lime-600 transition mt-4"
            >
              Get Started
            </Link>
          </div>

          <div className="rounded-3xl overflow-hidden border border-base-300 shadow-sm">
            <Image
              src="https://media.licdn.com/dms/image/v2/D5612AQHao9Ge_9RHQQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1657895047360?e=2147483647&v=beta&t=cmzea3kan3-CXH2zJ1i5Nyo-DLSItcIN_KIv2cifjEc"
              alt="Idea validation"
              width={600}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-8 lg:px-20 mt-20 mb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 rounded-3xl overflow-hidden border border-base-300 shadow-sm">
            <Image
              src="https://thedavidsnider.com/wp-content/uploads/2019/03/Raring_Group_Photo-1.jpg"
              alt="Community collaboration"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-base-content">
              Build With a Community of Innovators
            </h2>

            <p className="mt-4 text-base-content/70 leading-relaxed">
              Connect with founders, developers, and thinkers. Share feedback,
              improve ideas, and find collaborators for your next big project.
            </p>

            <Link
              href="/register"
              className="btn bg-lime-500 rounded-md text-white font-medium text-sm hover:bg-lime-600 transition mt-4"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
