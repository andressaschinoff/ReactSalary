function formatNumber(number) {
  const formatter = Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
  const formated = formatter.format(number);
  return formated;
}

function percentage(fullSalary, discounted) {
  const per = (discounted * 100) / fullSalary;
  return per;
}

export { formatNumber, percentage };
