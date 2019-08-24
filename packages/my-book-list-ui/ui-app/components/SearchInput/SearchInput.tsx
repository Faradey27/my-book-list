import { useState } from 'react';

import CloseIcon from '../../assets/icons/CloseIcon';
import SearchIcon from '../../assets/icons/SearchIcon';

import { theme } from '../../layouts/Screen/Screen';

interface ISearchInputProps {
  value: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput = ({
  placeholder,
  value,
  onSearchChange,
}: ISearchInputProps) => {
  return (
    <div data-hook="searchInput-component" className="searchInput-component">
      <input
        id="search-input"
        placeholder={placeholder}
        value={value}
        onChange={e => onSearchChange(e.target.value)}
      />
      <label htmlFor="search-input">
        <SearchIcon />
      </label>
      <span
        className={value ? 'clear-search-input' : 'clear-search-input-hide'}
        onClick={() => onSearchChange('')}
      >
        <CloseIcon />
      </span>
      <style jsx>{`
        .searchInput-component {
          position: relative;
        }
        input {
          height: 35px;
          background: ${theme.colors.baseBackgroundColor};
          width: 100%;
          padding-left: 40px;
          padding-right: 30px;
          padding-top: 20px;
          padding-bottom: 20px;
          border-radius: 35px;
          font-size: 13px;
        }
        label {
          position: absolute;
          top: 50%;
          left: 10px;
          margin-top: -12px;
        }
        span {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 50%;
          right: 0;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          background: rgba(0, 0, 0, 0.12);
          margin-top: -12px;
          margin-right: 16px !important;
          cursor: pointer;
        }
        span:before {
          content: '';
          position: absolute;
          content: '';
          left: 50%;
          top: 50%;
          width: 48px;
          height: 48px;
          margin-left: -24px;
          margin-top: -24px;
        }
        span > :global(svg) {
          width: 16px;
          height: 16px;
          opacity: 0.54;
          fill: ${theme.colors.baseFontColor};
        }
        .clear-search-input-show {
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        }
        .clear-search-input-hide {
          opacity: 0;
          pointer-events: none;
          visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default SearchInput;
