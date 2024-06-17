export function parseApexSeries(arr) {
  return arr?.map((item) => item.value);
}

export function parseApexCategories(arr) {
  return arr?.map((item) => new Date(item.waktu).toISOString());
}
