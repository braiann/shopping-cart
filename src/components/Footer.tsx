import { ExpandMore, LanguageOutlined, LocalPhone, Public } from "@mui/icons-material";
import { Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import CircleIcon from "./CircleIcon";

export default function Footer() {
    return <Stack
            spacing={5}
            sx={{
                backgroundColor: "secondary.dark",
                margin: "0 -50px",
                padding: "50px"
        }}>
        <Stack direction="row" spacing={15}>
            <Stack spacing={3}>
                <Typography variant="h5">Logo</Typography>
                <Typography variant="caption">We sell custom products for all your needs. Packs and bulk products that you will enjoy.</Typography>
                <Stack direction="row" spacing={1}>
                    <LocalPhone />
                    <Typography variant="caption" color="primary.dark">
                        +1-202-555-0129
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                    <CircleIcon />
                    <CircleIcon />
                    <CircleIcon />
                    <CircleIcon />
                    <CircleIcon />
                </Stack>
            </Stack>
            <Stack fontFamily="sans-serif" spacing={3}>
                <Typography variant="h6" whiteSpace="nowrap">Our company</Typography>
                <Link underline="none" variant="caption" color="primart.light">About us</Link>
                <Link underline="none" variant="caption" color="primart.light">FAQ</Link>
                <Link underline="none" variant="caption" color="primart.light">Partnerships</Link>
                <Link underline="none" variant="caption" color="primart.light">Sustainability</Link>
                <Link underline="none" variant="caption" color="primart.light">Blog</Link>
            </Stack>
            <Stack fontFamily="sans-serif" spacing={3}>
                <Typography variant="h6" whiteSpace="nowrap">How can we help</Typography>
                <Link underline="none" variant="caption" color="primart.light">Place a ticket</Link>
                <Link underline="none" variant="caption" color="primart.light">Track your order</Link>
                <Link underline="none" variant="caption" color="primart.light">Help center</Link>
            </Stack>
            <Stack fontFamily="sans-serif" spacing={3}>
                <Typography variant="h6" whiteSpace="nowrap">Information</Typography>
                <Link underline="none" variant="caption" color="primart.light">Contact us</Link>
                <Link underline="none" variant="caption" color="primart.light">Live chat</Link>
                <Link underline="none" variant="caption" color="primart.light">Privacy</Link>
                <Link underline="none" variant="caption" color="primart.light">Terms of use</Link>
            </Stack>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
            <Typography variant="caption">© 2022 Customer Products. All rights reserved.</Typography>
            <Stack direction="row" spacing={5}>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Typography variant="caption">Region:</Typography>
                    <Public fontSize="small"/>
                    <Typography variant="caption" color="primary.dark">United States</Typography>
                    <ExpandMore />
                </Stack>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Typography variant="caption">Language:</Typography>
                    <LanguageOutlined fontSize="small"/>
                    <Typography variant="caption" color="primary.dark">English</Typography>
                    <ExpandMore />
                </Stack>
            </Stack>
        </Stack>
    </Stack>
}