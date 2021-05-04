import { Component, OnInit } from '@angular/core';
import { Game } from '../game.model';
import { GamesService } from '../games.service';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
    smallSpotGames: Game[] = [];
    bigSpotGame!: Game;

    constructor(private gamesService: GamesService) {}

    ngOnInit(): void {
        this.smallSpotGames = this.gamesService.getGamesList().filter((game) => game.featured === false);
    }
}
