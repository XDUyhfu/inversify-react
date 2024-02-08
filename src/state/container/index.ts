import { Container } from "inversify";
import { Symbols } from "../type";
import { BP } from "../BP";
import { VOLC } from "../VOLC";

export const container = new Container({ defaultScope: "Singleton" });

container.bind<BP>(Symbols.BP).to(BP);
container.bind<VOLC>(Symbols.VOLC).to(VOLC);
