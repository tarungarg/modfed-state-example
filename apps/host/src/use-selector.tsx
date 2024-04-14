import { useSelector } from "react-redux";

export function useStoreSelector<T>(fn: (state: any) => T) {
  const selectorData = useSelector((state: any) => fn(state));
  return selectorData;
}
