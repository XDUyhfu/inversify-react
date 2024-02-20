import { useRef } from "react";
import { useObservable } from "rxjs-hooks";
import { Button, Space } from "antd";
import { TabState } from "../state";

// const factory = container.get<(platform: "BP" | "VOLC") => TabState>(
//   Symbols.Factory,
// );
export const TabItem = ({
  platform,
  factory,
}: {
  platform: "BP" | "VOLC";
  factory: (platform: "BP" | "VOLC") => TabState;
}) => {
  // 使用 ref 可以在组件挂载时创建实例，卸载时销毁实例，而无需使用单例模式
  // const state = useRef(container.get<TabState>(Symbol.for(platform))).current;
  // const count = useObservable(() => state.count$);

  const state = useRef(factory(platform)).current;
  const count = useObservable(() => state.count$);

  return (
    <Space direction="vertical">
      <div>{platform}</div>
      <div>{count}</div>
      <Button onClick={() => state.add(1)}>+1</Button>
    </Space>
  );
};
