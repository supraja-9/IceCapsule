import Sidebar from "../components/Sidebar";
import FileList from "../components/FileList";
import UploadButton from "../components/UploadButton";

const Home = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 p-4">
      <UploadButton />
      <FileList />
    </div>
  </div>
);


export default Home;

