class Level {
    constructor() {
      this.isLoaded = false;
      this.isPaused = false;
    }
  
    init(levelData) {
      // Set level name
      this.name = levelData.name;

      // Initialize enemies
      this.enemies = levelData.enemies.map(enemy => {
          return { x: enemy.x, y: enemy.y };
      });

      // Mark level as loaded
      this.isLoaded = true;
    }
    loadCrep(){
      return this.enemies;
    }
    update() {
      // Update game logic
    }
  
    pause() {
      this.isPaused = true;
    }
  
    resume() {
      this.isPaused = false;
    }
  
    // Event handlers
    onLoaded() {
      this.isLoaded = true;
    }
  
    onWon(listcrep) {
      
    }
  
    onLose() {
      // Handle level failure
    }
    
}
class LevelLoader {
  async loadLevel(levelId) {
    const response = await fetch(`./asset/levels/level_${levelId}.json`);
    const data = await response.json();
    return data;
}
}
class LevelManager {
    constructor() {
      this.currentLevel = null;
      this.levelLoader = new LevelLoader();
    }
  
    async loadLevel(levelId) {
      // Cleanup current level if exists
      if (this.currentLevel) {
        this.unloadCurrentLevel();
      }
  
      // Load new level data
      const levelData = await this.levelLoader.loadLevel(levelId);
      
      // Create and initialize new level
      this.currentLevel = new Level();
      this.currentLevel.init(levelData);
    }
  
    unloadCurrentLevel() {
      // Cleanup resources
      this.currentLevel = null;
    }
  } 