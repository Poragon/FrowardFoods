import { DoodadTypeGroup } from "game/doodad/IDoodad";
import { ActionType } from "game/entity/action/IAction";
import { SkillType } from "game/entity/IHuman";
import { ItemType, ItemTypeGroup, RecipeLevel, IItemDescription } from "game/item/IItem";
import { RecipeComponent } from "game/item/ItemDescriptions";
import { Registry } from "mod/ModRegistry";
import FrowardFoods from "src/FrowardFoods";


export const FruitBreadDescription: IItemDescription = {

    use: [ActionType.Eat],
    /** Sum of ingredients [6, 20, 13, -1] */
    onUse: { [ActionType.Eat]: [9, 20, 19, -1] },
    weight: 0.75,
    onBurn : [ItemType.PileOfAsh],
    decayMax: 15000,
    decaysInto: [ItemType.RottingVegetation],
    craftable: true,
    recipe: {
        components: [
            RecipeComponent(ItemTypeGroup.Cookware, 1, 0),
            RecipeComponent(Registry<FrowardFoods>("FrowardFoods").get("itemFruitSauce"), 1, 1),
            RecipeComponent(ItemType.Dough, 1, 1)
        ],
        requiredDoodads: [DoodadTypeGroup.LitFurnace],
        skill: SkillType.Cooking,
        level: RecipeLevel.Expert,
        reputation: 75
    }

}

export const HeartySoupDescription: IItemDescription = {

    use: [ActionType.Eat],
    /** Sum of ingredients [4, 27, 13, 22] */
    onUse: { [ActionType.Eat]: [4, 27, 13, 22] },
    weight: 1,
    onBurn : [ItemType.PileOfAsh],
    decayMax: 15000,
    decaysInto: [ItemType.RottenMeat],
    craftable: true,
    recipe: {
        components: [
            RecipeComponent(ItemTypeGroup.CookingEquipment, 1, 0),
            RecipeComponent(ItemTypeGroup.ContainerOfSeawater, 1, 1),
            RecipeComponent(Registry<FrowardFoods>("FrowardFoods").get("itemMeatSoup"), 1, 1),
            RecipeComponent(ItemTypeGroup.Vegetable, 1, 1)
        ],
        requiredDoodads: [DoodadTypeGroup.LitStructure],
        skill: SkillType.Cooking,
        level: RecipeLevel.Expert,
        reputation: 75
    }
}