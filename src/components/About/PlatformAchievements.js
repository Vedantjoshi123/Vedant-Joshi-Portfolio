import React, { useState } from 'react';
import './PlatformAchievements.css';
import GitHubPage from "../About/PlatformPages/GitHubPage";
import LeetCodePage from "../About/PlatformPages/LeetCodePage";
import GeeksforGeeksPage from "../About/PlatformPages/GeeksforGeeksPage";
import HackerRankPage from "../About/PlatformPages/HackerRankPage";
import CodeChefPage from "../About/PlatformPages/CodeChefPage";
import CodeforcesPage from "../About/PlatformPages/CodeforcesPage";
import OverAllPage from "../About/PlatformPages/OverAllPage";

const PlatformAchievements = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('home');

  const renderContent = () => {
    switch (selectedPlatform) {
      case 'github':
        return (
            <GitHubPage />
        );
      case 'leetcode':
        return (
            <LeetCodePage />
        );
      case 'gfg':
        return (
            <GeeksforGeeksPage />
        );
      case 'hackerrank':
        return (
            <HackerRankPage />
        );
      case 'codechef':
        return (
            <CodeChefPage />
        );
      case 'codeforces':
        return (
            <CodeforcesPage />
        );
      case 'home':
      default:
        return (
            <OverAllPage />
        );
    }
  };

  return (
    <div className="platform-achievements">
      <nav className="navigation">
        <ul>
          <li><button onClick={() => setSelectedPlatform('home')} className={selectedPlatform === 'home' ? 'active' : ''}>Home</button></li>
          <li><button onClick={() => setSelectedPlatform('github')} className={selectedPlatform === 'github' ? 'active' : ''}>GitHub</button></li>
          <li><button onClick={() => setSelectedPlatform('leetcode')} className={selectedPlatform === 'leetcode' ? 'active' : ''}>LeetCode</button></li>
          <li><button onClick={() => setSelectedPlatform('gfg')} className={selectedPlatform === 'gfg' ? 'active' : ''}>GeeksforGeeks</button></li>
          <li><button onClick={() => setSelectedPlatform('hackerrank')} className={selectedPlatform === 'hackerrank' ? 'active' : ''}>HackerRank</button></li>
          <li><button onClick={() => setSelectedPlatform('codechef')} className={selectedPlatform === 'codechef' ? 'active' : ''}>CodeChef</button></li>
          <li><button onClick={() => setSelectedPlatform('codeforces')} className={selectedPlatform === 'codeforces' ? 'active' : ''}>Codeforces</button></li>
        </ul>
      </nav>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default PlatformAchievements;