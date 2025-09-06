import { redirect } from "next/navigation";
import getServerAuthSession from "next-auth";
import { authConfig } from "@/server/auth/config";

import Header from "../_components/Header";
import BaseList from "../_components/bases/BaseList";

export default function Home() {
  const session = getServerAuthSession(authConfig);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div>
        <BaseList />
      </div>
    </div>
  );
}