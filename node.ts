
export class Node { // описание класса узла
    link: { node: Node, wight: number }[] = []; // ребра

    findMinimumWight(path: Node[]): number { // поиск минимального веса, не используемого в пути
        let min,
            index = -1;
        for (let i = 0; i < this.link.length; i++) { // обход по всем ребрам
            if (this.link[i].wight === 0) // указатель на себя
                continue;

            if (!min || min > this.link[i].wight) { // проверяем текущее значение с минимальным
                if(path.indexOf(this.link[i].node) >= 0) // проверяем есть ли текущий узел в пути
                    continue;
                min = this.link[i].wight; // нашли минимальный, записали для дальнейшего сравнения
                index = i; // индекс ребра на котором минимальный вес
            }
        }
        return index;
    }

}