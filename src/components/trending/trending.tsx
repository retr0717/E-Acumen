import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { ActionSelector, ActionState, ComedySelector, ComedyState } from "../../state/state";

const Trending = () => {

  const [action, setActList] = useRecoilState(ActionState);
  const [comedy , setComList] = useRecoilState(ComedyState);

  console.log("list : " ,action);
  console.log("comedy : " ,comedy);

  return <div>Found it</div>;
};

export default Trending;
