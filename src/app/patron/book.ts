import { Patron } from "./patron";

export interface Book {
    bookId: number;
    bookIsbn13: string;
    bookIsbn10: string;
    bookTitle: string;
    bookAuthor: string;
    bookPublisher: string;
    bookPublishYear: number;
    bookGenre: string;
    //patrons: Patron[];
}
