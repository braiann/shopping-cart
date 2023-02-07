import { Button, Divider, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { Item } from "../business/Item";
import { useEffect, useState } from "react";

type OrderSummaryType = {
    items: {item: Item; quantity: number; }[]
}

export default function OrderSummary({items}: OrderSummaryType) {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(prev => {
            let result = 0
            for (let i = 0; i < items.length; i++) {
                if (!items[i].quantity) continue

                result += items[i].item.price * items[i].quantity
            }
            return result
        })
    }, [JSON.stringify(items)])

    return <Stack spacing={1.5}>
        <Typography variant="h4" whiteSpace="nowrap">Order Summary</Typography>
        <Stack direction="row">
            <Typography width="100%" variant="caption">Number of items</Typography>
            <Typography variant="caption">{items.length}</Typography>
        </Stack>
        <Divider />
        <Stack direction="row" alignItems="baseline">
            <Typography width="100%" fontWeight="500" fontSize="1.125rem">Total:</Typography>
            <Typography fontWeight="700" fontSize="1.5rem">${total.toFixed(2)}</Typography>
        </Stack>
        <Stack spacing={1}>
            <Button variant="contained" disableElevation sx={{
                backgroundColor: "primary.dark",
                padding: "10px 20px",
                borderRadius: "8px"
            }}>Proceed to Checkout</Button>
            <Button variant="outlined" sx={{
                padding: "10px 20px",
                borderRadius: "8px"
            }}>Continue shopping</Button>
        </Stack>
    </Stack>
}