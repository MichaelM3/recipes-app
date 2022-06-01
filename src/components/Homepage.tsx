import { FC } from "react";
import Header from "./Header";
import SearchContainer from "./SearchContainer";

const Homepage: FC = () => {
  return (
    <div className="flex flex-col items-center h-full pt-3 bg-bgPic">
      <Header />
      <SearchContainer />
    </div>
  )
}

export default Homepage;
