import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/game.model';
import { GamesService } from 'src/app/games.service';

@Component({
    selector: 'app-big-spot',
    templateUrl: './big-spot.component.html',
    styleUrls: ['./big-spot.component.scss'],
})
export class BigSpotComponent implements OnInit {
    @Input() game!: Game;
    owned: boolean = false;
    inCart: boolean = false;
    gamesInCart: Game[] = [];
    subscription!: Subscription;

    constructor(private gamesService: GamesService) {}

    ngOnInit(): void {
        this.gamesInCart = this.gamesService.getShoppingCartList();
        this.subscription = this.gamesService.shoppingCartChanged.subscribe((games: Game[]) => {
            this.gamesInCart = games;
            this.checkIfGameIsInCart();
        });
        this.checkForGameOwnership();
        this.checkIfGameIsInCart();
    }

    onAddToCart(): void {
        this.gamesService.addToShoppingCart(this.game);
    }

    checkForGameOwnership() {
        this.gamesService.getOwnedGamesList().map((game) => {
            if (game.id === this.game.id) {
                this.owned = true;
            }
        });
    }

    checkIfGameIsInCart(): void {
        this.inCart = false;
        this.gamesInCart.map((game) => {
            if (game.id === this.game.id) {
                this.inCart = true;
            }
        });
    }

    onSecretClick(): void {
        alert('Look at the console log');
        console.log('Look at the bottom of the DOM');
        document.title = 'Hello there';
    }
}
