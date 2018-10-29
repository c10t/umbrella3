import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Story } from './story';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const stories: Story[] = [{
      "by": "bdefore",
      "descendants": 190,
      "id": 18327342,
      "kids": [
        18328414,
        18327571,
        18328435,
        18329226,
        18327553,
        18328987,
        18327508,
        18327550,
        18328890,
        18328851,
        18327620,
        18328282,
        18327459,
        18328323,
        18328775,
        18328845,
        18328967,
        18328116,
        18327412,
        18328221,
        18327445,
        18327949,
        18327546,
        18327970,
        18328132,
        18328359,
        18327740,
        18328300,
        18327425
      ],
      "score": 545,
      "time": 1540819852,
      "title": "With Proton and Steam Play, many Windows games now work on Linux",
      "type": "story",
      "url": "https://www.protondb.com"
    },
    {
      "by": "feross",
      "descendants": 13,
      "id": 18327634,
      "kids": [
        18329139,
        18329040,
        18328749,
        18328580,
        18328891,
        18328734
      ],
      "score": 137,
      "time": 1540822186,
      "title": "IBM\u2019s Old Playbook",
      "type": "story",
      "url": "https://stratechery.com/2018/ibms-old-playbook/"
    },
    {
      "by": "arusahni",
      "descendants": 107,
      "id": 18326658,
      "kids": [
        18327074,
        18327194,
        18327249,
        18327222,
        18327487,
        18327495,
        18327126,
        18327984,
        18327976,
        18327314,
        18327060,
        18327199,
        18327435,
        18328042,
        18328782,
        18327372,
        18327451
      ],
      "score": 207,
      "time": 1540813623,
      "title": "Identifying QUIC deliverables",
      "type": "story",
      "url": "https://mailarchive.ietf.org/arch/msg/quic/RLRs4nB1lwFCZ_7k0iuz0ZBa35s"
    },
    {
      "by": "beavershaw",
      "descendants": 9,
      "id": 18328379,
      "kids": [
        18328941,
        18329084,
        18328806,
        18328794
      ],
      "score": 32,
      "time": 1540827702,
      "title": "Headquarter Locations of Top 101 Y Combinator Companies",
      "type": "story",
      "url": "https://merchantmachine.co.uk/yc-101/"
    },
    {
      "by": "mpdehaan2",
      "descendants": 13,
      "id": 18328410,
      "kids": [
        18328956,
        18328420,
        18329068
      ],
      "score": 31,
      "time": 1540827913,
      "title": "Show HN: Vespene \u2013 My new Python CI/CD and automation server written in Django",
      "type": "story",
      "url": "http://docs.vespene.io"
    },
    {
      "by": "devy",
      "descendants": 4,
      "id": 18327933,
      "kids": [
        18328915,
        18327991
      ],
      "score": 46,
      "time": 1540824507,
      "title": "TransitMatters, a transit advocacy group in Boston",
      "type": "story",
      "url": "https://www.politico.com/magazine/story/2018/10/25/what-works-boston-transit-221839"
    },
    {
      "by": "austin_kodra",
      "descendants": 0,
      "id": 18328914,
      "score": 11,
      "time": 1540831497,
      "title": "Neural Networks on iOS and Android: Classify Images with TensorFlow Lite",
      "type": "story",
      "url": "https://heartbeat.fritz.ai/neural-networks-on-mobile-devices-with-tensorflow-lite-a-tutorial-85b41f53230c"
    },
    {
      "by": "feross",
      "descendants": 36,
      "id": 18326431,
      "kids": [
        18328561,
        18328539,
        18328638,
        18328519,
        18328273,
        18328654,
        18328292,
        18328212,
        18328899,
        18329089,
        18328358,
        18328422,
        18328413
      ],
      "score": 68,
      "time": 1540811098,
      "title": "The Surprising Power of the Long Game",
      "type": "story",
      "url": "https://fs.blog/2018/10/long-game/"
    },
    {
      "by": "sdeepak",
      "descendants": 41,
      "id": 18325865,
      "kids": [
        18326077,
        18329049,
        18326123,
        18328982,
        18326190,
        18326052,
        18328061,
        18326032,
        18326348,
        18328417,
        18326812,
        18327363,
        18326813,
        18327197,
        18326345,
        18326001,
        18325969,
        18328301
      ],
      "score": 194,
      "time": 1540802174,
      "title": "Intuitive Understanding of Euler\u2019s Formula",
      "type": "story",
      "url": "https://betterexplained.com/articles/intuitive-understanding-of-eulers-formula/"
    },
    {
      "by": "LinuxBender",
      "descendants": 37,
      "id": 18328060,
      "kids": [
        18329153,
        18328818,
        18328466,
        18328699,
        18328332,
        18328326,
        18328962,
        18328284,
        18328601
      ],
      "score": 54,
      "time": 1540825524,
      "title": "Drug cocktail almost doubles lifespan of worms",
      "type": "story",
      "url": "https://www.sciencedaily.com/releases/2018/10/181022122926.htm"
    }];

    return {stories};
  }
}
