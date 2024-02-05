import { useRecoilState } from "recoil";
import { ActionState, ComedyState, DocState, HorrorState, RomState } from "../../state/state";
import Trending from "../trending/trending";

//Material Ui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Row from "../row/row";
import { WidthFull } from "@mui/icons-material";

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
