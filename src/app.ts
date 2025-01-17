/* eslint-disable no-redeclare */

import { Category } from './enums';
import { Author, Book, Librarian, Logger, Magazine } from './interfaces';
import { ReferenceItem, UL, RefBook, Shelf } from './classes';
import {
    createCustomer,
    getAllBooks,
    getBooksByCategory,
    getBooksByCategoryPromise,
    getProperty,
    logCategorySearch,
    logSearchResults,
    printRefBook,
    purge,
} from './functions';
import type { Library } from './classes/library';
import Encyclopedia from './classes/encyclopedia';
import { BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from './types';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

//=============================================================================
// Task 02.01
//logFirstAvailable(getAllBooks());
//logBookTitles(getBookTitlesByCategory(Category.JavaScript));
//console.log(getBookAuthorByIndex(1));
//calcTotalPages();
//=============================================================================
// Task 02.02
//=============================================================================
// Task 03.01
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id}-${name}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Boris', 20));
//=============================================================================
// Task 03.02
// createCustomer('Ann');
// createCustomer('Ann', 33);
// createCustomer('Ann', 33, 'St Pete');
// console.log(getBookTitlesByCategory());
// logFirstAvailable();
// getBookByID(1);
// const myBooks = сheckoutBooks('Ann', ...[1, 2, 4]);
// console.log(myBooks);
//=============================================================================
// Task 03.03
// console.log(getTitles('Lea Verou'));
// console.log(getTitles(false));
// console.log(getTitles(4, true));
// const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);
//=============================================================================
// Task 03.04
// console.log(bookTitleTransform('TypeScript'));
// console.log(bookTitleTransform(123));
//=============================================================================
// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
//     // year: 2015,
//     // copies: 3,
// };
// printBook(myBook);
// myBook.markDamaged('missing book cover');
//=============================================================================
// Task 04.02
// const logDamage: Logger = (p: string) => console.log(`Damaged: ${p}`);
// logDamage('missing book cover');
//=============================================================================
// Task 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@mail.com',
//     numBooksPublished: 3,
// };
// const favoriteLibrarian: Librarian = {
//     name: 'Anna',
//     email: 'anna@mail.com',
//     department: 'Classical Literature',
//     assistCustomer: (name: string) => console.log(name),
// };
//=============================================================================
// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);
//=============================================================================
// Task 04.05
// const book = getAllBooks()[0];
// console.log(getProperty(book, 'title'));
// console.log(getProperty(book, 'markDamaged'));
// console.log(getProperty(book, 'isbn'));
//=============================================================================
// Task 05.01
// const ref: ReferenceItem = new ReferenceItem(1, 'Learn TypeScript', 2021);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc group';
// console.log(ref.publisher);
// console.log(ref.getID());
//=============================================================================
// Task 05.02
// Task 05.03
// Task 06.03
// const refBook: Encyclopedia = new Encyclopedia(1, 'Learn TypeScript', 2021, 3);
// console.log(refBook);
// refBook.printItem();
// printRefBook(refBook);
// printRefBook(1);
// refBook.printCitation();
//=============================================================================
// Task 05.04
// Task 06.03
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');
// console.log(favoriteLibrarian);
// printRefBook(favoriteLibrarian);
//=============================================================================
// Task 05.05
// const pBook: PersonBook = {
//     id: 1,
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'anna@mail.com',
//     name: 'Anna',
//     title: 'Learn TypeScript and React',
// };
// console.log(pBook);
//=============================================================================
// Task 06.05
// const flag = true;
// let module;
// if (flag) {
//     //module = await import('./classes');
//     import('./classes').then(mod => {
//         const reader = new module.Reader();
//         reader.name = 'Anna';
//         reader.take(getAllBooks()[0]);
//         console.log(reader);
//     });

//     // const reader = new module.Reader();
//     // reader.name = 'Anna';
//     // reader.take(getAllBooks()[0]);
//     // console.log(reader);
// }
// console.log(module);
//=============================================================================
// Task 06.06
// const lib: Library = new Library();
// const lib: Library = {
//     id: 1,
//     name: 'Anna',
//     address: 'StPete,...',
// };
// console.log(lib);
//=============================================================================
// Task 07.01
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
// ];
// const books = purge<Book>(inventory);
// console.log(books);
// const ns = purge([1, 2, 3, 4]);
// console.log(ns);
//=============================================================================
// Task 07.02
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);
// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);
//=============================================================================
// Task 07.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));
// //const result = getProperty<Book, 'title'>(getAllBooks()[0], 'title');
// const result = getProperty(getAllBooks()[0], 'isbn');
// console.log(result);
//=============================================================================
// Task 07.04
// const book: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.CSS,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'Unknown',
// };
// const book2: UpdatedBook = {
//     id: 1,
//     title: 'Learn TypesScript',
// };
// const args: Parameters<СreateCustomerFunctionType> = ['Anna'];
// createCustomer(...args);
//=============================================================================
// Task 08.01
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// UL.UniversityLibrarian['a'] = 1;
// UL.UniversityLibrarian.prototype['a'] = 1;
//=============================================================================
// Task 08.02
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// obj.name = 'Boris';
// obj.assistCustomer('Anna');
// obj['printLibrarian']();
//=============================================================================
// Task 08.03
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// obj.assistFaculty = null;
// console.log(obj);
// obj.teachCommunity = null;
//=============================================================================
// Task 08.04
// const refBook: Encyclopedia = new Encyclopedia(1, 'Learn TypeScript', 2021, 3);
// refBook.printItem();
//=============================================================================
// Task 08.05
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// obj.assistCustomer('Boris');
//=============================================================================
// Task 08.06
// const obj = new UL.UniversityLibrarian();
// obj.name = 'Anna';
// console.log(obj);
// obj.assistCustomer('Boris');
//=============================================================================
// Task 08.07
// const refBook: Encyclopedia = new Encyclopedia(1, 'Learn TypeScript', 2021, 3);
// //refBook.copies = -10;
// //refBook.copies = 0;
// //refBook.copies = 4.5;
// refBook.copies = 5;
// console.log(refBook);
//=============================================================================
// Task 09.01
// console.log('Start');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');
//=============================================================================
// Task 09.02
// console.log('Start');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(numberOfBooks => {
//         console.log(numberOfBooks);
//     })
//     .catch(reason => console.log(reason))
//     .finally(() => console.log('Complete'));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason))
//     .finally(() => console.log('Complete'));
// console.log('End');
//=============================================================================
// Task 09.03
// console.log('Begin');
// const p = logSearchResults(Category.JavaScript).catch(console.log);
// console.log('End');
// p.then(console.log).catch(console.log);
