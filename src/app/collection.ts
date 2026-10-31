class Collection<T> {
  private source: T[];

  constructor(initialSource: T[]) {
    this.source = initialSource;
  }
  public getAllElementsCollection(): T[] {
    return this.source;
  }

  public getSpecificElementCollection(index: number): T | undefined {
    return this.source[index];
  }

  public clearCollection(): void {
    this.source = [];
  }

  public removeSpecificElementCollection(index: number): void {
    this.source.splice(index, 1);
  }

  public replaceSpecificElementCollection(index: number, newItem: T): void {
    this.source.splice(index, 1, newItem);
  }
}

const people: string[] = ['Хаким', 'Усман', 'АбдурРахман', 'Юсуф', 'Сулейман'];
const stringCollection = new Collection<string>(people);

const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const numberCollection = new Collection<number>(numbers);