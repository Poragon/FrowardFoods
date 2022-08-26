import { ActionType } from "game/entity/action/IAction";
import { SkillType } from "game/entity/IHuman";
import { IItemDescription, ItemType, ItemTypeGroup, RecipeLevel } from "game/item/IItem";
import { RecipeComponent } from "game/item/ItemDescriptions";

export const SaladDescription: IItemDescription = {

    use: [ActionType.Eat],
    /** Nearest Vanilla Foods (tomato + cucumber) [3, 22, 6, 5] */
    onUse: { [ActionType.Eat]: [3, 22, 6, 8] },
    weight: 0.3,
    onBurn : [ItemType.PileOfAsh],
    decayMax: 7500,
    decaysInto: [ItemType.RottingVegetation],
    craftable: true,
    recipe: {
        components: [
            RecipeComponent(ItemTypeGroup.Sharpened, 1, 0),
            RecipeComponent(ItemTypeGroup.Vegetable, 2, 2)
        ],
        skill: SkillType.Cooking,
        level: RecipeLevel.Simple,
        reputation: 25
    }

}