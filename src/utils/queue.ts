export class Queue{
    private queue: any = [];
    private isProcessing = false;

    constructor(){
    }

    addFn(fn: Function): void {
      if (typeof fn !== 'function') return;
      this.queue.push(fn);
      this.dequeueFn()
    }


    async dequeueFn():Promise<void>{
      if (this.isProcessing || this.queue.length === 0) {
        return;
      }
      this.isProcessing = true;
      const task = this.queue.shift();
      await task();
      this.isProcessing = false;
      await this.dequeueFn()
    }
  }