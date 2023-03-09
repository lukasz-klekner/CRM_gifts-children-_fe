import { useEffect, useState } from "react"
import { GiftItem } from "types"

import { GiftTable } from "./GiftTable"

export const GiftList = () => {
    const [giftList, setGiftList] = useState<GiftItem[] | null>(null)

    const getGiftList = async () => {
        setGiftList(null)
        const response = await fetch('http://localhost:3000/gift')
        const data: {giftsList: GiftItem[] } = await response.json()

        setGiftList(data.giftsList)
    }

    useEffect(() => {
        getGiftList()
    }, [])

    if(!giftList){
        return <p>Loading ...</p>
    }
    return (
        <>
            <h2>Gifts</h2>
            <GiftTable gifts={giftList} onGiftsChange={getGiftList}/>
        </>
    )
}