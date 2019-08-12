import Block from '../../components/Block';
import SearchInput from '../../components/SearchInput';
import Screen from '../../layouts/Screen';

const Home = () => {
  return (
    <Screen name="home">
      <Block>
        <SearchInput placeholder={'Search by title, author or series'} />
      </Block>
    </Screen>
  );
};

export default Home;
