/**
 * 判断是否是十六进制颜色
 * @param {*} color
 * @returns
 */
export function isHexColor(color) {
  const reg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return reg.test(color);
}

/**
 * HEX十六进制颜色值转换为RGB(A)颜色值
 * @param {string} val
 * @param {number} 不透明度
 * @returns
 */
export function hexToRgb(val, alpha) {
  if (!isHexColor(val)) {
    // 无效的十六进制颜色值
    return "";
  }
  const matches = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(val);
  const color = matches
    ? {
        r: parseInt(matches[1], 16),
        g: parseInt(matches[2], 16),
        b: parseInt(matches[3], 16),
      }
    : null;
  if (!color) {
    return "";
  }
  if (alpha >= 0 && alpha <= 1) {
    return `rgb(${color.r},${color.g},${color.b},${alpha})`;
  } else {
    return `rgb(${color.r},${color.g},${color.b})`;
  }
}

/**
 * 将RGB颜色值转换为16进制颜色值
 * @param {string} color
 * @returns
 */
export function rgbToHex(color) {
  const rgb = color.split(",");
  var r = parseInt(rgb[0].split("(")[1]);
  var g = parseInt(rgb[1]);
  var b = parseInt(rgb[2].split(")")[0]);
  var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex;
}
