export default function destructureObjectForQueryparameter(
  queryObject: Record<string, string>,
  name: string
): string {
  const params = [];
  for (const key of Object.keys(queryObject)) {
    params.push(`${name}[${key}]=${queryObject[key]}`);
  }
  return params.join("&");
}
