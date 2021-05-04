export class Game {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public discount: number,
        public featured: boolean,
        public imageUrl: string,
        public link: string
    ) {}
}
