import React, { useRef } from "react";
import { Button, Space, Tabs } from "antd";
import type { TabsProps } from "antd";
import { container, TabState } from "./state";
import { useObservable } from "rxjs-hooks";

const TabItem = ({ platform }: { platform: string }) => {
  // 使用 ref 可以在组件挂载时创建实例，卸载时销毁实例，而无需使用单例模式
  const state = useRef(container.get<TabState>(Symbol.for(platform)));
  const count = useObservable(() => state.current.count$);

  return (
    <Space direction="vertical">
      <div>{platform}</div>
      <div>{count}</div>
      <Button onClick={() => state.current.add(1)}>+1</Button>
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
    destroyInactiveTabPane
    defaultActiveKey="BP"
    items={items}
    onChange={(key: string) => {
      console.log(key);
    }}
  />
);

export default App;
