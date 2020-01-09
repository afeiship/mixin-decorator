var slice = Array.prototype.slice;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var FUNC = 'function';
var OBJ = 'object';

//private:
function coreMixin(inProps, inDest, inSrc) {
  inProps.forEach(function(item) {
    if (!(item in inDest)) {
      Object.defineProperty(
        inDest,
        item,
        Object.getOwnPropertyDescriptor(inSrc, item)
      );
    }
  });
}

function requireTarget(inTarget) {
  var typeOf = typeof inTarget;
  switch (true) {
    case typeOf === FUNC:
      return inTarget;
    case typeOf === OBJ:
      return inTarget.default || inTarget;
    default:
      var target = require('mixins/' + inTarget);
      return target.default || target;
  }
}

module.exports = function(inClasses) {
  var _args = Array.isArray(inClasses) ? inClasses : slice.call(arguments);
  var args = _args.map(function(arg) {
    return requireTarget(arg);
  });

  return function(inTarget) {
    var targetPrototype = inTarget.prototype;
    args.forEach(function(item) {
      var clazz = item,
        clazzPrototype = item.prototype || item;
      //get static method:
      var staticMemebers = getOwnPropertyNames(clazz);
      //get instanace method:
      var instanceMemebers = getOwnPropertyNames(clazzPrototype);

      coreMixin(staticMemebers, inTarget, clazz);
      coreMixin(instanceMemebers, targetPrototype, clazzPrototype);
    });
    return inTarget;
  };
};
