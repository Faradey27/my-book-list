import classNames from 'classnames';
import { useCallback, useState } from 'react';

import { useRouter } from 'next/router';

import BooksSearchRecommendationsList from '../BooksSearchRecommendationsList';
import SearchBlock from '../SearchBlock';

import { States } from '../../hocs/withDataLoader';

interface IChooseBookToAddModalProps {
  isOpen: boolean;
}

const ChooseBookToAddModal = ({ isOpen }: IChooseBookToAddModalProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const handleSearchChange = useCallback(
    value => {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, search: value },
      });
      setSearchValue(value);
    },
    [router]
  );

  return (
    <>
      <div
        data-hook="chooseBookToAddModal-component"
        className={classNames('chooseBookToAddModal-component', {
          ['opened']: isOpen,
        })}
      >
        <SearchBlock value={searchValue} onSearchChange={handleSearchChange} />
        <BooksSearchRecommendationsList
          state={States.loading}
          payload={[]}
          searchValue={searchValue}
        />
      </div>
      <style jsx>{`
        .chooseBookToAddModal-component {
          position: fixed;
          width: 100%;
          height: 100vh;
          top: 0;
          background: #fff;
          transform: translateY(100vh);
          transition: transform 0.2s;
        }
        .opened {
          transform: translateY(0);
        }
      `}</style>
    </>
  );
};

export default ChooseBookToAddModal;
