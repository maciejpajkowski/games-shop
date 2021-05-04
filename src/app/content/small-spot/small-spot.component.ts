import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/game.model';
import { GamesService } from 'src/app/games.service';

@Component({
    selector: 'app-small-spot',
    templateUrl: './small-spot.component.html',
    styleUrls: ['./small-spot.component.scss'],
})
export class SmallSpotComponent implements OnInit {
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

    onAddToCart() {
        this.gamesService.addToShoppingCart(this.game);
    }

    checkForGameOwnership() {
        this.gamesService.getOwnedGamesList().map((game) => {
            if (game.id === this.game.id) {
                this.owned = true;
            }
        });
    }

    checkIfGameIsInCart() {
        this.inCart = false;
        this.gamesInCart.map((game) => {
            if (game.id === this.game.id) {
                this.inCart = true;
            }
        });
    }
}
