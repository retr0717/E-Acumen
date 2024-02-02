import { useRecoilState } from "recoil";
import { ActionState, ComedyState, DocState, HorrorState, RomState } from "../../state/state";
import Trending from "../trending/trending";

//Material Ui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

const Home = () => {


  const [action] = useRecoilState(ActionState);
  const [comedy] = useRecoilState(ComedyState);
  const [rom] = useRecoilState(RomState);
  const [horror] = useRecoilState(HorrorState);
  const [doc] = useRecoilState(DocState);

  return (
    <Box sx={{ width: "100%" }}>
      <Container sx={{ marginTop: "2rem" }}>
        <Stack spacing={2}>
          <Trending />
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
