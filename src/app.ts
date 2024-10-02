export class Cart {
    private items: Array<{ id: number, price: number }> = [];
  
    public addItem(item: { id: number, price: number }): void {
      this.items.push(item);
    }
  
    public getItems(): Array<{ id: number, price: number }> {
      return this.items;
    }
  
    public calculateTotalCost(): number {
      return this.items.reduce((acc, item) => acc + item.price, 0);
    }
  
    public calculateTotalCostWithDiscount(discount: number): number {
      return this.calculateTotalCost() * (1 - discount / 100);
    }
  
    public removeItemById(id: number): void {
      this.items = this.items.filter(item => item.id !== id);
    }
  }