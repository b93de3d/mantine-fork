function filterData({ data, searchable, limit, searchValue, filter }) {
  if (!searchable) {
    return data;
  }
  const result = [];
  for (let i = 0; i < data.length; i += 1) {
    if (filter(searchValue, data[i])) {
      result.push(data[i]);
    }
    if (result.length >= limit) {
      break;
    }
  }
  return result;
}

export { filterData };
//# sourceMappingURL=filter-data.js.map
