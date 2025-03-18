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
    "dueDate": "Oct 17 2024 17:39:38 GMT-0500",
    "latitude": 40.4202294071065262,
    "longitude": -76.55165647223289,
    status: StatusEnum.LowRisk,
    selected: false
  },
  {
    "task": "Rita Steuber",
    "from": "Sidney Corkery",
    "to": "Lewis Watsica",
    "address": "7505 Trisha Squares",
    "dueDate": "Mar 26 2025 12:30:38 GMT-0500",
    "latitude": 5.442448075385066,
    "longitude": -76.5046152051834,
    status: StatusEnum.Unassigned,
    selected: false
  },
  {
    "task": "Mr. Kerry Walker",
    "from": "Anthony Cummerata PhD",
    "to": "Gerard Cartwright Jr.",
    "address": "87962 Vella Drive",
    "dueDate": "Apr 17 2025 7:08:38 GMT-0500",
    "latitude": 20.497729343618965,
    "longitude": -76.5554081712328,
    status: StatusEnum.Uncomplete,
    selected: false
  },

]
