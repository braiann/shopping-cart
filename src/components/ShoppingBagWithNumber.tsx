import { ShoppingBagOutlined } from "@mui/icons-material"
import style from "../styles/ShoppingBarWithNumber.module.css"

export default function ShoppingBagWithNumber({number}: {number: number}) {
    return <div className={style.shoppingBag}>
        <span>{number}</span>
        <ShoppingBagOutlined className={style.icon} fontSize="small" sx={{
            translate: '0 -5px'
        }}/>
    </div>
}