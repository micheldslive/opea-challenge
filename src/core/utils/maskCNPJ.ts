import { type StringMaskProps } from '@/src/@types';

export const applyStringMask: StringMaskProps = (source, format, def = '_') => {
  let result = source.replace(/\D+/g, '');
  for (let i = 0; i < format.length; i += 1) {
    if (
      result[i] === undefined ||
      (format[i] !== def && format[i] !== result[i])
    ) {
      result = result.substring(0, i) + format[i] + result.substring(i);
    }
  }
  result = result.substring(0, format.length);

  return result;
};
