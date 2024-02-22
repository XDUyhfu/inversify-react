import React from "react";
import { container } from "./state";
import { Symbols } from "./state/type";
import { TabWidget } from "./state/widget";

const widget = container.get<TabWidget>(Symbols.TabWidget);

const App: React.FC = () => widget.render();

export default App;
