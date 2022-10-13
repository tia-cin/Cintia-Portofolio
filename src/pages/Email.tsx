import React, { FC, useState } from "react";
// components
import { Inputs } from "../components";
import { StyledGrid } from "../components/Landing";
import { styled } from "@mui/system";
// MUI
import { Grid, Button, Alert, Typography } from "@mui/material";
// icons
import SendIcon from "@mui/icons-material/Send";
// emailjs
import emailjs from "@emailjs/browser";
// svgs
import blob1 from "../assets/svgs/output-onlinepngtools (9).png";
import blob2 from "../assets/svgs/output-onlinepngtools (10).png";
import blob3 from "../assets/svgs/output-onlinepngtools (11).png";
import blob4 from "../assets/svgs/output-onlinepngtools (12).png";

const Grided = styled(Grid)`
  margin-bottom: 1em;
  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 3em;
    }
    .svgs-continer {
      opacity: 0;
    }
  }
`;

const Email: FC = () => {
  const [done, setDone] = useState(false);
  const sendMail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_o0smcjb",
      "template_3pqqcx5",
      e.target,
      "Q2GNQFDrDl6zPbgn9"
    );
    setDone(true);
    e.target.reset();
    setTimeout(() => {
      setDone(false);
    }, 5000);
  };
  return (
    <StyledGrid container justifyContent="center" sx={{ height: "100%" }}>
      <Grid sx={{ zIndex: -1 }} className="svgs-continer">
        <img src={blob1} alt="blob" className="animated" id="-5" />
        <img src={blob2} alt="blob" className="animated" id="3" />
      </Grid>
      <form onSubmit={sendMail} style={{ zIndex: 1 }}>
        <Grided container direction="column" justifyContent="center">
          <Grid sx={{ my: ".5em" }}>
            <Typography variant="h2" sx={{ textAlign: "center" }}>
              Well Hi There!
              <br />
              How can I help you?
            </Typography>
          </Grid>
          <Inputs title="Full Name" name="name" />
          <Inputs title="Email" name="email" />
          <Inputs title="Subject" name="subject" />
          <Inputs title="Message" name="messge" />
          <Grid container item xs={6} justifyContent="center">
            <Button
              size="large"
              variant="outlined"
              color="primary"
              type="submit"
            >
              Send
              <SendIcon sx={{ fontSize: "1em", margin: "0 .5em" }} />
            </Button>
          </Grid>
        </Grided>
        {done && (
          <Grid container justifyContent="center">
            <Alert severity="success" sx={{ position: "fixed", top: 20 }}>
              Your mail has been delivered!
            </Alert>
          </Grid>
        )}
      </form>
      <Grid sx={{ zIndex: -1 }} className="svgs-continer">
        <img src={blob3} alt="blob" className="animated" id="4" />
        <img src={blob4} alt="blob" className="animated" id="-2" />
      </Grid>
    </StyledGrid>
  );
};

export default Email;