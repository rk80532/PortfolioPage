import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Initializing Rahul.dev";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => onComplete(), 700);
      }
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="mb-4 text-2xl font-bold tracking-[0.25em] text-cyan-400 md:text-4xl">
          {text}
          <span className="animate-pulse text-fuchsia-400">|</span>
        </div>
        <div className="mx-auto h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full animate-pulse bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500" />
        </div>
      </div>
    </div>
  );
};
