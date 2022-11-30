export function makeNamesUnique<T extends { [k: string]: any }>(
  data: T[],
  uniqueKey: keyof T,
  unificatorKey: keyof T
): T[] {
  const trackedUniqueNames = new Map<string, boolean>();

  return data.map((item) => {
    let value = item[uniqueKey].toString();

    if (trackedUniqueNames.has(value)) {
      value = value + " " + item[unificatorKey].toString();
    }

    trackedUniqueNames.set(value, true);

    return { ...item, [uniqueKey]: value } as T;
  });
}
