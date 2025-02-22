class menu extends Phaser.Scene {
    constructor() {
        super("menu");
    }

    preload() {
        this.load.image('background', 'assets/sky.png');
        this.load.image('logo', 'assets/dudecover.png');
        this.load.image('play', 'assets/play.png');
    }

    create() {
        this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.add.image(380, 220, 'logo').setOrigin(0, 0);

        let btPlay = this.add.image(100, 200, 'play').setOrigin(0, 0);
        btPlay.setInteractive();
        btPlay.on("pointerdown", () => this.scene.start("game"));
    }
}