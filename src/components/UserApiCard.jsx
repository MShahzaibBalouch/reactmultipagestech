import Pagination from './Pagination';
import Search from './Search';
import Stories from './Stories';
import '../App.css';

const UserApiCard = () => {
  return (
    <>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
};

export default UserApiCard;