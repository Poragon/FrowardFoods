import { DoodadTypeGroup } from "game/doodad/IDoodad";
import { ActionType } from "game/entity/action/IAction";
import { SkillType } from "game/entity/IHuman";
import { IItemDescription, ItemType, ItemTypeGroup, RecipeLevel } from "game/item/IItem";
import { RecipeComponent } from "game/item/ItemDescriptions";
import { Registry } from "mod/ModRegistry";
import FrowardFoods from "src/FrowardFoods";

export const MeatSoupDescription: IItemDescription = {

    use: [ActionType.Eat],
    /** Nearest Vanilla Food (Cooked Meat) [2, 10, 8, -2] */
    onUse: { [ActionType.Eat]: [2, 15, 10, 20] },
    weight: 0.75,
    onBurn : [ItemType.PileOfAsh],
    decayMax: 5000,
    decaysInto: [ItemType.RottenMeat],
    craftable: true,
    recipe: {
        components: [
            RecipeComponent(ItemTypeGroup.CookingEquipment, 1, 0),
            RecipeComponent(ItemTypeGroup.Liquid, 1, 1),
            RecipeComponent(ItemTypeGroup.Meat, 1, 1)
        ],
        requiredDoodads: [DoodadTypeGroup.LitStructure],
        skill: SkillType.Cooking,
        level: RecipeLevel.Intermediate,
        reputation: 25
    }

}

export const JerkyDescription: IItemDescription = {

    use: [ActionType.Eat],
    /** Nearest Vanilla Food (Cooked Meat) [2, 10, 8, -2], no bonus as preservation is the bonus here*/
    onUse: { [ActionType.Eat]: [0, 10, 8, -10] },
    weight: 0.25,
    onBurn : [ItemType.PileOfAsh],
    decayMax: 20000,
    decaysInto: [ItemType.RottenMeat],
    craftable: true,
    recipe: {
        components: [
            RecipeComponent(ItemTypeGroup.CookingEquipment, 1, 0),
            RecipeComponent(Registry<FrowardFoods>("FrowardFoods").get("itemSalt"), 1, 1),
            RecipeComponent(ItemTypeGroup.Meat, 1, 1)
        ],
        requiresFire: true,
        skill: SkillType.Cooking,
        level: RecipeLevel.Intermediate,
        reputation: 25
    }

}