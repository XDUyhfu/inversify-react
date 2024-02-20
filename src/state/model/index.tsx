import { Symbols, TabState } from "../type";
import { inject, injectable } from "inversify";
import { TabItem } from "../../components/TabItem.tsx";

@injectable()
export class TabItemModel {
  @inject(Symbols.Factory)
  private factory?: (platform: "BP" | "VOLC") => TabState;

  view(platform: "BP" | "VOLC") {
    return <TabItem platform={platform} factory={this.factory!} />;
  }
}
