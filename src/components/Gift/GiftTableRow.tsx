import { GiftItem } from "../../types/gift"

export const GiftTableRow = ({_id, name, amount }: GiftItem) => (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{amount}</td>
        </tr>
)