import { GoTrash } from "react-icons/go";
import Button from "./Button";
import ExpandedPanel from "./ExpandedPanel";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumsListItem({ album }) {
  const [removeAlbum, result] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button className="mr-2" onClick={handleRemoveAlbum}>
        <GoTrash />
      </Button>
      {album.title}
    </>
  );

  return (
    <ExpandedPanel key={album.id} header={header}>
      <PhotosList album={album}/>
    </ExpandedPanel>
  );
}

export default AlbumsListItem;
