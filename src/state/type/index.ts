import { BehaviorSubject } from "rxjs";

export interface TabState {
  count$: BehaviorSubject<number>;
  add(num: number): void;
}

export const Symbols = {
  BP: Symbol.for("BP"),
  VOLC: Symbol.for("VOLC"),
  Factory: Symbol.for("Factory"),
};
