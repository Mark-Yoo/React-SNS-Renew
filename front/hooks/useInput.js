import { useState, useCallback } from "react";

export default (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    console.log("now working");
    setValue(e.target.value);
  }, []);
  return [value, handler];
};
