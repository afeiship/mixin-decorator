var slice = Array.prototype.slice;
var getOwnPropertyNames = Object.getOwnPropertyNames;

//private:
function toArgs(inClasses){
  return Array.isArray(inClasses) ?  inClasses : slice.call(arguments);
}

//private:
function coreMixin(inProps,inDest,inSrc){
    inProps.forEach(function(item){
      if (!(item in inDest)) {
        inDest[item] = inSrc[item];
      }
    });
}

module.exports = function (inClasses) {
  var args = toArgs(inClasses);

  return function (inTarget) {
    var targetPrototype = inTarget.prototype;
    inClasses.forEach(function(item){
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
