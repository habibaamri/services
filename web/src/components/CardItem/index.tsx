import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Box,
  Center,
} from "@chakra-ui/react";
import { openUrl } from "../../services";
import { IServices } from "../../types";

import "./style.scss";

type IProps = {
  data: IServices;
};

const CardItem = ({ data }: IProps) => {
  if (!data) return null;
  let { nom, lien, version, description } = data;
  return (
    <Card
      onClick={() => openUrl(lien)}
      cursor={lien ? "pointer" : "initial"}
      className="card"
    >
      <CardBody>
        <Center className="circleImage">
          <Image className="" src={data?.miniature} alt={nom} />
        </Center>

        <Stack mt="8" spacing="4">
          <Heading className="title" size="md">
            {nom}
          </Heading>
          <Box className="versionContainer">
            <Text>{version}</Text>
          </Box>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardItem;
