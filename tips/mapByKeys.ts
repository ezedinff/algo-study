interface Item <T = any> {
    [key: string]: T;
}

interface ItemGroup <T> {
    [key: string]: T[];
}

function mapByKey<T extends Item>(array: T[], key: keyof T) {
    return array.reduce((map, item) => ({...map, [item[key]]: item}), {});
}

function groupBy<T extends Item>(array: T[], key: keyof T) {
    return array.reduce<ItemGroup<T>>((map, item) => {
        const itemKey = item[key];
        if(map[itemKey]) {
            map[itemKey].push(item);
        } else {
            map[itemKey] = [item];
        }
        return map
    }, {})
}
function merge<T extends Item>(a: T, b: T) {
    return  {...a, ...b};
}

type ValueGetter<T = any>  = (item: T) => string | number;
type SortingOrder = "asc" | "dsc";
function sort<T extends Item>(array: T[], key: ValueGetter<T>, order: SortingOrder) {
    if (order === "asc") {
        return [...array].sort((a, b) => key(a) > key(b) ? 1 : -1);
    }
    return [...array].sort((a, b) => key(a) > key(b) ? -1 : 1);
}
interface Book {
    id: number;
    author: string;
    name: string;
}
const books: Book[] = [
    { id: 1, author: "A", name: "567" },
    { id: 2, author: "A", name: "Hamlet" }
]
const s = mapByKey(books, "id");
const t = groupBy(books, "author");
const u = sort(books, (item) => item.id, "asc");
console.log(s, t, u);


// omit<T, K> pick all from T and remove k
// drops keys of T specified in k
type BookDTO = Omit<Book, "id">;
const booksDTO = books.map<BookDTO>((book) => book as BookDTO);


/// Pick is the opposite of omit
type BookDto = Pick<Book, "name" | "author">;
console.log(booksDTO);


/// Partial makes all properties optional
const updateBook = (book: Book, update: Partial<Book>) => {
    return {...book, ...update};
}

// Readonly<T> makes the data immutable, which means it won't be updated or changed

// Record<key, value> which used to constrain keys
type Ceil = string;
interface Row {
    [key: string]: Ceil;
}
type BookRow = Record<keyof Book, Ceil>;

