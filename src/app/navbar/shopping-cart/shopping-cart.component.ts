import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/game.model';
import { GamesService } from 'src/app/games.service';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
    shoppingCart: Game[] = [];
    shoppingCartOpen: boolean = false;
    cartOpenSubscription!: Subscription;
    subscription!: Subscription;
    gamesInCartCount!: number;
    totalPrice: number = 0;

    constructor(private gamesService: GamesService) {}

    ngOnInit(): void {
        this.shoppingCart = this.gamesService.getShoppingCartList();
        this.subscription = this.gamesService.shoppingCartChanged.subscribe((gamesInCart: Game[]) => {
            this.shoppingCart = gamesInCart;
            this.calculateItemsInCart();
            this.calculateTotalPrice();
        });
        this.calculateItemsInCart();
        this.calculateTotalPrice();

        this.cartOpenSubscription = this.gamesService.shoppingCartToggled.subscribe((toggle) => {
            this.shoppingCartOpen = toggle;
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        this.cartOpenSubscription.unsubscribe();
    }

    onClearCart(): void {
        this.gamesService.clearShoppingCartList();
        this.gamesInCartCount = this.shoppingCart.length;
        this.totalPrice = 0;
    }

    calculateItemsInCart(): void {
        this.gamesInCartCount = this.shoppingCart.length;
    }

    calculateTotalPrice(): void {
        this.totalPrice = 0;
        for (let game of this.shoppingCart) {
            this.totalPrice += game.price;
        }
    }
}
