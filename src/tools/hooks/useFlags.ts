import { useCallback, useState } from "react";

type UseFlag = (
  defaultValue?: boolean
) => [boolean, () => void, () => void, () => void];

const useFlag: UseFlag = (defaultValue = false) => {
  const [boolean, setBoolean] = useState(defaultValue);

  const setTrue = useCallback(() => {
    setBoolean(true);
  }, []);

  const setFalse = useCallback(() => {
    setBoolean(false);
  }, []);

  const toggle = useCallback(() => {
    setBoolean((state) => !state);
  }, [setBoolean]);

  return [boolean, setTrue, setFalse, toggle];
};

export default useFlag;
