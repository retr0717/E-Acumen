import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const RowCard = (props: any) => {
  const [show, setShow] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

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

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  if (props.item.backdrop_path === null) {
    console.log(
      props.item.title,
      "  ",
      props.item.backdrop_path,
      "type : ",
      typeof props.item.backdrop_path,
    );
  }

  return (
    <div className="w-full relative">
      <div
        className="flex"
        style={{ width: "20rem" }}
        onMouseEnter={showText}
        onMouseLeave={pointerLeave}
        onClick={handleOpenModal}
      >
        <img
          className="object-cover rounded-xl"
          style={{ height: "10rem" }}
          src={import.meta.env.VITE_IMAGE_URL + props.item.backdrop_path}
          alt="Movie"
        />

        {show && (
          <div
            className="text-center absolute inset-0 grid place-items-center bg-black/75 rounded-xl"
            style={{ width: "17.8rem" }}
          >
            <div className="text-center">
              <div>
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  placeholder={""}
                >
                  <div className="mt-2 text-center text-sm text-xl whitespace-normal">
                    {props.item.title}
                  </div>
                  <div className="lg:text-2xl mt-4" style={{ color: "yellow" }}>
                    {Math.round(props.item.vote_average)} / 10
                  </div>
                </Typography>
              </div>
            </div>
          </div>
        )}

        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {props.item.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {/* Place any additional information you want to show in the modal */}
              Movie details here...
            </Typography>
            <Button onClick={handleCloseModal}>Close</Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default RowCard;
