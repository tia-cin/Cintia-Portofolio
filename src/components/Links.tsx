import React, { FC } from "react";
import { Link } from "react-router-dom";
// MUI
import { Grid, Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledGridItems = styled(Grid)`
  p {
    margin: 0.5em;
    font-family: sans-serif;
    text-align: center;
    color: #fff;
  }
  .contain:hover p {
    transition: 1s;
    color: #191919;
  }
`;

interface LinksProps {
  link: string;
  href: string;
  name: string;
  icon: any;
}

export const Links: FC<LinksProps> = ({ link, href, name, icon }) => {
  return (
    <StyledGridItems item>
      {link ? (
        <Link
          className="contain"
          to={link && link}
          style={{ textDecoration: "none" }}
        >
          <Button variant="text" sx={{ color: "#191919" }}>
            {icon}
          </Button>
          <p>{name}</p>
        </Link>
      ) : href ? (
        <a className="contain" href={href} style={{ textDecoration: "none" }}>
          <Button variant="text" sx={{ color: "#191919" }}>
            {icon}
          </Button>
          <p>{name}</p>
        </a>
      ) : (
        <div className="contain">
          <Button variant="text" sx={{ color: "#191919" }}>
            {icon}
          </Button>
          <p>{name}</p>
        </div>
      )}
    </StyledGridItems>
  );
};
