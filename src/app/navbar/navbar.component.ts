import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from '../game.model';
import { GamesService } from '../games.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
    shoppingCart: Game[] = [];
    shoppingCartOpen: boolean = false;
    cartOpenSubscription!: Subscription;
    subscription!: Subscription;
    gamesInCartCount!: number;

    constructor(private gamesService: GamesService) {}

    ngOnInit(): void {
        this.shoppingCartOpen = this.gamesService.toggleCart;
        this.cartOpenSubscription = this.gamesService.shoppingCartToggled.subscribe((toggled) => {
            this.shoppingCartOpen = toggled;
        });
        this.shoppingCart = this.gamesService.getShoppingCartList();
        this.subscription = this.gamesService.shoppingCartChanged.subscribe((gamesInCart: Game[]) => {
            this.shoppingCart = gamesInCart;
            this.calculateItemsInCart();
        });
        this.calculateItemsInCart();
    }

    onToggleShoppingList() {
        this.gamesService.toggleShoppingCart();
    }

    calculateItemsInCart(): void {
        this.gamesInCartCount = this.shoppingCart.length;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        this.cartOpenSubscription.unsubscribe();
    }
}
