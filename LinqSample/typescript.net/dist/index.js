"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var List_1 = require("typescript-dotnet-commonjs/System/Collections/List");
var citys_json_1 = __importDefault(require("./citys.json"));
var province = new List_1.List(citys_json_1.default);
var provinceNumber = province.linq.count();
console.log("共有省份:" + provinceNumber);
var cityNumber = province.linq.sum(function (p) { return new List_1.List(p.city).linq.count(); });
console.log("共有市:" + cityNumber);
var areaNumber = province.linq.sum(function (p) {
    return new List_1.List(p.city).linq.sum(function (c) { return new List_1.List(c.area).linq.count(); });
});
console.log("共有区县:" + areaNumber);
var mostCityProvince = province.linq
    .orderByDescending(function (p) { return new List_1.List(p.city).linq.count(); })
    .take(10)
    .toArray();
console.log("最多市的省排名：");
console.log(mostCityProvince);
// 查某个市包括的区县
var cityName = "北京市";
var allCitys = new List_1.List();
province.forEach(function (p) { return allCitys.importEntries(p.city); });
var searchCity = allCitys.linq
    .where(function (c) { return c.name === cityName; })
    .firstOrDefault();
console.log(cityName + "包括的区县有：");
console.log(searchCity);
// 最多县的市
var mostAreaCity = allCitys.linq
    .orderByDescending(function (c) { return new List_1.List(c.area).linq.count(); })
    .take(10)
    .toArray();
console.log("最多县的市排名：");
console.log(mostAreaCity);
console.log("finish");
//# sourceMappingURL=index.js.map