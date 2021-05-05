import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Game } from 'src/app/game.model';

import { ShoppingCartItemComponent } from './shopping-cart-item.component';

describe('ShoppingCartItemComponent', () => {
    let component: ShoppingCartItemComponent;
    let fixture: ComponentFixture<ShoppingCartItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ShoppingCartItemComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ShoppingCartItemComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        component.game = new Game(1, 'Test', 1, 0, false, '/', '#'); // dummy data for testing only
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
