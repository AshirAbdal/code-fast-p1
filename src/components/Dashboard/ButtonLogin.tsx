"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";

const ButtonLogin = ({ session }: any) => {
  const dashboardUrl = "/dashboard";

  if (session) {
    return (
      <Link href={dashboardUrl} className="btn btn-primary">
        Welcome back {session.user.name || "Friend"}
      </Link>
    );
  }

  return (
    <button
      onClick={() => {
        signIn(undefined, { callbackUrl: dashboardUrl });
      }}
      className="btn btn-primary"
    >
      Get Started
    </button>
  );
};

export default ButtonLogin;
