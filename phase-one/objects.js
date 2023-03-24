const cohort = {
  name: 'May 2022',
  id: 1234,
  students: ['Jane', 'Lane', 'Mane']
} 

const printCohort = (cohort) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`);
};

printCohort(cohort);