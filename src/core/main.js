// =========================
// core/main.js
// =========================

import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

import { ProductsFeature } from '../features/products';
import { CartFeature } from '../features/cart';
import { WishlistFeature } from '../features/wishlist';
import { UserProfileFeature } from '../features/userProfile';
import { StatsFeature } from '../features/stats';
import { ActivityFeature } from '../features/activity';
import { LowStockFeature } from '../features/lowstock';

// =========================
// AppMain bootstrap
// =========================

export const AppMain = (function () {

    function init() {
        ProductsFeature.init();
        CartFeature.init();
        WishlistFeature.init();

        StatsFeature.init(); // bekijken
        UserProfileFeature.init();  // bekijken

        ActivityFeature.init();
        LowStockFeature.init();  // nieuw
    }

    return {
        init
    };

})();

// =========================
// Start app wanneer DOM geladen is
// =========================

document.addEventListener('DOMContentLoaded', () => {
    AppMain.init();
});
