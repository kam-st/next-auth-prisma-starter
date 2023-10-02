import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

type GoogleSignInButtonProps = {
  children: React.ReactNode;
};

function GoogleSignInButton({ children }: GoogleSignInButtonProps) {
  const loginWithGoogle = () => signIn("google", { callbackUrl: "/admin" });
  return (
    <Button onClick={loginWithGoogle} className="w-full">
      {children}
    </Button>
  );
}

export default GoogleSignInButton;
