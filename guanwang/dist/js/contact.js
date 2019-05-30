$(function(){

    $('#button').on('click',function(){
        // window.event.cancelBubble=true;
        console.log($('#name').val())

        var name = $('#name').val()
        var phone = $('#phone').val()
        var demand = $('#demand').val()
        if(name!="" && phone!="" && demand!=""){
            $.ajax({
                type:"post",
                url:"http://192.168.1.3:3000/user/regiser",
                data:$('#form1').serialize(),
                success:function(data){
                    console.log("aaaa"+data)
                    alert("成功")
                    return false
                },
                error:function(){
                    console.log("失败")
                    return false
                }

            })
        }else{
            window.location.href="./weixin.html";
        }






    })
})
