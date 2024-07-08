import React, { useState } from 'react';
import SearchButton from '../Button/SearchButton';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ name: string }[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    const mockResults = [
      { name: '서울' },
      { name: '부산' },
      { name: '제주도' },
      { name: '강릉' },
      { name: '전주' },
    ];

    if (query.trim() === '') {
      // 공백 상황에서는 모든 데이터를 가나다 순으로 정렬하여 호출
      const sortedResults = mockResults.sort((a, b) =>
        a.name.localeCompare(b.name),
      );
      setResults(sortedResults);
    } else {
      // 검색어와 일치하는 결과를 필터링하고 가나다 순으로 정렬
      const filteredResults = mockResults
        .filter((result) => result.name.includes(query))
        .sort((a, b) => a.name.localeCompare(b.name));
      setResults(filteredResults);
    }
  };

  return (
    <div>
      <form className="w-11/12 mx-auto" onSubmit={handleSearch}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div
          className={`relative rounded-lg border transition-colors ${
            isFocused ? 'border-main-color' : 'border-gray-300'
          }`}
        >
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className={`w-4 h-4 ${
                isFocused
                  ? 'text-hover-color'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
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
                ? 'border-none ring-2 ring-hover-color'
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
      <div>
        {results.length > 0 && (
          <ul className="mt-4">
            {results.map((result, index) => (
              <li key={index} className="p-2 border-b border-gray-300">
                {result.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
