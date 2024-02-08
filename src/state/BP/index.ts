import "reflect-metadata";
import { TabState } from "../type";
import { injectable } from "inversify";
import { BehaviorSubject } from "rxjs";

@injectable()
export class BP implements TabState {
  count$ = new BehaviorSubject(0);
  add(num: number) {
    this.count$.next(this.count$.getValue() + num);
  }
}
