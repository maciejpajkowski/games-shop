import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/game.model';
import { GamesService } from 'src/app/games.service';

@Component({
    selector: 'app-shopping-cart-item',
    templateUrl: './shopping-cart-item.component.html',
    styleUrls: ['./shopping-cart-item.component.scss'],
})
export class ShoppingCartItemComponent implements OnInit {
    @Input() game!: Game;
    public shortenedGameTitle!: string;

    constructor(private gamesService: GamesService) {}

    ngOnInit(): void {
        this.shortenedGameTitle = this.shortenGameTitle(this.game.title);
    }

    shortenGameTitle(title: string): string {
        if (title.length > 28) {
            return title.slice(0, 25) + '...';
        } else {
            return title;
        }
    }

    onRemove(id: number): void {
        this.gamesService.removeFromShoppingCart(id);
    }
}
