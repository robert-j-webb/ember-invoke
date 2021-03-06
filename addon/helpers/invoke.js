import { helper } from '@ember/component/helper';

export function invokeFunction([context, method, ...rest]) {
  if (typeof context[method] !== 'function') {
    throw new Error(`Method '${method}' is not defined or cannot be invoked.`);
  }

  return context[method].apply(context, rest);
}

export default helper(invokeFunction);
