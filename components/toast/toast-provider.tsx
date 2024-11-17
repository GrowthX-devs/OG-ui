import { useState } from "react";
import { Toast, ToastProps } from "./toast";

export interface ToasterProps {
  children: (
    showToast: (props: Omit<ToastProps, "id" | "onClose">) => void
  ) => React.ReactNode;
}

export const Toaster: React.FC<ToasterProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const showToast = (props: Omit<ToastProps, "id" | "onClose">) => {
    const id = Math.random().toString(36).slice(2, 11);
    setToasts((prev) => [...prev, { ...props, id, onClose: removeToast }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <>
      {children(showToast)}
      <div className="fixed top-4 right-4 z-50">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    </>
  );
};
