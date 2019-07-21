# mixin-decorator
> A decorator for mixins that doesn&#39;t overwrite existing methods.


## resources
+ https://github.com/webpack/webpack/issues/2031
+ https://github.com/mbasso/react-decoration
+ https://github.com/jayphelps/core-decorators

## usage
+ npm install
```javascript
// npm install afeiship/mixin-decorator --save
import mixin from 'mixin-decorator';

class A{
  static VERSION= '1.0';
  testA(){
    console.log('AAA')
  }
}


class B{
  static NAME ='BBB=NAME';
  testB(){
    console.log('BBB')
  }
}

@mixin(A,B)
class MyClass(){
  static VERSION = '2.0';
  sayHi(){
    console.log('hi');
  }
}

let my =new MyClass();

MyClass.VERSION; //2.0
MyClass.NAME; //BBB=NAME

my.testA(); //AAA
my.testB(); //BBB
```

## support str import for `webpack` project:
```js
//OLD:
module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      //...
    ]
}

//NEW:
module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: [
          resolve(__dirname, "../src"),
          resolve(__dirname, "../node_modules/mixin-decorator")
        ]
      },
      //...
    ]
}
```
## webpack resolve:(DO NOT USE .babelrc's resolve)
```js
import {resolve, join} from 'path';


resolve: {
  extensions: ['.js', '.json', '.scss', '.css'],
  alias:{
    mixins: resolve(__dirname, '../src/components/mixins')
  }
}
```


## todo list:
- [x] add @mixin(['on-chnage',obj ]) for plain object
- [ ] NOT_SUPPORT add @mixin(['on-chnage',':node-module' ]) in npm
- [ ] add unit test
