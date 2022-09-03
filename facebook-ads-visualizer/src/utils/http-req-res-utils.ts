function destructureObjectForQueryparameter(
  queryObject: Record<string, string>,
  name: string
): string {
  const params = [];
  for (const key of Object.keys(queryObject)) {
    params.push(`${name}[${key}]=${queryObject[key]}`);
  }
  return params.join("&");
}

export default function parseQueryParams(query: any): string {
  return Object.entries(query)
    .map(([key, value]) => {
      if (Array.isArray(value))
        return `${key}=${value.join("&" + key + "=")}`;
      if (value instanceof Object)
        return destructureObjectForQueryparameter(
          value as Record<string, string>,
          key
        );
      return `${key}=${value}`;
    })
    .join("&");
}
