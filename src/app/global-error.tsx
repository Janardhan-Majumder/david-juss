"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
    console.log(error.digest)
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h2 className="text-lg text-red-400 font-semibold mb-3">
            <span className="capitalize">
              {error.message && error.message + ","}
            </span>
            {" Something went wrong!"}
          </h2>
          <button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
