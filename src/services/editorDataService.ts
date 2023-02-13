export function serializeData<T>(data: Record<number, T>) {
  return JSON.stringify(data);
}
