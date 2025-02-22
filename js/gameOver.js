class gameOver extends Phaser.Scene {
    constructor() {
        super("gameOver");
    }

    preload() {
        this.load.image('background', 'assets/sky.png');
        this.load.image('logo', 'assets/dudecover.png');
        this.load.image('home', 'assets/home.png');
    }

    create() {
        this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.add.image(380, 220, 'logo').setOrigin(0, 0);

        let btHome = this.add.image(100, 200, 'home').setOrigin(0, 0);
        btHome.setInteractive();
        btHome.on("pointerdown", () => this.scene.start("menu"));

        this.add.text(50, 50, 'game over', { fontSize: '32px', fill: '#000' });
    }
}