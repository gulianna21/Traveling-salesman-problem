"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = require("./node");
var INPUT_DATA = [
    [0, 7, 5, 3, 1, 5, 2, 6, 7, 5],
    [7, 0, 2, 4, 5, 4, 6, 1, 3, 4],
    [5, 2, 0, 4, 7, 7, 5, 3, 6, 1],
    [3, 4, 4, 0, 6, 7, 1, 5, 7, 3],
    [1, 5, 7, 6, 0, 2, 3, 6, 5, 7],
    [5, 4, 7, 7, 2, 0, 4, 5, 3, 8],
    [2, 6, 5, 1, 3, 4, 0, 7, 7, 6],
    [6, 1, 3, 5, 6, 5, 7, 0, 2, 4],
    [7, 3, 6, 7, 5, 3, 7, 2, 0, 5],
    [5, 4, 1, 3, 7, 8, 6, 4, 5, 0]
];
var N = 10; // колличество вершин
var SELECTED_NODE = Math.floor(Math.random() * (9)) + 1; // начало цикла - первая вершина  /// случайно // 7 (6 индекс) вершина иной путь
var listNode = []; // список узлов
for (var i = 0; i < N; i++) {
    listNode[i] = new node_1.Node();
}
var elem = listNode[SELECTED_NODE]; // выбрали элемент
var path = [{ node: elem, coin: 0 }]; // занесли в путь
for (var i = 0; i < N; i++) {
    for (var j = 0; j < N; j++) {
        listNode[i].link.push({ node: listNode[j], wight: INPUT_DATA[i][j] }); // идем по матрице весов и заполняем ребра
    }
}
for (var i = 0; i < path.length; i++) {
    var nodes = path.map(function (p) { return p.node; }); // массив вершин в пути
    var min = path[i].node.findMinimumWight(nodes); // поиск минимального ребра
    if (min === -1)
        break;
    path.push({ node: path[i].node.link[min].node, coin: 0 }); // добавление найденного в путь со стоимостью 0, т.к. последний
    path[i].coin = path[i].node.link[min].wight; // предыдущему задаем стоимость который добавили
}
var widthLestStep = path[path.length - 1].node.link[SELECTED_NODE].wight; // запоминаем стоимость перехода последнего к начальному
path[path.length - 1].coin = widthLestStep; // записываем стоимость в последний
path.push({ node: path[0].node, coin: 0 }); // добавляем начальный
console.log(path.map(function (n) { return n.coin; }).reduce(function (v, r) { return v + r; }));
console.log(path.map(function (n) { return n.coin; })); // стоимость веса
console.log(path.map(function (n) { return listNode.indexOf(n.node) + 1; })); // вершины, +1 для корректности вывода индексов
