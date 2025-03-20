export function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export const debounceSearch = debounce(
  (value: string, setQuery: React.Dispatch<React.SetStateAction<{ search: string }>>) =>
    setQuery(c => ({ ...c, search: value })),
  500
);

// export function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
//   let timeout: NodeJS.Timeout;
//   return function (...args: Parameters<T>) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func(...args), wait);
//   };
// }


// export const debounceSearch = debounce((value: string, setQuery: React.Dispatch<React.SetStateAction<{
//   [key: string]: any;
//   search: string;
// }>>) => {
//   setQuery((c) => ({ ...c, search: value }));
// }, 500);