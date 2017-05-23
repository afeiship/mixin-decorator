var slice = Array.prototype.slice;
var getOwnPropertyNames = Object.getOwnPropertyNames;

//private:
function coreMixin(inProps,inDest,inSrc){
    inProps.forEach(function(item){
      if (!(item in inDest)) {
        Object.defineProperty(inDest,item, Object.getOwnPropertyDescriptor(inSrc,item) );
      }
    });
}

module.exports = function (inClasses) {
  var args = Array.isArray(inClasses) ?  inClasses : slice.call(arguments);

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
