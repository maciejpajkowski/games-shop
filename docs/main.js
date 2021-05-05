(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Maciek\Desktop\CODE\gog-frontend-task\src\main.ts */"zUnb");


/***/ }),

/***/ "0btM":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../games.service */ "5knQ");
/* harmony import */ var _big_spot_big_spot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./big-spot/big-spot.component */ "gx8+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _small_spot_small_spot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./small-spot/small-spot.component */ "ZC2q");






function ContentComponent_app_small_spot_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-small-spot", 3);
} if (rf & 2) {
    const smallSpotGame_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("game", smallSpotGame_r1);
} }
class ContentComponent {
    constructor(gamesService) {
        this.gamesService = gamesService;
        this.smallSpotGames = [];
    }
    ngOnInit() {
        this.smallSpotGames = this.gamesService.getGamesList().filter((game) => game.featured === false);
        this.bigSpotGame = this.gamesService.getGamesList().filter((game) => game.featured === true)[0];
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_1__["GamesService"])); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 7, vars: 2, consts: [[1, "content-wrapper"], [1, "content"], [1, "content__gotw"], [3, "game"], [1, "content__small-spot-list"], [3, "game", 4, "ngFor", "ngForOf"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "GAME OF THE WEEK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-big-spot", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ContentComponent_app_small_spot_6_Template, 1, 1, "app-small-spot", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("game", ctx.bigSpotGame);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.smallSpotGames);
    } }, directives: [_big_spot_big_spot_component__WEBPACK_IMPORTED_MODULE_2__["BigSpotComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _small_spot_small_spot_component__WEBPACK_IMPORTED_MODULE_4__["SmallSpotComponent"]], styles: [".content-wrapper[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #c5c1ca 0%, #cdcdcd 100%);\n  \n  height: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 1060px;\n  margin: 0 auto;\n  padding: 0 20px;\n  padding-top: 70px;\n}\n\n.content__gotw[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-family: Source Sans Pro Bold, \"Arial\", monospace;\n  line-height: 19px;\n  margin: 20px 0;\n}\n\n.content__small-spot-list[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: inline-flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2REFBQTtFQUE2RixXQUFBO0VBQzdGLFlBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EscURBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQUVKIiwiZmlsZSI6ImNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMTk3LCAxOTMsIDIwMiwgMSkgMCUsIHJnYmEoMjA1LCAyMDUsIDIwNSwgMSkgMTAwJSk7IC8qI2NkY2RjZDsqL1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6IDEwNjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50X19nb3R3IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBTb3VyY2UgU2FucyBQcm8gQm9sZCwgXCJBcmlhbFwiLCBtb25vc3BhY2U7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4uY29udGVudF9fc21hbGwtc3BvdC1saXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMjBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.scss'],
            }]
    }], function () { return [{ type: _games_service__WEBPACK_IMPORTED_MODULE_1__["GamesService"] }]; }, null); })();


/***/ }),

/***/ "0p9w":
/*!*****************************************************************************************!*\
  !*** ./src/app/navbar/shopping-cart/shopping-cart-item/shopping-cart-item.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ShoppingCartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartItemComponent", function() { return ShoppingCartItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_games_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/games.service */ "5knQ");



