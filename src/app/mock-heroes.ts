import { Hero } from './hero';
import { Villains } from './mock-villians';
import { Sidekicks } from './sidekick-mock';
//rememeber that the first item in the list starts at 0
export const HEROES: Hero[] = [
  {
    id: 12, name: 'Dr. Nice', colour: 'Black', powers: ['Teleport', 'Fly', 'Levitate', 'Time travel', 'Magic', 'Shapeshifting'], villains: Villains, sidekick: Sidekicks
  },
  { id: 13, name: 'Bombasto', colour: 'White', powers: ['Teleport', 'Fly', 'Levitate', 'Time travel', 'Magic', 'Shapeshifting'], villains: [Villains[1], Villains[2]], sidekick: [Sidekicks[1], Sidekicks[2]] },
  { id: 14, name: 'Celeritas', colour: 'Purple', powers: ['Teleport', 'Fly', 'Levitate', 'Time travel', 'Magic', 'Shapeshifting'], villains: [Villains[2]], sidekick: [Sidekicks[2]] },
  { id: 15, name: 'Magneta', colour: 'Blue', powers: ['Teleport', 'Fly', 'Levitate', 'Time travel', 'Magic', 'Shapeshifting'], villains: [Villains[3]], sidekick: [Sidekicks[3]] },
  { id: 16, name: 'RubberMan', colour: 'Orange', powers: ['Teleport', 'Fly', 'Levitate', 'Time travel', 'Magic', 'Shapeshifting'], villains: [Villains[4]], sidekick: [Sidekicks[4]] },
  { id: 17, name: 'Dynama', colour: 'Yellow', powers: ['Teleport', 'Fly', 'Levitate', 'Time travel', 'Magic', 'Shapeshifting'], villains: [Villains[5]], sidekick: [Sidekicks[5]] },
  { id: 18, name: 'Dr. IQ', colour: 'Red', powers: ['Teleport', 'Fly', 'Levitate', 'Time travel', 'Magic', 'Shapeshifting'], villains: [Villains[6]], sidekick: [Sidekicks[6]] },
  { id: 19, name: 'Magma', colour: 'Green', powers: ['Teleport', 'Fly', 'Levitate', 'Time travel', 'Magic', 'Shapeshifting'], villains: [Villains[7]], sidekick: [Sidekicks[7]] },
  { id: 20, name: 'Tornado', colour: 'Pink', powers: ['Teleport', 'Fly', 'Levitate', 'Time travel', 'Magic', 'Shapeshifting'], villains: [Villains[8]], sidekick: [Sidekicks[8]] }
];

