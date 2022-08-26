import { IItemGroupDescription, ItemType } from "game/item/IItem";

export const GrainGroupDesc: IItemGroupDescription = {
    default: ItemType.Wheat,
    types: [
        ItemType.Wheat,
        ItemType.CornEar
    ]
}