class ShoppingCartItemComponent {
    constructor(gamesService) {
        this.gamesService = gamesService;
    }
    ngOnInit() {
        this.shortenedGameTitle = this.shortenGameTitle(this.game.title);
    }
    shortenGameTitle(title) {
        if (title.length > 28) {
            return title.slice(0, 25) + '...';
        }
        else {
            return title;
        }
    }
    onRemove(id) {
        this.gamesService.removeFromShoppingCart(id);
    }
}
ShoppingCartItemComponent.ɵfac = function ShoppingCartItemComponent_Factory(t) { return new (t || ShoppingCartItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_games_service__WEBPACK_IMPORTED_MODULE_1__["GamesService"])); };
ShoppingCartItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingCartItemComponent, selectors: [["app-shopping-cart-item"]], inputs: { game: "game" }, decls: 10, vars: 5, consts: [[1, "shopping-cart-item"], ["target", "_blank", 3, "href"], [3, "src", "alt"], [1, "shopping-cart-item__info"], [1, "shopping-cart-item__title"], [1, "shopping-cart-item__remove", 3, "click"], [1, "shopping-cart-item__price"]], template: function ShoppingCartItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingCartItemComponent_Template_span_click_6_listener() { return ctx.onRemove(ctx.game.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.game.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.game.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.game.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.shortenedGameTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.game.price, "");
    } }, styles: [".shopping-cart-item[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-top: 1px solid rgba(184, 184, 184, 0.5);\n  display: flex;\n  align-items: center;\n}\n.shopping-cart-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  line-height: 0;\n}\n.shopping-cart-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100px;\n  max-height: 60px;\n  min-height: 56px;\n}\n.shopping-cart-item[_ngcontent-%COMP%]:hover   .shopping-cart-item__remove[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.shopping-cart-item__info[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  flex-grow: 1;\n}\n.shopping-cart-item__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.shopping-cart-item__remove[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 12px;\n  text-decoration: underline;\n  margin-top: 3px;\n  cursor: pointer;\n}\n.shopping-cart-item__price[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2hvcHBpbmctY2FydC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLDhDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNJLGNBQUE7QUFDUjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQVI7QUFJUTtFQUNJLHFCQUFBO0FBRlo7QUFPQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUpKO0FBT0E7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0FBSko7QUFPQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUpKO0FBT0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBSkoiLCJmaWxlIjoic2hvcHBpbmctY2FydC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3BwaW5nLWNhcnQtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxODQsIDE4NCwgMTg0LCAwLjUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTZweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICAuc2hvcHBpbmctY2FydC1pdGVtX19yZW1vdmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2hvcHBpbmctY2FydC1pdGVtX19pbmZvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uc2hvcHBpbmctY2FydC1pdGVtX190aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnNob3BwaW5nLWNhcnQtaXRlbV9fcmVtb3ZlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNob3BwaW5nLWNhcnQtaXRlbV9fcHJpY2Uge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingCartItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shopping-cart-item',
                templateUrl: './shopping-cart-item.component.html',
                styleUrls: ['./shopping-cart-item.component.scss'],
            }]
    }], function () { return [{ type: src_app_games_service__WEBPACK_IMPORTED_MODULE_1__["GamesService"] }]; }, { game: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "5knQ":
/*!**********************************!*\
  !*** ./src/app/games.service.ts ***!
  \**********************************/
/*! exports provided: GamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesService", function() { return GamesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _game_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.model */ "DTx0");




