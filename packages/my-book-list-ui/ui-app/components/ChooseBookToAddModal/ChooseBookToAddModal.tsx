import classNames from 'classnames';
import { useCallback, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import ArrowBackIcon from '../../assets/icons/ArrowBackIcon';
import BooksSearchRecommendationsList from '../BooksSearchRecommendationsList';
import SearchBlock from '../SearchBlock';

import { States } from '../../hocs/withDataLoader';
import { theme } from '../../layouts/Screen/Screen';

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
        <SearchBlock
          value={searchValue}
          onSearchChange={handleSearchChange}
          leftPlaceholder={
            <Link href={{ query: {} }}>
              <a className="backButton-layout">
                <ArrowBackIcon />
              </a>
            </Link>
          }
        />
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
        .backButton-layout {
          height: 30px;
        }
        .backButton-layout:before {
          content: '';
          position: absolute;
          content: '';
          top: 50%;
          width: 62px;
          height: 62px;
          left: 0px;
          transform: translateY(-50%);
        }
        .backButton-layout > :global(svg) {
          width: 30px;
          height: 30px;
          fill: ${theme.colors.baseFontColor};
        }
      `}</style>
    </>
  );
};

export default ChooseBookToAddModal;
