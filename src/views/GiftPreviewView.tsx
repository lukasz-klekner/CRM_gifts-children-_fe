import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { SingleGiftItemRequest } from "types"

export const GiftPreviewView = () => {
    const [gift, setGift] = useState<SingleGiftItemRequest | null>(null)
    const { id } = useParams()

    const { gift: giftItem , counter} = gift || {}

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://localhost:3000/gift/${id}`)
                setGift(await response.json())
            } catch(e){
                console.error(e)
            }
        })()
    }, [])

    if(gift === null){
        return <p>Item not found! :-(</p>
    }

    return (
        <div>
            <h3>{giftItem?.name}</h3>
            <p>Amount: {giftItem?.amount}</p>
            <p>Counter: {counter}</p>

            <Link to="/gift">
                Go back to list
            </Link>
        </div>
    )
}