import { FormEvent, useState } from "react"
import { ChildItem, ChildItemRequest, GiftItem, GiftItemRequest } from "types"

export const AddChildForm = () => {
    const [form, setForm] = useState<ChildItemRequest>({
        name: '',
    })

    const [isLoading, setIsLoading] = useState(false)
    const [resultInfo, setResultInfo] = useState<string | null>(null)

    const updateStateFrom = (key: keyof ChildItemRequest, value: string | number) => {
        setForm(formState => ({
            ...formState,
            [key]: value
        }))
    }
    const addNewChild = async (e: FormEvent) => {
        e.preventDefault()

        setIsLoading(true)

        try {
            const response = await fetch('http://localhost:3000/child', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            const data: ChildItem = await response.json()

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
                <button onClick={() => setResultInfo(null)}>Add another child</button>
            </div>
        )
    }

    return (
    <>
        <h2>Add a new child</h2>
        <form onSubmit={addNewChild}>
            <p>
                <label>
                    Name : <input type="text" value={form.name} onChange={(e) => updateStateFrom('name', e.target.value)} />
                </label>
            </p> 
            <button>Add a new child to the list!</button>          
        </form>
    </>
    )
}