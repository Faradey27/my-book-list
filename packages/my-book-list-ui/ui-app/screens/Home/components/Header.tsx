import { defineMessages, useIntl } from 'react-intl';

import Link from 'next/link';

import AddIcon from '../../../assets/icons/AddIcon';
import Block from '../../../components/Block';
import SearchInput from '../../../components/SearchInput';

import { theme } from '../../../layouts/Screen/Screen';

import { Modals } from '../../../index.d';

const messages = defineMessages({
  search: {
    id: 'home.search',
    defaultMessage: 'Search by title, author or series',
  },
});

const Header = () => {
  const intl = useIntl();
  return (
    <>
      <Block>
        <div className="search-layout">
          <SearchInput placeholder={intl.formatMessage(messages.search)} />
        </div>
        <Link href={{ query: { modalType: Modals.ChooseBook } }}>
          <a className="addIcon-layout">
            <AddIcon />
          </a>
        </Link>
      </Block>
      <style jsx>{`
        .search-layout {
          width: 100%;
          margin-right: 16px;
        }
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
