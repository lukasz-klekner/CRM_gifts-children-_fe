import { GiftItem } from "types";


export const GiftTableRow = ({_id, name, amount }: GiftItem) => (
        <tr>
            <td>{_id?.toString()}</td>
            <td>{name}</td>
            <td>{amount}</td>
        </tr>
)