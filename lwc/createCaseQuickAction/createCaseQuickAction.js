import { LightningElement, api, wire } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin, CurrentPageReference  } from 'lightning/navigation';
import createCaseLabel from '@salesforce/label/c.ocfs_Create_Case';
import newCaseLabel from '@salesforce/label/c.ocfs_New_Case';
import saveLabel from '@salesforce/label/c.ocfs_Save';
import cancelLabel from '@salesforce/label/c.ocfs_Cancel';
import AGENCY_FIELD from '@salesforce/schema/Case.Agency__c';
import LINE_OF_BUSINESS_FIELD from '@salesforce/schema/Case.Line_of_Business__c';
import VERIZON_CONTACT_ID_FIELD from '@salesforce/schema/Case.Verizon_Contact_Id__c';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Case.AccountId';
export default class CreateCaseQuickAction extends NavigationMixin(LightningElement) {

    _recordId;
    @api objectApiName;
    label = {
        createCaseLabel,
        newCaseLabel,
        saveLabel,
        cancelLabel
    };

    @wire(CurrentPageReference)
    getStateParameters(currentPageReference) {
        if (currentPageReference) {
            this._recordId = currentPageReference.state.recordId;
        }
    }

    @wire(getRecord, { recordId: '$_recordId', fields: [AGENCY_FIELD, LINE_OF_BUSINESS_FIELD, VERIZON_CONTACT_ID_FIELD, ACCOUNT_NAME_FIELD] })
    case;

    get agency() {
        return getFieldValue(this.case.data, AGENCY_FIELD);
    }

    get lineOfBusiness() {
        return getFieldValue(this.case.data, LINE_OF_BUSINESS_FIELD);
    }

    get verizonContactId() {
        return getFieldValue(this.case.data, VERIZON_CONTACT_ID_FIELD);
    }

    get accountName(){
        return getFieldValue(this.case.data, ACCOUNT_NAME_FIELD);
    }

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: this.label.createCaseLabel.replace('{0}',event.detail.fields.CaseNumber.value),
            variant: 'success',
        });
        this.dispatchEvent(new CloseActionScreenEvent());
        this.dispatchEvent(evt);
        this.navigateToRecordPage(event.detail.id)
    }


    navigateToRecordPage(caseId) {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: caseId,
                objectApiName: 'Case',
                actionName: 'view'
            }
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const fields = event.detail.fields;
        fields.AccountId = this.accountName;
        fields.Verizon_Contact_Id__c = this.verizonContactId;
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

    handleCancel(){
        this.dispatchEvent(new CloseActionScreenEvent());
    }
}