class GamesService {
    constructor() {
        this.ownedGames = [
            new _game_model__WEBPACK_IMPORTED_MODULE_2__["Game"](2, 'Chaos on Deponia', 9.99, 0, false, '../assets/images/Deponia.png', 'https://www.gog.com/game/deponia_2_chaos_on_deponia'),
        ];
        this.shoppingCart = [
            new _game_model__WEBPACK_IMPORTED_MODULE_2__["Game"](5, "Assassin's Creed: Director's Cut", 9.99, 0, false, '../assets/images/AC.png', 'https://www.gog.com/game/assassins_creed_directors_cut'),
            new _game_model__WEBPACK_IMPORTED_MODULE_2__["Game"](3, 'The Settlers 2: Gold Edition', 5.99, 0, false, '../assets/images/Settlers.png', 'https://www.gog.com/game/the_settlers_2_gold_edition'),
        ];
        this.toggleCart = false;
        this.shoppingCartToggled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.shoppingCartChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.games = [
            new _game_model__WEBPACK_IMPORTED_MODULE_2__["Game"](0, 'The Witcher: Adventure Game', 5.99, 30, true, '../assets/images/BigSpot.png', 'https://www.gog.com/game/witcher_adventure_game'),
            new _game_model__WEBPACK_IMPORTED_MODULE_2__["Game"](1, "Oddworld: Stranger's Wrath", 9.99, 50, false, '../assets/images/Oddworld.png', 'https://www.gog.com/game/oddworld_strangers_wrath'),
            new _game_model__WEBPACK_IMPORTED_MODULE_2__["Game"](2, 'Chaos on Deponia', 9.99, 0, false, '../assets/images/Deponia.png', 'https://www.gog.com/game/deponia_2_chaos_on_deponia'),
            new _game_model__WEBPACK_IMPORTED_MODULE_2__["Game"](3, 'The Settlers 2: Gold Edition', 5.99, 0, false, '../assets/images/Settlers.png', 'https://www.gog.com/game/the_settlers_2_gold_edition'),
            new _game_model__WEBPACK_IMPORTED_MODULE_2__["Game"](4, 'Neverwinter Nights', 9.99, 50, false, '../assets/images/Neverwinter.png', 'https://www.gog.com/game/neverwinter_nights_enhanced_edition_pack'),
            new _game_model__WEBPACK_IMPORTED_MODULE_2__["Game"](5, "Assassin's Creed: Director's Cut", 9.99, 0, false, '../assets/images/AC.png', 'https://www.gog.com/game/assassins_creed_directors_cut'),
        ];
    }
    toggleShoppingCart() {
        this.toggleCart = !this.toggleCart;
        this.shoppingCartToggled.next(this.toggleCart);
    }
    getShoppingCartList() {
        return [...this.shoppingCart];
    }
    getGamesList() {
        return [...this.games];
    }
    getOwnedGamesList() {
        return [...this.ownedGames];
    }
    clearShoppingCartList() {
        this.shoppingCart = [];
        this.sendUpdatedShoppingCart();
    }
    addToShoppingCart(game) {
        this.shoppingCart.push(game);
        this.sendUpdatedShoppingCart();
    }
    removeFromShoppingCart(id) {
        this.shoppingCart = this.shoppingCart.filter((game) => game.id !== id);
        this.sendUpdatedShoppingCart();
    }
    sendUpdatedShoppingCart() {
        this.shoppingCartChanged.next([...this.shoppingCart]);
    }
}
GamesService.ɵfac = function GamesService_Factory(t) { return new (t || GamesService)(); };
GamesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GamesService, factory: GamesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DTx0":
/*!*******************************!*\
  !*** ./src/app/game.model.ts ***!
  \*******************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
class Game {
    constructor(id, title, price, discount, featured, imageUrl, link) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.discount = discount;
        this.featured = featured;
        this.imageUrl = imageUrl;
        this.link = link;
    }
}


/***/ }),

/***/ "QqS5":
/*!*****************************************************************!*\
  !*** ./src/app/navbar/shopping-cart/shopping-cart.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_games_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/games.service */ "5knQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shopping_cart_item_shopping_cart_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-cart-item/shopping-cart-item.component */ "0p9w");





