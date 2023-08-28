import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../Accordian/Faq.module.css";
const Faq = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>FAQs</h1>
      </div>
      <div className={styles.section}>
        <div className={styles.accordionContainer}>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "green" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={styles.accordionHeader1}
              style={{
                backgroundColor: "black",
                color: "white",
                border: "2px solid white",
                borderRadius: "5px",
                width: "100%",
              }}
            >
              <Typography>Is QTify free to use?</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              <Typography>Yes! it is 100% free, and has 0% ads. </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "green" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              className={styles.accordionHeader1}
              style={{
                backgroundColor: "black",
                color: "white",
                border: "2px solid white",
                borderRadius: "5px",
                width: "100%",
              }}
            >
              <Typography>
                Can I download and listen to songs offline?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              <Typography>
                Sorry, unfortunately we don't provide the service to download
                any songs.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default Faq;
