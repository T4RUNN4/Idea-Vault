export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:px-10 lg:px-20">
      <div className="w-full max-w-md">
        <div className="bg-base-200 border border-base-300 rounded-box px-8 py-6 shadow-sm">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome <span className="text-lime-500">Back</span>
            </h1>

            <p className="mt-2 text-sm text-gray-500 text-center">
              Login to continue sharing and discovering startup ideas
            </p>
          </div>

          <form className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="label font-medium">Email</label>

              <input
                type="email"
                className="input w-full"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <label className="label font-medium">Password</label>

                <a
                  href="/forgot-password"
                  className="text-sm text-lime-500 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              <input
                type="password"
                className="input w-full"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="btn bg-lime-500 hover:bg-lime-600 text-white mt-2"
            >
              Login
            </button>
          </form>

          <div className="divider text-sm text-gray-400">OR</div>

          <button className="btn btn-outline w-full">
            Continue with Google
          </button>

          <p className="text-sm text-center text-gray-500 mt-6">
            Don&apos;t have an account?{" "}
            <a
              href="/register"
              className="text-lime-500 font-medium hover:underline"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
