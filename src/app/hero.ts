import { Sidekick } from "./sidekick";
import { Villain } from "./villain";

export interface Hero {
  id: number;
  name: string;
  colour: string;
  powers: string[];

  villains?: Villain[];

  sidekick?: Sidekick[];


}


