import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/ava

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden cursor-pointer">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>
              <Link
              href={"/user"}
               //href={`/user/${session?.id}`}
              >
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            // <button onClick={await signIn("github")}
            // >
            //   <span>login</span>
            //   <button type="submit">Login</button>
            // </button>
            //this is not valid syntax so turn to this to a server action
            // <button onClick={async () => {
            //   "use server";
            //   //this is a server action that will run on the server side and then redirect to the sign in page
            //   await signIn("github")}
            // }
            // >
            //    <span>login</span>
            //  </button>

            /*
          Form with action={} + "use server" → true Server Action, executes on the server.
          Button with onClick → always client-side, cannot run Server Actions.
          */

            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button className="cursor-pointer" type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
