// 节流函数
export default class Util{
    static throttle(fn, delay){
        let last, timer = null;
        return function(arg){
            let now = +new Date();
            let _this = this;
            if(last && (now - last) < delay){
                clearTimeout(timer)
                timer = setTimeout(function(){
                    last = now;
                    fn.call(_this, arg)
                }, delay)
            }else{
                last = now;
                fn.call(_this, arg)
            }
        }
    }
}
