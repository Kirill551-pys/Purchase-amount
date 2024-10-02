    import { Cart } from './app.ts'

    describe('Cart', () => {
    let cart: Cart;
  
    beforeEach(() => {
      cart = new Cart();
    });
  
    it('рассчитываем общую стоимость', () => {
      cart.addItem({ id: 1, price: 10 });
      cart.addItem({ id: 2, price: 20 });
      expect(cart.calculateTotalCost()).toBe(30);
    });
  
    it('рассчитываем общую стоимость со скидкой', () => {
      cart.addItem({ id: 1, price: 10 });
      cart.addItem({ id: 2, price: 20 });
      expect(cart.calculateTotalCostWithDiscount(10)).toBe(27);
    });
  
    it('удаляем элемент по идентификатору', () => {
      cart.addItem({ id: 1, price: 10 });
      cart.addItem({ id: 2, price: 20 });
      cart.removeItemById(1);
      expect(cart.getItems()).toEqual([{ id: 2, price: 20 }]);
    });
  });