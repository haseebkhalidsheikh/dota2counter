
import { useState } from 'react';
import { Hero } from '../types/hero';
import { heroes } from '../data/heroes';
import { HeroSelector } from '../components/HeroSelector';
import { CounterPickRecommendations } from '../components/CounterPickRecommendations';
import { Button } from '../components/ui/button';
import { RotateCcw, Swords, Users } from 'lucide-react';

const Index = () => {
  const [myTeam, setMyTeam] = useState<Hero[]>([]);
  const [enemyTeam, setEnemyTeam] = useState<Hero[]>([]);
  const [activeTab, setActiveTab] = useState<'my-team' | 'enemy-team'>('my-team');

  const handleMyTeamSelect = (hero: Hero) => {
    if (myTeam.length < 5) {
      setMyTeam([...myTeam, hero]);
    }
  };

  const handleMyTeamRemove = (hero: Hero) => {
    setMyTeam(myTeam.filter(h => h.id !== hero.id));
  };

  const handleEnemyTeamSelect = (hero: Hero) => {
    if (enemyTeam.length < 5) {
      setEnemyTeam([...enemyTeam, hero]);
    }
  };

  const handleEnemyTeamRemove = (hero: Hero) => {
    setEnemyTeam(enemyTeam.filter(h => h.id !== hero.id));
  };

  const resetAll = () => {
    setMyTeam([]);
    setEnemyTeam([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <Swords className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  DOTA 2 Counter Pick
                </h1>
                <p className="text-gray-400">Strategic hero selection tool</p>
              </div>
            </div>
            
            <Button
              onClick={resetAll}
              variant="outline"
              className="border-gray-600 hover:border-orange-500"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset All
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8">
          <Button
            onClick={() => setActiveTab('my-team')}
            variant={activeTab === 'my-team' ? 'default' : 'outline'}
            className="flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            My Team ({myTeam.length}/5)
          </Button>
          <Button
            onClick={() => setActiveTab('enemy-team')}
            variant={activeTab === 'enemy-team' ? 'default' : 'outline'}
            className="flex items-center gap-2"
          >
            <Swords className="w-4 h-4" />
            Enemy Team ({enemyTeam.length}/5)
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Hero Selection */}
          <div>
            {activeTab === 'my-team' ? (
              <HeroSelector
                heroes={heroes}
                selectedHeroes={myTeam}
                onHeroSelect={handleMyTeamSelect}
                onHeroRemove={handleMyTeamRemove}
                title="Select Your Team"
              />
            ) : (
              <HeroSelector
                heroes={heroes}
                selectedHeroes={enemyTeam}
                onHeroSelect={handleEnemyTeamSelect}
                onHeroRemove={handleEnemyTeamRemove}
                title="Select Enemy Team"
              />
            )}
          </div>

          {/* Counter Pick Recommendations */}
          <div>
            <CounterPickRecommendations
              availableHeroes={heroes}
              enemyTeam={enemyTeam}
              myTeam={myTeam}
            />
          </div>
        </div>

        {/* Team Overview */}
        {(myTeam.length > 0 || enemyTeam.length > 0) && (
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {/* My Team Overview */}
            {myTeam.length > 0 && (
              <div className="bg-green-900/20 backdrop-blur-sm rounded-xl p-6 border border-green-700">
                <h3 className="text-lg font-bold text-green-400 mb-4">Your Team</h3>
                <div className="flex gap-2">
                  {myTeam.map((hero) => (
                    <div key={hero.id} className="text-center">
                      <div className="w-16 h-16 rounded-lg overflow-hidden mb-1">
                        <img src={hero.image} alt={hero.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-xs text-green-300">{hero.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Enemy Team Overview */}
            {enemyTeam.length > 0 && (
              <div className="bg-red-900/20 backdrop-blur-sm rounded-xl p-6 border border-red-700">
                <h3 className="text-lg font-bold text-red-400 mb-4">Enemy Team</h3>
                <div className="flex gap-2">
                  {enemyTeam.map((hero) => (
                    <div key={hero.id} className="text-center">
                      <div className="w-16 h-16 rounded-lg overflow-hidden mb-1">
                        <img src={hero.image} alt={hero.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-xs text-red-300">{hero.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
