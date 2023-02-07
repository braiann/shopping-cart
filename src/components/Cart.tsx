import { Box, Typography } from "@mui/material"
import OrderSummary from "./OrderSummary"
import { Stack } from "@mui/system"
import CartItem from "./CartItem"
import { Item } from "../business/Item"

type CartType = {
    items: {item: Item; quantity: number; }[]
    onQuantityChange: (itemID: number, newQuantity: number) => void
    onRemoveItem: (itemID: number) => void
}

export default function Cart({items, onQuantityChange, onRemoveItem}: CartType) {

    return <Stack direction="row" sx={{marginTop: "20px"}} spacing={3}>
        <Box width="100%">
            <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="h4">Your cart</Typography>
                <Typography
                    variant="caption"
                    fontSize="1.125rem">
                        ({items.length})
                </Typography>
            </Stack>
            {items.map(item =>
                <CartItem
                    item={item.item}
                    quantity={item.quantity}
                    onQuantityChange={onQuantityChange}
                    onRemoveItem={onRemoveItem}/>
            )}
        </Box>
        <OrderSummary items={items}/>
    </Stack>
}