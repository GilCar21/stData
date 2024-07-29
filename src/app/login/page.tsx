import Image from "next/image";
import login from "./_actions/login";

export default function Login() {
  return (
    <div className="flex w-full text-[#C4C4CC]">
      <div className="lg:w-[55%] bg-[url('/darkvader.png')] h-screen "></div>
      <div className="lg-[45%] mx-auto min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center w-[420px]">
          <Image src="/logo.png" alt="logo" width={120} height={72} />
          <div className="w-full mt-8 mb-6">
            <h1 className="text-4xl font-bold text-[#C4C4CC]  ">
              Login to your Account
            </h1>
            <p className="text-sm ">See what is going on with your business</p>
          </div>
          <button className="w-full flex items-center justify-center py-2 border-[1px] border-[#C4C4CC40] mb-4 rounded-md">
            Github
          </button>

          <p className="text-sm mb-4">
            -------- or Sign in with Email --------
          </p>
          <form action={login} className="flex flex-col w-full">
            <label htmlFor="email" className="text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="text-zinc-50 bg-[#121214] placeholder:text-[#7C7C8A] placeholder:text-[16px] px-2 py-3 flex-1 mb-2 border-[#C4C4CC40] rounded-md"
              placeholder="mail@abc.com"
            />

            <label htmlFor="password" className="text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="text-zinc-50 bg-[#121214] placeholder:text-[#7C7C8A] placeholder:text-[16px] px-2 py-3 flex-1 mb-1 border-[#C4C4CC40] rounded-md"
              placeholder="********"
            />
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                <input type="checkbox" name="" id="" className="" />
                <p className="text-sm ">Remenber me</p>
              </div>
              <p className="text-sm text-[#00B37E]">Forgot Password?</p>
            </div>
            <button
              type="submit"
              className="w-full mt-4 flex justify-center gap-2 items-center bg-[#00875F] py-3 rounded-[8px] text-base  text-white"
            >
              Login
            </button>
            <a
              href="/register"
              className="mt-1 text-base text-[#00B37E] hover:underline"
            >
              Para se registrar click aqui
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