function ShoppingCartComponent_app_shopping_cart_item_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-shopping-cart-item", 7);
} if (rf & 2) {
    const game_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("game", game_r1);
} }
const _c0 = function (a0) { return { "active": a0 }; };
class ShoppingCartComponent {
    constructor(gamesService) {
        this.gamesService = gamesService;
        this.shoppingCart = [];
        this.shoppingCartOpen = false;
        this.totalPrice = 0;
    }
    ngOnInit() {
        this.shoppingCart = this.gamesService.getShoppingCartList();
        this.subscription = this.gamesService.shoppingCartChanged.subscribe((gamesInCart) => {
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
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.cartOpenSubscription.unsubscribe();
    }
    onClearCart() {
        this.gamesService.clearShoppingCartList();
        this.gamesInCartCount = this.shoppingCart.length;
        this.totalPrice = 0;
    }
    calculateItemsInCart() {
        this.gamesInCartCount = this.shoppingCart.length;
    }
    calculateTotalPrice() {
        this.totalPrice = 0;
        for (let game of this.shoppingCart) {
            this.totalPrice += game.price;
        }
    }
}
ShoppingCartComponent.ɵfac = function ShoppingCartComponent_Factory(t) { return new (t || ShoppingCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_games_service__WEBPACK_IMPORTED_MODULE_1__["GamesService"])); };
ShoppingCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingCartComponent, selectors: [["app-shopping-cart"]], decls: 10, vars: 7, consts: [[1, "shopping-cart", 3, "ngClass"], [1, "shopping-cart__controls"], [1, "shopping-cart__item-counter"], [1, "shopping-cart__total-price"], [1, "btn", 2, "padding", "10px 30px", 3, "disabled", "click"], [1, "shopping-cart__list"], [3, "game", 4, "ngFor", "ngForOf"], [3, "game"]], template: function ShoppingCartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingCartComponent_Template_button_click_6_listener() { return ctx.onClearCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Clear cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ShoppingCartComponent_app_shopping_cart_item_9_Template, 1, 1, "app-shopping-cart-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.shoppingCartOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gamesInCartCount > 0 ? ctx.gamesInCartCount === 1 ? "1 item in cart" : ctx.gamesInCartCount + " items in cart" : "Cart is empty.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.totalPrice, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.gamesInCartCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shoppingCart);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shopping_cart_item_shopping_cart_item_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartItemComponent"]], styles: [".shopping-cart[_ngcontent-%COMP%] {\n  display: none;\n  cursor: auto;\n  position: absolute;\n  top: 100%;\n  right: 0%;\n  width: 370px;\n  background-color: #fff;\n  border: 1px solid rgba(184, 184, 184, 0.5);\n  border-top: 0;\n  border-right: 0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n  z-index: 90;\n}\n.shopping-cart.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.shopping-cart__controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  font-family: Source Sans Pro Bold, \"Arial\", monospace;\n}\n.shopping-cart__item-counter[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-transform: uppercase;\n  font-family: inherit;\n  font-size: 15px;\n}\n.shopping-cart__total-price[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-size: 15px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0k7RUFDSSxjQUFBO0FBQ1I7QUFHQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHFEQUFBO0FBQUo7QUFHQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUFKO0FBR0E7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFKIiwiZmlsZSI6InNob3BwaW5nLWNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvcHBpbmctY2FydCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgd2lkdGg6IDM3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTg0LCAxODQsIDE4NCwgMC41KTtcclxuICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB6LWluZGV4OiA5MDtcclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zaG9wcGluZy1jYXJ0X19jb250cm9scyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvIEJvbGQsIFwiQXJpYWxcIiwgbW9ub3NwYWNlO1xyXG59XHJcblxyXG4uc2hvcHBpbmctY2FydF9faXRlbS1jb3VudGVyIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnNob3BwaW5nLWNhcnRfX3RvdGFsLXByaWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingCartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shopping-cart',
                templateUrl: './shopping-cart.component.html',
                styleUrls: ['./shopping-cart.component.scss'],
            }]
    }], function () { return [{ type: src_app_games_service__WEBPACK_IMPORTED_MODULE_1__["GamesService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/content.component */ "0btM");




class AppComponent {
    constructor() {
        this.title = 'gog-frontend-task';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-content");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/content.component */ "0btM");
/* harmony import */ var _content_small_spot_small_spot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/small-spot/small-spot.component */ "ZC2q");
/* harmony import */ var _content_big_spot_big_spot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/big-spot/big-spot.component */ "gx8+");
/* harmony import */ var _navbar_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/shopping-cart/shopping-cart.component */ "QqS5");
/* harmony import */ var _navbar_shopping_cart_shopping_cart_item_shopping_cart_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/shopping-cart/shopping-cart-item/shopping-cart-item.component */ "0p9w");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"], _content_small_spot_small_spot_component__WEBPACK_IMPORTED_MODULE_5__["SmallSpotComponent"], _content_big_spot_big_spot_component__WEBPACK_IMPORTED_MODULE_6__["BigSpotComponent"], _navbar_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartComponent"], _navbar_shopping_cart_shopping_cart_item_shopping_cart_item_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartItemComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"], _content_small_spot_small_spot_component__WEBPACK_IMPORTED_MODULE_5__["SmallSpotComponent"], _content_big_spot_big_spot_component__WEBPACK_IMPORTED_MODULE_6__["BigSpotComponent"], _navbar_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartComponent"], _navbar_shopping_cart_shopping_cart_item_shopping_cart_item_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartItemComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZC2q":
/*!************************************************************!*\
  !*** ./src/app/content/small-spot/small-spot.component.ts ***!
  \************************************************************/
