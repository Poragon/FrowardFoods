import { ItemType, ItemTypeGroup } from "game/item/IItem";
import Mod from "mod/Mod";
import Register from "mod/ModRegistry";

import { GrainGroupDesc } from "./NewItems/ItemGroups";
import { SaltDescription } from "./NewItems/Foods/Powders";
import { FruitBreadDescription, HeartySoupDescription } from "./NewItems/Foods/ComboFoods";
import { FruitSauceDescription } from "./NewItems/Foods/FruitFoods";
import { BreadDescription } from "./NewItems/Foods/GrainFoods";
import { JerkyDescription, MeatSoupDescription } from "./NewItems/Foods/MeatFoods";
import { SaladDescription } from "./NewItems/Foods/VegtableFoods";
import { FlourChange, PemmicanChange, VanillaDecayChanges } from "./VanillaChanges/FoodChanges";

export default class FrowardFoods extends Mod {

    @Mod.instance<FrowardFoods>("FrowardFoods")
    public static readonly INSTANCE: FrowardFoods;

    /** Item Registration */
    @Register.item("Salt", {...SaltDescription})
    public itemSalt: ItemType

    @Register.item("FruitSauce", FruitSauceDescription)
    public itemFruitSauce: ItemType

    @Register.item("Bread", BreadDescription)
    public itemBread: ItemType

    @Register.item("MeatSoup", MeatSoupDescription)
    public itemMeatSoup: ItemType

    @Register.item("Jerky", JerkyDescription)
    public itemJerky: ItemType

    @Register.item("Salad", SaladDescription)
    public itemSalad: ItemType

    @Register.item("FruitBread", FruitBreadDescription)
    public itemFruitBread: ItemType

    @Register.item("HeartySoup", HeartySoupDescription)
    public itemFHeartySoup: ItemType

    /** itemGroup Registration */
    @Register.itemGroup("GrainGroup", GrainGroupDesc)
    public itemGroupGrainGroup: ItemTypeGroup

    /** Timing Calls */
    public override onLoad(): void {

        VanillaDecayChanges()
        FlourChange(this.itemGroupGrainGroup)
        PemmicanChange(this.itemJerky)

    }

}