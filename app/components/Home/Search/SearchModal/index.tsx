import React, { FormEvent, useEffect, useState } from 'react';

import IconBack from '@/assets/images/icon_back_black.svg';
import IconGraySearch from '@/assets/images/icon_graySearch.svg';
import IconRemoveValue from '@/assets/images/Icon_removeValue.svg';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/common/Modal';
import getAdmAddr, { AdmAddrData } from '@/utils/getAdmAddr';
import { useModal } from '@/hooks/useModal';
import useDebounceFunction from '@/hooks/utils/useDebounceFunction';
import RecentSearch from './RecentSearch';
import RecommendSearch from './RecommendSearch';
import SearchResult from './SearchResult';

export interface QueryState {
  key: string;
  data: AdmAddrData[];
}

const SearchModal = () => {
  const { closeModal } = useModal();

  const [query, setQuery] = useState<QueryState>({ key: '', data: [] });
  const [search, setSearch] = useState<string | null>(null);
  const [recentSearch, setRecentSearch] = useState<string[] | null>(null);

  useEffect(() => {
    /* 최근 검색어 세션 불러오기 */
    const strRecentSearch = sessionStorage.getItem('recentSearch');
    const recentSearchList = strRecentSearch ? JSON.parse(strRecentSearch) : [];

    setRecentSearch(recentSearchList);
  }, []);

  const getPlaceList = async (search: string) => {
    const response = await getAdmAddr(search);
    response && setQuery((prev) => ({ ...prev, data: response }));
  };

  const setDebouncePlaceList = useDebounceFunction(getPlaceList, 300);

  const handleChangeSearchValue = (value: string) => {
    setSearch(null);
    setQuery((prev) => ({ ...prev, key: value }));
    setDebouncePlaceList(value);
  };

  const handleUpdateRecentSearch = (newSearch: string) => {
    if (!recentSearch || newSearch === '') return;

    // 이미 있는 검색어라면 아무것도 하지 않음
    if (recentSearch.includes(newSearch)) {
      return;
    }

    // 새로운 검색어를 배열의 맨 뒤에 추가
    setRecentSearch([...recentSearch, newSearch]);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(query.key);

    if (!recentSearch?.includes(query.key)) {
      handleUpdateRecentSearch(query.key);
    }
  };

  const handleClickRecommend = (place: AdmAddrData) => {
    setSearch(place.fullAddr);
    setQuery((prev) => ({ ...prev, key: place.fullAddr }));

    if (!recentSearch?.includes(place.fullAddr)) {
      handleUpdateRecentSearch(place.fullAddr);
    }
  };

  const handleClickBack = () => {
    closeModal();
    setSearch(null);
    setQuery({ data: [], key: '' });
  };

  const handleClickClearSearch = () => {
    setSearch(null);
    setQuery((prev) => ({ ...prev, key: '' }));
  };

  useEffect(() => {
    if (recentSearch) {
      sessionStorage.setItem('recentSearch', JSON.stringify(recentSearch));
    }
  }, [recentSearch]);

  return (
    <Modal type={MODAL_TYPE.SEARCH} variant={MODAL_VARIANT.ALL}>
      <div className='w-full h-full bg-white'>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className={`w-full pl-5 pr-6 pb-10px pt-18px flex justify-between items-center gap-3`}
        >
          <div onClick={handleClickBack} className='cursor-pointer'>
            <IconBack />
          </div>

          <div className={`searchbar flex-grow px-3 py-10px bg-gray-50`}>
            <IconGraySearch />
            <input
              type='text'
              value={query.key}
              onChange={(e) => handleChangeSearchValue(e.target.value)}
              placeholder='지역, 동네명, 주소 검색'
              className='w-full flex-grow body1 bg-transparent
              placeholder:text-gray-300 caret-primary-500'
            />
            {query.key !== '' && (
              <div className='cursor-pointer' onClick={handleClickClearSearch}>
                <IconRemoveValue />
              </div>
            )}
          </div>
        </form>

        {query.key === '' && search === null && (
          <RecentSearch
            recentSearch={recentSearch}
            setRecentSearch={setRecentSearch}
            setSearch={setSearch}
            setQuery={setQuery}
          />
        )}

        {/* 검색어 추천 */}
        {query.key !== '' && search === null ? (
          <RecommendSearch query={query} handleClickRecommend={handleClickRecommend} />
        ) : null}

        {/* 검색 결과 */}
        {query.key !== '' && search !== null && <SearchResult search={search} />}
      </div>
    </Modal>
  );
};

export default SearchModal;
