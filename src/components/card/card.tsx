import { Carousel, Typography } from "@material-tailwind/react";
import { useState } from "react";

const CarouselCard = (props: any) => {
    return (
        <div className="w-full flex justify-center">
            <Carousel className="rounded-xl" style={{ "width": "70%" }} autoplay={true}>
                {
                    props.list.map((item: any) => <SwipeCard key={item.id} item={item} />)
                }
            </Carousel>
        </div>
    )
}

const SwipeCard = (props: any) => {

    const [show, setShow] = useState(false);

    const showText = (a: any) => {
        a.preventDefault();
        setShow(true);
    }

    const pointerLeave = (e: any) => {
        e.preventDefault();
        setShow(false);
    }

    return (
        <div className="relative " onMouseEnter={(e) => showText(e)} onMouseLeave={e => pointerLeave(e)}>
            <img
                src={import.meta.env.VITE_IMAGE_URL + "/" + props.item.backdrop_path}
                alt="image 1"
                className="object-cover"
            />
            {
                show ?
                    <div className={(show ? "absolute inset-0 grid place-items-center bg-black/75" : "mt-0")}>
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                <div className="grid place-items-center text-4xl md:text-3xl lg:text-3xl">
                                    {props.item.title}
                                </div>

                                <div className="overflow-hidden lg:text-xl mt-4">
                                    {props.item.overview}
                                </div>

                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                            </Typography>
                        </div>
                    </div>
                    :
                    <></>
            }

        </div>
    );
};

export default CarouselCard;