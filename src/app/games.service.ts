import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Game } from './game.model';

@Injectable({
    providedIn: 'root',
})
export class GamesService {
    private ownedGames: Game[] = [
        new Game(
            2,
            'Chaos on Deponia',
            9.99,
            0,
            false,
            '../assets/images/Deponia.png',
            'https://www.gog.com/game/deponia_2_chaos_on_deponia'
        ),
    ];
    private shoppingCart: Game[] = [
        new Game(
            5,
            "Assassin's Creed: Director's Cut",
            9.99,
            0,
            false,
            '../assets/images/AC.png',
            'https://www.gog.com/game/assassins_creed_directors_cut'
        ),
        new Game(
            3,
            'The Settlers 2: Gold Edition',
            5.99,
            0,
            false,
            '../assets/images/Settlers.png',
            'https://www.gog.com/game/the_settlers_2_gold_edition'
        ),
    ];
    public toggleCart = false;
    public shoppingCartToggled = new Subject<boolean>();
    public shoppingCartChanged = new Subject<Game[]>();
    private games: Game[] = [
        new Game(
            0,
            'The Witcher: Adventure Game',
            5.99,
            30,
            true,
            '../assets/images/BigSpot.png',
            'https://www.gog.com/game/witcher_adventure_game'
        ),
        new Game(
            1,
            "Oddworld: Stranger's Wrath",
            9.99,
            50,
            false,
            '../assets/images/Oddworld.png',
            'https://www.gog.com/game/oddworld_strangers_wrath'
        ),
        new Game(
            2,
            'Chaos on Deponia',
            9.99,
            0,
            false,
            '../assets/images/Deponia.png',
            'https://www.gog.com/game/deponia_2_chaos_on_deponia'
        ),
        new Game(
            3,
            'The Settlers 2: Gold Edition',
            5.99,
            0,
            false,
            '../assets/images/Settlers.png',
            'https://www.gog.com/game/the_settlers_2_gold_edition'
        ),
        new Game(
            4,
            'Neverwinter Nights',
            9.99,
            50,
            false,
            '../assets/images/Neverwinter.png',
            'https://www.gog.com/game/neverwinter_nights_enhanced_edition_pack'
        ),
        new Game(
            5,
            "Assassin's Creed: Director's Cut",
            9.99,
            0,
            false,
            '../assets/images/AC.png',
            'https://www.gog.com/game/assassins_creed_directors_cut'
        ),
    ];

    constructor() {}

    toggleShoppingCart(): void {
        this.toggleCart = !this.toggleCart;
        this.shoppingCartToggled.next(this.toggleCart);
    }

    getShoppingCartList(): Game[] {
        return [...this.shoppingCart];
    }

    getGamesList(): Game[] {
        return [...this.games];
    }

    getOwnedGamesList(): Game[] {
        return [...this.ownedGames];
    }

    clearShoppingCartList(): void {
        this.shoppingCart = [];
        this.sendUpdatedShoppingCart();
    }

    addToShoppingCart(game: Game): void {
        this.shoppingCart.push(game);
        this.sendUpdatedShoppingCart();
    }

    removeFromShoppingCart(id: number): void {
        this.shoppingCart = this.shoppingCart.filter((game) => game.id !== id);
        this.sendUpdatedShoppingCart();
    }

    sendUpdatedShoppingCart(): void {
        this.shoppingCartChanged.next([...this.shoppingCart]);
    }
}
