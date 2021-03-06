import React, { Component, useState } from "react";

import "./Butterflies.css";

export default function Butterflies(props) {
  var butterflies = [];
  setTimeout(function () {
    for (var i = 0; i < 5; i++) {
      var b = new Butterfly();
      b.init();
      butterflies.push(b);
    }
    animate();
  }, 500);

  function Butterfly() {
    var _this = this;

    _this.init = function () {
      _this.x = Math.floor(Math.random() * window.innerWidth * 0.8);
      _this.y = Math.floor(Math.random() * window.innerHeight * 0.8);
      _this.directionX = true;
      _this.directionY = true;

      _this.domElement = document.createElement("div");
      _this.domElement.className = "butterfly";
      _this.domElement.innerHTML =
        '<div class="left-wing"><div class="top"></div><div class="bottom"></div></div><div class="right-wing"><div class="top"></div><div class="bottom"></div></div>';
      document.getElementsByTagName("body")[0].appendChild(_this.domElement);
    };

    _this.moveButterfly = function () {
      _this.domElement.style.webkitTransform =
        "translate3D(" +
        _this.x +
        "px, " +
        _this.y +
        "px, 0px) rotate3d(1, 0.5, 0, 110deg)";
      var randomnumberX = Math.floor(Math.random() * 11);
      var randomnumberY = Math.floor(Math.random() * 11);
      if (randomnumberX > 8) {
        _this.directionX = _this.directionX * -1;
      }

      if (randomnumberY > 8) {
        _this.directionY = _this.directionY * -1;
      }

      if (_this.directionX == true) {
        _this.x = _this.x + 1;
      } else {
        _this.x = _this.x - 1;
      }

      if (_this.directionY == true) {
        _this.y = _this.y + 1;
      } else {
        _this.y = _this.y - 1;
      }
    };

    return _this;
  }

  function animate() {
    for (var i = 0, l = butterflies.length; i < l; i++) {
      butterflies[i].moveButterfly();
    }
    //requestAnimationFrame(animate);
  }

  return <div className="butterflies"></div>;
}
