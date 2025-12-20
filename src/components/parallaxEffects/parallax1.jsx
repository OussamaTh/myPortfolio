import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";



export default function Parallax1() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"]
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [0, 1])
  /* const textScale = useTransform(scrollYProgress,[0,0.8],[0,1]) */
  const textLetterSpacing = useTransform(scrollYProgress, [0, 0.8], ["128px", "-20px"])
  const smTextLetterSpacing = useTransform(scrollYProgress, [0, 0.8], ["30px", "-5px"])

  return (
    <div className="min-h-[100vh] bg-black flex items-center justify-center relative ">
      <motion.div
        ref={ref}
        className="flex h-[250vh] font-[600] flex items-center justify-center "
      >
        <motion.h1
          style={{
            opacity: textOpacity,
            letterSpacing: width < 450 ? textLetterSpacing : smTextLetterSpacing
          }}
          className="sticky top-[40%] text-[white] text-[5rem] whitespace-nowrap text-center max-sm:text-[1.5rem] "
        >
          My Experience
        </motion.h1>
      </motion.div>
    </div>
  );
}
