import { motion } from "framer-motion";
import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  direction?: "top" | "bottom" | "left" | "right";
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  direction = "bottom",
}) => {
  if (!isOpen) return null;

  const directionVariants = {
    top: { initial: { y: "-100%", opacity: 0 }, animate: { y: 0, opacity: 1 } },
    bottom: {
      initial: { y: "100%", opacity: 0 },
      animate: { y: 0, opacity: 1 },
    },
    left: {
      initial: { x: "-100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
    right: {
      initial: { x: "100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
    center: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { duration: 0.3 },
    },
  };

  const variant = directionVariants[direction];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={variant.initial}
        animate={variant.animate}
        exit={variant.initial}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative w-11/12 max-w-lg p-6 bg-white rounded-lg shadow-lg"
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
