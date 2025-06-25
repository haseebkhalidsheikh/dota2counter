
import { useState } from 'react';
import { Hero } from '../types/hero';
import { HeroCard } from './HeroCard';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search, Filter } from 'lucide-react';

interface HeroSelectorProps {
  heroes: Hero[];
  selectedHeroes: Hero[];
  onHeroSelect: (hero: Hero) => void;
  onHeroRemove: (hero: Hero) => void;
  maxSelections?: number;
  title: string;
}

export const HeroSelector = ({
  heroes,
  selectedHeroes,
  onHeroSelect,
  onHeroRemove,
  maxSelections = 5,
  title
}: HeroSelectorProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [attributeFilter, setAttributeFilter] = useState<string>('All');
  const [roleFilter, setRoleFilter] = useState<string>('All');

  const filteredHeroes = heroes.filter(hero => {
    const matchesSearch = hero.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAttribute = attributeFilter === 'All' || hero.primaryAttribute === attributeFilter;
    const matchesRole = roleFilter === 'All' || hero.roles.includes(roleFilter);
    const notAlreadySelected = !selectedHeroes.find(selected => selected.id === hero.id);
    
    return matchesSearch && matchesAttribute && matchesRole && notAlreadySelected;
  });

  const roles = ['All', 'Carry', 'Support', 'Initiator', 'Nuker', 'Disabler', 'Escape', 'Pusher', 'Durable', 'Jungler'];
  const attributes = ['All', 'Strength', 'Agility', 'Intelligence'];

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-orange-400 mb-4">{title}</h3>
      
      {/* Selected Heroes Display */}
      <div className="mb-6">
        <div className="flex gap-2 min-h-[5rem] p-3 bg-gray-800/50 rounded-lg border border-gray-600">
          {selectedHeroes.map((hero) => (
            <div key={hero.id} className="relative">
              <HeroCard
                hero={hero}
                size="medium"
                onClick={() => onHeroRemove(hero)}
              />
              <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs cursor-pointer">
                ×
              </div>
            </div>
          ))}
          {Array.from({ length: maxSelections - selectedHeroes.length }).map((_, index) => (
            <div
              key={`empty-${index}`}
              className="w-20 h-20 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center text-gray-500"
            >
              ?
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-2">
          {selectedHeroes.length}/{maxSelections} heroes selected
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search heroes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-gray-800 border-gray-600 text-white"
          />
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">Attribute:</span>
            {attributes.map((attr) => (
              <Button
                key={attr}
                variant={attributeFilter === attr ? "default" : "outline"}
                size="sm"
                onClick={() => setAttributeFilter(attr)}
                className="text-xs"
              >
                {attr}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <span className="text-sm text-gray-400">Role:</span>
          {roles.map((role) => (
            <Button
              key={role}
              variant={roleFilter === role ? "default" : "outline"}
              size="sm"
              onClick={() => setRoleFilter(role)}
              className="text-xs"
            >
              {role}
            </Button>
          ))}
        </div>
      </div>

      {/* Hero Grid */}
      <div className="grid grid-cols-8 gap-3 max-h-80 overflow-y-auto">
        {filteredHeroes.map((hero) => (
          <HeroCard
            key={hero.id}
            hero={hero}
            onClick={() => selectedHeroes.length < maxSelections && onHeroSelect(hero)}
            showDetails={true}
            size="large"
          />
        ))}
      </div>
    </div>
  );
};
