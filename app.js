var arr = [1,3,5];
console.log('my array: ',arr);

//CUSTOM MAP METHOD +
Array.prototype.customMap = function (cb) {
    // `this` keyword points to the array itself
    const result = [];
 
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
    }
    return result;
 }

//CUSTOM SOME METHOD +
Array.prototype.customSome = function(cb){

   for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            return true;
        }
   }
   return false;
}

//CUSTOM EVERY METHOD +
Array.prototype.customEvery = function(cb){

    for (let i = 0; i < this.length; i++) {
         if (!cb(this[i])) {
             return false;
         }
    }
    return true;
 }
//CUSTOM REDUCE METHOD +
Array.prototype.customReduce = function(cb){
    var sum = 0;

    for (const item of this) {
        cb(sum+=item);
    }
    return sum;
}

//CUSTOM forEACH METHOD +
Array.prototype.customForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
    return this;
 }

//CUSTOM FLAT METHOD
Array.prototype.customFlat = function(depth){
    if (depth === undefined) {
        depth = 1;
      }
      var result = [];
    for (let i = 0; i < this.length; i++) {
       if (Array.isArray(this[i])) {
         result = result.concat(this[i].customFlat());
       }
       else{
        result.push(this[i]);
       }
    }
    return result;
}
var flatArr = [1,2,3, [[4,5]] ];
console.log(flatArr.customFlat());
//CUSTOM REVERSE METHOD +
Array.prototype.customReverse = function () {

    var result = [];

    for (let i = this.length-1; i >= 0; i--) {
        result.push(this[i]);
    }
    for (let i = 0; i < this.length; i++) {
       this[i] = result[i];
    }
    
    return this;
 }

//CUSTOM JOIN METHOD +
Array.prototype.customJoin = function (str) {
    var strResult = "";
    if (str===undefined) {
        str = ',';
    }
    for (let i = 0; i < this.length; i++) {
        strResult += this[i];
        if (i<this.length-1) {
            strResult += str;
        }
    }
    return strResult;
}

//CUSTOM INCLUDES METHOD +
Array.prototype.customIncludes = function(searchElement,fromIndex){
    if (fromIndex===undefined) {
        for (let i = 0; i < this.length; i++) {
            if (this[i]==searchElement) {
             return true;
            }
         }
         return false;
    }
    else{
        for (let i = fromIndex; i < this.length; i++) {
            if (this[i]==searchElement) {
             return true;
            }
         }
         return false;
    }
}