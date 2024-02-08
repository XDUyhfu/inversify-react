import React from "react";
import { Button, Space, Tabs } from "antd";
import type { TabsProps } from "antd";
import { container, TabState } from "./state";
import { useObservable } from "rxjs-hooks";

const TabItem = ({ platform }: { platform: string }) => {
  const state = container.get<TabState>(Symbol.for(platform));
  const count = useObservable(() => state.count$);

  return (
    <Space direction="vertical">
      <div>{platform}</div>
      <div>{count}</div>
      <Button onClick={() => state.add(1)}>+1</Button>
    </Space>
  );
};

const items: TabsProps["items"] = [
  {
    key: "BP",
    label: "BP",
    children: <TabItem platform="BP" />,
  },
  {
    key: "VOLC",
    label: "VOLC",
    children: <TabItem platform="VOLC" />,
  },
];

const App: React.FC = () => (
  <Tabs
    defaultActiveKey="BP"
    items={items}
    onChange={(key: string) => {
      console.log(key);
    }}
  />
);

export default App;
