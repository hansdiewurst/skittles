const log = console.log;

console.log = function(...args){
  args.unshift("[client]")
	return log.apply(this, args)
}
