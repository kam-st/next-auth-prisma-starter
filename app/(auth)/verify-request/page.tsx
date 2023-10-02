import React from "react";

function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Check your email</h1>
      <p>A sign in link has been sent to your email address. </p>
      <p>
        Our auth system is passwordless, to reduce any inhereted security risks
        associated with password system.{" "}
      </p>
    </div>
  );
}

export default page;
