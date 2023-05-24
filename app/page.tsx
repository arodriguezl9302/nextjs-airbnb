import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import User from "./user";

export default async function Home() {
  const serverSession = await getServerSession(authOptions);
  return (
    <div className="flex flex-col gap-2">
      <div>Server: {JSON.stringify(serverSession)}</div>
      <div>
        Client: <User />
      </div>
    </div>
  );
}
