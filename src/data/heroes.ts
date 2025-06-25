
import { Hero } from '../types/hero';

export const heroes: Hero[] = [
  {
    id: 1,
    name: "Anti-Mage",
    primaryAttribute: "Agility",
    roles: ["Carry", "Escape"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
    counters: [15, 25, 35], // Zeus, Storm Spirit, etc.
    counteredBy: [5, 8, 12]
  },
  {
    id: 2,
    name: "Axe",
    primaryAttribute: "Strength",
    roles: ["Initiator", "Durable"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
    counters: [20, 22, 24],
    counteredBy: [1, 3, 7]
  },
  {
    id: 3,
    name: "Bane",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Disabler"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
    counters: [1, 4, 6],
    counteredBy: [8, 10, 12]
  },
  {
    id: 4,
    name: "Bloodseeker",
    primaryAttribute: "Agility",
    roles: ["Carry", "Jungler"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
    counters: [7, 9, 11],
    counteredBy: [2, 5, 8]
  },
  {
    id: 5,
    name: "Crystal Maiden",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Nuker"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
    counters: [13, 15, 17],
    counteredBy: [1, 4, 6]
  },
  {
    id: 6,
    name: "Drow Ranger",
    primaryAttribute: "Agility",
    roles: ["Carry", "Pusher"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
    counters: [14, 16, 18],
    counteredBy: [2, 3, 7]
  },
  {
    id: 7,
    name: "Earthshaker",
    primaryAttribute: "Strength",
    roles: ["Support", "Initiator"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
    counters: [19, 21, 23],
    counteredBy: [4, 6, 8]
  },
  {
    id: 8,
    name: "Invoker",
    primaryAttribute: "Intelligence",
    roles: ["Carry", "Nuker"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
    counters: [1, 3, 5],
    counteredBy: [9, 11, 13]
  },
  {
    id: 9,
    name: "Juggernaut",
    primaryAttribute: "Agility",
    roles: ["Carry", "Pusher"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
    counters: [10, 12, 14],
    counteredBy: [2, 4, 6]
  },
  {
    id: 10,
    name: "Pudge",
    primaryAttribute: "Strength",
    roles: ["Support", "Disabler"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
    counters: [15, 17, 19],
    counteredBy: [1, 3, 5]
  },
  {
    id: 11,
    name: "Shadow Fiend",
    primaryAttribute: "Agility",
    roles: ["Carry", "Nuker"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
    counters: [16, 18, 20],
    counteredBy: [2, 4, 6]
  },
  {
    id: 12,
    name: "Storm Spirit",
    primaryAttribute: "Intelligence",
    roles: ["Carry", "Escape"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
    counters: [17, 19, 21],
    counteredBy: [1, 3, 5]
  },
  {
    id: 13,
    name: "Tiny",
    primaryAttribute: "Strength",
    roles: ["Carry", "Initiator"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
    counters: [18, 20, 22],
    counteredBy: [2, 4, 6]
  },
  {
    id: 14,
    name: "Vengeful Spirit",
    primaryAttribute: "Agility",
    roles: ["Support", "Initiator"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
    counters: [19, 21, 23],
    counteredBy: [1, 3, 5]
  },
  {
    id: 15,
    name: "Zeus",
    primaryAttribute: "Intelligence",
    roles: ["Nuker", "Support"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
    counters: [20, 22, 24],
    counteredBy: [1, 2, 4]
  },
  {
    id: 16,
    name: "Phantom Assassin",
    primaryAttribute: "Agility",
    roles: ["Carry", "Escape"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
    counters: [21, 23, 25],
    counteredBy: [2, 3, 5]
  },
  {
    id: 17,
    name: "Sven",
    primaryAttribute: "Strength",
    roles: ["Carry", "Initiator"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
    counters: [22, 24, 1],
    counteredBy: [3, 4, 6]
  },
  {
    id: 18,
    name: "Legion Commander",
    primaryAttribute: "Strength",
    roles: ["Carry", "Initiator"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
    counters: [23, 25, 2],
    counteredBy: [4, 5, 7]
  },
  {
    id: 19,
    name: "Slark",
    primaryAttribute: "Agility",
    roles: ["Carry", "Escape"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
    counters: [24, 1, 3],
    counteredBy: [5, 6, 8]
  },
  {
    id: 20,
    name: "Invoker",
    primaryAttribute: "Intelligence",
    roles: ["Carry", "Nuker"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
    counters: [25, 2, 4],
    counteredBy: [6, 7, 9]
  }
];
