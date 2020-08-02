export function kata2(obj, def, path) {

  if (!path) {
    return (param) => kata2(obj, def, param);
  }

  let paths = path.split('.');

  for (let i = 0; i < paths.length; i++) {
    let propExists = obj.hasOwnProperty(paths[i]);
    if (!propExists) {
      return def;
    }
    let temporal = obj[paths[i]];

    if (temporal) {
      obj = temporal;
    }
  }

  return obj;
}