import { ChildItem, GiftItem } from "types"

import { ChildTableRow } from "./ChildTableRow"



interface ChildTableProps {
    giftList: GiftItem[]
    childrenList: ChildItem[]
}

export const ChildTable = ({ giftList, childrenList }: ChildTableProps) => (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gift</th>
                </tr>
            </thead>
            <tbody>
                {childrenList.map(child=> <ChildTableRow key={child._id?.toString()} child={child} giftList={giftList} /> )}
            </tbody>
        </table>
)