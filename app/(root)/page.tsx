import BookList from '@/components/ui/BookList';
import BookOverview from '@/components/ui/BookOverview';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <>
      <BookOverview />
      <BookList />
    </>
  );
};

export default Home;
