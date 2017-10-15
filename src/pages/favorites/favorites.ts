import { QuotePage } from './../quote/quote';
import { QuotesService } from './../../services/quotes';
import { Quote } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html'
})
export class FavoritesPage {
    quotes: Quote[];

    constructor(
        private quotesService: QuotesService,
        private modalCtrl: ModalController){}

    ionViewWillEnter(){
        this.quotes = this.quotesService.getFavoriteQuotes();
    }

    // Open the modal
    onViewQuote(quote: Quote){
        const modal = this.modalCtrl.create(QuotePage, quote);
        modal.present();
        modal.onDidDismiss((remove: boolean) => {
            if(remove){
                this.onDeleteQuoteFromFavorites(quote);
            }
        });
    }

    onDeleteQuoteFromFavorites(quote: Quote){
        this.quotesService.removeQuoteFromFavorites(quote);
        const position = this.quotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
        this.quotes.splice(position,1);

    }


}