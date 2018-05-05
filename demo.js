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
        invoices: [],
        id: 0
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
        attachFile() {
            var files = document.getElementById('attachment').files
            if (files.length > 0) {
                this.attachment = files[0].name
            }
        },
        attachFileToInvoice() {
            var files = document.getElementById('invoiceAttachment').files
            if (files.length > 0) {
                this.invoices[this.id].attachment = files[0].name
            }
        },
        deleteFile() {
            this.attachment = ''
        },
        resetInput() {
            document.getElementById('attachment').value = ''
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