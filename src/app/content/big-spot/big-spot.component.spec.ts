import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Game } from 'src/app/game.model';

import { BigSpotComponent } from './big-spot.component';

describe('BigSpotComponent', () => {
    let component: BigSpotComponent;
    let fixture: ComponentFixture<BigSpotComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BigSpotComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BigSpotComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        component.game = new Game(1, 'Test', 1, 0, false, '/', '#'); // dummy data for testing only
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
