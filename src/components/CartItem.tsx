import { DeleteOutline } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { Item } from "../business/Item"
import { useEffect, useState } from "react"

type CartItemType = {
    item: Item,
    quantity: number
    onQuantityChange: (itemID: number, newQuantity: number) => void
    onRemoveItem: (itemID: number) => void
}

export default function CartItem({item, quantity, onQuantityChange, onRemoveItem}: CartItemType) {
    const [total, setTotal] = useState(quantity ? item.price * quantity : 0)

    useEffect(() => {
        setTotal(quantity ? item.price * quantity : 0)
    }, [quantity])
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onQuantityChange(item.id, parseFloat(e.target.value))
    }

    const handleRemove = () => {
        onRemoveItem(item.id)
    }
    
    return <Stack direction="row" spacing={2} sx={{margin: "20px 0"}}>
        <Box sx={{
            width: "120px",
            height: "120px",
            backgroundColor: "secondary.dark"
        }}></Box>
        <Stack sx={{width: "100%"}}>
            <Stack direction="row">
                <Typography variant="h6" sx={{width: "100%"}}>{item.name}</Typography>
                <Typography variant="h6">${item.price.toFixed(2)}</Typography>
            </Stack>
            <Stack direction="row">
                <Stack sx={{width: "100%"}} direction="row" spacing={0.5}>
                    <Typography>Quantity:</Typography>
                    <input type="number" name="quantity" value={quantity} onChange={handleChange}/>
                </Stack>
                <Stack direction="row" alignItems="baseline" spacing={0.5}>
                    <Typography>Total:</Typography>
                    <Typography fontWeight="bold">${total.toFixed(2)}</Typography>
                </Stack>
            </Stack>
            {item.isPack && item.subItems ? item.subItems.map(subItem => 
                <Typography variant="caption">• {subItem.name}</Typography>
            ) : <></>}
            <Button
                onClick={handleRemove}
                startIcon={<DeleteOutline />}
                sx={{width: "fit-content"}}>Remove</Button>
        </Stack>
    </Stack>
}