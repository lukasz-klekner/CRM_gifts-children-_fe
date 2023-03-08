import { GiftItem } from "../../types/gift"
import { GiftTableRow } from "./GiftTableRow"

interface GiftTableProps {
    gifts: GiftItem[]
}

export const GiftTable = ({ gifts }: GiftTableProps) => (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {gifts.map(gift=> <GiftTableRow key={gift._id} {... gift} /> )}
            </tbody>
        </table>
)