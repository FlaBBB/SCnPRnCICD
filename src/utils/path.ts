export const getPath = (path: string): string => {
    const base = import.meta.env.BASE_URL;
    return `${path}`.replace(/^\//, '');
  }