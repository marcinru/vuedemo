var date = new Date()
var today = date.toLocaleDateString('nb-NO')
date.setDate(date.getDate() + 14)
var inTwoWeeks = date.toLocaleDateString('nb-NO')

new Vue({
    el: '#app',
    data: {
        creditorNumber: 123456,
        number: '',
        text: '',
        date: today,
        duedate: inTwoWeeks,
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
        resetFileInput() {
            document.getElementById('invoiceAttachment').value = ''
        },
        resetForm() {
            this.number = '';
            this.text = '';
            this.date = today;
            this.duedate = inTwoWeeks;
            this.currency = 'NOK';
            this.amount = 0;
            this.attachment = '';
        }
    }
})