import React from "react";
import {
  createStyles,
  Grid,
  Group,
  Image,
  List,
  Title,
  Input,
} from "@mantine/core";
import Logo from "../../assets/dananz.png";
import Arrow from "../../assets/arrow.svg";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Tiktok from "../../assets/tiktok.png";
import Youtube from "../../assets/youtube.png";


const useStyles = createStyles((theme) => ({
  iconPosition:{
    display:'flex',
    justifyContent:'end',
    flexDirection:'column'
  },
  text: {
    lineHeight: "61.2px",
  },
  gridSection: {
    margin: 0,
    padding: "0px 120px",
    [theme.fn.smallerThan("md")]: {
      padding: "0 10px",
    },
  },
  iconSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",

  },
  iconContent: {
    backgroundColor: "#D9D9D9",
    width: 35,
    height: 35,
    borderRadius: "50%",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
}));
const Footer = () => {
  const { classes } = useStyles();
  return (
    <Grid mt={45} className={classes.gridSection} gutter={32}>
      <Grid.Col md={6} lg={6} xs={12}>

          <Image width={126} height={54} src={Logo} />
          <Title className={classes.text} mt={0} size={36} weight={600}>
            One of the best furniture agency.
          </Title>

      </Grid.Col>
      <Grid.Col md={6} lg={6} xs={12} mt={44}>
        <List size="xl">
          <List.Item>
            <Title size={18} weight={400}>
              Enter your email to get the laterst news
            </Title>
          </List.Item>
        </List>
        <Input
          mt={24}
          placeholder="Email Address"
          className={classes.footerInput}
          styles={(theme) => ({
            input: {
              border: "none !important",
              borderBottom: "1px solid #141414 !important",
              borderRadius: 0,
              padding: "15px 0px",
            },
          })}
          rightSection={
            <div>
              <Image src={Arrow} height={10} width={24} fit={"fill"} />
            </div>
          }
        />


          <Group align={'end'} mt={11}  className={classes.iconPosition}>
            <Title mt={40} size={16} weight={400}>
              Follow us On
            </Title>
            <Group align={'end'} mt={11}  >
            <div className={classes.iconContent}>
              {" "}
              <Image width={20} height={20} src={Facebook} />
            </div>

            <div className={classes.iconContent}>
              <Image width={20} height={20} src={Instagram} />
            </div>
            <div className={classes.iconContent}>
              {" "}
              <Image width={20} height={20} src={Tiktok} />
            </div>
            <div className={classes.iconContent}>
              <Image width={20} height={20} src={Youtube} />
            </div>
            </Group>
        </Group>
      </Grid.Col>
    </Grid>
  );
};
export default Footer;
