export function isEveryFulfilledSettledResult(
  resultList: PromiseSettledResult<void | undefined>[],
) {
  return resultList.every((result) => result.status === 'fulfilled');
}
