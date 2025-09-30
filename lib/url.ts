interface UrlQueryParams {
    params: string;
    key: string;
    value: string;
  }
  
  interface RemoveUrlQueryParams {
    params: string;
    keysToRemove: string[];
  }
  
  export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
    const searchParams = new URLSearchParams(params);
  
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
  
    return `${window.location.pathname}?${searchParams.toString()}`;
  };
  
  export const removeKeysFromUrlQuery = ({
    params,
    keysToRemove,
  }: RemoveUrlQueryParams) => {
    const searchParams = new URLSearchParams(params);
  
    keysToRemove.forEach((key) => {
      searchParams.delete(key);
    });
  
    const queryString = searchParams.toString();
    return queryString
      ? `${window.location.pathname}?${queryString}`
      : window.location.pathname;
  };
  