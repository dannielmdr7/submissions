 enum StatusEnum {
  LowRisk = 'Low Risk',
  Unassigned = 'Unassigned',
  Uncomplete = 'Uncomplete',
}
 interface Submission {
  task: string;
  status: StatusEnum;
  from: string;
  to: string;
  address: string;
  dueDate: string;
  selected: boolean;
  latitude: number;
  longitude: number;
}
export const data:Submission[] = [
  {
    "task": "Mr. Randall Kshlerin",
    "from": "Ramon Rosenbaum I",
    "to": "Cecil Zulauf",
    "address": "3560 Kertzmann Harbor",
    "dueDate": "2024-08-25T18:17:45.312Z",
    "latitude": 2.4202294071065262,
    "longitude": -76.55165647223289,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Rita Steuber",
    "from": "Sidney Corkery",
    "to": "Lewis Watsica",
    "address": "7505 Trisha Squares",
    "dueDate": "2025-01-03T09:33:18.983Z",
    "latitude": 2.442448075385066,
    "longitude": -76.5046152051834,
    status: StatusEnum.Unassigned,
    selected: false
  },
  {
    "task": "Mr. Kerry Walker",
    "from": "Anthony Cummerata PhD",
    "to": "Gerard Cartwright Jr.",
    "address": "87962 Vella Drive",
    "dueDate": "2024-05-19T09:05:40.572Z",
    "latitude": 2.497729343618965,
    "longitude": -76.5554081712328,
    status: StatusEnum.Uncomplete,
    selected: false
  },
  {
    "task": "Ora Barton",
    "from": "Erin Lowe",
    "to": "Theresa Beahan",
    "address": "3003 Schulist Mall",
    "dueDate": "2024-11-15T08:24:17.045Z",
    "latitude": 2.4466260821816976,
    "longitude": -76.5705864983839,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Dr. Conrad Rempel",
    "from": "Marion Berge",
    "to": "Peggy Rau V",
    "address": "20724 Hillside Close",
    "dueDate": "2024-11-01T21:08:07.944Z",
    "latitude": 2.4260281917368993,
    "longitude": -76.50189834348647,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Sara Kautzer",
    "from": "Emilio Friesen-Kilback PhD",
    "to": "Courtney Fay",
    "address": "727 Sydni Drive",
    "dueDate": "2024-10-27T15:19:09.257Z",
    "latitude": 2.460236741967965,
    "longitude": -76.50364219608181,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Henry Romaguera-Doyle",
    "from": "Joanna Christiansen DDS",
    "to": "Leslie Armstrong I",
    "address": "3285 Dibbert Burg",
    "dueDate": "2024-11-18T21:13:20.773Z",
    "latitude": 2.4487057717537972,
    "longitude": -76.6030953363476,
    status: StatusEnum.Unassigned,
    selected: false
  },
  {
    "task": "Vicky Crist Sr.",
    "from": "Lydia Wisoky",
    "to": "Doyle Paucek",
    "address": "4068 Moor Lane",
    "dueDate": "2024-09-12T15:22:15.499Z",
    "latitude": 2.453273849797668,
    "longitude": -76.58221916750121,
    status: StatusEnum.Unassigned,
    selected: false
  },
  {
    "task": "Eloise Hagenes",
    "from": "Annie Emard",
    "to": "Trevor Harber",
    "address": "4207 Rowe Coves",
    "dueDate": "2024-09-19T21:41:33.933Z",
    "latitude": 2.4768685869174076,
    "longitude": -76.54983981154952,
    status: StatusEnum.Unassigned,
    selected: false
  },
  {
    "task": "Samuel Schimmel DVM",
    "from": "Kate Gleason",
    "to": "Lula Hartmann",
    "address": "820 Pacocha Neck",
    "dueDate": "2024-11-19T01:29:56.273Z",
    "latitude": 2.472354955300456,
    "longitude": -76.50489515167591,
    status: StatusEnum.Unassigned,
    selected: false
  },
  {
    "task": "Sylvester Mann MD",
    "from": "Glenn Jacobi",
    "to": "Ernestine Altenwerth",
    "address": "342 New Lane",
    "dueDate": "2024-07-27T13:48:48.707Z",
    "latitude": 2.4912966049739627,
    "longitude": -76.54008842013334,
    status: StatusEnum.Uncomplete,
    selected: false
  },
  {
    "task": "Martha Wiegand",
    "from": "Caroline Dibbert",
    "to": "Erick Kertzmann",
    "address": "23163 E 12th Street",
    "dueDate": "2024-10-18T23:29:11.594Z",
    "latitude": 2.4233501736170147,
    "longitude": -76.57240794738662,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Ginger Hagenes",
    "from": "Lonnie Beier",
    "to": "Mrs. Kristina Collier I",
    "address": "7720 Antonette Lakes",
    "dueDate": "2024-05-05T06:41:38.379Z",
    "latitude": 2.444095615237951,
    "longitude": -76.56285245498876,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "John Kerluke DDS",
    "from": "Delores Johns",
    "to": "Ross Hegmann",
    "address": "89208 N 7th Street",
    "dueDate": "2024-11-23T08:13:10.588Z",
    "latitude": 2.4471452831223144,
    "longitude": -76.53404155184096,
    status: StatusEnum.Uncomplete,
    selected: false
  },
  {
    "task": "Ms. Elizabeth O'Connell-Parisian",
    "from": "Ian Johnston DDS",
    "to": "Gladys Nolan",
    "address": "6157 County Road",
    "dueDate": "2024-09-22T11:05:45.178Z",
    "latitude": 2.4383288411460815,
    "longitude": -76.53989296454704,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Kristina Luettgen",
    "from": "Shelley Cummings",
    "to": "Jeff Metz",
    "address": "26981 Osinski Vista",
    "dueDate": "2024-11-10T10:18:53.887Z",
    "latitude": 2.477872500056168,
    "longitude": -76.57674238347542,
    status: StatusEnum.Uncomplete,
    selected: false
  },
  {
    "task": "Alan Bartoletti",
    "from": "Stanley Morar",
    "to": "Lauren Hermiston",
    "address": "144 Lee Street",
    "dueDate": "2024-11-03T11:36:26.473Z",
    "latitude": 2.4354061059618837,
    "longitude": -76.52732615007413,
    status: StatusEnum.Uncomplete,
    selected: false
  },
  {
    "task": "Ms. Maryann Schowalter II",
    "from": "Monique Fadel",
    "to": "Carol Corwin",
    "address": "8158 Balmoral Road",
    "dueDate": "2025-02-15T16:50:22.108Z",
    "latitude": 2.4378506185589357,
    "longitude": -76.58529698315752,
    status: StatusEnum.Uncomplete,
    selected: false
  },
  {
    "task": "Edmond O'Keefe",
    "from": "Mario Wilkinson",
    "to": "Jerome Harber",
    "address": "72322 Toy Trafficway",
    "dueDate": "2024-08-01T07:56:49.492Z",
    "latitude": 2.4539385956828483,
    "longitude": -76.59121155828377,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Marlene Huels",
    "from": "Candace Ullrich",
    "to": "Dr. Tracey Lang",
    "address": "736 Christelle Pine",
    "dueDate": "2024-04-18T07:58:00.350Z",
    "latitude": 2.4741743868733757,
    "longitude": -76.51326762409369,
    status: StatusEnum.Uncomplete,
    selected: false
  },
  {
    "task": "Timothy Ritchie",
    "from": "Glen Hilll-Frami",
    "to": "Bruce Kessler",
    "address": "175 Leilani Light",
    "dueDate": "2024-04-15T15:48:41.057Z",
    "latitude": 2.458000022714259,
    "longitude": -76.57487785711466,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Dr. Boyd Greenfelder I",
    "from": "Mr. Ira Pollich",
    "to": "Dr. Mark Murray",
    "address": "9520 Beatty Junction",
    "dueDate": "2024-10-18T08:25:02.259Z",
    "latitude": 2.450046489681583,
    "longitude": -76.58049286904397,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Brandi Will-Miller",
    "from": "Henrietta Halvorson III",
    "to": "Amelia Balistreri",
    "address": "60275 W 1st Street",
    "dueDate": "2024-08-24T10:02:52.086Z",
    "latitude": 2.4440169858175795,
    "longitude": -76.56418797008904,
    status: StatusEnum.Uncomplete,
    selected: false
  },
  {
    "task": "Blake Anderson",
    "from": "Lucia Dare",
    "to": "Alonzo Cruickshank",
    "address": "377 Heidenreich Locks",
    "dueDate": "2024-06-02T18:00:37.154Z",
    "latitude": 2.4208789896573872,
    "longitude": -76.52163397991191,
    status: StatusEnum.Uncomplete,
    selected: false
  },
  {
    "task": "Melvin Orn",
    "from": "Craig Quigley",
    "to": "Eugene Medhurst",
    "address": "41582 Forest Road",
    "dueDate": "2024-09-25T01:05:10.425Z",
    "latitude": 2.4474849449605682,
    "longitude": -76.60361066863756,
    status: StatusEnum.Uncomplete,
    selected: false
  },
  {
    "task": "Lula Rodriguez-Stamm",
    "from": "Lillie Gutkowski",
    "to": "Justin Flatley",
    "address": "812 Grove Street",
    "dueDate": "2024-04-30T19:40:13.592Z",
    "latitude": 2.4767279870274943,
    "longitude": -76.55147468665476,
    status: StatusEnum.Uncomplete,
    selected: false
  },
  {
    "task": "Devin Strosin",
    "from": "Mr. Myron Cartwright",
    "to": "Leonard Bernier",
    "address": "539 Erdman Ridge",
    "dueDate": "2025-02-04T04:01:24.098Z",
    "latitude": 2.482738426137483,
    "longitude": -76.51560652622162,
    status: StatusEnum.Uncomplete,
    selected: false
  },
  {
    "task": "Bennie Kessler",
    "from": "Devin Koepp III",
    "to": "Lionel Pfannerstill",
    "address": "1793 Sophia Lodge",
    "dueDate": "2025-03-15T23:32:11.167Z",
    "latitude": 2.4818897010148504,
    "longitude": -76.50118853945285,
    status: StatusEnum.Uncomplete,
    selected: false
  },
  {
    "task": "Martha Gibson",
    "from": "Geoffrey Towne",
    "to": "Eileen Hintz-Hagenes",
    "address": "12629 E Broadway Street",
    "dueDate": "2024-04-04T21:05:47.079Z",
    "latitude": 2.4367810485078953,
    "longitude": -76.55944400750916,
    status: StatusEnum.Uncomplete,
    selected: false
  },
  {
    "task": "Sonia Ritchie",
    "from": "Ethel Cassin III",
    "to": "Janice Brakus",
    "address": "5721 Oberbrunner Junctions",
    "dueDate": "2024-10-04T12:18:31.551Z",
    "latitude": 2.449593890050659,
    "longitude": -76.55587423549639,
    status: StatusEnum.Uncomplete,
    selected: false
  },
  {
    "task": "Dr. Jorge Murazik-Prosacco",
    "from": "Jesus O'Hara",
    "to": "Darrel Mitchell",
    "address": "436 Hollis Curve",
    "dueDate": "2025-02-11T07:31:41.922Z",
    "latitude": 2.429650047487812,
    "longitude": -76.58085415905063,
    status: StatusEnum.Uncomplete,
    selected: false
  },
  {
    "task": "Leroy Feeney",
    "from": "Roosevelt Wuckert Jr.",
    "to": "Tracy Stoltenberg",
    "address": "914 Front Street",
    "dueDate": "2024-07-07T02:00:21.618Z",
    "latitude": 2.429540818335256,
    "longitude": -76.52684698181972,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Dr. Becky Satterfield",
    "from": "Brandon Towne V",
    "to": "Pam Swift MD",
    "address": "100 Fay Terrace",
    "dueDate": "2024-08-20T03:29:19.572Z",
    "latitude": 2.4511247536165173,
    "longitude": -76.51917372238962,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Karen Harber III",
    "from": "Dr. Jan Keebler",
    "to": "Miss Allison Wolf",
    "address": "47037 Nikolaus Villages",
    "dueDate": "2024-10-07T15:19:53.213Z",
    "latitude": 2.497374270277098,
    "longitude": -76.53283931900701,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Jana Bosco",
    "from": "Danielle Zboncak",
    "to": "Kendra Heaney",
    "address": "1454 Emelia Expressway",
    "dueDate": "2024-12-27T05:39:21.771Z",
    "latitude": 2.4438139353385195,
    "longitude": -76.56583110679198,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Kellie O'Connell",
    "from": "Caleb Deckow",
    "to": "Eunice Fay Jr.",
    "address": "2098 York Road",
    "dueDate": "2024-12-23T19:36:01.173Z",
    "latitude": 2.466476570072118,
    "longitude": -76.55876240096265,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Thelma Hahn",
    "from": "Darrel Wuckert",
    "to": "Marcella Nicolas",
    "address": "1548 North Avenue",
    "dueDate": "2024-05-06T22:11:08.167Z",
    "latitude": 2.49211723376438,
    "longitude": -76.52829399498249,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Ernesto Schroeder",
    "from": "Jeremy Schmidt DDS",
    "to": "Willie Padberg",
    "address": "7725 Linnie Harbor",
    "dueDate": "2024-10-28T01:46:04.642Z",
    "latitude": 2.472536787634948,
    "longitude": -76.51694724999997,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Melissa Lemke",
    "from": "Pat Maggio",
    "to": "Michele Boehm",
    "address": "136 School Lane",
    "dueDate": "2024-05-29T14:04:38.309Z",
    "latitude": 2.457231737050461,
    "longitude": -76.59973426548439,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Madeline Mann",
    "from": "Shawna Schowalter Sr.",
    "to": "Laurie Cummings",
    "address": "43340 Bahringer Unions",
    "dueDate": "2024-03-21T04:17:53.118Z",
    "latitude": 2.485579042142024,
    "longitude": -76.55339072391763,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Clarence Kemmer",
    "from": "Nancy Thiel",
    "to": "Miss Sabrina Fisher",
    "address": "82022 Solon Mills",
    "dueDate": "2025-03-02T17:00:51.887Z",
    "latitude": 2.497797967435792,
    "longitude": -76.53209352800553,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Kristina Fritsch",
    "from": "Brian McGlynn",
    "to": "Kelvin Schiller",
    "address": "53450 Mac Pine",
    "dueDate": "2024-12-01T05:16:05.385Z",
    "latitude": 2.424957567621721,
    "longitude": -76.51389647748555,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Angelica Kunze",
    "from": "Dr. Rafael Schuster II",
    "to": "Emmett Wiegand",
    "address": "4797 Ratke Parkway",
    "dueDate": "2024-05-15T04:54:39.984Z",
    "latitude": 2.4687228412127586,
    "longitude": -76.50201540809451,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Dr. Mae Schneider",
    "from": "Miss Cynthia Greenholt",
    "to": "Donnie Herzog",
    "address": "646 Dooley Burgs",
    "dueDate": "2024-07-01T11:27:04.802Z",
    "latitude": 2.4705074572118466,
    "longitude": -76.56500438034931,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Miss Donna Nikolaus",
    "from": "Candace Zboncak",
    "to": "Mr. Steven Buckridge-Mitchell",
    "address": "600 Richmond Road",
    "dueDate": "2024-06-21T18:07:20.920Z",
    "latitude": 2.448614343953086,
    "longitude": -76.53691765755275,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Roberta O'Connell",
    "from": "Dr. Sharon Kuvalis",
    "to": "Shane Cremin",
    "address": "139 Myrtice Lane",
    "dueDate": "2024-07-03T22:53:38.209Z",
    "latitude": 2.4551052558454685,
    "longitude": -76.54955658358382,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Jesus Wilkinson",
    "from": "Mr. Noel Spinka",
    "to": "Elmer Mayer",
    "address": "32409 Tiana Corner",
    "dueDate": "2024-04-12T18:03:53.803Z",
    "latitude": 2.471333138781134,
    "longitude": -76.55754632203352,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Shawn Lebsack DDS",
    "from": "Dexter Dickens",
    "to": "Ms. Johanna Kutch",
    "address": "550 Hoeger Station",
    "dueDate": "2024-07-27T22:15:31.237Z",
    "latitude": 2.4712189740790054,
    "longitude": -76.59060545648472,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Marshall Boyle",
    "from": "Theodore Mayer",
    "to": "Rachael Schneider",
    "address": "998 Aiden Point",
    "dueDate": "2024-10-31T11:12:47.044Z",
    "latitude": 2.428290589147946,
    "longitude": -76.61027749337792,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Benny Lesch",
    "from": "Agnes Ward",
    "to": "Marian Auer",
    "address": "943 Tommie Mill",
    "dueDate": "2025-02-07T07:59:46.497Z",
    "latitude": 2.453628753538011,
    "longitude": -76.51308477896964,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Penny Schuppe",
    "from": "Mr. Vernon Stamm",
    "to": "Terrance Cassin",
    "address": "263 Felton Tunnel",
    "dueDate": "2024-06-23T12:33:42.677Z",
    "latitude": 2.4742994947305417,
    "longitude": -76.5051981422226,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Nathaniel D'Amore",
    "from": "Charles Cronin",
    "to": "Stacey Armstrong MD",
    "address": "1844 Huel Mews",
    "dueDate": "2024-05-14T03:58:17.458Z",
    "latitude": 2.462802934163017,
    "longitude": -76.50770153864077,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Blanca Jacobson PhD",
    "from": "Dr. Dan Ferry",
    "to": "Beatrice Kutch",
    "address": "14040 Ebert Court",
    "dueDate": "2024-10-06T22:58:53.382Z",
    "latitude": 2.4806571778457145,
    "longitude": -76.56180847012298,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Penny Bergnaum",
    "from": "Silvia Stiedemann",
    "to": "Alberta Nolan",
    "address": "232 Laburnum Grove",
    "dueDate": "2024-11-29T23:06:07.596Z",
    "latitude": 2.476814203876536,
    "longitude": -76.55913791334699,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Mary Parisian",
    "from": "Jason Leuschke III",
    "to": "Alfred McLaughlin",
    "address": "8385 Princes Street",
    "dueDate": "2024-12-10T06:34:20.265Z",
    "latitude": 2.481589222673327,
    "longitude": -76.56540371912742,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Lorraine Prosacco III",
    "from": "Lance Beer",
    "to": "Robyn Oberbrunner",
    "address": "7714 Prospect Place",
    "dueDate": "2025-02-24T15:05:29.866Z",
    "latitude": 2.4516128977513874,
    "longitude": -76.52181465415866,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Sherry Haag",
    "from": "Alexis Von",
    "to": "Mrs. Lois Kozey",
    "address": "44495 Elsa Inlet",
    "dueDate": "2024-11-27T19:41:29.700Z",
    "latitude": 2.442149470882956,
    "longitude": -76.5231532167031,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Clifford Prohaska",
    "from": "Ms. Janet Wolff",
    "to": "Sammy Langworth",
    "address": "775 Cecil Extensions",
    "dueDate": "2024-12-06T09:42:00.555Z",
    "latitude": 2.420810397543013,
    "longitude": -76.53818025930505,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Phil Fahey",
    "from": "Alexandra Maggio",
    "to": "Mr. Timothy Ondricka",
    "address": "4651 Paucek Knoll",
    "dueDate": "2024-09-18T21:07:25.351Z",
    "latitude": 2.49393472833815,
    "longitude": -76.51449987671384,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Myrtle Skiles",
    "from": "Maureen Reinger V",
    "to": "Edmund King",
    "address": "16689 West Road",
    "dueDate": "2024-07-12T02:05:48.788Z",
    "latitude": 2.4641385482032785,
    "longitude": -76.50787665933603,
    status: StatusEnum.LowRisk,
    selected: false
  }
]
