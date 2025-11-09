import { redirect } from "next/navigation"
import { auth } from "@/auth"
import SignOutButton from "@/components/SignOutButton"

export default async function DashboardPage() {
  const session = await auth()

  console.log(session)

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <SignOutButton />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600">Welcome, {session.user?.name || session.user?.email}!</p>
          <p className="mt-2 text-sm text-gray-500">Email: {session.user?.email}</p>
        </div>
      </div>
    </div>
  )
}