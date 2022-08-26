import { ActionType } from "game/entity/action/IAction"
import { SkillType } from "game/entity/IHuman"
import { IItemDescription, ItemTypeGroup, RecipeLevel } from "game/item/IItem"
import { RecipeComponent } from "game/item/ItemDescriptions"

export const SaltDescription: IItemDescription = {

    use: [ActionType.Eat],
    onUse: { [ActionType.Eat]: [-5, 2, 2, -20] },
    weight: 0.1,
    craftable: true,
    recipe: {
        components: [
            RecipeComponent(ItemTypeGroup.ContainerOfSeawater, 1, 1)
        ],
        requiresFire: true,
        skill: SkillType.Cooking,
        level: RecipeLevel.Simple,
        reputation: 5
    }

}