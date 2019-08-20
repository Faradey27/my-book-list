import { defineMessages, useIntl } from 'react-intl';

import AddIcon from '../../../assets/icons/AddIcon';
import Block from '../../../components/Block';
import SearchInput from '../../../components/SearchInput';

import { theme } from '../../../layouts/Screen/Screen';

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
        <span className="addIcon-layout">
          <AddIcon />
        </span>
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
          width: 42px;
          height: 42px;
          right: 10px;
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
