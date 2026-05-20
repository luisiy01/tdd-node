describe('suma', () => {
  describe('Prueba', () => {
    it('suma 2 numeros', () => {
      const suma = (a, b) => {
        return a + b;
      };

      expect(suma(1, 2)).toEqual(3);
    });
  });
});
