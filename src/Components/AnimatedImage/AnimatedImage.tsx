"use client";

import techLogo from "../../../public/techs.png";
import * as motion from "motion/react-client";
import { useState } from "react";

export default function DraggableImage() {
  const [, setActiveDirection] = useState<"x" | "y" | null>(null);

  return (
    <motion.img
      src={techLogo}
      alt="Meine Technologien"
      className="w-[90%] lg:w-full max-w-[525px] mx-auto cursor-grab"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut", once: true },
      }}
      drag
      dragDirectionLock
      onDirectionLock={(direction) => setActiveDirection(direction)}
      onDragEnd={() => setActiveDirection(null)}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
      dragElastic={0.2}
      whileDrag={{ cursor: "grabbing" }}
    />
  );
}
