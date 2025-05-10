export function addSpacesToCamelCase(text) {
  return text.replace(/([a-zA-Z])([A-Z0-9])|([0-9])([a-zA-Z])/g, '$1$3 $2$4');
}
