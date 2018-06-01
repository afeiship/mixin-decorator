var slice = Array.prototype.slice;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var STRING = 'string';
// var MIXIN_PATH = 'mixins/';

//private:
function coreMixin(inProps,inDest,inSrc){
    inProps.forEach(function(item){
      if (!(item in inDest)) {
        Object.defineProperty(inDest,item, Object.getOwnPropertyDescriptor(inSrc,item) );
      }
    });
}

module.exports = function (inClasses) {
  var _args = Array.isArray(inClasses) ?  inClasses : slice.call(arguments);
  var isStatic = _args[0] === null;
  var args = !isStatic ? _args.map(function(arg){
    return typeof arg === STRING ? require('mixins/' + arg).default : arg;
  }) : _args.slice(1);

  return function (inTarget) {
    var targetPrototype = inTarget.prototype;
    args.forEach(function(item){
      var clazz = item, clazzPrototype = item.prototype;
      //get static method:
      var staticMemebers = getOwnPropertyNames(clazz);
      //get instanace method:
      var instanceMemebers = getOwnPropertyNames(clazzPrototype);

      coreMixin(staticMemebers,inTarget,clazz);
      coreMixin(instanceMemebers,targetPrototype,clazzPrototype);
    });
  };

};
