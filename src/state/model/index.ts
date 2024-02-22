import { Symbols, TabState } from "../type";
import { inject, injectable } from "inversify";

@injectable()
export class TabItemModel {
  @inject(Symbols.Factory)
  private factory?: (platform: "BP" | "VOLC") => TabState;

  getFactory() {
    return this.factory!;
  }
}
