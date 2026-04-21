import { useState } from 'react';
import SpeedTool from './components/SpeedTool';
import DamageCalc from './components/DamageCalc';

const TABS = [
  { key: 'speed', label: '素早さ比較' },
  { key: 'damage', label: 'ダメージ計算' },
];

function App() {
  const [activeTab, setActiveTab] = useState('speed');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 pt-4">
          <h1 className="text-xl font-bold text-gray-800">
            ⚡ ポケモンチャンピオンズ 対戦ツール
          </h1>
          <p className="text-xs text-gray-500 mt-1 mb-3">Lv.50 / 個体値31固定 / 能力ポイント0〜32</p>
          <div className="flex gap-1">
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 text-sm font-bold rounded-t-lg transition-colors ${
                  activeTab === tab.key
                    ? 'bg-gray-50 text-gray-800 border border-b-0 border-gray-200'
                    : 'bg-gray-100 text-gray-500 hover:text-gray-700'
                }`}
              >{tab.label}</button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {activeTab === 'speed' && <SpeedTool />}
        {activeTab === 'damage' && <DamageCalc />}
      </main>
    </div>
  );
}

export default App;
