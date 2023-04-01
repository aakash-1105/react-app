import { Box, Grid, Typography } from "@mui/material";
import { height } from "@mui/system";
import React, { useEffect, useState } from "react";
import useWindowDimensions from "./screenSizeHook";
import {
  handleForlgScreen,
  handleFormdScreen,
  handleForsmScreen,
  handleForxsScreen,
} from "./utils";

const tempMenuArr = [
  {
    menuId: 1,
    text: "Menu 1",
    hidden: false,
  },
  {
    menuId: "",
    text: "Hidden Menu 1",
    hidden: true,
  },
  {
    menuId: 2,
    text: "Menu 2",
    hidden: false,
  },
  {
    menuId: "",
    text: "Hidden Menu 2",
    hidden: true,
  },
  {
    menuId: 3,
    text: "Menu 3",
    hidden: false,
  },
  {
    menuId: "",
    text: "Hidden Menu 3",
    hidden: true,
  },
  {
    menuId: 4,
    text: "Menu 4",
    hidden: false,
  },
  {
    menuId: "",
    text: "Hidden Menu 4",
    hidden: true,
  },
  {
    menuId: 5,
    text: "Menu 5",
    hidden: false,
  },
  {
    menuId: "",
    text: "Hidden Menu 5",
    hidden: true,
  },
  {
    menuId: 6,
    text: "Menu 6",
    hidden: false,
  },
  {
    menuId: "",
    text: "Hidden Menu 6",
    hidden: true,
  },
  {
    menuId: 7,
    text: "Menu 7",
    hidden: false,
  },
  {
    menuId: "",
    text: "Hidden Menu 7",
    hidden: true,
  },
  {
    menuId: 8,
    text: "Menu 8",
    hidden: false,
  },
  {
    menuId: "",
    text: "Hidden Menu 8",
    hidden: true,
  },
  {
    menuId: 9,
    text: "Menu 9",
    hidden: false,
  },
  {
    menuId: "",
    text: "Hidden Menu 9",
    hidden: true,
  },
  {
    menuId: 10,
    text: "Menu 10",
    hidden: false,
  },
  {
    menuId: "",
    text: "Hidden Menu 10",
    hidden: true,
  },
  {
    menuId: 11,
    text: "Menu 11",
    hidden: false,
  },
  {
    menuId: "",
    text: "Hidden Menu 11",
    hidden: true,
  },
  {
    menuId: 12,
    text: "Menu 12",
    hidden: false,
  },
  {
    menuId: "",
    text: "Hidden Menu 12",
    hidden: true,
  },
  {
    menuId: 13,
    text: "Menu 13",
    hidden: false,
  },
  {
    menuId: "",
    text: "Hidden Menu 13",
    hidden: true,
  },
  {
    menuId: 14,
    text: "Menu 14",
    hidden: false,
  },
  {
    menuId: "",
    text: "Hidden Menu 14",
    hidden: true,
  },
];

const GridWithHiddenBox = () => {
  const { height, width } = useWindowDimensions();
  const [menuArr, setMenuArr] = useState(tempMenuArr);

  const handleHidden = (index) => {
    if (width > 0 && width <= 599) {
      const updatedMenuArr = handleForxsScreen(tempMenuArr, index);
      setMenuArr(updatedMenuArr);
    } else if (width > 599 && width <= 899) {
      const updatedMenuArr = handleForsmScreen(tempMenuArr, index);
      setMenuArr(updatedMenuArr);
    } else if (width > 899 && width <= 1199) {
      const updatedMenuArr = handleFormdScreen(tempMenuArr, index);
      setMenuArr(updatedMenuArr);
    } else if (width > 1199) {
      const updatedMenuArr = handleForlgScreen(tempMenuArr, index);
      setMenuArr(updatedMenuArr);
    }
    console.log({ index, width });
  };

  return (
    <Box sx={{ p: "30px 60px" }}>
      <Grid container spacing={2}>
        {menuArr.map((menu, index) => {
          if (menu.menuId) {
            return (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                onClick={() => handleHidden(index)}
              >
                <Box
                  sx={{
                    height: "100px",
                    border: "1px solid black",
                  }}
                >
                  <Typography variant="h6">{menu.text}</Typography>
                </Box>
              </Grid>
            );
          } else if (!menu.hidden) {
            return (
              <Grid key={index} item xs={12}>
                <Box
                  sx={{
                    height: "100px",
                    border: "1px solid red",
                  }}
                >
                  <Typography variant="h6">{menu.text}</Typography>
                </Box>
              </Grid>
            );
          }
        })}
      </Grid>
    </Box>
  );
};

export default GridWithHiddenBox;
