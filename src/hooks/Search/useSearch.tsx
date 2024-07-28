import {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {fetchApi} from '../../services';

export function useSearch() {
  const [text, setText] = useState('');

  const {data, refetch} = useQuery({
    queryKey: ['searchData'],
    queryFn: () => fetchApi({type: 'forecast', city: text}),
    enabled: false,
  });

  useEffect(() => {
    if (text !== '') {
      refetch();
      setText('');
    }
  }, [text, refetch]);

  return {
    text,
    refetch,
    data,
    setText,
  };
}
