import React, { useState, useRef, useEffect, useCallback } from 'react';
import SearchButton from '../Button/SearchButton';
import HorizontalCard from '../Card/HorizontalCard';
import axios from 'axios';

interface Result {
  p_id: number;
  p_title: string;
  p_like: number;
  uno: number;
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Result[]>([]);
  const [visibleResults, setVisibleResults] = useState<Result[]>([]);
  const [index, setIndex] = useState(0); //현재 보여주고 있는 데이터의 인덱스
  const batchSize = 3; // 한 번에 보여줄 데이터 개수
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback(
    (node: HTMLLIElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && index < results.length) {
          loadMoreItems();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, index, results.length],
  );

  useEffect(() => {
    if (query.trim() !== '') {
      search();
    }
  }, [query]);
  const loadMoreItems = () => {
    setIsLoading(true);
    setVisibleResults((prevVisibleResults) => [
      ...prevVisibleResults,
      ...results.slice(index, index + batchSize),
    ]);
    setIndex((prevIndex) => prevIndex + batchSize);
    console.log('load');
    setIsLoading(false);
  };

  const search = async () => {
    setIndex(0);
    setVisibleResults([]);
    setResults([]);
    setIsLoading(true);

    // const mockResults = [
    //   { name: '서울' },
    //   { name: '부산' },
    //   { name: '제주도' },
    //   { name: '강릉' },
    //   { name: '전주' },
    //   { name: '서울' },
    // ];

    try {
      const response = await axios.get(
        `http://localhost:8080/api/search/searchPost?query=${encodeURIComponent(query)}`,
      );
      const data = await response.data.posts;
      // if (query.trim() === '') {
      //   // 공백 상황에서는 모든 데이터를 가나다 순으로 정렬하여 호출
      //   const sortedResults = data.sort((a: Result, b: Result) =>
      //     a.p_title.localeCompare(b.p_title),
      //   );
      //   setResults(sortedResults);
      // } else {
      //   // 검색어와 일치하는 결과를 필터링하고 가나다 순으로 정렬
      //   const filteredResults = data
      //     .filter((result: Result) => result.p_title.includes(query))
      //     .sort((a: Result, b: Result) => a.p_title.localeCompare(b.p_title));
      //   setResults(filteredResults);
      // }
      setResults([...data]);
      setVisibleResults(results.slice(0, batchSize));
      setIndex(batchSize);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setIsLoading(false);
    }

    // //무한스크롤 작동 테스트 코드
    // setResults(mockResults);
    // setVisibleResults(results.slice(0, batchSize));
    // setIndex(batchSize);
    // setIsLoading(false);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    search();

    // API 호출 부분은 주석 처리
    // try {
    //   const response = await fetch(`https://api.example.com/search?q=${query}`);
    //   const data = await response.json();
    //   setResults(data.results); // 데이터 형식에 맞게 설정하세요.
    // } catch (error) {
    //   console.error('Error fetching search results:', error);
    // }
  };

  return (
    <div>
      <form className="w-11/12 mt-5 mx-auto" onSubmit={handleSearch}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div
          className={`relative rounded-lg border transition-colors ${
            isFocused ? 'border-main-green' : 'border-gray-300'
          }`}
        >
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className={`block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg transition-colors focus:outline-none ${
              isFocused
                ? 'border-none ring-2 ring-hover-green'
                : 'bg-slate-100 dark:bg-gray-700'
            }`}
            placeholder="가고 싶은 여행을 입력!"
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <SearchButton onClick={handleSearch} isFocused={isFocused} />
          </div>
        </div>
      </form>
      <div className="flex flex-col items-center pb-16">
        {visibleResults.length > 0 && (
          <ul className="mt-4">
            {visibleResults.map((result, index) => (
              <li
                key={index}
                className="p-2"
                ref={visibleResults.length === index + 1 ? lastItemRef : null}
              >
                <HorizontalCard
                  title={result.p_title}
                  content=""
                  imageUrl={process.env.PUBLIC_URL + '/img/eximgH.png'}
                />
              </li>
            ))}
          </ul>
        )}
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default SearchBar;
