var bill = 1500;

if( bill > 100 && bill < 500 ){
    var per = bill * 5/100 ;
    var total = bill - per
    console.log(bill,("totle bill,"),per,("discount,"),total,("you will pay"))
}else if( bill > 500 && bill < 1000 ){
    var per = bill * 10/100 ;
    var total = bill - per
    console.log(bill,("totle bill,"),per,("discount,"),total,("you will pay"))
}else if( bill > 1000 ){
    var per = bill * 15/100 ;
    var total = bill - per
    console.log(bill,"totle bill,",per,"discount,",total,"you will pay")
}
