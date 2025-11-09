"use client"

import { signOut } from "next-auth/react"

export default function SignOutButton() {
  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "/login",
      redirect: true,
    })
  }

  return (
    <button
      onClick={handleSignOut}
      className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      Sign Out
    </button>
  )
}