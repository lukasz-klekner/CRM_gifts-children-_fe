import { useEffect, useState } from "react"
import { ListChildrenResponse } from "types"

import { ChildTable } from "./ChildTable"

export const ChildList = () => {
    const [data, setData] = useState<ListChildrenResponse | null>(null)

    const getGiftList = async () => {
        setData(null)
        const response = await fetch('http://localhost:3000/child')
        setData(await response.json())
    }

    useEffect(() => {
        getGiftList()
    }, [])

    console.log(data)

    if(!data){
        return <p>Loading ...</p>
    }
    return (
        <>
            <h2>Gifts</h2>
            <ChildTable giftList={data.giftsList} childrenList={data.childrenList}/>
        </>
    )
}