function fn_ValForm(){
    let email=document.getElementById("email").value;
    let regex=/^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[az0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
    var sMsg="";
    
    if(document.getElementById("name").value==""){
        sMsg+="\n* Anda belum mengisikan nama";
    }
    // if(document.getElementById("email").value==""){
    //     sMsg+="\n* Anda belum mengisikan email";
    // }
    if(!email){
        sMsg+="\n* Anda belum mengisikan email";
    }
    if(!regex.test(email)){
        sMsg+="\n* Anda belum mengisikan email dengan benar";
    }
    if(document.getElementById("message").value==""){
        sMsg+="\n* Anda belum mengisikan pesan";
    }
    if(sMsg!=""){
        alert("Peringatan:\n"+sMsg);
        return false;
    }else{
        return true;
    }
}