// import { deletePhoto, getAllPhotos } from "./actions/cloudinaryActions";
import { UserPhotosUploader } from "./UserPhotosUploader";
import { PhotosList } from "./PhotosList";
import { CList } from "./CList";

export const UserPhotosManager = () => {
  // const [photos, setPhotos] = useState<Array<any>>([]);
  const photos = [];
  // useEffect(() => {
  //   const getData = async () => {
  //     const photos = await getAllPhotos();
  //     if (photos) setPhotos(photos);
  //   };
  //   getData();
  // });
  return (
    <>
      <UserPhotosUploader />
      <PhotosList photos={photos} />
      <br />
      <CList />
    </>
  );
};
