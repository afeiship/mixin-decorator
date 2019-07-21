@mixin(['test1', 'test2'])
class App {
  start() {
    console.log('hello!');
    this.sayHi();
    this.jump();
  }
}

// app start:
const app = new App();
app.start();
