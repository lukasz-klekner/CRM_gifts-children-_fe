import { GiftItem } from "types"

import { GiftTableRow } from "./GiftTableRow"

interface GiftTableProps {
    gifts: GiftItem[]
    onGiftsChange: () => void
}

export const GiftTable = ({ gifts, onGiftsChange }: GiftTableProps) => (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {gifts.map(gift=> <GiftTableRow key={gift._id?.toString()} gift={gift} onGiftsChange={onGiftsChange} /> )}
            </tbody>
        </table>
)