import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from 'react-query';
import { Species } from "./Species";

const initialUrl = "https://swapi.dev/api/species/";
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfiniteSpecies() {

  const { data, fetchNextPage, hasNextPage, isLoading, isFetching, isError, error } = useInfiniteQuery(
    'sw-species',
    ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined
    }
  );
      return <InfiniteScroll />;
};
