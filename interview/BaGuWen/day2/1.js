// function map(data) {
//   // 创建一个Map对象，用于存储唯一的id和对应的数据项
//   const uniqueMap = new Map();

//   // 遍历输入数据
//   for (const item of data) {
//     const id = item.id;
//     const age = item.age;

//     // 如果id已经在Map中存在，比较年龄并更新为更小的年龄
//     if (uniqueMap.has(id)) {
//       const existingAge = uniqueMap.get(id).age;
//       if (age > existingAge) {
//         uniqueMap.set(id, item);
//       }
//     } else {
//       // 如果id不存在，直接将数据项添加到Map中
//       uniqueMap.set(id, item);
//     }
//   }

//   // 将Map中的值提取为一个数组，并按照age从小到大进行排序
//   const sortedData = Array.from(uniqueMap.values()).sort((a, b) => a.age - b.age);

//   return sortedData;
// }

// // 示例输入数据
// const data = [
//   { id: 1, age: 23 },
//   { id: 2, age: 24 },
//   { id: 1, age: 25 },
//   { id: 4, age: 26 },
// ];

// const result = map(data);
// console.log(result);

const data = [
  { id: 1, age: 23 },
  { id: 2, age: 27 },
  { id: 1, age: 25 },
  { id: 4, age: 26 },
];
function map(data) {
  const uniqueMap = new Map();
  for (const key in data) {
    const id = data[key].id;
    const age = data[key].age
    // console.log(id, age);
    if (uniqueMap.has(id)) {
      const age1 = uniqueMap.get(id).age
      console.log(age1);
      if (age1 < age) {
        uniqueMap.set(id, data[key])
      }
    } else {
      uniqueMap.set(id, data[key]);
    }
  }
  // console.log([...uniqueMap.values()]);
  const sortArray = [...uniqueMap.values()].sort((a, b) => a.age - b.age)
  return sortArray
}
const result = map(data)
console.log(result);