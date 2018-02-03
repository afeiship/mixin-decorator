# mixin-decorator
> A decorator for mixins that doesn&#39;t overwrite existing methods.


## usage:
+ npm install && :
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
## .babelrc
```json
{
  "presets": [
    "es2015",
    "react",
    "stage-0"
  ],
  "plugins": [
    "transform-array-from",
    "transform-class-properties",
    "transform-es2015-spread",
    "transform-object-rest-spread",
    "transform-decorators-legacy",
    [
      "module-resolver",
      {
        "root": [
          "."
        ],
        "alias": {
          //NEED this config:
          "mixins": "./src/components/mixins"
        }
      }
    ]
  ]
}
```

