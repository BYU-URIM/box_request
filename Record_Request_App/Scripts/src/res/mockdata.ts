export interface iMockDataObj {
  BoxId: number,
  DepartmentId: number,
  DepartmentName: string,
  DateSubmitted: string,
  FolderId?: any
}

export interface iMockDataArrObj extends Array<iMockDataObj> { }

export const mockData: iMockDataArrObj = [
{
  BoxId: 1,
  DepartmentId: 5555,
  DepartmentName: "Office of Administration",
  DateSubmitted: "8/9/2017",
  FolderId: ["613", "2"]
}, {
  BoxId: 2,
  DepartmentId: 5556,
  DepartmentName: "BYU Police Department",
  DateSubmitted: "2/21/2015",
  FolderId: "1", 
}, {
  BoxId: 3,
  DepartmentId: 5557,
  DepartmentName: "Department of Healthcare and Registration",
  DateSubmitted: "2/27/2016",
}, {
  BoxId: 4,
  DepartmentId: 5558,
  DepartmentName: "Department of Business",
  DateSubmitted: "4/21/2015",
  FolderId: "00234"
}, {
  BoxId: 5,
  DepartmentId: 5559,
  DepartmentName: "Department of Science",
  DateSubmitted: "1/4/2015",
  FolderId: "1295"
}, {
  BoxId: 6,
  DepartmentId: 5560,
  DepartmentName: "Department of Spanish",
  DateSubmitted: "10/17/2016",
  FolderId: "9"
}, {
  BoxId: 7,
  DepartmentId: 5555,
  DepartmentName: "Office of IT",
  DateSubmitted: "3/10/2016",
  FolderId: "39"
}] //{
//   BoxId: 8,
//   DepartmentId: 5556,
//   DepartmentName: "BYU Police Department",
//   DateSubmitted: "8/8/2016",
//   FolderId: "19677"
// }, {
//   BoxId: 9,
//   DepartmentId: 5557,
//   DepartmentName: "Department of Healthcare and Registration",
//   DateSubmitted: "6/17/2016",
//   FolderId: "0"
// }, {
//   BoxId: 10,
//   DepartmentId: 5558,
//   DepartmentName: "Department of Business",
//   DateSubmitted: "12/12/2016",
//   FolderId: "2797"
// }, {
//   BoxId: 11,
//   DepartmentId: 5559,
//   DepartmentName: "Department of Science",
//   DateSubmitted: "2/18/2018",
//   FolderId: "12232"
// }, {
//   BoxId: 12,
//   DepartmentId: 5560,
//   DepartmentName: "Department of Spanish",
//   DateSubmitted: "12/23/2014",
//   FolderId: "951"
// }, {
//   BoxId: 13,
//   DepartmentId: 5555,
//   DepartmentName: "Office of IT",
//   DateSubmitted: "1/28/2018",
//   FolderId: "792"
// }, {
//   BoxId: 14,
//   DepartmentId: 5556,
//   DepartmentName: "BYU Police Department",
//   DateSubmitted: "1/1/2018",
//   FolderId: "05"
// }, {
//   BoxId: 15,
//   DepartmentId: 5557,
//   DepartmentName: "Department of Healthcare and Registration",
//   DateSubmitted: "4/25/2017",
//   FolderId: "6994"
// }, {
//   BoxId: 16,
//   DepartmentId: 5558,
//   DepartmentName: "Department of Business",
//   DateSubmitted: "4/7/2015",
//   FolderId: "7026"
// }, {
//   BoxId: 17,
//   DepartmentId: 5559,
//   DepartmentName: "Department of Science",
//   DateSubmitted: "8/5/2016",
//   FolderId: "84340"
// }, {
//   BoxId: 18,
//   DepartmentId: 5560,
//   DepartmentName: "Department of Spanish",
//   DateSubmitted: "11/1/2016",
//   FolderId: "07"
// }, {
//   BoxId: 19,
//   DepartmentId: 5555,
//   DepartmentName: "Office of IT",
//   DateSubmitted: "1/28/2016",
//   FolderId: "6618"
// }, {
//   BoxId: 20,
//   DepartmentId: 5556,
//   DepartmentName: "BYU Police Department",
//   DateSubmitted: "9/27/2015",
//   FolderId: "95290"
// }, {
//   BoxId: 21,
//   DepartmentId: 5557,
//   DepartmentName: "Department of Healthcare and Registration",
//   DateSubmitted: "12/21/2014",
//   FolderId: "680"
// }, {
//   BoxId: 22,
//   DepartmentId: 5558,
//   DepartmentName: "Department of Business",
//   DateSubmitted: "5/20/2017",
//   FolderId: "90908"
// }, {
//   BoxId: 23,
//   DepartmentId: 5559,
//   DepartmentName: "Department of Science",
//   DateSubmitted: "2/6/2017",
//   FolderId: "88378"
// }, {
//   BoxId: 24,
//   DepartmentId: 5560,
//   DepartmentName: "Department of Spanish",
//   DateSubmitted: "8/3/2017",
//   FolderId: "47"
// }, {
//   BoxId: 25,
//   DepartmentId: 5555,
//   DepartmentName: "Office of IT",
//   DateSubmitted: "8/6/2017",
//   FolderId: "83"
// }, {
//   BoxId: 26,
//   DepartmentId: 5556,
//   DepartmentName: "BYU Police Department",
//   DateSubmitted: "1/25/2018",
//   FolderId: "41323"
// }, {
//   BoxId: 27,
//   DepartmentId: 5557,
//   DepartmentName: "Department of Healthcare and Registration",
//   DateSubmitted: "10/10/2017",
//   FolderId: "4"
// }, {
//   BoxId: 28,
//   DepartmentId: 5558,
//   DepartmentName: "Department of Business",
//   DateSubmitted: "6/27/2016",
//   FolderId: "87578"
// }, {
//   BoxId: 29,
//   DepartmentId: 5559,
//   DepartmentName: "Department of Science",
//   DateSubmitted: "1/22/2016",
//   FolderId: "31"
// }, {
//   BoxId: 30,
//   DepartmentId: 5560,
//   DepartmentName: "Department of Spanish",
//   DateSubmitted: "12/1/2016",
//   FolderId: "7241"
// }, {
//   BoxId: 31,
//   DepartmentId: 5555,
//   DepartmentName: "Office of IT",
//   DateSubmitted: "12/17/2017",
//   FolderId: "6113"
// }, {
//   BoxId: 32,
//   DepartmentId: 5556,
//   DepartmentName: "BYU Police Department",
//   DateSubmitted: "2/26/2018",
//   FolderId: "0"
// }, {
//   BoxId: 33,
//   DepartmentId: 5557,
//   DepartmentName: "Department of Healthcare and Registration",
//   DateSubmitted: "12/20/2015",
//   FolderId: "2937"
// }, {
//   BoxId: 34,
//   DepartmentId: 5558,
//   DepartmentName: "Department of Business",
//   DateSubmitted: "2/11/2016",
//   FolderId: "45"
// }, {
//   BoxId: 35,
//   DepartmentId: 5559,
//   DepartmentName: "Department of Science",
//   DateSubmitted: "8/1/2016",
//   FolderId: "2793"
// }, {
//   BoxId: 36,
//   DepartmentId: 5560,
//   DepartmentName: "Department of Spanish",
//   DateSubmitted: "1/17/2017",
//   FolderId: "788"
// }, {
//   BoxId: 37,
//   DepartmentId: 5555,
//   DepartmentName: "Office of IT",
//   DateSubmitted: "1/20/2015",
//   FolderId: "3"
// }, {
//   BoxId: 38,
//   DepartmentId: 5556,
//   DepartmentName: "BYU Police Department",
//   DateSubmitted: "7/27/2016",
//   FolderId: "232"
// }, {
//   BoxId: 39,
//   DepartmentId: 5557,
//   DepartmentName: "Department of Healthcare and Registration",
//   DateSubmitted: "6/9/2016",
//   FolderId: "014"
// }, {
//   BoxId: 40,
//   DepartmentId: 5558,
//   DepartmentName: "Department of Business",
//   DateSubmitted: "12/7/2016",
//   FolderId: "6280"
// }, {
//   BoxId: 41,
//   DepartmentId: 5559,
//   DepartmentName: "Department of Science",
//   DateSubmitted: "4/25/2017",
//   FolderId: "8407"
// }, {
//   BoxId: 42,
//   DepartmentId: 5560,
//   DepartmentName: "Department of Spanish",
//   DateSubmitted: "6/27/2017",
//   FolderId: "92"
// }, {
//   BoxId: 43,
//   DepartmentId: 5555,
//   DepartmentName: "Office of IT",
//   DateSubmitted: "1/11/2017",
//   FolderId: "1"
// }, {
//   BoxId: 44,
//   DepartmentId: 5556,
//   DepartmentName: "BYU Police Department",
//   DateSubmitted: "10/25/2015",
//   FolderId: "796"
// }, {
//   BoxId: 45,
//   DepartmentId: 5557,
//   DepartmentName: "Department of Healthcare and Registration",
//   DateSubmitted: "5/8/2017",
//   FolderId: "07295"
// }, {
//   BoxId: 46,
//   DepartmentId: 5558,
//   DepartmentName: "Department of Business",
//   DateSubmitted: "3/3/2017",
//   FolderId: "8"
// }, {
//   BoxId: 47,
//   DepartmentId: 5559,
//   DepartmentName: "Department of Science",
//   DateSubmitted: "5/10/2015",
//   FolderId: "77"
// }, {
//   BoxId: 48,
//   DepartmentId: 5560,
//   DepartmentName: "Department of Spanish",
//   DateSubmitted: "6/2/2017",
//   FolderId: "578"
// }, {
//   BoxId: 49,
//   DepartmentId: 5555,
//   DepartmentName: "Office of IT",
//   DateSubmitted: "4/27/2016",
//   FolderId: "2711"
// }, {
//   BoxId: 50,
//   DepartmentId: 5556,
//   DepartmentName: "BYU Police Department",
//   DateSubmitted: "9/10/2016",
//   FolderId: "950"
// }, {
//   BoxId: 51,
//   DepartmentId: 5557,
//   DepartmentName: "Department of Healthcare and Registration",
//   DateSubmitted: "10/5/2017",
//   FolderId: "970"
// }, {
//   BoxId: 52,
//   DepartmentId: 5558,
//   DepartmentName: "Department of Business",
//   DateSubmitted: "7/4/2017",
//   FolderId: "2"
// }, {
//   BoxId: 53,
//   DepartmentId: 5559,
//   DepartmentName: "Department of Science",
//   DateSubmitted: "5/25/2017",
//   FolderId: "45"
// }, {
//   BoxId: 54,
//   DepartmentId: 5560,
//   DepartmentName: "Department of Spanish",
//   DateSubmitted: "10/6/2015",
//   FolderId: "0"
// }, {
//   BoxId: 55,
//   DepartmentId: 5555,
//   DepartmentName: "Office of IT",
//   DateSubmitted: "8/12/2016",
//   FolderId: "7088"
// }, {
//   BoxId: 56,
//   DepartmentId: 5556,
//   DepartmentName: "BYU Police Department",
//   DateSubmitted: "2/15/2018",
//   FolderId: "9"
// }, {
//   BoxId: 57,
//   DepartmentId: 5557,
//   DepartmentName: "Department of Healthcare and Registration",
//   DateSubmitted: "3/12/2015",
//   FolderId: "8564"
// }, {
//   BoxId: 58,
//   DepartmentId: 5558,
//   DepartmentName: "Department of Business",
//   DateSubmitted: "1/17/2017",
//   FolderId: "634"
// }, {
//   BoxId: 59,
//   DepartmentId: 5559,
//   DepartmentName: "Department of Science",
//   DateSubmitted: "3/1/2016",
//   FolderId: "39"
// }, {
//   BoxId: 60,
//   DepartmentId: 5560,
//   DepartmentName: "Department of Spanish",
//   DateSubmitted: "1/23/2016",
//   FolderId: "9017"
// }, {
//   BoxId: 61,
//   DepartmentId: 5555,
//   DepartmentName: "Office of IT",
//   DateSubmitted: "6/17/2017",
//   FolderId: "717"
// }, {
//   BoxId: 62,
//   DepartmentId: 5556,
//   DepartmentName: "BYU Police Department",
//   DateSubmitted: "3/21/2016",
//   FolderId: "82204"
// }, {
//   BoxId: 63,
//   DepartmentId: 5557,
//   DepartmentName: "Department of Healthcare and Registration",
//   DateSubmitted: "4/17/2016",
//   FolderId: "9"
// }, {
//   BoxId: 64,
//   DepartmentId: 5558,
//   DepartmentName: "Department of Business",
//   DateSubmitted: "8/22/2015",
//   FolderId: "338"
// }, {
//   BoxId: 65,
//   DepartmentId: 5559,
//   DepartmentName: "Department of Science",
//   DateSubmitted: "3/4/2016",
//   FolderId: "7864"
// }, {
//   BoxId: 66,
//   DepartmentId: 5560,
//   DepartmentName: "Department of Spanish",
//   DateSubmitted: "1/24/2015",
//   FolderId: "814"
// }, {
//   BoxId: 67,
//   DepartmentId: 5555,
//   DepartmentName: "Office of IT",
//   DateSubmitted: "1/3/2015",
//   FolderId: "97"
// }, {
//   BoxId: 68,
//   DepartmentId: 5556,
//   DepartmentName: "BYU Police Department",
//   DateSubmitted: "9/15/2015",
//   FolderId: "31990"
// }, {
//   BoxId: 69,
//   DepartmentId: 5557,
//   DepartmentName: "Department of Healthcare and Registration",
//   DateSubmitted: "2/1/2015",
//   FolderId: "5395"
// }, {
//   BoxId: 70,
//   DepartmentId: 5558,
//   DepartmentName: "Department of Business",
//   DateSubmitted: "3/5/2015",
//   FolderId: "03351"
// }, {
//   BoxId: 71,
//   DepartmentId: 5559,
//   DepartmentName: "Department of Science",
//   DateSubmitted: "6/25/2017",
//   FolderId: "7534"
// }, {
//   BoxId: 72,
//   DepartmentId: 5560,
//   DepartmentName: "Department of Spanish",
//   DateSubmitted: "10/20/2016",
//   FolderId: "115"
// }, {
//   BoxId: 73,
//   DepartmentId: 5555,
//   DepartmentName: "Office of IT",
//   DateSubmitted: "6/30/2016",
//   FolderId: "867"
// }, {
//   BoxId: 74,
//   DepartmentId: 5556,
//   DepartmentName: "BYU Police Department",
//   DateSubmitted: "12/2/2016",
//   FolderId: "16"
// }, {
//   BoxId: 75,
//   DepartmentId: 5557,
//   DepartmentName: "Department of Healthcare and Registration",
//   DateSubmitted: "1/3/2017",
//   FolderId: "67"
// }, {
//   BoxId: 76,
//   DepartmentId: 5558,
//   DepartmentName: "Department of Business",
//   DateSubmitted: "11/10/2017",
//   FolderId: "3"
// }, {
//   BoxId: 77,
//   DepartmentId: 5559,
//   DepartmentName: "Department of Science",
//   DateSubmitted: "8/5/2017",
//   FolderId: "0"
// }, {
//   BoxId: 78,
//   DepartmentId: 5560,
//   DepartmentName: "Department of Spanish",
//   DateSubmitted: "5/24/2015",
//   FolderId: "0584"
// }, {
//   BoxId: 79,
//   DepartmentId: 5555,
//   DepartmentName: "Office of IT",
//   DateSubmitted: "9/25/2017",
//   FolderId: "55"
// }, {
//   BoxId: 80,
//   DepartmentId: 5556,
//   DepartmentName: "BYU Police Department",
//   DateSubmitted: "3/14/2017",
//   FolderId: "0057"
// }, {
//   BoxId: 81,
//   DepartmentId: 5557,
//   DepartmentName: "Department of Healthcare and Registration",
//   DateSubmitted: "1/3/2016",
//   FolderId: "3719"
// }, {
//   BoxId: 82,
//   DepartmentId: 5558,
//   DepartmentName: "Department of Business",
//   DateSubmitted: "7/12/2017",
//   FolderId: "37125"
// }, {
//   BoxId: 83,
//   DepartmentId: 5559,
//   DepartmentName: "Department of Science",
//   DateSubmitted: "5/26/2017",
//   FolderId: "42"
// }, {
//   BoxId: 84,
//   DepartmentId: 5560,
//   DepartmentName: "Department of Spanish",
//   DateSubmitted: "4/5/2017",
//   FolderId: "84"
// }, {
//   BoxId: 85,
//   DepartmentId: 5555,
//   DepartmentName: "Office of IT",
//   DateSubmitted: "8/21/2017",
//   FolderId: "9"
// }, {
//   BoxId: 86,
//   DepartmentId: 5556,
//   DepartmentName: "BYU Police Department",
//   DateSubmitted: "3/16/2017",
//   FolderId: "8"
// }, {
//   BoxId: 87,
//   DepartmentId: 5557,
//   DepartmentName: "Department of Healthcare and Registration",
//   DateSubmitted: "12/8/2014",
//   FolderId: "8"
// }, {
//   BoxId: 88,
//   DepartmentId: 5558,
//   DepartmentName: "Department of Business",
//   DateSubmitted: "7/20/2016",
//   FolderId: "9"
// }, {
//   BoxId: 89,
//   DepartmentId: 5559,
//   DepartmentName: "Department of Science",
//   DateSubmitted: "2/1/2015",
//   FolderId: "898"
// }, {
//   BoxId: 90,
//   DepartmentId: 5560,
//   DepartmentName: "Department of Spanish",
//   DateSubmitted: "1/24/2015",
//   FolderId: "2579"
// }, {
//   BoxId: 91,
//   DepartmentId: 5555,
//   DepartmentName: "Office of IT",
//   DateSubmitted: "7/19/2016",
//   FolderId: "23"
// }, {
//   BoxId: 92,
//   DepartmentId: 5556,
//   DepartmentName: "BYU Police Department",
//   DateSubmitted: "11/30/2017",
//   FolderId: "9875"
// }, {
//   BoxId: 93,
//   DepartmentId: 5557,
//   DepartmentName: "Department of Healthcare and Registration",
//   DateSubmitted: "10/27/2015",
//   FolderId: "29"
// }, {
//   BoxId: 94,
//   DepartmentId: 5558,
//   DepartmentName: "Department of Business",
//   DateSubmitted: "1/24/2016",
//   FolderId: "1617"
// }, {
//   BoxId: 95,
//   DepartmentId: 5559,
//   DepartmentName: "Department of Science",
//   DateSubmitted: "12/20/2014",
//   FolderId: "5"
// }, {
//   BoxId: 96,
//   DepartmentId: 5560,
//   DepartmentName: "Department of Spanish",
//   DateSubmitted: "1/4/2017",
//   FolderId: "0186"
// }, {
//   BoxId: 97,
//   DepartmentId: 5555,
//   DepartmentName: "Office of IT",
//   DateSubmitted: "5/3/2015",
//   FolderId: "8"
// }, {
//   BoxId: 98,
//   DepartmentId: 5556,
//   DepartmentName: "BYU Police Department",
//   DateSubmitted: "9/25/2015",
//   FolderId: "173"
// }, {
//   BoxId: 99,
//   DepartmentId: 5557,
//   DepartmentName: "Department of Healthcare and Registration",
//   DateSubmitted: "6/2/2016",
//   FolderId: "2"
// }, {
//   BoxId: 100,
//   DepartmentId: 5558,
//   DepartmentName: "Department of Business",
//   DateSubmitted: "2/14/2016",
//   FolderId: "13846"
// }]