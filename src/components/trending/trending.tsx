
import { list } from "../../state/state";
import CarouselCard from "../card/card";

const Trending = () => {

  return <div>
    <div>
      <CarouselCard list={list} />
    </div>
  </div>
};

export default Trending;
