import { useRecoilState } from "recoil";
import { lazy } from "react";
import { ActionState, ComedyState, DocState, HorrorState, RomState } from "../../state/state";

//components
const Trending = lazy(() => import('../trending/trending'));
const Row = lazy(() => import('../row/row'));

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
        <Stack spacing={2} sx={{width:"100%"}}>
          <div className="">
            <Trending />
          </div>
        </Stack>
      </Container>
  
      <div className="p-6 font-mono" style={{"width" : "100%"}}>
            <Row list={action} title={"Action"}/>
            <Row list={rom} title={"Romance"}/>
            <Row list={comedy} title={"Comedy"}/>
            <Row list={doc} title={"Documentary"}/>
            <Row list={horror} title={"Horror"}/>
      </div>
    </Box>
  );
};

export default Home;
