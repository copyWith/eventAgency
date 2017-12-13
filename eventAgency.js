//第一个参数是事件源e  第二个参数是父级的id或者class，不需要加#或者.  第三个参数是需要绑定的事件
function eventAgency() {
    this.tier = arguments[0],this.parn = arguments[1],this.fn = arguments[2],this.ret;
    return new eventAgency.prototype.method(); 
}
eventAgency.prototype.method = function () {
    if(tier.className==parn) fn(tier);
    if(pare(tier,parn,"className")) fn(ret);
    if(tier.id==parn) fn(tier);
    if(pare(tier,parn,"id")) fn(ret);
};
function pare(elem,elemP,type){
		var cur = elem.parentNode;
		while ( cur && cur.nodeType !== 9) {
			if(cur[type]==elemP) {
				this.ret=cur
				return true
			}
			cur = cur.parentNode;
		}
}