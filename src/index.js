const Renderer = require('./renderer');
const F2 = require('@antv/f2/lib/index-all');

// 适配小程序的事件机制
F2.Util.addEventListener = function (source, type, listener) {
  source.addListener(type, listener);
};

F2.Util.removeEventListener = function (source, type, listener) {
  source.removeListener(type, listener);
};

F2.Util.createEvent = function (event, chart) {
  let x = 0;
  let y = 0;
  const touches = event.touches;
  if (touches && touches.length > 0) {
    x = touches[0].x;
    y = touches[0].y;
  }

  return {
    type: event.type,
    chart,
    x,
    y
  };
};

F2.Renderer = Renderer;

module.exports = F2;
