// TypewriterEffect.tsx
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  wordSets,
  className,
  cursorClassName,
  typingSpeed = 0.1,
  backspaceSpeed = 0.05,
  pauseTime = 2,
}: {
  wordSets: {
    words: {
      text: string;
      className?: string;
    }[];
  }[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number; // Time between each character appearing
  backspaceSpeed?: number; // Time between each character disappearing
  pauseTime?: number; // Time to pause on a full word before backspacing
}) => {
  const [currentWordSetIndex, setCurrentWordSetIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWords = wordSets[currentWordSetIndex].words;
    const currentWordSet = currentWords.map((word) => word.text).join(" ");
    const targetText = isDeleting ? "" : currentWordSet;

    let timer: NodeJS.Timeout;

    const updateText = () => {
      setDisplayText((prevText) => {
        const nextText = isDeleting
          ? prevText.slice(0, -1)
          : targetText.slice(0, prevText.length + 1);

        if (nextText === targetText) {
          setTimeout(() => {
            setIsDeleting(!isDeleting);
            if (!isDeleting) {
              const nextWordSetIndex =
                (currentWordSetIndex + 1) % wordSets.length;
              setCurrentWordSetIndex(nextWordSetIndex);
              setCurrentWordIndex(0);
            }
          }, pauseTime * 1000);
        }

        return nextText;
      });
    };

    timer = setTimeout(
      updateText,
      (isDeleting ? backspaceSpeed : typingSpeed) * 1000
    );

    return () => clearTimeout(timer);
  }, [
    displayText,
    isDeleting,
    currentWordIndex,
    currentWordSetIndex,
    wordSets,
    typingSpeed,
    backspaceSpeed,
    pauseTime,
  ]);

  return (
    <div
      className={cn(
        "text-base font-bold text-center",
        className
      )}
    >
      <motion.div className="inline">
        {displayText.split("").map((char, index) => (
          <motion.span
            key={`char-${index}`}
            className={cn(`dark:text-white text-black`, className)}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-7  bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
