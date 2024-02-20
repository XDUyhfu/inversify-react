import { Container, interfaces } from "inversify";
import { Symbols, TabState } from "../type";
import { BP } from "../BP";
import { VOLC } from "../VOLC";
import { TabItemModel } from "../model";

export const container = new Container();

container.bind<BP>(Symbols.BP).to(BP);
container.bind<VOLC>(Symbols.VOLC).to(VOLC);
container.bind<TabItemModel>(Symbols.TabItemModel).to(TabItemModel);
container
  .bind<interfaces.Factory<TabState>>(Symbols.Factory)
  .toFactory<TabState, ["BP" | "VOLC"]>(() => (platform): TabState => {
    return container.get(platform === "BP" ? Symbols.BP : Symbols.VOLC);
  });
