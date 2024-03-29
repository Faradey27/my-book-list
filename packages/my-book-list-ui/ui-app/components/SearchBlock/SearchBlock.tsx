import { defineMessages, useIntl } from 'react-intl';

import Block from '../Block';
import SearchInput from '../SearchInput';

const messages = defineMessages({
  search: {
    id: 'home.search',
    defaultMessage: 'Search by title, author or series',
  },
});

interface ISearchBlockProps {
  value: string;
  onSearchChange: (value: string) => void;
  rightPlaceholder?: React.ReactNode;
  leftPlaceholder?: React.ReactNode;
}

const SearchBlock = ({
  value,
  rightPlaceholder,
  leftPlaceholder,
  onSearchChange,
}: ISearchBlockProps) => {
  const intl = useIntl();
  return (
    <>
      <Block>
        {leftPlaceholder}
        <div className="search-layout">
          <SearchInput
            placeholder={intl.formatMessage(messages.search)}
            value={value}
            onSearchChange={onSearchChange}
          />
        </div>
        {rightPlaceholder}
      </Block>
      <style jsx>{`
        .search-layout {
          width: 100%;
          margin-left: ${leftPlaceholder ? 16 : 0}px;
          margin-right: ${rightPlaceholder ? 16 : 0}px;
        }
      `}</style>
    </>
  );
};

export default SearchBlock;
