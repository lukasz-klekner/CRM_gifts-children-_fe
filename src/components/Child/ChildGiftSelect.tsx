import { ChangeEvent, FormEvent, useState } from "react"
import { GiftItem } from "types"

interface ChildGiftSelectProps {
    giftList: GiftItem[]
    selectedGiftId?: string
    childId: string
}

export const ChildGiftSelect = ({ giftList, selectedGiftId, childId }: ChildGiftSelectProps) => {
    const [selectedGift, setSelectedGift] = useState<string | undefined>(selectedGiftId)

    const handleGiftChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectedGift(e.target.value)

    const handleSubmitGiftChange = async (e: FormEvent) => {
        e.preventDefault()

        try{
            await fetch(`http://localhost:3000/child/gift/${childId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    giftId: selectedGift
                })
            })
        } catch(e){
            console.error(e)
        }
    }

    return(
        <form onSubmit={handleSubmitGiftChange}>
            <select value={selectedGift} onChange={handleGiftChange}>
                {
                    giftList.map(gift => (
                        <option key={gift._id.toString()} value={gift._id.toString()}>{gift.name}</option>
                    ))
                }
            </select>
            <button>Save change</button>
        </form>
    )
}