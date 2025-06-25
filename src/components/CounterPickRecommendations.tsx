
import { Hero } from '../types/hero';
import { HeroCard } from './HeroCard';
import { TrendingUp, Shield, Zap } from 'lucide-react';

interface CounterPickRecommendationsProps {
  availableHeroes: Hero[];
  enemyTeam: Hero[];
  myTeam: Hero[];
}

export const CounterPickRecommendations = ({
  availableHeroes,
  enemyTeam,
  myTeam
}: CounterPickRecommendationsProps) => {
  const getCounterScore = (hero: Hero): number => {
    let score = 0;
    
    // Check how many enemy heroes this hero counters
    enemyTeam.forEach(enemy => {
      if (hero.counters.includes(enemy.id)) {
        score += 3;
      }
    });
    
    // Penalty for heroes that are countered by enemy team
    enemyTeam.forEach(enemy => {
      if (hero.counteredBy.includes(enemy.id)) {
        score -= 2;
      }
    });
    
    return score;
  };

  const recommendations = availableHeroes
    .filter(hero => !myTeam.find(teamHero => teamHero.id === hero.id))
    .map(hero => ({
      hero,
      score: getCounterScore(hero)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);

  const getRecommendationLevel = (score: number) => {
    if (score >= 6) return { level: 'Excellent', color: 'text-green-400', icon: TrendingUp };
    if (score >= 3) return { level: 'Good', color: 'text-yellow-400', icon: Shield };
    if (score >= 0) return { level: 'Neutral', color: 'text-blue-400', icon: Zap };
    return { level: 'Risky', color: 'text-red-400', icon: Shield };
  };

  if (enemyTeam.length === 0) {
    return (
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-orange-400 mb-4">Counter Pick Recommendations</h3>
        <p className="text-gray-400">Select enemy heroes to see counter-pick recommendations.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-orange-400 mb-4">Counter Pick Recommendations</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recommendations.map(({ hero, score }) => {
          const recommendation = getRecommendationLevel(score);
          const IconComponent = recommendation.icon;
          
          return (
            <div
              key={hero.id}
              className="bg-gray-800/50 rounded-lg p-3 border border-gray-600 hover:border-orange-500 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <HeroCard hero={hero} size="medium" />
                <div className="flex-1">
                  <h4 className="font-medium text-white text-sm">{hero.name}</h4>
                  <div className={`flex items-center gap-1 ${recommendation.color}`}>
                    <IconComponent className="w-3 h-3" />
                    <span className="text-xs">{recommendation.level}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-gray-400">
                <div>Score: {score}</div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {hero.roles.slice(0, 2).map(role => (
                    <span key={role} className="bg-gray-700 px-1 rounded text-xs">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
