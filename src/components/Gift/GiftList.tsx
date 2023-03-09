import { useEffect, useState } from "react"
import { GiftItem } from "types"

import { GiftTable } from "./GiftTable"

export const GiftList = () => {
    const [giftList, setGiftList] = useState<GiftItem[] | null>(null)

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:3000/gift')
            const data: {giftsList: GiftItem[] } = await response.json()

            console.log(data)
            setGiftList(data.giftsList)
        })()
    }, [])

    if(!giftList){
        return <p>Loading ...</p>
    }
    return (
        <>
            <h2>Gifts</h2>
            <GiftTable gifts={giftList} />
        </>
    )
}