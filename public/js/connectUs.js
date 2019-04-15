//获得表单对象: 
var form=document.forms[0];
var myName=form.uname;
var myEmail=form.email;
var myPhone=form.phone;
var myTitle=form.title;
var myContent=form.content;
myName.onfocus=getFocus;
myEmail.onfocus=getFocus;
myPhone.onfocus=getFocus;
myTitle.onfocus=getFocus;
myContent.onfocus=getFocus;

function getFocus(){
    //this->当前文本框
    //当前文本框边框加粗
    this.className="txt_focus";
    //清除旁边span的class
    var span=this.parentNode
        .nextElementSibling
        .firstElementChild;
        console.log(span)
    span.className="";
  }
  myName.onblur=function(){
    vali(this,/^\w{1,10}$/);
  }
  function vali(txt,reg){
    //清除当前文本框的class
    span.className="";
    //获取旁边span
    var span=txt.parentNode
      .nextElementSibling
      .firstElementChild;
    //用reg测试当前文本框的内容
    //如果通过,就修改span的class为vali_success
    if(reg.test(txt.value)){
     span.className="vali_success";
      return true;
    }
    //否则修改span的class为vali_fail
    else{
      span.className="vali_fail";
      return false;
    }
  }
  myEmail.onblur=function(){
    vali(this, /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/);
  }
  myPhone.onblur=function(){
    vali(this, /^[1][3,4,5,7,8][0-9]{9}$/);
  }
  myTitle.onblur=function(){
    vali(this,/^(?:[A-Z][^\s]*\s?)+$/);
  }
  myContent.onblur=function(){
    vali(this,/^[\u4e00-\u9fa5],{0,}$/);
  }
  //<input type="submit">
  form.onsubmit=function(e){
    var rName=vali(myaName,/^\w{1,10}$/);
    var rEmail=vali(myEmail, /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/);
    var rPhone=vali(myPhone,/^[1][3,4,5,7,8][0-9]{9}$/);
    var rTitle=vali(myTitle,/^(?:[A-Z][^\s]*\s?)+$/);
    var rContent=vali(myContent,/^[\u4e00-\u9fa5],{0,}$/);
     //如果不都为true
     if(!(rName==true&&rEmail==true&&rPhone==true&&rTitle==true&&rContent==true))
     e.preventDefault();
  }