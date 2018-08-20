function createPlatforms() {
    platforms = game.add.physicsGroup();

    platforms.create(300, 200, 'platform');
    platforms.create(400, 450, 'platform2');
    platforms.create(100, 450, 'platform');

    platforms.setAll('body.immovable', true);
}s
