import { Twitter } from "@mui/icons-material";
import { Box } from "@mui/system";

export default function CircleIcon() {
    return <Box width="30px" height="30px" sx={{
            backgroundColor: "primary.light",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50px",
        }
        }>
        <Twitter fontSize="small" color="secondary"/>
    </Box>
}