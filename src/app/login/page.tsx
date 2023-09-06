import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <main className="p-x-responsive h-fullscreen flex-between">
      {/* CONTAINER */}
      <div className="h-full shadow-2xl mx-auto flex flex-col md:flex-row md:h-[80%] md:w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 h-2/3 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button
            type="button"
            className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md"
          >
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button
            type="button"
            className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md"
          >
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            Have a problem?{" "}
            <Link href="/" className="underline">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
