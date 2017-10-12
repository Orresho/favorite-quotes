import { Quote } from './../data/quote.interface';
export class QuotesService {
    private favoriteQuotes: Quote[] = []

    addQuoteToFavorites(quote: Quote){
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    removeQuoteFromFavorites(quote: Quote){
        const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
        this.favoriteQuotes.splice(position, 1);
    }

    getFavoriteQuotes(){ 
        // slice method returns a copy of the array, meaning that when we edit the array
        // we dont edit the original but rather the copy we recieved
        return this.favoriteQuotes.slice();
    }
}