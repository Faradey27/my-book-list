import Block from '../../components/Block';
import SearchInput from '../../components/SearchInput';
import Screen from '../../layouts/Screen';

import AddIcon from '../../assets/icons/AddIcon';
import { theme } from '../../layouts/Screen/Screen';
import Section from '../../components/Section';
import Title from '../../components/Title';

const Home = () => {
  return (
    <Screen name="home">
      <Block>
        <div>
          <SearchInput placeholder={'Search by title, author or series'} />
        </div>
        <span>
          <AddIcon />
        </span>
      </Block>
      <Section>
        <Title>112 Books</Title>
      </Section>
      <style jsx>{`
        div {
          width: 100%;
          margin-right: 16px;
        }
        span {
          height: 30px;
        }
        span:before {
          content: '';
          position: absolute;
          content: '';
          top: 50%;
          width: 42px;
          height: 42px;
          right: 10px;
          transform: translateY(-50%);
        }
        span > :global(svg) {
          width: 30px;
          height: 30px;
          fill: ${theme.colors.accentColor};
        }
      `}</style>
    </Screen>
  );
};

export default Home;
