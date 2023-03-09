import { FormEvent, useState } from "react"
import { GiftItem, GiftItemRequest } from "types"

export const AddGiftForm = () => {
    const [form, setForm] = useState<GiftItemRequest>({
        name: '',
        amount: 0
    })
    const [isLoading, setIsLoading] = useState(false)
    const [resultInfo, setResultInfo] = useState<string | null>(null)

    const updateStateFrom = (key: keyof GiftItemRequest, value: string | number) => {
        setForm(formState => ({
            ...formState,
            [key]: value
        }))
    }
    const addNewGift = async (e: FormEvent) => {
        e.preventDefault()

        setIsLoading(true)

        try {
            const response = await fetch('http://localhost:3000/gift', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            const data: GiftItem = await response.json()

            setResultInfo(`${data.name} has just been added to the list`)
        } finally {
            setIsLoading(false)
        }
    }

    if(isLoading) {
        return <p>Loading...</p>
    }

    if(resultInfo){
        return (
            <div>
                <strong>{resultInfo}</strong>
                <button onClick={() => setResultInfo(null)}>Add another gift</button>
            </div>
        )
    }

    return (
    <>
        <h2>Add a new gift</h2>
        <form onSubmit={addNewGift}>
            <p>
                <label>
                    Name: <input type="text" value={form.name} onChange={(e) => updateStateFrom('name', e.target.value)} />
                </label>
            </p>
            <p>
                <label>
                    Amount: <input type="number" value={form.amount} onChange={(e) => updateStateFrom('amount', Number(e.target.value))} />
                </label>
            </p>  
            <button>Add a new gift!</button>          
        </form>
    </>
    )
}