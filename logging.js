const defaultLog = console.log;

const log = function(...args){
  args.splice(0,0,"[client]")
  DefaultLog.apply(this,args);
}
window.log = log;
