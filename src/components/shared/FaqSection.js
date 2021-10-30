import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "white",
    marginTop: "3.5rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0.5rem",
    },
  },
  accordion: {
    background: "#01060C",
    color: "white",
    paddingTop: "0.5rem",
  },
  heading: {
    background: "#2081E2",
    color: "white",
    borderRadius: "0 1rem 0 0",
    fontSize: "0.5rem",
  },
  summary: {
    background: "#0A131A",
    color: "gray",
    marginTop: "0rem",
    padding: "1rem 1.5rem",
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel1" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.heading}
        >
          <Typography>What is Artifact Keychain ?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            Artifact Keychain is the world's first NFT keychain; just the
            perfect way to display your NFT's. It comee with NFT casting (JPEG,
            GIF, MP4); 6 Hours batery life WIFI and bluetooth enabled secured
            wallet verification; Keychain password protected; Secired link to
            advertiser's account.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel2" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className={classes.heading}
        >
          <Typography>How does it work?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            The Artifact Keychain works by connecting the unique user to the
            Artifact Marketplace via a QR code located on the back of the
            device, here is where you can create a new profile and connect your
            crypto wallet to verify your NFT collection.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel3" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className={classes.heading}
        >
          <Typography> How to get benefited with Artifact Keychain?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            You get both the NFT and Physical keychain. We truly believe that
            the Artifact Marketplace will enable contact with other members in
            the NFT space not only within the virtual space, but also out in the
            community and even bring more people in.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel4" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          className={classes.heading}
        >
          <Typography>How can I get a Keychain?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            You can do so by clicking the mint button in our webpage
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel5" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          className={classes.heading}
        >
          <Typography>When is the drop? How much?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            The date will be announced along with the price very shortly.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel6" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel6bh-content"
          id="panel6bh-header"
          className={classes.heading}
        >
          <Typography>When will i get the Physical Keychain?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            One the Presale is over, We open our portal for everyone to claim
            the minted keychain delivered to their address. NB. A keychain can
            only be claimed once.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel7" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel7bh-content"
          id="panel7bh-header"
          className={classes.heading}
        >
          <Typography>Are all the keychains the same?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            The keychains have the same features in two basic sizes. i.e Large
            (3.2in) and Small (2.4in)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel8" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel8bh-content"
          id="panel8bh-header"
          className={classes.heading}
        >
          <Typography>Will there be a secondary market?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>Yes. We’ll publish after the Presale</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
