import { Quote } from './../../data/quote.interface';
import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
@Component({
    selector: 'page-quotes',
    templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit{
    quoteGroup: {category: string, quotes: Quote[], icon: string};

    constructor(
        private navParams: NavParams,
        private alertCtrl: AlertController
    ){}

    ngOnInit(){
        this.quoteGroup = this.navParams.data;  
        console.log(this.quoteGroup.category);
    }

    onAddToFavorite(selectedQuote: Quote){
        const alert = this.alertCtrl.create({
            title: 'Add Quote',
            subTitle: 'Are you sure?',
            message: 'Are you sure you want to add the quote to favorites?',
            buttons: [{
                text: 'Yes, go ahead',
                handler: () => {
                    console.log('OK');
                }
            },
            {
                text: 'No, I changed my mind!',
                role: 'cancel',
                handler: () => {
                    console.log('NO');
                }
            }
        ]
        });

        alert.present();
    }
}