import {GoTrash } from 'react-icons/go'
import Button from './Button'
import {removeUsers} from '../store'
import {useThunk} from '../hooks/use-thunk'
import ExpandablePanel from './ExpandedPanel'
import AlbumsList from './AlbumsList'

function UsersListItems({user}) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUsers);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <GoTrash />
      </Button>
      {error && <div>Error deleting user.</div>}
      {user.name}
    </>
  );

  return <ExpandablePanel header={header}>
    <AlbumsList user={user}/>
  </ExpandablePanel>;
}

export default UsersListItems
