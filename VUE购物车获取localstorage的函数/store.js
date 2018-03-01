export default {
    getAllCarts(){
        //获取localStorage
        var result = localStorage.getItem("cartinfo");
        // 返回字符串或者空数组
        result = result ? JSON.parse(result) : [];
        return result;
    },
    getCartsInfo(id){
        var carts = this.getAllCarts();
        // 进行id比对 如果成功就返回有的数组，没有就返回none
        var temp = carts.filter(v => {
            return v.id == id;
        })

        temp = temp.length > 0 ? temp[0] : null;
        return temp;
    },
    getAllCount(){
        // 遍历相同的值，有值就相加
        var carts = this.getAllCarts();
        var result = 0;
        carts.forEach(v => result += v.count);
        return result;
    },
    addToCarts(cart){
        var carts = this.getAllCarts();

        //判断之前的数组里是否有和当前商品id相同的购物车对象
        var temp = carts.filter(v => {
            return v.id == cart.id;
        })
        //如果有的话
        if(temp.length > 0){
            temp[0].count += cart.count;
        }else{
            //如果没有的话
            carts.push(cart)
        }

        //将更新后的数组转成字符串重新存储到localstorage中去
        localStorage.setItem("cartinfo", JSON.stringify(carts));
    }
}