import { Box, Stack, Typography } from "@mui/material";
import ProductThumbnail from "./ProductThumnail";

export default function SuggestionsGrid() {
    return <Stack>
        <Typography variant="h4">You might also like</Typography>
        <Stack direction="row" spacing={3} flexWrap="wrap">
            <ProductThumbnail />
            <ProductThumbnail />
            <ProductThumbnail />
        </Stack>
    </Stack>
}