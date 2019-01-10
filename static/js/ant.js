/* 基于 ant-design-mobile 高清解决方案 */
(function calcFontSize () {
  var doc = window.document
  var docEl = doc.documentElement
  var dpr = window.devicePixelRatio || 1
  var wWidth = window.screen.width > 0 && (window.innerWidth >= window.screen.width || window.innerWidth === 0) ? window.screen.width : window.innerWidth
  var fontScale = wWidth / 750 /* 设计稿为二倍图 */
  var baseFontSize = 100 /* 规定 1rem = 100px */

  /**
   * 修正rem支持问题导致计算不准
   * 如Samsung S7，fontSize设置为100px，实际1rem!=100px，
   */
  var adjustScale = 1
  docEl.style.fontSize = '100px'
  var tempDiv = doc.createElement('div')
  tempDiv.setAttribute('style', 'width:1rem; display:none')
  docEl.appendChild(tempDiv)
  var realWidth = window.getComputedStyle(tempDiv).width;
  docEl.removeChild(tempDiv)
  if (realWidth !== docEl.style.fontSize) {
    adjustScale = 100 / parseInt(realWidth)
  }

  /**
   * 以下情况不适用高清缩放
   *   1. 非iOS
   *   2. Android4.3及以下
   * */
  var scale = 1 / dpr
  docEl.setAttribute('data-dpr', dpr)

  var metaEl = doc.querySelector('meta[name="viewport"]')
  if (!metaEl) {
    metaEl = doc.createElement('meta')
    metaEl.setAttribute('name', 'viewport')
    doc.head.appendChild(metaEl)
  }
  metaEl.setAttribute('content', 'width=device-width,user-scalable=no,initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale + ', viewport-fit=cover')
  var rootFontSize = dpr * fontScale * baseFontSize * adjustScale
  docEl.style.fontSize = rootFontSize + 'px'

  window.rem2px = function (rem) {
    return rem * rootFontSize
  }

  window.addEventListener('resize', calcFontSize)
})();
