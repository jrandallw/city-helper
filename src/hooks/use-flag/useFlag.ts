import useSWR from 'swr';

export const useFlag = (key: string) => {
  const { data } = useSWR(`/api/flags/${key}/check`);

  return data?.flag.enabled;
};
