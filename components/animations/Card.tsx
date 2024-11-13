import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ThreeDCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  return (
    <motion.div
      className="mt-[40%] shadow-lg rounded-lg p-5 bg-white cursor-pointer"
      style={{ perspective: 1000 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="flex flex-col items-center justify-center rounded-lg transform-gpu"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="mb-4">
          <h1 className="text-lg font-bold">Hello</h1>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2024/11/07/02/32/ai-generated-9179546_1280.jpg"
            alt=""
            className="rounded-lg"
            width={400}
            height={400}
          />
        </div>
        <div className="mt-5">
          <h1 className="text-md text-gray-600">Description</h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ThreeDCard;
