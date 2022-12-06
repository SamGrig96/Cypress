import React from "react";
import {
  Title,
  Box,
  Grid,
  Image,
  Button,
  Group,
  createStyles,
} from "@mantine/core";
import Room1 from "../../assets/room1.jpg";
import Room2 from "../../assets/room2.jpg";
import Room3 from "../../assets/room3.jpg";
import Room4 from "../../assets/room4.jpg";
import Room5 from "../../assets/room5.jpg";
import Room6 from "../../assets/room6.jpg";

const useStyles = createStyles((theme) => ({
  backgroundContnet: {
    backgroundColor: "#2C3878",
    marginTop:'85px'

  },

  container: {
    padding: "0 120px",
    [theme.fn.smallerThan("md")]: {
      padding: "0 10px",
    },
  },
  contactBtn: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    borderRadius: 0,
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 21,
  },

  infoText: {
    [theme.fn.smallerThan("md")]: {
      marginLeft: 0,
    },
    [theme.fn.smallerThan("lg")]: {
      marginLeft: 10,
    },
  },
  gridSection: {
    margin: 0,
  },
}));

const MainContent = () => {
  const { classes } = useStyles();
  return (
    <>
      <div mt={55} className={classes.container}>
        <Box
          sx={{
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {" "}
          <Title size={56} weight={700} mt={70} sx={{ lineHeight: "140%" }}>
            Minimalist Room
          </Title>
          <Title
            mt={20}
            size={18}
            weight={400}
            sx={{ lineHeight: "28.8px", color: "#000000" }}
          >
            It is a long established fact that a reader will be
            <br /> distracted by the readable content of a page when
            <br /> looking at its layout.
          </Title>
        </Box>
        <Grid mt={0} className={classes.gridSection} gutter={32}>
          <Grid.Col
            span={12}
            sx={{
              padding: 0,
            }}
          >
            <Image
              src={Room1}
              fit={"fill"}
              className={classes.test}
              height={513}
            />
          </Grid.Col>
          <Grid.Col
            md={6}
            lg={6}
            xs={12}
            mt={80}
          >
            <Title size={24} weight={600}>
              Project Overview
            </Title>
            <Title size={18} weight={400} mt={24} color={"#9C9C9C"}>
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere. Online learning with us does not
              interfere with your daily life. because learning can be done
              anytime and anywhere.
            </Title>
            <Group sx={{ lineHeight: "28.8px", color: "#000000" }}>
              {" "}
              <Title size={18} weight={400} color={"#9C9C9C"} mt={48}>
                July 22 - 2022
              </Title>{" "}
              <Title
                size={18}
                weight={400}
                color={"#9C9C9C"}
                mt={48}
                ml={"55px"}
                className={classes.infoText}
              >
                Interior Design - Furnitur
              </Title>
            </Group>
          </Grid.Col>
          <Grid.Col md={6} lg={6} xs={12}  mt={80}>
            <Title size={24} weight={600}>
              Design Process
            </Title>
            <Title size={18} weight={400} mt={24} color={"#9C9C9C"}>
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere.
            </Title>
            <Title size={18} weight={400} color={"#9C9C9C"} mt={20}>
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere.
            </Title>
          </Grid.Col>
          <Grid.Col md={6} lg={6} xs={12} mt={44}  >
            <Image src={Room2} height={513} fit={"fill"} />
          </Grid.Col>
          <Grid.Col md={6} lg={6} xs={12} mt={44} >
            <Image src={Room3} height={513} fit={"fill"} />
          </Grid.Col>
          <Grid.Col span={12} >
            <Image src={Room4} height={513} fit={"fill"} />
          </Grid.Col>
          <Grid.Col md={6} lg={6} xs={12} >
            <Image src={Room5} height={513} fit={"fill"} />
          </Grid.Col>
          <Grid.Col md={6} lg={6} xs={12}   >
            <Image src={Room6} height={513} fit={"fill"} />
          </Grid.Col>
        </Grid>
      </div>
      <div className={classes.backgroundContnet}>
        <div
          className={classes.container}
        >
          <Grid mt={53} className={classes.gridSection} gutter={32}>
            <Grid.Col md={6} lg={6} xs={12}>
              <Title color={"#FFFFFF"}>
                let's discuss making your interior like a dream place!
              </Title>
            </Grid.Col>
            <Grid.Col md={6} lg={6} xs={12}>
              <Title color={"#D9D9D9"} size={18} weight={400}>
                Contact us below to work together to build your amazing interior
              </Title>
              <Button mt={20} className={classes.contactBtn}>
                Contact US
              </Button>
            </Grid.Col>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default MainContent;
