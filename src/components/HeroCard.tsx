
import { Hero } from '../types/hero';
import { cn } from '../lib/utils';

interface HeroCardProps {
  hero: Hero;
  isSelected?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  showDetails?: boolean;
}

export const HeroCard = ({ 
  hero, 
  isSelected = false, 
  onClick, 
  size = 'medium',
  showDetails = false 
}: HeroCardProps) => {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-20 h-20',
    large: 'w-24 h-24'
  };

  const getAttributeColor = (attribute: string) => {
    switch (attribute) {
      case 'Strength': return 'border-red-500';
      case 'Agility': return 'border-green-500';
      case 'Intelligence': return 'border-blue-500';
      default: return 'border-gray-500';
    }
  };

  return (
    <div
      className={cn(
        "relative group cursor-pointer transition-all duration-300 rounded-lg overflow-hidden",
        "hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20",
        isSelected && "ring-2 ring-orange-400 scale-105 shadow-lg shadow-orange-500/30",
        getAttributeColor(hero.primaryAttribute),
        "border-2"
      )}
      onClick={onClick}
    >
      <div className={cn("relative", sizeClasses[size])}>
        <img
          src={hero.image}
          alt={hero.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {showDetails && (
          <div className="absolute bottom-0 left-0 right-0 p-1 text-white text-xs">
            <div className="font-medium truncate">{hero.name}</div>
            <div className="text-orange-300 text-xs">{hero.primaryAttribute}</div>
          </div>
        )}
        
        {!showDetails && size !== 'small' && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-xs p-1 text-center">
            {hero.name}
          </div>
        )}
      </div>
    </div>
  );
};
