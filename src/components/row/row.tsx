import { useState } from "react";
import { debounce } from "lodash";
import { Typography, list } from "@material-tailwind/react";

const Row = (props: any) => {

    const [show, setShow] = useState(false);

    console.log("row props : ", props);

    return <div className="overflow-x-auto whitespace-nowrap w-full">
        <h2 className="p-5 text-3xl">{props.title}</h2>
        <div className="flex space-x-4 p-4" style={{ "width": "100%" }}>

            {
                props.list.map((item: any) => <RowCard key={item.id} item={item} show={show} setShow={setShow} />)
            }
        </div>
    </div>
}

const RowCard = (props: any) => {
  const [show, setShow] = useState(false);
  let timeout: any;

  const showText = () => {
      clearTimeout(timeout);
      setShow(true);
  };

  const pointerLeave = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
          setShow(false);
      }, 200);
  };

  if(props.item.backdrop_path === null)
  {
    console.log(props.item.title ,"  ",props.item.backdrop_path , "type : ", typeof(props.item.backdrop_path) );
  }

  return (
      <div className="w-full relative">
          <div
              className="flex"
              style={{ width: "20rem" }}
              onMouseEnter={showText}
              onMouseLeave={pointerLeave}
          >
              <img
                  className="object-cover rounded-xl"
                  style={{ height: "10rem" }}
                  src={import.meta.env.VITE_IMAGE_URL + props.item.backdrop_path }
                  alt="Movie"
              />
              {show && (
                  <div className="text-center absolute inset-0 grid place-items-center bg-black/75 rounded-xl" style={{"width":"17.8rem"}}>
                      <div className="text-center">
                          <div>
                              <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl" placeholder={""}>
                                  <div className="mt-2 text-center text-sm text-xl whitespace-normal">
                                      {props.item.title}
                                  </div>
                                  <div className="lg:text-2xl mt-4" style={{ color: 'yellow' }}>
                                      {Math.round(props.item.vote_average)} / 10
                                  </div>
                              </Typography>
                          </div>
                      </div>
                  </div>
              )}
          </div>
      </div>
  );
};

export default Row;