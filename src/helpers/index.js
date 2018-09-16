export * from './App';

String.prototype.modify = function() {
  return this.replace(/\(/gi, '<').replace(/\)/gi, '>'); 
};