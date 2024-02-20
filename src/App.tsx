import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { container, TabItemModel } from "./state";
import { Symbols } from "./state/type";

const TabItem = container.get<TabItemModel>(Symbols.TabItemModel);

const items: TabsProps["items"] = [
  {
    key: "BP",
    label: "BP",
    children: TabItem.view("BP"),
  },
  {
    key: "VOLC",
    label: "VOLC",
    children: TabItem.view("VOLC"),
  },
];

const App: React.FC = () => (
  <Tabs
    // destroyInactiveTabPane
    defaultActiveKey="BP"
    items={items}
    onChange={(key: string) => {
      console.log(key);
    }}
  />
);

export default App;
