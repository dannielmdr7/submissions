 enum StatusEnum {
  LowRisk = 'Low Risk',
  Unassigned = 'Unassigned',
  Uncomplete = 'Uncomplete',
}
 interface Submission {
  id:number;
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
    "id": 1,
    "task": "Maintenance",
    "from": "Emma Davis",
    "to": "Emma Davis",
    "address": "456 Oak Ave",
    "dueDate": "Oct 07 2025 10:21:00 GMT-0500",
    "latitude": 29.243376,
    "longitude": 60.352008,
    "status": StatusEnum.LowRisk,
    "selected": false
  },
  {
    "id": 2,
    "task": "Installation",
    "from": "Charlie Brown",
    "to": "Alice Johnson",
    "address": "456 Oak Ave",
    "dueDate": "Dec 17 2025 11:42:00 GMT-0500",
    "latitude": -11.94931,
    "longitude": 143.472862,
    "status": StatusEnum.LowRisk,
    "selected": true
  },
  {
    "id": 3,
    "task": "Repair",
    "from": "Bob Smith",
    "to": "Bob Smith",
    "address": "202 Birch Ln",
    "dueDate": "Jun 24 2025 12:24:00 GMT-0500",
    "latitude": -8.463951,
    "longitude": 14.054747,
    "status": StatusEnum.Uncomplete,
    "selected": false
  },
  {
    "id": 4,
    "task": "Inspection",
    "from": "David Wilson",
    "to": "Charlie Brown",
    "address": "789 Pine Blvd",
    "dueDate": "Aug 19 2025 08:39:00 GMT-0500",
    "latitude": 55.835119,
    "longitude": -77.946537,
    "status": StatusEnum.Unassigned,
    "selected": true
  },
  {
    "id": 5,
    "task": "Pickup",
    "from": "Alice Johnson",
    "to": "Franklin White",
    "address": "123 Main St",
    "dueDate": "Sep 22 2025 15:15:00 GMT-0500",
    "latitude": 23.565843,
    "longitude": -33.928527,
    "status": StatusEnum.Unassigned,
    "selected": false
  },
  {
    "id": 6,
    "task": "Delivery",
    "from": "Franklin White",
    "to": "Emma Davis",
    "address": "303 Cedar Ct",
    "dueDate": "Nov 14 2025 10:59:00 GMT-0500",
    "latitude": -42.734558,
    "longitude": 71.592376,
    "status": StatusEnum.LowRisk,
    "selected": true
  },
  {
    "id": 7,
    "task": "Repair",
    "from": "Charlie Brown",
    "to": "David Wilson",
    "address": "101 Maple Dr",
    "dueDate": "May 05 2025 09:30:00 GMT-0500",
    "latitude": 14.547389,
    "longitude": -95.284652,
    "status": StatusEnum.Uncomplete,
    "selected": false
  },
  {
    "id": 8,
    "task": "Inspection",
    "from": "Bob Smith",
    "to": "Alice Johnson",
    "address": "202 Birch Ln",
    "dueDate": "Jul 10 2025 14:20:00 GMT-0500",
    "latitude": -17.673299,
    "longitude": 45.372865,
    "status": StatusEnum.LowRisk,
    "selected": true
  },
  {
    "id": 9,
    "task": "Pickup",
    "from": "Emma Davis",
    "to": "Bob Smith",
    "address": "789 Pine Blvd",
    "dueDate": "Feb 28 2025 16:47:00 GMT-0500",
    "latitude": 39.835762,
    "longitude": 120.293847,
    "status": StatusEnum.Unassigned,
    "selected": false
  },
  {
    "id": 10,
    "task": "Delivery",
    "from": "David Wilson",
    "to": "Franklin White",
    "address": "303 Cedar Ct",
    "dueDate": "Jan 19 2025 19:50:00 GMT-0500",
    "latitude": -29.456782,
    "longitude": -110.847365,
    "status": StatusEnum.Unassigned,
    "selected": true
  },
  {
    "id": 11,
    "task": "Installation",
    "from": "Charlie Brown",
    "to": "Emma Davis",
    "address": "123 Main St",
    "dueDate": "Mar 15 2025 07:32:00 GMT-0500",
    "latitude": 47.284639,
    "longitude": -52.473652,
    "status": StatusEnum.LowRisk,
    "selected": false
  },
  {
    "id": 12,
    "task": "Repair",
    "from": "Alice Johnson",
    "to": "David Wilson",
    "address": "456 Oak Ave",
    "dueDate": "Apr 08 2025 11:45:00 GMT-0500",
    "latitude": 5.376482,
    "longitude": 139.284729,
    "status": StatusEnum.Uncomplete,
    "selected": true
  },
  {
    "id": 13,
    "task": "Maintenance",
    "from": "Franklin White",
    "to": "Bob Smith",
    "address": "789 Pine Blvd",
    "dueDate": "Jun 03 2025 13:17:00 GMT-0500",
    "latitude": -22.563829,
    "longitude": 65.837492,
    "status": StatusEnum.LowRisk,
    "selected": false
  },
  {
    "id": 14,
    "task": "Inspection",
    "from": "Emma Davis",
    "to": "Charlie Brown",
    "address": "101 Maple Dr",
    "dueDate": "Aug 27 2025 09:10:00 GMT-0500",
    "latitude": 38.475829,
    "longitude": -83.748291,
    "status": StatusEnum.Unassigned,
    "selected": true
  },
  {
    "id": 15,
    "task": "Pickup",
    "from": "David Wilson",
    "to": "Alice Johnson",
    "address": "202 Birch Ln",
    "dueDate": "Oct 30 2025 20:25:00 GMT-0500",
    "latitude": -12.847561,
    "longitude": 98.473672,
    "status": StatusEnum.Unassigned,
    "selected": false
  },
  {
    "id": 16,
    "task": "Delivery",
    "from": "Bob Smith",
    "to": "Franklin White",
    "address": "303 Cedar Ct",
    "dueDate": "Dec 12 2025 08:45:00 GMT-0500",
    "latitude": 24.837291,
    "longitude": -77.485729,
    "status": StatusEnum.LowRisk,
    "selected": true
  },
  {
    "id": 17,
    "task": "Installation",
    "from": "Charlie Brown",
    "to": "Emma Davis",
    "address": "123 Main St",
    "dueDate": "Nov 05 2025 14:18:00 GMT-0500",
    "latitude": -33.748295,
    "longitude": 151.235728,
    "status": StatusEnum.LowRisk,
    "selected": false
  },
  {
    "id": 18,
    "task": "Repair",
    "from": "David Wilson",
    "to": "Alice Johnson",
    "address": "456 Oak Ave",
    "dueDate": "Sep 14 2025 17:32:00 GMT-0500",
    "latitude": 12.374829,
    "longitude": -95.372849,
    "status": StatusEnum.Uncomplete,
    "selected": true
  },
  {
    "id": 19,
    "task": "Inspection",
    "from": "Emma Davis",
    "to": "Charlie Brown",
    "address": "789 Pine Blvd",
    "dueDate": "Jul 22 2025 10:45:00 GMT-0500",
    "latitude": -41.728495,
    "longitude": 73.485729,
    "status": StatusEnum.Unassigned,
    "selected": false
  },
  {
    "id": 20,
    "task": "Pickup",
    "from": "Franklin White",
    "to": "David Wilson",
    "address": "101 Maple Dr",
    "dueDate": "May 17 2025 22:10:00 GMT-0500",
    "latitude": 38.485729,
    "longitude": -82.374829,
    "status": StatusEnum.Unassigned,
    "selected": true
  },
  {
    "id": 21,
    "task": "Maintenance",
    "from": "Alice Johnson",
    "to": "Bob Smith",
    "address": "202 Birch Ln",
    "dueDate": "Mar 30 2025 06:50:00 GMT-0500",
    "latitude": -14.758392,
    "longitude": 115.374829,
    "status": StatusEnum.LowRisk,
    "selected": false
  },
  {
    "id": 22,
    "task": "Delivery",
    "from": "David Wilson",
    "to": "Emma Davis",
    "address": "303 Cedar Ct",
    "dueDate": "Jan 07 2025 19:29:00 GMT-0500",
    "latitude": 19.374829,
    "longitude": -65.485729,
    "status": StatusEnum.Uncomplete,
    "selected": true
  },
  {
    "id": 23,
    "task": "Installation",
    "from": "Charlie Brown",
    "to": "Alice Johnson",
    "address": "123 Main St",
    "dueDate": "Feb 15 2025 09:55:00 GMT-0500",
    "latitude": -25.374829,
    "longitude": 45.758392,
    "status": StatusEnum.LowRisk,
    "selected": false
  },
  {
    "id": 24,
    "task": "Repair",
    "from": "Emma Davis",
    "to": "David Wilson",
    "address": "456 Oak Ave",
    "dueDate": "Apr 09 2025 13:20:00 GMT-0500",
    "latitude": 42.374829,
    "longitude": -98.485729,
    "status": StatusEnum.Unassigned,
    "selected": true
  },
  {
    "id": 25,
    "task": "Inspection",
    "from": "Franklin White",
    "to": "Bob Smith",
    "address": "789 Pine Blvd",
    "dueDate": "Jun 11 2025 18:30:00 GMT-0500",
    "latitude": -35.758392,
    "longitude": 78.374829,
    "status": StatusEnum.Unassigned,
    "selected": false
  },
  {
    "id": 26,
    "task": "Pickup",
    "from": "Charlie Brown",
    "to": "Emma Davis",
    "address": "101 Maple Dr",
    "dueDate": "Aug 02 2025 07:40:00 GMT-0500",
    "latitude": 48.758392,
    "longitude": -76.485729,
    "status": StatusEnum.LowRisk,
    "selected": true
  },
  {
    "id": 27,
    "task": "Delivery",
    "from": "David Wilson",
    "to": "Alice Johnson",
    "address": "202 Birch Ln",
    "dueDate": "Oct 25 2025 15:10:00 GMT-0500",
    "latitude": -16.485729,
    "longitude": 134.758392,
    "status": StatusEnum.LowRisk,
    "selected": false
  },
  {
    "id": 28,
    "task": "Installation",
    "from": "Bob Smith",
    "to": "Franklin White",
    "address": "303 Cedar Ct",
    "dueDate": "Dec 05 2025 12:00:00 GMT-0500",
    "latitude": 22.758392,
    "longitude": -110.485729,
    "status": StatusEnum.Unassigned,
    "selected": true
  },
  {
    "id": 29,
    "task": "Repair",
    "from": "Emma Davis",
    "to": "Charlie Brown",
    "address": "456 Oak Ave",
    "dueDate": "Nov 18 2025 17:35:00 GMT-0500",
    "latitude": -38.485729,
    "longitude": 85.758392,
    "status": StatusEnum.Uncomplete,
    "selected": false
  },
  {
    "id": 30,
    "task": "Maintenance",
    "from": "Franklin White",
    "to": "David Wilson",
    "address": "789 Pine Blvd",
    "dueDate": "Sep 28 2025 10:45:00 GMT-0500",
    "latitude": 35.758392,
    "longitude": -112.485729,
    "status": StatusEnum.LowRisk,
    "selected": true
  }
]

