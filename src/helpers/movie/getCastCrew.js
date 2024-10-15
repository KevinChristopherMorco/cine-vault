import formatCamelCase from "../format/formatCamelCase";

const getCastCrew = (credits) => {
  const { cast = [], crew = [] } = credits || [];
  return [...cast, ...crew].reduce((category, people) => {
    const job =
      formatCamelCase(people.job) ||
      formatCamelCase(people.known_for_department);

    if (!Boolean(category[job])) {
      category[job] = [];
    }

    category[job].push(people);
    return category;
  }, {});
};

export default getCastCrew;
