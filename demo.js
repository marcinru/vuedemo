new Vue({
    el: '#app',
    data: {
        creditorNumber: '',
        number: '',
        text: '',
        date: '',
        duedate: '',
        currency: 'NOK',
        amount: 0,
        attachment: '',
        invoices: []
    },
    methods: {
        addInvoice() {
            this.invoices.push({
                number: this.number,
                text: this.text,
                date: this.date,
                duedate: this.duedate,
                currency: this.currency,
                amount: this.amount,
                attachment: this.attachment
            });
            this.resetForm();
        },
        deleteInvoice() {
            this.invoices.pop()
        },
        resetForm() {
            this.creditorNumber = '';
            this.number = '';
            this.text = '';
            this.date = '';
            this.duedate = '';
            this.currency = 'NOK';
            this.amount = 0;
            this.attachment = '';
        }
    }
})