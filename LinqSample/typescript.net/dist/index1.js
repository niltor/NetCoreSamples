"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var citys_json_1 = __importDefault(require("./citys.json"));
var linqts_1 = require("linqts");
var province = new linqts_1.List(citys_json_1.default);
var provinceNumber = province.Count();
console.log("共有省份:" + provinceNumber);
// const cityNumber = province.Sum((p: Province) => {
//   new List(p.city).Count();
// });
// console.log("共有市:" + cityNumber);
// const areaNumber = province.linq.sum(p =>
//   new List(p.city).linq.sum(c => new List(c.area).linq.count())
// );
// console.log("共有区县:" + areaNumber);
// const mostCityProvince = province.linq
//   .orderByDescending(p => new List(p.city).linq.count())
//   .take(10)
//   .toArray();
// console.log("最多市的省排名：");
// console.log(mostCityProvince);
// // 查某个市包括的区县
// const cityName = "北京市";
// const allCitys = new List<City>();
// province.forEach(p => allCitys.importEntries(p.city));
// const searchCity = allCitys.linq
//   .where(c => c.name === cityName)
//   .firstOrDefault();
// console.log(cityName + "包括的区县有：");
// console.log(searchCity);
console.log("end");
//# sourceMappingURL=index1.js.map