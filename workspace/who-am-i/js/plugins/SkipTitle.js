//=============================================================================
// RPG Maker MZ - Skip Title
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Skip title when starting a new game
 * @author Ju Ho Nam
 *
 * @help SkipTitle.js
 *
 * If this plugin is enabled, title screen will be skipped when a new game started
 */

(() => {
    Scene_Boot.prototype.startNormalGame = function() {
        this.checkPlayerLocation();
        DataManager.setupNewGame();
        SceneManager.goto(Scene_Map);
    }
})();
