"use strict";

var _defineProperty = function (obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// Try out some of the new crazies
var _require = require("path");

var join = _require.join;


var names = ["foo", "bar"];
console.log("arrow fn " + names.map(function (v) {
  return join(v, "2");
}) + " and template string");

var obj = (function () {
  var _obj = {};

  _defineProperty(_obj, names[0], "bar");

  _defineProperty(_obj, "names", names);

  _defineProperty(_obj, "getNames", function getNames() {
    var _this = this;
    return names.map(function (v) {
      return "" + v + " " + _this.foo;
    });
  });

  return _obj;
})();

console.log(obj.getNames());

var ClassTrip = (function () {
  function ClassTrip(names) {
    _classCallCheck(this, ClassTrip);

    this.names = names;
  }

  _prototypeProperties(ClassTrip, null, {
    getNames: {
      value: function getNames() {
        return this.names.map(function (v) {
          return v.toUpperCase();
        }).join(" & ");
      },
      writable: true,
      configurable: true
    }
  });

  return ClassTrip;
})();

var trip = new ClassTrip(["clemens", "ana"]);
console.log("Vacation with " + trip.getNames() + " to Lombok");
