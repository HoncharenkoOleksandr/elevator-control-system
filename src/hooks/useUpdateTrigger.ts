import { useState } from "react";

export const useUpdateTrigger = () => {
  const [, setUpdateTrigger] = useState(0);

  const updateTrigger = () => {
    setUpdateTrigger((prev) => prev + 1);
  };

  return updateTrigger;
};
