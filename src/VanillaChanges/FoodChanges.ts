import { DoodadTypeGroup } from "game/doodad/IDoodad";
import { ActionType } from "game/entity/action/IAction";
import { SkillType } from "game/entity/IHuman";
import { ItemType, ItemTypeGroup, RecipeLevel } from "game/item/IItem";
import { itemDescriptions, RecipeComponent } from "game/item/ItemDescriptions";
import ItemManager from "game/item/ItemManager";

export function VanillaDecayChanges() {
    
    ItemManager.getGroupItems(ItemTypeGroup.RawMeat).forEach(element => {
        itemDescriptions[element].decayMax = 5000
    });

    ItemManager.getGroupItems(ItemTypeGroup.CookedMeat).forEach(element => {
        itemDescriptions[element].decayMax = 7500
    });

    ItemManager.getGroupItems(ItemTypeGroup.Fruit).forEach(element => {
        itemDescriptions[element].decayMax = 5000
    });

    ItemManager.getGroupItems(ItemTypeGroup.Vegetable).forEach(element => {
        itemDescriptions[element].decayMax = 7500
    });
}

export function FlourChange(GrainGroup: ItemTypeGroup) {

    itemDescriptions[ItemType.Flour].recipe = {
        components: [
        RecipeComponent(ItemTypeGroup.MortarAndPestle, 1, 0),
        RecipeComponent(GrainGroup, 4, 4)
        ],
        skill: SkillType.Cooking,
        level: RecipeLevel.Simple,
        reputation: 25
    }

}

export function PemmicanChange(Jerky: ItemType) {

    const Pemmican = itemDescriptions[ItemType.Pemmican]
    Pemmican.recipe = {
        components: [
        RecipeComponent(ItemTypeGroup.CookingEquipment, 1, 0),
        RecipeComponent(Jerky, 2, 2),
        RecipeComponent(ItemType.Tallow, 1, 1),
        RecipeComponent(ItemTypeGroup.Fruit, 1, 1)
        ],
        requiredDoodads: [DoodadTypeGroup.LitFurnace],
        skill: SkillType.Cooking,
        level: RecipeLevel.Expert,
        reputation: 25
    }
    /** Sum of ingredients [1, 24, 20, -19] */
    Pemmican.onUse = { [ActionType.Eat]: [1, 24, 30, -19] }
    delete Pemmican.decayMax

    const CookedPemmican = itemDescriptions[ItemType.CookedPemmican]
    delete CookedPemmican.recipe
    CookedPemmican.craftable; false

}