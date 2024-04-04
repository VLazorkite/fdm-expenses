"use client";
import { signOut, useSession } from "next-auth/react";

export default function MainPage() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      {session ? (
        <>
          <h1>Logged in</h1>
        </>
      ) : (
        <h1>Not</h1>
      )}
    </>
  );
}