/*! exports provided: SmallSpotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallSpotComponent", function() { return SmallSpotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_games_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/games.service */ "5knQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");




function SmallSpotComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-", ctx_r0.game.discount, "%");
} }
function SmallSpotComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SmallSpotComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onAddToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.inCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.inCart ? "IN CART" : "$" + ctx_r1.game.price);
} }
function SmallSpotComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OWNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SmallSpotComponent {
    constructor(gamesService) {
        this.gamesService = gamesService;
        this.owned = false;
        this.inCart = false;
        this.gamesInCart = [];
    }
    ngOnInit() {
        this.gamesInCart = this.gamesService.getShoppingCartList();
        this.subscription = this.gamesService.shoppingCartChanged.subscribe((games) => {
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
SmallSpotComponent.ɵfac = function SmallSpotComponent_Factory(t) { return new (t || SmallSpotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_games_service__WEBPACK_IMPORTED_MODULE_1__["GamesService"])); };
SmallSpotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SmallSpotComponent, selectors: [["app-small-spot"]], inputs: { game: "game" }, decls: 12, vars: 8, consts: [[1, "smallspot"], [1, "smallspot__game-cover"], ["target", "_blank", 3, "href"], ["loading", "lazy", 3, "src", "alt"], [1, "smallspot__game-data"], [1, "smallspot__game-title"], [1, "smallspot__buy-block"], ["class", "smallspot__discount", 4, "ngIf"], ["class", "smallspot__buy-button", 3, "disabled", "click", 4, "ngIf"], ["class", "smallspot__buy-button owned", "disabled", "", 4, "ngIf"], [1, "smallspot__discount"], [1, "smallspot__buy-button", 3, "disabled", "click"], ["disabled", "", 1, "smallspot__buy-button", "owned"]], template: function SmallSpotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SmallSpotComponent_div_9_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SmallSpotComponent_button_10_Template, 2, 2, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SmallSpotComponent_button_11_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.game.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.game.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.game.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.game.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.game.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.discount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.owned);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.owned);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".smallspot[_ngcontent-%COMP%] {\n  height: 186px;\n  max-width: 196px;\n}\n\n.smallspot__game-cover[_ngcontent-%COMP%] {\n  height: 110px;\n}\n\n.smallspot__game-data[_ngcontent-%COMP%] {\n  position: relative;\n  height: 66px;\n  padding: 10px;\n  background-color: #e0e0e0;\n}\n\n.smallspot__game-data[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n\n.smallspot__game-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 600;\n}\n\n.smallspot__buy-block[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  bottom: 6px;\n  right: 6px;\n}\n\n.smallspot__discount[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #f2f2f2;\n  font-size: 13px;\n  background: #00905e;\n  border-radius: 2px;\n  width: 42px;\n  height: 22px;\n  margin-right: 6px;\n}\n\n.smallspot__buy-button[_ngcontent-%COMP%] {\n  color: #404040;\n  height: 22px;\n  background: #e0e0e0;\n  border: 1px solid #979797;\n  box-shadow: 0px 1px 1px rgba(198, 198, 198, 0.5);\n  border-radius: 2px;\n  transition: all 0.3s;\n}\n\n.smallspot__buy-button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 2px 1px rgba(198, 198, 198, 0.2);\n  background: #eee;\n  cursor: pointer;\n}\n\n.smallspot__buy-button.owned[_ngcontent-%COMP%] {\n  border: 1px solid #979797;\n  color: #979797;\n}\n\n.smallspot__buy-button.owned[_ngcontent-%COMP%]:hover {\n  cursor: auto;\n  background: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbWFsbC1zcG90LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUNSOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBRUk7RUFDSSxnREFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFSOztBQUdJO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBRFI7O0FBR1E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFEWiIsImZpbGUiOiJzbWFsbC1zcG90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNtYWxsc3BvdCB7XHJcbiAgICBoZWlnaHQ6IDE4NnB4O1xyXG4gICAgbWF4LXdpZHRoOiAxOTZweDtcclxufVxyXG5cclxuLnNtYWxsc3BvdF9fZ2FtZS1jb3ZlciB7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG59XHJcblxyXG4uc21hbGxzcG90X19nYW1lLWRhdGEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA2NnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc21hbGxzcG90X19nYW1lLXRpdGxlIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uc21hbGxzcG90X19idXktYmxvY2sge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvdHRvbTogNnB4O1xyXG4gICAgcmlnaHQ6IDZweDtcclxufVxyXG5cclxuLnNtYWxsc3BvdF9fZGlzY291bnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwOTA1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbi5zbWFsbHNwb3RfX2J1eS1idXR0b24ge1xyXG4gICAgY29sb3I6ICM0MDQwNDA7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk3OTc5NztcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoMTk4LCAxOTgsIDE5OCwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMXB4IHJnYmEoMTk4LCAxOTgsIDE5OCwgMC4yKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmLm93bmVkIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1MSwgMTUxLCAxNTEsIDEpO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE1MSwgMTUxLCAxNTEsIDEpO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SmallSpotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-small-spot',
                templateUrl: './small-spot.component.html',
                styleUrls: ['./small-spot.component.scss'],
            }]
    }], function () { return [{ type: src_app_games_service__WEBPACK_IMPORTED_MODULE_1__["GamesService"] }]; }, { game: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "gx8+":
/*!********************************************************!*\
  !*** ./src/app/content/big-spot/big-spot.component.ts ***!
  \********************************************************/
/*! exports provided: BigSpotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigSpotComponent", function() { return BigSpotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_games_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/games.service */ "5knQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");




function BigSpotComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-", ctx_r0.game.discount, "%");
} }
function BigSpotComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BigSpotComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onAddToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.inCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.inCart ? "IN CART" : "$" + ctx_r1.game.price);
} }
function BigSpotComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OWNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BigSpotComponent {
    constructor(gamesService) {
        this.gamesService = gamesService;
        this.owned = false;
        this.inCart = false;
        this.gamesInCart = [];
    }
    ngOnInit() {
        this.gamesInCart = this.gamesService.getShoppingCartList();
        this.subscription = this.gamesService.shoppingCartChanged.subscribe((games) => {
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
    onSecretClick() {
        alert('Look at the console log');
        console.log('Look at the bottom of the DOM');
        document.title = 'Hello there';
    }
}
BigSpotComponent.ɵfac = function BigSpotComponent_Factory(t) { return new (t || BigSpotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_games_service__WEBPACK_IMPORTED_MODULE_1__["GamesService"])); };
BigSpotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BigSpotComponent, selectors: [["app-big-spot"]], inputs: { game: "game" }, decls: 13, vars: 7, consts: [[1, "bigspot"], [1, "bigspot__lazy"], ["loading", "lazy", 3, "src", "alt"], [1, "bigspot__overlay"], ["target", "_blank", 3, "href"], [1, "bigspot__title"], [1, "bigspot__buy-block"], ["class", "bigspot__discount", 4, "ngIf"], ["class", "bigspot__buy-button", 3, "disabled", "click", 4, "ngIf"], ["class", "bigspot__buy-button owned", "disabled", "", 4, "ngIf"], [1, "btn", "btn--secret", 3, "click"], [1, "bigspot__discount"], [1, "bigspot__buy-button", 3, "disabled", "click"], ["disabled", "", 1, "bigspot__buy-button", "owned"]], template: function BigSpotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BigSpotComponent_div_8_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BigSpotComponent_button_9_Template, 2, 2, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BigSpotComponent_button_10_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BigSpotComponent_Template_button_click_11_listener() { return ctx.onSecretClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "A secret button that I totally implemented");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.game.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.game.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.game.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.game.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.discount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.owned);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.owned);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".bigspot[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  height: 370px;\n  justify-content: center;\n  align-items: center;\n}\n\n.bigspot__lazy[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  z-index: 2;\n  height: 370px;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);\n}\n\n.bigspot__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 100%);\n  transition: all 0.3s;\n}\n\n.bigspot__overlay[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.bigspot__overlay[_ngcontent-%COMP%]   .bigspot__title[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 30px;\n  bottom: 0;\n  color: #fff;\n  font-family: Source Sans Pro Bold, \"Arial\", monospace;\n  font-size: 36px;\n  line-height: 36px;\n}\n\n.bigspot__overlay[_ngcontent-%COMP%]   .bigspot__buy-block[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  padding: 30px;\n  display: flex;\n}\n\n.bigspot__overlay[_ngcontent-%COMP%]   .bigspot__discount[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #f2f2f2;\n  font-size: 18px;\n  line-height: 20px;\n  background: #00905e;\n  border-radius: 2px;\n  margin-right: 6px;\n  padding: 5px;\n}\n\n.bigspot__overlay[_ngcontent-%COMP%]   .bigspot__buy-button[_ngcontent-%COMP%] {\n  color: #404040;\n  font-size: 18px;\n  line-height: 20px;\n  background: #e0e0e0;\n  border: 1px solid #979797;\n  box-shadow: 0px 1px 1px rgba(198, 198, 198, 0.5);\n  border-radius: 2px;\n  transition: all 0.3s;\n}\n\n.bigspot__overlay[_ngcontent-%COMP%]   .bigspot__buy-button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 2px 1px rgba(198, 198, 198, 0.2);\n  background: #eee;\n  cursor: pointer;\n}\n\n.bigspot__overlay[_ngcontent-%COMP%]   .bigspot__buy-button.owned[_ngcontent-%COMP%] {\n  border: 1px solid #979797;\n  color: #979797;\n}\n\n.bigspot__overlay[_ngcontent-%COMP%]   .bigspot__buy-button.owned[_ngcontent-%COMP%]:hover {\n  cursor: auto;\n  background: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxiaWctc3BvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlGQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFDSTtFQUNJLFVBQUE7QUFDUjs7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EscURBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBUjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQURSOztBQUlJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUZSOztBQUtJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFIUjs7QUFLUTtFQUNJLGdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSFo7O0FBTVE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFKWjs7QUFNWTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUpoQiIsImZpbGUiOiJiaWctc3BvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iaWdzcG90IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDM3MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYmlnc3BvdF9fbGF6eSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBoZWlnaHQ6IDM3MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4uYmlnc3BvdF9fb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNikgMCUsIHJnYmEoMCwgMCwgMCwgMC4yKSAxMDAlKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLmJpZ3Nwb3RfX3RpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFNvdXJjZSBTYW5zIFBybyBCb2xkLCBcIkFyaWFsXCIsIG1vbm9zcGFjZTtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJpZ3Nwb3RfX2J1eS1ibG9jayB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJpZ3Nwb3RfX2Rpc2NvdW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmMmYyZjI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDkwNWU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYmlnc3BvdF9fYnV5LWJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6ICM0MDQwNDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk3OTc5NztcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDE5OCwgMTk4LCAxOTgsIDAuNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggcmdiYSgxOTgsIDE5OCwgMTk4LCAwLjIpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLm93bmVkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTEsIDE1MSwgMTUxLCAxKTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTUxLCAxNTEsIDE1MSwgMSk7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BigSpotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-big-spot',
                templateUrl: './big-spot.component.html',
                styleUrls: ['./big-spot.component.scss'],
            }]
    }], function () { return [{ type: src_app_games_service__WEBPACK_IMPORTED_MODULE_1__["GamesService"] }]; }, { game: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _games_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../games.service */ "5knQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "QqS5");





const _c0 = function (a0) { return { "active": a0 }; };
class NavbarComponent {
    constructor(gamesService) {
        this.gamesService = gamesService;
        this.shoppingCart = [];
        this.shoppingCartOpen = false;
    }
    ngOnInit() {
        this.shoppingCartOpen = this.gamesService.toggleCart;
        this.cartOpenSubscription = this.gamesService.shoppingCartToggled.subscribe((toggled) => {
            this.shoppingCartOpen = toggled;
        });
        this.shoppingCart = this.gamesService.getShoppingCartList();
        this.subscription = this.gamesService.shoppingCartChanged.subscribe((gamesInCart) => {
            this.shoppingCart = gamesInCart;
            this.calculateItemsInCart();
        });
        this.calculateItemsInCart();
    }
    onToggleShoppingList() {
        this.gamesService.toggleShoppingCart();
    }
    calculateItemsInCart() {
        this.gamesInCartCount = this.shoppingCart.length;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.cartOpenSubscription.unsubscribe();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_games_service__WEBPACK_IMPORTED_MODULE_1__["GamesService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 11, vars: 4, consts: [[1, "navbar"], [1, "navbar__container"], ["href", "https://www.gog.com", 1, "navbar__logo"], ["src", "../../assets/images/Logo.png", "alt", "GOG Logo"], [1, "navbar__shopping-cart"], [3, "ngClass", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "17", "height", "15", "viewBox", "0 0 17 15", "fill", "none"], ["id", "Shape", "opacity", "0.851", "fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M16.52 1.577L14.97 1.515L12.841 10.285L12.363 11.009H3.11399L2.75199 10.285L0.937988 2.886L2.67699 2.778L4.37299 9.499H11.139L13.456 0.529L14.442 0L16.969 0.032L16.52 1.577ZM5.31299 7.625V7.25H10.437V7.625H5.31299ZM4.99999 5.219H10.875V5.594H4.99999V5.219ZM4.24999 3.188H11.437V3.563H4.24999V3.188ZM4.78799 12.035C5.60299 12.035 6.26299 12.698 6.26299 13.517C6.26299 14.336 5.60299 15 4.78799 15C3.97399 15 3.31399 14.336 3.31399 13.517C3.31399 12.698 3.97399 12.035 4.78799 12.035ZM10.93 12.035C11.744 12.035 12.404 12.698 12.404 13.517C12.404 14.336 11.744 15 10.93 15C10.115 15 9.45499 14.336 9.45499 13.517C9.45499 12.698 10.115 12.035 10.93 12.035Z", "fill", "#262626"], [1, "navbar__shopping-cart-counter"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_5_listener() { return ctx.onToggleShoppingList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-shopping-cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.shoppingCartOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gamesInCartCount);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartComponent"]], styles: [".navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  background: linear-gradient(360deg, rgba(220, 220, 220, 0.0001) 0%, rgba(255, 255, 255, 0.5) 93.45%, rgba(255, 255, 255, 0.49) 100%), #dedede;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15), 0px 0px 15px rgba(0, 0, 0, 0.15);\n  height: 59px;\n  width: 100%;\n  z-index: 99;\n}\n\n.navbar__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1060px;\n  margin: 0 auto;\n  padding: 0 20px;\n  height: 100%;\n}\n\n.navbar__logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.navbar__shopping-cart[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 58px;\n  cursor: pointer;\n}\n\n.navbar__shopping-cart[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.navbar__shopping-cart[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.navbar__shopping-cart[_ngcontent-%COMP%]   .navbar__shopping-cart-counter[_ngcontent-%COMP%] {\n  font-weight: 600;\n  height: 18px;\n  line-height: 17.6px;\n  margin-left: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSw2SUFBQTtFQU9BLDZFQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBTEo7O0FBUUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBTEo7O0FBUUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTEo7O0FBUUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBTEo7O0FBT0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTFI7O0FBUUk7RUFDSSxzQkFBQTtFQUNBLDBDQUFBO0FBTlI7O0FBU0k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBUFIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIDM2MGRlZyxcclxuICAgICAgICAgICAgcmdiYSgyMjAsIDIyMCwgMjIwLCAwLjAwMDEpIDAlLFxyXG4gICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgOTMuNDUlLFxyXG4gICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDkpIDEwMCVcclxuICAgICAgICApLFxyXG4gICAgICAgICNkZWRlZGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGhlaWdodDogNTlweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogOTk7XHJcbn1cclxuXHJcbi5uYXZiYXJfX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogMTA2MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5uYXZiYXJfX2xvZ28ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXZiYXJfX3Nob3BwaW5nLWNhcnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuXHJcbiAgICAubmF2YmFyX19zaG9wcGluZy1jYXJ0LWNvdW50ZXIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNy42cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss'],
            }]
    }], function () { return [{ type: _games_service__WEBPACK_IMPORTED_MODULE_1__["GamesService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map