export default class Document{
    constructor(header, footer, pages, text) {
        this.footer = footer;
        this.header = header;
        this.pages = pages;
        this.text = text;
    }

    GetAll() {
        console.log(`footer :${this.footer}`)
        console.log(` pages :${this.pages}`)
        console.log(` text  :${this.text}`)
        console.log(`header :${this.header}`)
    }

    clone() {
        return new Document(this.header, this.footer, this.pages, this.text);
    }
}




