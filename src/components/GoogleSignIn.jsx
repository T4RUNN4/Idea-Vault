import { authClient } from "@/lib/auth-client";

export default function GoogleSignIn({ pathname }) {

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackUrl: pathname || "/",
    });
  };

  return (
    <button type="button" className="btn btn-outline w-full" onClick={handleGoogleSignIn}>
      Continue with Google
    </button>
  );
}
