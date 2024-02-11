import { Container, interfaces } from "inversify";
import { Symbols, TabState } from "../type";
import { BP } from "../BP";
import { VOLC } from "../VOLC";

export const container = new Container();

//container.bind<BP>(Symbols.BP).to(BP);
//container.bind<VOLC>(Symbols.VOLC).to(VOLC);

container
  .bind<interfaces.Factory<TabState>>(Symbols.Factory)
  .toFactory<TabState, ["BP" | "VOLC"]>((context) => (platform) => {
    const childContainer = new Container();
    childContainer.bind<BP>(Symbols.BP).to(platform === "BP" ? BP : VOLC);
    childContainer.parent = context.container;
    return childContainer.get<TabState>(Symbols.BP);
  });
