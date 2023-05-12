import { LightningElement } from 'lwc';
import ACCOUNT from '@salesforce/schema/Account'
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'
import ACCOUNT_REVENUE from '@salesforce/schema/Account.AnnualRevenue'
import ACCOUNT_RATING from '@salesforce/schema/Account.Rating'
import ACCOUNT_WEBSITE from '@salesforce/schema/Account.Website'

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordEditForm extends LightningElement {
    objectName = ACCOUNT
    fieldList = [ACCOUNT_NAME, ACCOUNT_REVENUE, ACCOUNT_RATING, ACCOUNT_WEBSITE]

    successHandler(event){
        console.log(event.detail.id)
        const toastEvent = new ShowToastEvent({
            title: "Account Created",
            message: "Record Id: " + event.detail.id,
            variant: "success"
        })
        this.dispatchEvent(toastEvent)
    }
}