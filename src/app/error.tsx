"use client";
export default function RegisterError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex1 min-h-screen items-center justify-center flex-col">
      <p className="text-xl font-bold text-[#C4C4CC]">Ops...</p>
      <h1 className="text-4xl font-bold text-[#C4C4CC]">Register Error</h1>
      <p className="text-xl font-bold text-[#C4C4CC]">{error.message}</p>
      <button
        onClick={reset}
        className="px-9 py-2 flex items-center justify-center border-[1px] border-[#C4C4CC40] mb-9 rounded-md"
      >
        Tentar navamente
      </button>
    </div>
  );
}
