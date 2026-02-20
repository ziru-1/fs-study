import { NewDiaryEntry } from './types';

const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  console.log(object);
  const newEntry: NewDiaryEntry = {
    weather: 'cloudy',
    visibility: 'great',
    date: '2022-1-1',
    comment: 'fake news',
  };

  return newEntry;
};

export default toNewDiaryEntry;
