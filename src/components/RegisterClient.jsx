"use client";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect, useSearchParams } from "next/navigation";

export default function RegisterClient() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/";

  const onSubmit = async (data) => {
    const { fullName, email, photoUrl, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: fullName,
      email: email,
      password: password,
      image: photoUrl,
    });

    if(res) {
      toast.success("Registration successful!");
      redirect(redirectUrl);
      reset();
    }
    if(error) {
      toast.error(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:px-10 lg:px-20">
      <div className="w-full max-w-4xl">
        <div className="bg-base-200 border border-base-300 rounded-box px-8 py-6 shadow-sm">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-base-content">
              Create an <span className="text-lime-500">Account</span>
            </h1>

            <p className="mt-2 text-sm text-gray-500 text-center">
              Join the community and start sharing your startup ideas
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1">
              <label className="label font-medium">Full Name</label>

              <input
                type="text"
                className="input w-full"
                placeholder="John Doe"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">Full Name is required</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="label font-medium">Email</label>

              <input
                type="email"
                className="input w-full"
                placeholder="john@example.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">Email is required</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="label font-medium">Photo URL</label>

              <input
                type="text"
                className="input w-full"
                placeholder="https://example.com/photo.jpg"
                {...register("photoUrl", { required: true })}
              />
              {errors.photoUrl && (
                <p className="text-red-500 text-sm">Photo URL is required</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="label font-medium">Password</label>

              <input
                type="password"
                className="input w-full"
                placeholder="Create a strong password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">Password is required</p>
              )}
            </div>

            <button
              type="submit"
              className="btn bg-lime-500 hover:bg-lime-600 text-white mt-2"
            >
              Register
            </button>
          </form>

          <div className="divider text-sm text-gray-400">OR</div>

          <button className="btn btn-outline w-full">
            Continue with Google
          </button>

          <p className="text-sm text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <a
              href={`/login?redirect=${encodeURIComponent(redirectUrl)}`}
              className="text-lime-500 font-medium hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
