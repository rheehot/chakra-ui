/** @jsx jsx */
import { jsx } from "@emotion/core";
import Box from "../Box";

export const MenuDivider = props => (
  <Box
    my="8px"
    role="separator"
    border="0"
    borderBottom="normal"
    borderColor="inherit"
    {...props}
  />
);
