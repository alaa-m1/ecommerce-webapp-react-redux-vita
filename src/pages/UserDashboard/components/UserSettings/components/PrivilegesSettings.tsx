import React from "react";
import { TabPanelProps } from "../types";
import { Box, Typography } from "@mui/material";
import { UserPhotosManager } from "../../CloudinaryPhotosList/UserPhotosManager";

export const PrivilegesSettings = ({
  value,
  index,
  ...props
}: TabPanelProps) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`privileges-settings-tabpanel-${index}`}
      aria-labelledby={`privileges-settings-tab-${index}`}
      {...props}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>Privileges</Typography>
        </Box>
      )}
      <br />
      <UserPhotosManager />
    </Box>
  );
};
