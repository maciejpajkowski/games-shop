import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { SmallSpotComponent } from './content/small-spot/small-spot.component';
import { BigSpotComponent } from './content/big-spot/big-spot.component';

@NgModule({
    declarations: [AppComponent, NavbarComponent, ContentComponent, SmallSpotComponent, BigSpotComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
