export const formatPrice = price =>
  new Intl.NumberFormat(
    'en-US',
    {
      style: 'currency',
      currency: 'USD',
    }
  ).format(price);

export const getUniqueValues = (data, type) => {
  const unique = data.map(item => item[type]);
  return ['all', ...new Set(type === 'colors' ? unique.flat() : unique)];
};
