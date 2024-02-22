import { Container, inject, injectable } from "inversify";
import { Symbols } from "../type";
import { Tabs } from "antd";
import { TabItemModel } from "../model";
import { TabItem } from "../../components/TabItem.tsx";

@injectable()
export class TabWidget {
  static createContainer(parentContainer: Container) {
    const subContainer = new Container();
    subContainer.parent = parentContainer;
    return subContainer;
  }

  @inject(Symbols.TabItemModel)
  private TabItemModel?: TabItemModel;

  // constructor(
  //
  // ) {}

  render() {
    return (
      <Tabs
        // destroyInactiveTabPane
        defaultActiveKey="BP"
        items={[
          {
            key: "BP",
            label: "BP",
            children: (
              <TabItem
                platform="BP"
                factory={this.TabItemModel!.getFactory()}
              />
            ),
          },
          {
            key: "VOLC",
            label: "VOLC",
            children: (
              <TabItem
                platform="VOLC"
                factory={this.TabItemModel!.getFactory()}
              />
            ),
          },
        ]}
        onChange={(key: string) => {
          console.log(key);
        }}
      />
    );
  }
}
