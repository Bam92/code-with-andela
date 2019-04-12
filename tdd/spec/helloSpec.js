describe('Hello', function() {
   it('says hello', function() {
      expect(hello()).toEqual('Hello, world!');
   });
   
   it('says hello to someone', function() {
      expect(hello('Abel')).toEqual('Hello, Abel!');
   });
});