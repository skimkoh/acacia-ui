import { useEffect } from "react";

export const useFoucHandler = (id: string, delay?: number) => {
  const removeNoFouc = () => {
    if (typeof window !== undefined) {
      const noFouc = document.getElementById(id);

      if (noFouc) {
        noFouc.removeAttribute("id");
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      removeNoFouc();
    }, delay);
  }, []);
};
