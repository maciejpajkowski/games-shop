import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Game } from 'src/app/game.model';

import { SmallSpotComponent } from './small-spot.component';

describe('SmallSpotComponent', () => {
    let component: SmallSpotComponent;
    let fixture: ComponentFixture<SmallSpotComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SmallSpotComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SmallSpotComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        component.game = new Game(1, 'Test', 1, 0, false, '/', '#'); // dummy data for testing only
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
