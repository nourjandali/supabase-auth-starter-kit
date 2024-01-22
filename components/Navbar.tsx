import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

const cookieStore = cookies();

const canInitSupabaseClient = () => {
  try {
    createClient(cookieStore);
    return true;
  } catch (e) {
    return false;
  }
};

const isSupabaseConnected = canInitSupabaseClient();

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-7xl flex justify-end items-end p-3 text-sm">
        {isSupabaseConnected && <AuthButton />}
      </div>
    </nav>
  );
}
