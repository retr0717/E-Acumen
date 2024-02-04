
import {list } from "../../state/state";
import CarouselCard from "../card/card";

const Trending = () => {

  console.log("top list ",list);

  return <div className="">
    <div className="">
      <CarouselCard list={list}/>
    </div>
  </div>
};

export default Trending;
