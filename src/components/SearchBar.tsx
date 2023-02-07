import { Box, Icon, TextField } from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import style from '../styles/SearchBar.module.css'

export default function SearchBar() {
    return <Box className={style.searchBar} width="40%">
        <SearchOutlinedIcon color="primary" fontSize="medium"/>
        <input type="search" placeholder="Search products" />
    </Box>
}