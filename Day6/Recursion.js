///////

































function fun (num){

    //Base condition
    if(num==0) return

    console.log(num)
    num = num-1;
    fun(num)

}
a=5;
fun(a)