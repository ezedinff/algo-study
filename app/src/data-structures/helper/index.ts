export abstract class Collection<T> {
    protected storage: T[] = [];
    constructor(protected capacity: number = Infinity) {}
    public size(): number {
        return this.storage.length;
    }
    public isFill() {
        if (this.capacity === Infinity) return false;
        return this.capacity === this.storage.length;
    }
}