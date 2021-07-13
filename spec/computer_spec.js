describe('Компьютер', function() {
    it('должен показывать текущее количество памяти', function () {
        expect(Computer.currentMemoryGBs).toBeDefined();
    });
    
    it('должен иметь возможность увеличить свою оперативную память', function () {
        expect(Computer.addMemory(6)).toEqual(8)
    })
});