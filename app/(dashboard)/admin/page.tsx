import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

async function page() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return (
      <h2 className="text-2xl">
        Admin page - welcome back {session?.user.username || session.user.name}
      </h2>
    );
  }

  return <div className="text-2xl">Please login to see this admin page</div>;
}

export default page;
