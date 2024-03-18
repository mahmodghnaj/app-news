type StorageType = "session" | "local";
type UseStorageReturnValue = {
  getItem: (key: string, type?: StorageType) => string;
  setItem: (key: string, value: string, type?: StorageType) => boolean;
  removeItem: (key: string, type?: StorageType) => void;
};

const useStorage = (): UseStorageReturnValue => {
  const storageType = (type?: StorageType): "localStorage" | "sessionStorage" =>
    `${type ?? "session"}Storage`;

  const getItem = (key: string, type?: StorageType): string => {
    return window[storageType(type)][key];
  };

  const setItem = (key: string, value: string, type?: StorageType): boolean => {
    window[storageType(type)].setItem(key, value);
    return true;
  };

  const removeItem = (key: string, type?: StorageType): void => {
    window[storageType(type)].removeItem(key);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};

export default useStorage;
