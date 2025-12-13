"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
          <h1 className="text-3xl font-bold text-red-600">
            Something went wrong 😢
          </h1>

          <p className="mt-4 text-gray-600 text-center max-w-md">
            {error?.message || "An unexpected error occurred"}
          </p>

          <button
            onClick={() => reset()}
            className="mt-6 rounded bg-black px-6 py-2 text-white hover:bg-gray-800"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
