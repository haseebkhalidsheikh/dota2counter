
import { Hero } from '../types/hero';

export const heroes: Hero[] = [
  {
    id: 1,
    name: "Anti-Mage",
    primaryAttribute: "Agility",
    roles: ["Carry", "Escape"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png",
    counters: [15, 25, 35],
    counteredBy: [5, 8, 12]
  },
  {
    id: 2,
    name: "Axe",
    primaryAttribute: "Strength",
    roles: ["Initiator", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png",
    counters: [20, 22, 24],
    counteredBy: [1, 3, 7]
  },
  {
    id: 3,
    name: "Bane",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Disabler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png",
    counters: [1, 4, 6],
    counteredBy: [8, 10, 12]
  },
  {
    id: 4,
    name: "Bloodseeker",
    primaryAttribute: "Agility",
    roles: ["Carry", "Jungler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bloodseeker.png",
    counters: [7, 9, 11],
    counteredBy: [2, 5, 8]
  },
  {
    id: 5,
    name: "Crystal Maiden",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png",
    counters: [13, 15, 17],
    counteredBy: [1, 4, 6]
  },
  {
    id: 6,
    name: "Drow Ranger",
    primaryAttribute: "Agility",
    roles: ["Carry", "Pusher"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png",
    counters: [14, 16, 18],
    counteredBy: [2, 3, 7]
  },
  {
    id: 7,
    name: "Earthshaker",
    primaryAttribute: "Strength",
    roles: ["Support", "Initiator"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earthshaker.png",
    counters: [19, 21, 23],
    counteredBy: [4, 6, 8]
  },
  {
    id: 8,
    name: "Invoker",
    primaryAttribute: "Intelligence",
    roles: ["Carry", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png",
    counters: [1, 3, 5],
    counteredBy: [9, 11, 13]
  },
  {
    id: 9,
    name: "Juggernaut",
    primaryAttribute: "Agility",
    roles: ["Carry", "Pusher"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/juggernaut.png",
    counters: [10, 12, 14],
    counteredBy: [2, 4, 6]
  },
  {
    id: 10,
    name: "Pudge",
    primaryAttribute: "Strength",
    roles: ["Support", "Disabler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png",
    counters: [15, 17, 19],
    counteredBy: [1, 3, 5]
  },
  {
    id: 11,
    name: "Shadow Fiend",
    primaryAttribute: "Agility",
    roles: ["Carry", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nevermore.png",
    counters: [16, 18, 20],
    counteredBy: [2, 4, 6]
  },
  {
    id: 12,
    name: "Storm Spirit",
    primaryAttribute: "Intelligence",
    roles: ["Carry", "Escape"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/storm_spirit.png",
    counters: [17, 19, 21],
    counteredBy: [1, 3, 5]
  },
  {
    id: 13,
    name: "Tiny",
    primaryAttribute: "Strength",
    roles: ["Carry", "Initiator"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tiny.png",
    counters: [18, 20, 22],
    counteredBy: [2, 4, 6]
  },
  {
    id: 14,
    name: "Vengeful Spirit",
    primaryAttribute: "Agility",
    roles: ["Support", "Initiator"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/vengefulspirit.png",
    counters: [19, 21, 23],
    counteredBy: [1, 3, 5]
  },
  {
    id: 15,
    name: "Zeus",
    primaryAttribute: "Intelligence",
    roles: ["Nuker", "Support"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png",
    counters: [20, 22, 24],
    counteredBy: [1, 2, 4]
  },
  {
    id: 16,
    name: "Phantom Assassin",
    primaryAttribute: "Agility",
    roles: ["Carry", "Escape"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_assassin.png",
    counters: [21, 23, 25],
    counteredBy: [2, 3, 5]
  },
  {
    id: 17,
    name: "Sven",
    primaryAttribute: "Strength",
    roles: ["Carry", "Initiator"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sven.png",
    counters: [22, 24, 1],
    counteredBy: [3, 4, 6]
  },
  {
    id: 18,
    name: "Legion Commander",
    primaryAttribute: "Strength",
    roles: ["Carry", "Initiator"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/legion_commander.png",
    counters: [23, 25, 2],
    counteredBy: [4, 5, 7]
  },
  {
    id: 19,
    name: "Slark",
    primaryAttribute: "Agility",
    roles: ["Carry", "Escape"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slark.png",
    counters: [24, 1, 3],
    counteredBy: [5, 6, 8]
  },
  {
    id: 20,
    name: "Windranger",
    primaryAttribute: "Intelligence",
    roles: ["Carry", "Support"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/windrunner.png",
    counters: [25, 2, 4],
    counteredBy: [6, 7, 9]
  },
  {
    id: 21,
    name: "Kunkka",
    primaryAttribute: "Strength",
    roles: ["Carry", "Support"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/kunkka.png",
    counters: [1, 3, 5],
    counteredBy: [7, 9, 11]
  },
  {
    id: 22,
    name: "Lina",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lina.png",
    counters: [2, 4, 6],
    counteredBy: [8, 10, 12]
  },
  {
    id: 23,
    name: "Lion",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Disabler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lion.png",
    counters: [3, 5, 7],
    counteredBy: [9, 11, 13]
  },
  {
    id: 24,
    name: "Mirana",
    primaryAttribute: "Agility",
    roles: ["Carry", "Support"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mirana.png",
    counters: [4, 6, 8],
    counteredBy: [10, 12, 14]
  },
  {
    id: 25,
    name: "Morphling",
    primaryAttribute: "Agility",
    roles: ["Carry", "Escape"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/morphling.png",
    counters: [5, 7, 9],
    counteredBy: [11, 13, 15]
  },
  {
    id: 26,
    name: "Phantom Lancer",
    primaryAttribute: "Agility",
    roles: ["Carry", "Pusher"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_lancer.png",
    counters: [6, 8, 10],
    counteredBy: [12, 14, 16]
  },
  {
    id: 27,
    name: "Puck",
    primaryAttribute: "Intelligence",
    roles: ["Initiator", "Escape"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/puck.png",
    counters: [7, 9, 11],
    counteredBy: [13, 15, 17]
  },
  {
    id: 28,
    name: "Razor",
    primaryAttribute: "Agility",
    roles: ["Carry", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/razor.png",
    counters: [8, 10, 12],
    counteredBy: [14, 16, 18]
  },
  {
    id: 29,
    name: "Sand King",
    primaryAttribute: "Strength",
    roles: ["Initiator", "Support"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sand_king.png",
    counters: [9, 11, 13],
    counteredBy: [15, 17, 19]
  },
  {
    id: 30,
    name: "Sniper",
    primaryAttribute: "Agility",
    roles: ["Carry", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sniper.png",
    counters: [10, 12, 14],
    counteredBy: [16, 18, 20]
  },
  {
    id: 31,
    name: "Viper",
    primaryAttribute: "Agility",
    roles: ["Carry", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/viper.png",
    counters: [11, 13, 15],
    counteredBy: [17, 19, 21]
  },
  {
    id: 32,
    name: "Faceless Void",
    primaryAttribute: "Agility",
    roles: ["Carry", "Initiator"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/faceless_void.png",
    counters: [12, 14, 16],
    counteredBy: [18, 20, 22]
  },
  {
    id: 33,
    name: "Wraith King",
    primaryAttribute: "Strength",
    roles: ["Carry", "Support"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/skeleton_king.png",
    counters: [13, 15, 17],
    counteredBy: [19, 21, 23]
  },
  {
    id: 34,
    name: "Death Prophet",
    primaryAttribute: "Intelligence",
    roles: ["Carry", "Pusher"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/death_prophet.png",
    counters: [14, 16, 18],
    counteredBy: [20, 22, 24]
  },
  {
    id: 35,
    name: "Lich",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png",
    counters: [15, 17, 19],
    counteredBy: [21, 23, 25]
  },
  {
    id: 36,
    name: "Riki",
    primaryAttribute: "Agility",
    roles: ["Carry", "Escape"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/riki.png",
    counters: [16, 18, 20],
    counteredBy: [22, 24, 26]
  },
  {
    id: 37,
    name: "Enigma",
    primaryAttribute: "Intelligence",
    roles: ["Initiator", "Jungler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enigma.png",
    counters: [17, 19, 21],
    counteredBy: [23, 25, 27]
  },
  {
    id: 38,
    name: "Tinker",
    primaryAttribute: "Intelligence",
    roles: ["Nuker", "Pusher"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tinker.png",
    counters: [18, 20, 22],
    counteredBy: [24, 26, 28]
  },
  {
    id: 39,
    name: "Spectre",
    primaryAttribute: "Agility",
    roles: ["Carry", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spectre.png",
    counters: [19, 21, 23],
    counteredBy: [25, 27, 29]
  },
  {
    id: 40,
    name: "Doom",
    primaryAttribute: "Strength",
    roles: ["Carry", "Initiator"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/doom_bringer.png",
    counters: [20, 22, 24],
    counteredBy: [26, 28, 30]
  },
  {
    id: 41,
    name: "Ancient Apparition",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Disabler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ancient_apparition.png",
    counters: [21, 23, 25],
    counteredBy: [27, 29, 31]
  },
  {
    id: 42,
    name: "Ursa",
    primaryAttribute: "Agility",
    roles: ["Carry", "Jungler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ursa.png",
    counters: [22, 24, 26],
    counteredBy: [28, 30, 32]
  },
  {
    id: 43,
    name: "Spirit Breaker",
    primaryAttribute: "Strength",
    roles: ["Initiator", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spirit_breaker.png",
    counters: [23, 25, 27],
    counteredBy: [29, 31, 33]
  },
  {
    id: 44,
    name: "Gyrocopter",
    primaryAttribute: "Agility",
    roles: ["Carry", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/gyrocopter.png",
    counters: [24, 26, 28],
    counteredBy: [30, 32, 34]
  },
  {
    id: 45,
    name: "Alchemist",
    primaryAttribute: "Strength",
    roles: ["Carry", "Support"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png",
    counters: [25, 27, 29],
    counteredBy: [31, 33, 35]
  },
  {
    id: 46,
    name: "Huskar",
    primaryAttribute: "Strength",
    roles: ["Carry", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/huskar.png",
    counters: [26, 28, 30],
    counteredBy: [32, 34, 36]
  },
  {
    id: 47,
    name: "Night Stalker",
    primaryAttribute: "Strength",
    roles: ["Initiator", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/night_stalker.png",
    counters: [27, 29, 31],
    counteredBy: [33, 35, 37]
  },
  {
    id: 48,
    name: "Broodmother",
    primaryAttribute: "Agility",
    roles: ["Carry", "Pusher"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/broodmother.png",
    counters: [28, 30, 32],
    counteredBy: [34, 36, 38]
  },
  {
    id: 49,
    name: "Bounty Hunter",
    primaryAttribute: "Agility",
    roles: ["Support", "Escape"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bounty_hunter.png",
    counters: [29, 31, 33],
    counteredBy: [35, 37, 39]
  },
  {
    id: 50,
    name: "Weaver",
    primaryAttribute: "Agility",
    roles: ["Carry", "Escape"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/weaver.png",
    counters: [30, 32, 34],
    counteredBy: [36, 38, 40]
  },
  {
    id: 51,
    name: "Jakiro",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/jakiro.png",
    counters: [31, 33, 35],
    counteredBy: [37, 39, 41]
  },
  {
    id: 52,
    name: "Batrider",
    primaryAttribute: "Intelligence",
    roles: ["Initiator", "Disabler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/batrider.png",
    counters: [32, 34, 36],
    counteredBy: [38, 40, 42]
  },
  {
    id: 53,
    name: "Chen",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Jungler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chen.png",
    counters: [33, 35, 37],
    counteredBy: [39, 41, 43]
  },
  {
    id: 54,
    name: "Spectre",
    primaryAttribute: "Agility",
    roles: ["Carry", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spectre.png",
    counters: [34, 36, 38],
    counteredBy: [40, 42, 44]
  },
  {
    id: 55,
    name: "Ancient Apparition",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Disabler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ancient_apparition.png",
    counters: [35, 37, 39],
    counteredBy: [41, 43, 45]
  },
  {
    id: 56,
    name: "Doom",
    primaryAttribute: "Strength",
    roles: ["Carry", "Initiator"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/doom_bringer.png",
    counters: [36, 38, 40],
    counteredBy: [42, 44, 46]
  },
  {
    id: 57,
    name: "Ursa",
    primaryAttribute: "Agility",
    roles: ["Carry", "Jungler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ursa.png",
    counters: [37, 39, 41],
    counteredBy: [43, 45, 47]
  },
  {
    id: 58,
    name: "Spirit Breaker",
    primaryAttribute: "Strength",
    roles: ["Initiator", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spirit_breaker.png",
    counters: [38, 40, 42],
    counteredBy: [44, 46, 48]
  },
  {
    id: 59,
    name: "Gyrocopter",
    primaryAttribute: "Agility",
    roles: ["Carry", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/gyrocopter.png",
    counters: [39, 41, 43],
    counteredBy: [45, 47, 49]
  },
  {
    id: 60,
    name: "Alchemist",
    primaryAttribute: "Strength",
    roles: ["Carry", "Support"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png",
    counters: [40, 42, 44],
    counteredBy: [46, 48, 50]
  },
  {
    id: 61,
    name: "Silencer",
    primaryAttribute: "Intelligence",
    roles: ["Carry", "Support"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/silencer.png",
    counters: [41, 43, 45],
    counteredBy: [47, 49, 51]
  },
  {
    id: 62,
    name: "Outworld Destroyer",
    primaryAttribute: "Intelligence",
    roles: ["Carry", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/obsidian_destroyer.png",
    counters: [42, 44, 46],
    counteredBy: [48, 50, 52]
  },
  {
    id: 63,
    name: "Lycan",
    primaryAttribute: "Strength",
    roles: ["Carry", "Pusher"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lycan.png",
    counters: [43, 45, 47],
    counteredBy: [49, 51, 53]
  },
  {
    id: 64,
    name: "Brewmaster",
    primaryAttribute: "Strength",
    roles: ["Initiator", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/brewmaster.png",
    counters: [44, 46, 48],
    counteredBy: [50, 52, 54]
  },
  {
    id: 65,
    name: "Shadow Demon",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Disabler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_demon.png",
    counters: [45, 47, 49],
    counteredBy: [51, 53, 55]
  },
  {
    id: 66,
    name: "Lone Druid",
    primaryAttribute: "Agility",
    roles: ["Carry", "Pusher"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lone_druid.png",
    counters: [46, 48, 50],
    counteredBy: [52, 54, 56]
  },
  {
    id: 67,
    name: "Chaos Knight",
    primaryAttribute: "Strength",
    roles: ["Carry", "Pusher"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chaos_knight.png",
    counters: [47, 49, 51],
    counteredBy: [53, 55, 57]
  },
  {
    id: 68,
    name: "Meepo",
    primaryAttribute: "Agility",
    roles: ["Carry", "Pusher"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/meepo.png",
    counters: [48, 50, 52],
    counteredBy: [54, 56, 58]
  },
  {
    id: 69,
    name: "Treant Protector",
    primaryAttribute: "Strength",
    roles: ["Support", "Initiator"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/treant.png",
    counters: [49, 51, 53],
    counteredBy: [55, 57, 59]
  },
  {
    id: 70,
    name: "Ogre Magi",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ogre_magi.png",
    counters: [50, 52, 54],
    counteredBy: [56, 58, 60]
  },
  {
    id: 71,
    name: "Undying",
    primaryAttribute: "Strength",
    roles: ["Support", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/undying.png",
    counters: [51, 53, 55],
    counteredBy: [57, 59, 61]
  },
  {
    id: 72,
    name: "Rubick",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Disabler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png",
    counters: [52, 54, 56],
    counteredBy: [58, 60, 62]
  },
  {
    id: 73,
    name: "Disruptor",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Disabler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/disruptor.png",
    counters: [53, 55, 57],
    counteredBy: [59, 61, 63]
  },
  {
    id: 74,
    name: "Nyx Assassin",
    primaryAttribute: "Agility",
    roles: ["Initiator", "Escape"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nyx_assassin.png",
    counters: [54, 56, 58],
    counteredBy: [60, 62, 64]
  },
  {
    id: 75,
    name: "Naga Siren",
    primaryAttribute: "Agility",
    roles: ["Carry", "Support"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/naga_siren.png",
    counters: [55, 57, 59],
    counteredBy: [61, 63, 65]
  },
  {
    id: 76,
    name: "Keeper of the Light",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/keeper_of_the_light.png",
    counters: [56, 58, 60],
    counteredBy: [62, 64, 66]
  },
  {
    id: 77,
    name: "Io",
    primaryAttribute: "Strength",
    roles: ["Support", "Escape"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/wisp.png",
    counters: [57, 59, 61],
    counteredBy: [63, 65, 67]
  },
  {
    id: 78,
    name: "Visage",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/visage.png",
    counters: [58, 60, 62],
    counteredBy: [64, 66, 68]
  },
  {
    id: 79,
    name: "Slark",
    primaryAttribute: "Agility",
    roles: ["Carry", "Escape"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slark.png",
    counters: [59, 61, 63],
    counteredBy: [65, 67, 69]
  },
  {
    id: 80,
    name: "Medusa",
    primaryAttribute: "Agility",
    roles: ["Carry", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/medusa.png",
    counters: [60, 62, 64],
    counteredBy: [66, 68, 70]
  },
  {
    id: 81,
    name: "Troll Warlord",
    primaryAttribute: "Agility",
    roles: ["Carry", "Pusher"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/troll_warlord.png",
    counters: [61, 63, 65],
    counteredBy: [67, 69, 71]
  },
  {
    id: 82,
    name: "Centaur Warrunner",
    primaryAttribute: "Strength",
    roles: ["Initiator", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/centaur.png",
    counters: [62, 64, 66],
    counteredBy: [68, 70, 72]
  },
  {
    id: 83,
    name: "Magnus",
    primaryAttribute: "Strength",
    roles: ["Initiator", "Disabler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/magnataur.png",
    counters: [63, 65, 67],
    counteredBy: [69, 71, 73]
  },
  {
    id: 84,
    name: "Timbersaw",
    primaryAttribute: "Strength",
    roles: ["Nuker", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shredder.png",
    counters: [64, 66, 68],
    counteredBy: [70, 72, 74]
  },
  {
    id: 85,
    name: "Bristleback",
    primaryAttribute: "Strength",
    roles: ["Carry", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bristleback.png",
    counters: [65, 67, 69],
    counteredBy: [71, 73, 75]
  },
  {
    id: 86,
    name: "Tusk",
    primaryAttribute: "Strength",
    roles: ["Initiator", "Disabler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tusk.png",
    counters: [66, 68, 70],
    counteredBy: [72, 74, 76]
  },
  {
    id: 87,
    name: "Skywrath Mage",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/skywrath_mage.png",
    counters: [67, 69, 71],
    counteredBy: [73, 75, 77]
  },
  {
    id: 88,
    name: "Abaddon",
    primaryAttribute: "Strength",
    roles: ["Support", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png",
    counters: [68, 70, 72],
    counteredBy: [74, 76, 78]
  },
  {
    id: 89,
    name: "Elder Titan",
    primaryAttribute: "Strength",
    roles: ["Initiator", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/elder_titan.png",
    counters: [69, 71, 73],
    counteredBy: [75, 77, 79]
  },
  {
    id: 90,
    name: "Legion Commander",
    primaryAttribute: "Strength",
    roles: ["Carry", "Initiator"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/legion_commander.png",
    counters: [70, 72, 74],
    counteredBy: [76, 78, 80]
  },
  {
    id: 91,
    name: "Techies",
    primaryAttribute: "Intelligence",
    roles: ["Nuker", "Disabler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/techies.png",
    counters: [71, 73, 75],
    counteredBy: [77, 79, 81]
  },
  {
    id: 92,
    name: "Ember Spirit",
    primaryAttribute: "Agility",
    roles: ["Carry", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ember_spirit.png",
    counters: [72, 74, 76],
    counteredBy: [78, 80, 82]
  },
  {
    id: 93,
    name: "Earth Spirit",
    primaryAttribute: "Strength",
    roles: ["Support", "Initiator"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earth_spirit.png",
    counters: [73, 75, 77],
    counteredBy: [79, 81, 83]
  },
  {
    id: 94,
    name: "Underlord",
    primaryAttribute: "Strength",
    roles: ["Support", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abyssal_underlord.png",
    counters: [74, 76, 78],
    counteredBy: [80, 82, 84]
  },
  {
    id: 95,
    name: "Terrorblade",
    primaryAttribute: "Agility",
    roles: ["Carry", "Pusher"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/terrorblade.png",
    counters: [75, 77, 79],
    counteredBy: [81, 83, 85]
  },
  {
    id: 96,
    name: "Phoenix",
    primaryAttribute: "Strength",
    roles: ["Support", "Initiator"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phoenix.png",
    counters: [76, 78, 80],
    counteredBy: [82, 84, 86]
  },
  {
    id: 97,
    name: "Oracle",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/oracle.png",
    counters: [77, 79, 81],
    counteredBy: [83, 85, 87]
  },
  {
    id: 98,
    name: "Winter Wyvern",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Disabler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/winter_wyvern.png",
    counters: [78, 80, 82],
    counteredBy: [84, 86, 88]
  },
  {
    id: 99,
    name: "Arc Warden",
    primaryAttribute: "Agility",
    roles: ["Carry", "Pusher"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png",
    counters: [79, 81, 83],
    counteredBy: [85, 87, 89]
  },
  {
    id: 100,
    name: "Monkey King",
    primaryAttribute: "Agility",
    roles: ["Carry", "Escape"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/monkey_king.png",
    counters: [80, 82, 84],
    counteredBy: [86, 88, 90]
  },
  {
    id: 101,
    name: "Dark Willow",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_willow.png",
    counters: [81, 83, 85],
    counteredBy: [87, 89, 91]
  },
  {
    id: 102,
    name: "Pangolier",
    primaryAttribute: "Agility",
    roles: ["Initiator", "Escape"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pangolier.png",
    counters: [82, 84, 86],
    counteredBy: [88, 90, 92]
  },
  {
    id: 103,
    name: "Grimstroke",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/grimstroke.png",
    counters: [83, 85, 87],
    counteredBy: [89, 91, 93]
  },
  {
    id: 104,
    name: "Mars",
    primaryAttribute: "Strength",
    roles: ["Initiator", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mars.png",
    counters: [84, 86, 88],
    counteredBy: [90, 92, 94]
  },
  {
    id: 105,
    name: "Void Spirit",
    primaryAttribute: "Intelligence",
    roles: ["Carry", "Escape"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/void_spirit.png",
    counters: [85, 87, 89],
    counteredBy: [91, 93, 95]
  },
  {
    id: 106,
    name: "Snapfire",
    primaryAttribute: "Strength",
    roles: ["Support", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/snapfire.png",
    counters: [86, 88, 90],
    counteredBy: [92, 94, 96]
  },
  {
    id: 107,
    name: "Hoodwink",
    primaryAttribute: "Agility",
    roles: ["Support", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/hoodwink.png",
    counters: [87, 89, 91],
    counteredBy: [93, 95, 97]
  },
  {
    id: 108,
    name: "Dawnbreaker",
    primaryAttribute: "Strength",
    roles: ["Carry", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dawnbreaker.png",
    counters: [88, 90, 92],
    counteredBy: [94, 96, 98]
  },
  {
    id: 109,
    name: "Marci",
    primaryAttribute: "Strength",
    roles: ["Support", "Carry"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/marci.png",
    counters: [89, 91, 93],
    counteredBy: [95, 97, 99]
  },
  {
    id: 110,
    name: "Primal Beast",
    primaryAttribute: "Strength",
    roles: ["Initiator", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/primal_beast.png",
    counters: [90, 92, 94],
    counteredBy: [96, 98, 100]
  },
  {
    id: 111,
    name: "Muerta",
    primaryAttribute: "Intelligence",
    roles: ["Carry", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/muerta.png",
    counters: [91, 93, 95],
    counteredBy: [97, 99, 101]
  },
  {
    id: 112,
    name: "Ringmaster",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Disabler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ringmaster.png",
    counters: [92, 94, 96],
    counteredBy: [98, 100, 102]
  },
  {
    id: 113,
    name: "Clockwerk",
    primaryAttribute: "Strength",
    roles: ["Initiator", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rattletrap.png",
    counters: [93, 95, 97],
    counteredBy: [99, 101, 103]
  },
  {
    id: 114,
    name: "Omniknight",
    primaryAttribute: "Strength",
    roles: ["Support", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/omniknight.png",
    counters: [94, 96, 98],
    counteredBy: [100, 102, 104]
  },
  {
    id: 115,
    name: "Enchantress",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Jungler"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enchantress.png",
    counters: [95, 97, 99],
    counteredBy: [101, 103, 105]
  },
  {
    id: 116,
    name: "Warlock",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Initiator"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/warlock.png",
    counters: [96, 98, 100],
    counteredBy: [102, 104, 106]
  },
  {
    id: 117,
    name: "Beastmaster",
    primaryAttribute: "Strength",
    roles: ["Initiator", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/beastmaster.png",
    counters: [97, 99, 101],
    counteredBy: [103, 105, 107]
  },
  {
    id: 118,
    name: "Queen of Pain",
    primaryAttribute: "Intelligence",
    roles: ["Carry", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/queenofpain.png",
    counters: [98, 100, 102],
    counteredBy: [104, 106, 108]
  },
  {
    id: 119,
    name: "Venomancer",
    primaryAttribute: "Agility",
    roles: ["Support", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/venomancer.png",
    counters: [99, 101, 103],
    counteredBy: [105, 107, 109]
  },
  {
    id: 120,
    name: "Witch Doctor",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/witch_doctor.png",
    counters: [100, 102, 104],
    counteredBy: [106, 108, 110]
  },
  {
    id: 121,
    name: "Dazzle",
    primaryAttribute: "Intelligence",
    roles: ["Support", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dazzle.png",
    counters: [101, 103, 105],
    counteredBy: [107, 109, 111]
  },
  {
    id: 122,
    name: "Clinkz",
    primaryAttribute: "Agility",
    roles: ["Carry", "Escape"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/clinkz.png",
    counters: [102, 104, 106],
    counteredBy: [108, 110, 112]
  },
  {
    id: 123,
    name: "Leshrac",
    primaryAttribute: "Intelligence",
    roles: ["Carry", "Nuker"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/leshrac.png",
    counters: [103, 105, 107],
    counteredBy: [109, 111, 113]
  },
  {
    id: 124,
    name: "Nature's Prophet",
    primaryAttribute: "Intelligence",
    roles: ["Carry", "Pusher"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/furion.png",
    counters: [104, 106, 108],
    counteredBy: [110, 112, 1]
  },
  {
    id: 125,
    name: "Lifestealer",
    primaryAttribute: "Strength",
    roles: ["Carry", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/life_stealer.png",
    counters: [105, 107, 109],
    counteredBy: [111, 113, 2]
  },
  {
    id: 126,
    name: "Dragon Knight",
    primaryAttribute: "Strength",
    roles: ["Carry", "Durable"],
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dragon_knight.png",
    counters: [106, 108, 110],
    counteredBy: [112, 1, 3]
  }
];
