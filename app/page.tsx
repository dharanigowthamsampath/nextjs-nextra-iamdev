import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-4xl font-semibold text-center mb-8">Programming Resources</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          {/* C Language Card */}
          <a 
            href="/C" 
            className="bg-white/10 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer hover:bg-white/20"
          >
            <h2 className="text-xl font-semibold text-center text-white">C Language</h2>
          </a>

          {/* Java Card */}
          <a 
            href="/java" 
            className="bg-white/10 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer hover:bg-white/20"
          >
            <h2 className="text-xl font-semibold text-center text-white">Java</h2>
          </a>

          {/* Algorithms Card */}
          <a 
            href="/algorithm" 
            className="bg-white/10 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer hover:bg-white/20"
          >
            <h2 className="text-xl font-semibold text-center text-white">Algorithms</h2>
          </a>
        </div>
      </main>

    </div>
  );
}
