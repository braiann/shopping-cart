import { AppBar, Box, Button, Link, Stack, Toolbar, Typography } from "@mui/material"
import SearchBar from "./SearchBar"
import { PersonOutlined, ShoppingBagOutlined } from "@mui/icons-material"
import ShoppingBagWithNumber from "./ShoppingBagWithNumber"
import { theme } from "../theme"
import { Item } from "../business/Item"

type NavbarType = {
    itemCount: number
}

export default function Navbar({itemCount}: NavbarType) {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0} position="sticky">
            <Toolbar>
                <Typography sx={{padding: '10px 20px'}}>Logo</Typography>
                <SearchBar />
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: 'flex' }}>
                    <Button variant="text" color="secondary" startIcon={<PersonOutlined />}>Sign In</Button>
                    <Button variant="text" color="secondary" startIcon={<ShoppingBagWithNumber number={itemCount} />}>Cart</Button>
                </Box>
            </Toolbar>
            <Toolbar sx={{
                backgroundColor: theme.palette.secondary.dark,
                color: theme.palette.primary.dark,
                fontFamily: "sans-serif"
            }}>
                <Stack direction="row" spacing={2} marginLeft={3}>
                    <Link underline="none" color="primary.light">All Products</Link>
                    <Link underline="none" color="primary.light">Packaging</Link>
                    <Link underline="none" color="primary.light">Drinkware</Link>
                    <Link underline="none" color="primary.light">Apparel</Link>
                    <Link underline="none" color="primary.light">Notebooks</Link>
                    <Link underline="none" color="primary.light">Backpacks</Link>
                </Stack>
            </Toolbar>
        </AppBar>
        </Box>
    )
}