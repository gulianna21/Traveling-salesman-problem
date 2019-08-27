"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node() {
        this.link = []; // ребра
    }
    Node.prototype.findMinimumWight = function (path) {
        var min, index = -1;
        for (var i = 0; i < this.link.length; i++) {
            if (this.link[i].wight === 0)
                continue;
            if (!min || min > this.link[i].wight) {
                if (path.indexOf(this.link[i].node) >= 0)
                    continue;
                min = this.link[i].wight; // нашли минимальный, записали для дальнейшего сравнения
                index = i; // индекс ребра на котором минимальный вес
            }
        }
        return index;
    };
    return Node;
}());
exports.Node = Node;
