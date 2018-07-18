import { List } from "typescript-dotnet-commonjs/System/Collections/List";
import json from "./citys.json";
import { Province, City } from "./Models";
const province: List<Province> = new List(json);

const provinceNumber = province.linq.count();
console.log("共有省份:" + provinceNumber);

const cityNumber = province.linq.sum(p => new List(p.city).linq.count());
console.log("共有市:" + cityNumber);

const areaNumber = province.linq.sum(p =>
  new List(p.city).linq.sum(c => new List(c.area).linq.count())
);
console.log("共有区县:" + areaNumber);

const mostCityProvince = province.linq
  .orderByDescending(p => new List(p.city).linq.count())
  .take(10)
  .toArray();
console.log("最多市的省排名：");
console.log(mostCityProvince);

// 查某个市包括的区县
const cityName = "北京市";
const allCitys = new List<City>();
province.forEach(p => allCitys.importEntries(p.city));
const searchCity = allCitys.linq
  .where(c => c.name === cityName)
  .firstOrDefault();
console.log(cityName + "包括的区县有：");
console.log(searchCity);

// 最多县的市
const mostAreaCity = allCitys.linq
  .orderByDescending(c => new List(c.area).linq.count())
  .take(10)
  .toArray();

console.log("最多县的市排名：");
console.log(mostAreaCity);

console.log("finish");
