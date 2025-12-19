import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";



export default function Parallax1() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"]
  });

  const textOpacity = useTransform(scrollYProgress,[0,0.7],[0,1])
  /* const textScale = useTransform(scrollYProgress,[0,0.8],[0,1]) */
  const textLetterSpacing = useTransform(scrollYProgress,[0,0.8],["128px","-20px"])

  return (
    <div className="min-h-[100vh] bg-black flex items-center justify-center relative">
      <motion.div
        ref={ref}
        className="flex h-[250vh] font-[600] flex items-center justify-center relative"
      >
        <motion.h1
            style={{
              opacity: textOpacity,
              letterSpacing: textLetterSpacing
            }}
            className="sticky top-[40%] text-[white] text-[5rem] whitespace-nowrap text-center"
        >
          My Experience
        </motion.h1>
      </motion.div>
    </div>
  );
}
