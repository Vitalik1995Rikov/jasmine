window.Computer = {
    currentMemoryGBs: 2,
    addMemory: function(memory) {
        this.currentMemoryGBs += memory;
        return this.currentMemoryGBs;
    }
}