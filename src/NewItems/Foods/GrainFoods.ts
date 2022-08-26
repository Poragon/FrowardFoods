import { DoodadTypeGroup } from "game/doodad/IDoodad";
import { ActionType } from "game/entity/action/IAction";
import { SkillType } from "game/entity/IHuman";
import { IItemDescription, ItemTypeGroup, ItemType, RecipeLevel } from "game/item/IItem";
import { RecipeComponent } from "game/item/ItemDescriptions";

export const BreadDescription: IItemDescription = {

    use: [ActionType.Eat],
    /** Nearest Vanilla Food (Hardtack) [1, 10, 8, -3] */
    onUse: { [ActionType.Eat]: [2, 10, 10, -2] },
    weight: 1,
    onBurn : [ItemType.PileOfAsh],
    decayMax: 15000,
    decaysInto: [ItemType.RottingVegetation],
    craftable: true,
    recipe: {
        components: [
            RecipeComponent(ItemTypeGroup.Cookware, 1, 0),
            RecipeComponent(ItemType.Dough, 1, 1)
        ],
        requiredDoodads: [DoodadTypeGroup.LitFurnace],
        skill: SkillType.Cooking,
        level: RecipeLevel.Advanced,
        reputation: 50
    }

}