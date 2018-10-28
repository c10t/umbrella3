import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Story } from './story';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const stories = [
      {
        id: 112234,
        title: "example1",
        posted: new Date('10/28/18')
      },
      {
        id: 105234,
        title: "example2",
        posted: new Date('10/27/18')
      },
      {
        id: 101234,
        title: "example3",
        posted: new Date('10/26/18')
      },
      {
        id: 109234,
        title: "example4",
        posted: new Date('10/25/18')
      },
      {
        id: 100634,
        title: "example5",
        posted: new Date('10/24/18')
      }
    ];

    return {stories};
  }
}
