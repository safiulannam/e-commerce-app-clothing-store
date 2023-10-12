'use client'

import { GlobalContext } from "@/context"
import { useContext } from "react"
import { useRouter } from "next/navigation";

export default function Home() {
  const {isAuthUser} = useContext(GlobalContext);

  const router = useRouter();

  console.log(isAuthUser);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    </main>
  )
}
