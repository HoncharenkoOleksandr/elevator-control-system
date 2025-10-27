import { useState } from "react";

export const useUpdateTrigger = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [__trigger, setUpdateTrigger] = useState(0);

  const updateTrigger = () => {
    setUpdateTrigger((prev) => prev + 1);
  };

  return updateTrigger;
};
