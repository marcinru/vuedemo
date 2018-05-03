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
            })
        },
        deleteInvoice() {
            this.invoices.pop()
        },
        resetForm() {
            //
        }
    }
})