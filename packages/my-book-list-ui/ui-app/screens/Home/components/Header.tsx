import Link from 'next/link';

import AddIcon from '../../../assets/icons/AddIcon';
import SearchBlock from '../../../components/SearchBlock';

import { theme } from '../../../layouts/Screen/Screen';

import { Modals } from '../../../index.d';

interface IHeaderProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const Header = ({ searchValue, onSearchChange }: IHeaderProps) => {
  return (
    <>
      <SearchBlock
        value={searchValue}
        onSearchChange={onSearchChange}
        rightPlaceholder={
          <Link href={{ query: { modalType: Modals.ChooseBook } }}>
            <a className="addIcon-layout">
              <AddIcon />
            </a>
          </Link>
        }
      />
      <style jsx>{`
        .addIcon-layout {
          height: 30px;
        }
        .addIcon-layout:before {
          content: '';
          position: absolute;
          content: '';
          top: 50%;
          width: 62px;
          height: 62px;
          right: 0px;
          transform: translateY(-50%);
        }
        .addIcon-layout > :global(svg) {
          width: 30px;
          height: 30px;
          fill: ${theme.colors.accentColor};
        }
      `}</style>
    </>
  );
};

export default Header;
