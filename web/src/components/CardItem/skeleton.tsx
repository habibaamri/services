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
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const SkeletonCard = () => {
  return (
    <Card onClick={() => {}} cursor={"initial"} className="card" style={{minWidth: "300px"}}>
      <CardBody>
        <Center className="circleImage">
          <SkeletonCircle size="20" />
        </Center>

        <Stack mt="8" spacing="4">
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          <Box className="versionContainer">
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default SkeletonCard;
