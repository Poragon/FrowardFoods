import { ActionType } from "game/entity/action/IAction";
import { SkillType } from "game/entity/IHuman";
import { IItemDescription, ItemType, ItemTypeGroup, RecipeLevel } from "game/item/IItem";
import { RecipeComponent } from "game/item/ItemDescriptions";

export const FruitSauceDescription: IItemDescription = {

    use: [ActionType.Eat],
    /** Sum of ingredients (apple) [1, 8, 2, 1] */
    onUse: { [ActionType.Eat]: [4, 10, 3, 1] },
    weight: 0.2,
    onBurn : [ItemType.PileOfAsh],
    decayMax: 5000,
    decaysInto: [ItemType.RottingVegetation],
    craftable: true,
    recipe: {
        components: [
            RecipeComponent(ItemTypeGroup.MortarAndPestle, 1, 0),
            RecipeComponent(ItemTypeGroup.Fruit, 1, 1),
        ],
        skill: SkillType.Cooking,
        level: RecipeLevel.Intermediate,
        reputation: 25
    }

}