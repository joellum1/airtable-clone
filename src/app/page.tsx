import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authConfig } from "@/server/auth/config";
import SignInForm from "./_components/SignInForm";

export default async function Home() {
  const session = await getServerSession(authConfig);

  // Redirect logged-in users to /dashboard
  if (session) {
    redirect("/bases");
  }

  return (
    <main className="flex min-h-screen">
      <div className="flex w-full">
        {/* Left side - sign in form */}
        <div className="flex justify-center items-center w-1/2 h-full">
          <SignInForm />
        </div>

        {/* Right side - other content */}
        <div className="w-1/2">
          <div className="flex justify-center items-center h-full">
            <div className="w-[395px] h-[580px] mt-[48px] bg-blue-100 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
