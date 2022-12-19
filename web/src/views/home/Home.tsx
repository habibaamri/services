import React, { useEffect, useState } from "react";

import "./styles.scss";
import { Flex, Box, Text, Link, Heading } from "@chakra-ui/react";
import SidebarHeader from "../../components/SideBar";
import Card from "../../components/CardItem";
import Breadcrumb from "../../components/Breadcrumb";
import { colors } from "../../themes";
import useServices from "../../services";
import { IServices } from "../../types";
import { useSelector } from "react-redux";
import { getServicesSelector } from "../../store/services/selectors";
import { setDataServices } from "../../store/services/actions";
import SkeletonCard from "../../components/CardItem/skeleton";

const Home = () => {
  // let data: IServices[] = [];
  const dataFromStore = useSelector(getServicesSelector); //to use if need....
  const [services, setServices] = useState<IServices[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { data } = useServices();

  useEffect(() => {
    if (data) {
      setDataServices(data?.data);
      setIsLoading(false);
      setServices(data?.data);
    }

    return () => {};
  }, [data]);

  return (
    <div className="HomeContainer">
      <SidebarHeader />
      <Flex flex={1} flexDirection="column">
        <Breadcrumb
          items={[
            {
              label: "",
              href: "/home",
            },
          ]}
        />
        <Box className="innerContainer">
          <Box className="categoryContainer">
            <span className="icon-esd-catalog"></span>
            <Heading className="category-title">Catalogue des Services</Heading>
          </Box>
          <Text className="category-desc">
            Vous trouverez ici l'ensemble des services référencées,
            <Link color={colors.primary}>la documentation</Link> associée et les
            modalités de souscription.
          </Text>
          <Box className="cardsContainer">
            <Heading className="cards-section-title">apprentissage</Heading>
            <Flex wrap={"wrap"} flexDirection={"row"} maxW="100%">
              {isLoading ? (
                <SkeletonCard />
              ) : (
                services.map((service: IServices, index: number) => (
                  <Card key={index} data={service} />
                ))
              )}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Home;
