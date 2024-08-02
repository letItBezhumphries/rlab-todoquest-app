import { faker } from '@faker-js/faker';

const initialState = {
  todos: [
    {
      userId: 1,
      id: 1,
      title: 'Buy Maria a wedding ring',
      completed: false,
      dateIssued: faker.date.past({ year: 2 }),
    },
    {
      userId: 1,
      id: 2,
      title: 'Write a play',
      completed: false,
      dateIssued: faker.date.past({ year: 2 }),
    },
    {
      userId: 1,
      id: 3,
      title: 'visit Ireland Again',
      completed: false,
      dateIssued: faker.date.past({ year: 1 }),
    },
    {
      userId: 1,
      id: 4,
      title: 'Write A Book',
      completed: true,
      dateIssued: faker.date.past(),
    },
    {
      userId: 1,
      id: 5,
      title: 'Remove Tatoo from butt',
      completed: false,
      dateIssued: faker.date.past(),
    },
    {
      userId: 1,
      id: 6,
      title: 'Submit 10 applications',
      completed: false,
      dateIssued: faker.date.past(),
    },
    {
      userId: 1,
      id: 7,
      title: 'Learn to do the ChaCha',
      completed: false,
      dateIssued: faker.date.recent(),
    },
    {
      userId: 1,
      id: 8,
      title: 'Speak to Maria"s Father in Spanish',
      completed: true,
      dateIssued: faker.date.recent(),
    },
    {
      userId: 1,
      id: 9,
      title: 'Go Skydiving',
      completed: false,
      dateIssued: faker.date.recent(),
    },
    {
      userId: 1,
      id: 10,
      title: 'Visit Africa',
      completed: true,
      dateIssued: faker.date.recent(),
    },
    {
      userId: 1,
      id: 11,
      title: 'Become A Youth Basketball Coach',
      completed: true,
      dateIssued: faker.date.recent(),
    },
  ],
  updateTodo: {},
};

export default initialState;
