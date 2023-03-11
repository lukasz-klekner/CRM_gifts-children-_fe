import { ChildItem, GiftItem } from "types";
import { ChildGiftSelect } from "./ChildGiftSelect";

interface ChildTableRowProps {
    child: ChildItem
    giftList: GiftItem[]
 }


export const ChildTableRow = ({giftList, child }: ChildTableRowProps) => {
    return(
        <tr>
            <th>{child.name}</th>
            <th>
                <ChildGiftSelect giftList={giftList} selectedGiftId={child?.giftId.toString() ?? undefined} childId={child._id.toString()} />
            </th>
        </tr>
    )
}