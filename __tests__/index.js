@mixin(['test1', 'test2', 'test-obj', require('./sub')])
class App {
  start() {
    this.sayHi();
    this.jump();
    console.log(this.obj1(), this);
    this.sub1();
  }
}

// app start:
const app = new App();
app.start();
