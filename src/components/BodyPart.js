import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/images/home-bg-1.jpg";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2526" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "270px",
        cursor: "pointer",
        gap: "40px",
      }}
      //  onClick={()=>{
      //   console.log(item);
      //  }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behaviour: "smooth" });
      }}
    >
      <img src={Icon} style={{ width: "100%", height: "60%" }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        textTransform="capitalize"
        color="3A1212"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
