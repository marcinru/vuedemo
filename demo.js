new Vue({
    el: '#app',
    data: {
        creditorNumber: 123456,
        invoices: []
    },
    methods: {
        addInvoice() {
            this.invoices.push({
                number: 123,
                text: 'description',
                date: '2018-05-02',
                duedate: '2018-05-22',
                currency: 'NOK',
                amount: 123.45,
                attachment: ''
            })
        },
        deleteInvoice() {
            this.invoices.pop()
        }
    }
})