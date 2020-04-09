export const quoteDarkBg = '#ccc';
export const quoteLightBg = '#222';

export function getLyricColor(textColor) {
  return textColor === 'black' ? quoteLightBg : quoteDarkBg;
}
