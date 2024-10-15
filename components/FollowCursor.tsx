import React from "react";
import { motion } from "framer-motion";
import { getRandomColor } from "@/lib/customfunctions";

const FollowCursor = ({
  x,
  y,
  info,
}: {
  x: number;
  y: number;
  info: { email: string; name: string; avatar?: string };
}) => {
  const color = getRandomColor(info.email);
  return (
    <motion.div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
      }}
      initial={{ x, y, scale: 0.5, opacity: 0 }}
      animate={{ x, y, scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        damping: 30,
        mass: 0.8,
        stiffness: 350,
      }}
      exit={{
        scale: 0.5,
        opacity: 0,
      }}
    >
      <CursorSvg color={color} />
      <motion.div
        style={{
          background: color,
        }}
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
      >
        {info?.name || info?.email}
      </motion.div>
    </motion.div>
  );
};
function CursorSvg({ color }: { color: string }) {
  return (
    <svg width="32" height="44" viewBox="0 0 24 36" fill="none">
      <path
        fill={color}
        d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
      />
    </svg>
  );
}

export default FollowCursor;
