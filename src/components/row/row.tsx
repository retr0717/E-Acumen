import { useState } from "react";
import RowCard from "../row-card/row-card";

const Row = (props: any) => {
  const [show, setShow] = useState(false);

  return (
    <div className="overflow-x-auto whitespace-nowrap w-full">
      <h2 className="p-5 text-3xl">{props.title}</h2>
      <div className="flex space-x-4 p-4" style={{ width: "100%" }}>
        {props.list.map((item: any) => (
          <RowCard key={item.id} item={item} show={show} setShow={setShow} />
        ))}
      </div>
    </div>
  );
};

export default Row;