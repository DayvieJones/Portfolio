import { motion, useInView, Variant } from "motion/react";
import { useRef } from "react";

type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements | React.ElementType;
  className?: string;
  once?: boolean;
  staggerChildren?: number;
  animation?: {
    hidden?: Variant;
    visible?: Variant;
    transition?: {
      duration: number;
    };
  };
};

const createAnimations = (animation?: AnimatedTextProps["animation"]) => {
  return {
    hidden: animation?.hidden ?? { opacity: 0, y: 10 },
    visible: {
      ...(animation?.visible ?? { opacity: 1, y: 0 }),
      transition: animation?.transition ?? { duration: 0.2 },
    },
  };
};

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  animation,
  once,
  staggerChildren,
}: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  const textArray = Array.isArray(text) ? text : [text];
  const animations = createAnimations(animation);

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>

      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: staggerChildren ?? 0.02,
            },
          },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animations}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
