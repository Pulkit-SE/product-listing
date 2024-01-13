export function debounce(func, timeout = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export function createQueryString(params) {
  let queryParts = [];

  if (params.priceRange) {
    queryParts.push(`price_min=${encodeURIComponent(params.priceRange[0])}`);
    queryParts.push(`price_max=${encodeURIComponent(params.priceRange[1])}`);
  }

  if (params?.selectedCategory) {
    queryParts.push(
      `categoryId=${encodeURIComponent(parseInt(params.selectedCategory))}`
    );
  }

  // Add other parameters
  for (let key in params) {
    if (key !== "priceRange" && key !== "selectedCategory") {
      queryParts.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      );
    }
  }

  return `?${queryParts.join("&")}`;
}
