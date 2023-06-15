var MyQueue = function() {
    this.input = [];
    this.output = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while (this.output.length > 0) {
        this.input.push(this.output.pop());
    }
    this.input.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while (this.input.length > 0) {
        this.output.push(this.input.pop());
    }
    const popItem = this.output.pop();
    return popItem;
}
/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.input.length !== 0) {
        return this.input[0];
    }
    if (this.output.length !== 0) {
        return this.output[this.output.length - 1];
    }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.input.length === 0 && this.output.length === 0 ? true : false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */