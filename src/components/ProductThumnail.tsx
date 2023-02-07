import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function ProductThumbnail() {
    return <Stack marginBottom="50px" spacing={1}>
        <Box width="250px" height="250px" sx={{backgroundColor: "secondary.dark"}}></Box>
        <Typography variant="h6" fontSize="1rem">Unisex Short Sleeve T-Shirt</Typography>
        <Stack direction="row" justifyContent="space-between">
            <Typography>$10 - $24</Typography>
            <Typography variant="caption" display="inline">
                Minimum:
                <Typography
                    display="inline"
                    fontSize="0.875rem"
                    marginLeft="0.25rem"
                    color="primary.dark">
                        24
                </Typography>
            </Typography>
            <Box></Box>
        </Stack>
    </Stack>
}