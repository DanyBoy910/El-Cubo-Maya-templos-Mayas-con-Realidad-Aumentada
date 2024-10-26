/* global AFRAME, THREE */

AFRAME.registerComponent("gesture-handler", {
  schema: {
    enabled: { default: true },
    rotationFactor: { default: 5 },
    minScale: { default: 0.3 },
    maxScale: { default: 8 },
  },

  init: function () {
    this.handleRotation = this.handleRotation.bind(this);
  },

  update: function () {
    if (this.data.enabled) {
      this.el.sceneEl.addEventListener("onefingermove", this.handleRotation);
    } else {
      this.el.sceneEl.removeEventListener("onefingermove", this.handleRotation);
    }
  },

  remove: function () {
    this.el.sceneEl.removeEventListener("onefingermove", this.handleRotation);
  },

  handleRotation: function (event) {
      this.el.object3D.rotation.y +=
      event.detail.positionChange.x * this.data.rotationFactor;
  }
});
