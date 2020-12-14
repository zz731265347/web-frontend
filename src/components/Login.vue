<template>
<div id="login">

    <div id="divbody">

    	<div class = "contine-box">
          <div style="text-align: center">
          <span class="text1" style="ceb">  XX运营管理网站</span>
          </div>
    		<div class="login-box">

    			<h2>登录</h2>
    			<form>
    				<div class="login-field">
    					<input type="text" name="" v-model="userName" required=""  />
    					<label>用户名</label>
    				</div>
    				<div class="login-field">
    					<input type="password" name=""  v-model="password" required="" />
    					<label >密码</label>
    				</div>
    				<!-- <div class="login-field" style="width: 120px">
    					<input type="password" name="" required="" />
    					<label >验证码</label>
    				</div> -->
    				<button type="button"  v-on:click="login">登录</button>
    			</form>
    		</div>

    	</div>

     </div>
    <!-- 	</div> -->
 </div>
</template>

<script>
  /* import md5 from 'js-md5';
  import store from '../store' */
  export default {
    watch: {
      '$route' (to, from) {
        console.log(to, from)
      }
    },
    data: function () {
      return {
        userName: '',
        password: '',
        pwdd1: '',
        err:''
      }
    },
    computed: {
      // 计算属性的 getter
     /* err: function () {
        if (store.state.authenErr !== '') {
          return store.state.authenErr
        }
      } */
    },
    methods: {

      login: function (event) {
        // `this` 在方法里指当前 Vue 实例
        console.log("---"+this.userName + "---" + this.password)

        if (this.userName ==='' ||this.password ==='') {
          this.$Message.error('请输入用户名密码 ！');

        	return
        }

        var params =  {userName: this.userName, password: this.password}
        let vmself = this
        this.$store.dispatch('onAuthening', true)

        var promise = vmself.$http.httpPost(vmself.$http.apiUrl.Login,params)
        console.log(promise)
        promise.then(function (result) {
          console.log("---"+result.code)
          vmself.$store.dispatch('onAuthening', false)
          if (result.code !== '200') {
             vmself.$Message.error( result.msg);
          } else {
            vmself.$store.commit('updateToken',result.token)
            vmself.$store.commit('updateUserID',"zz")
             vmself.$router.push('index/user/userList')

          }
        }, function (value) {
          console.log(promise)
          vmself.$store.dispatch('onAuthening', false)
          store.dispatch('onAddAuthenERR', '服务内部错误，请稍后再试')
          // vmself.err = '服务内部错误，请稍后再试'
        })
      }
    }
  }

</script>

<style>
   body{
  	margin: 0;
  	padding: 0;
  	font-family: sans-serif;
  	background: url(../assets/index.jpg)  no-repeat center 0px;
  	background-size: cover;

       background-position: center 0;
       background-repeat: no-repeat;
       background-attachment: fixed;
        -webkit-background-size: cover;
        -o-background-size: cover;
        -moz-background-size: cover;
        -ms-background-size: cover;

  }







  .contine-box{
  	position: absolute;
  	top: 50%;
  	left: 50%;
  	transform: translate(-50%,-50%);
  	width: 500px;
    height: 650px;


  }
  .text1 {

  	position: relative;
  	margin: 0 0 30px;
    font-family: "Microsoft YaHei";
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    transform: translate(50%,-50%);
    text-align: center;
  }

  .login-box{
  	position: absolute;
  	top: 50%;
  	left: 50%;
  	transform: translate(-50%,-50%);
  	width: 500px;
  	padding:60px;
  	background: rgba(0,0,0,.8);
  	box-sizing: border-box;
  	box-shadow: 0 15px  25px rgba(0,0,0,.5);
  	border-radius: 10px;
  }
  .login-box h2{
  	margin: 0 0 30px;
  	padding: 0;
  	text-align: center;
  	color: #fff;
  }
  .login-box .login-field{
  	position: relative;
  }
  .login-box .login-field  input{
  	width: 100%;
  	padding: 10px 0;
  	font-size: 16px;
  	color: #fff;
  	margin-bottom: 30px;
  	border: none;
  	border-bottom: 1px solid #fff;
  	outline: none;
  	background: transparent;
  }
  .login-box .login-field  label{
  	position: absolute;
  	top: 0;
  	left: 0;
  	letter-spacing: 1px;
  	padding: 10px 0;
  	font-size: 16px;
  	color: #fff;
  	pointer-events: none;
  	transition: .5s;
  }
  input[required]:invalid, input:focus:invalid {box-shadow: none;}
  .login-box .login-field input:focus ~ label,
  .login-box .login-field input:valid ~ label{
  	top: -23px;
  	left: 0;
  	color: aqua;
  	font-size: 12px;
  }
  .login-box button{
  	background: transparent;
  	border: none;
  	outline: none;
  	color: #fff;
  	background: #03a9f4;
  	padding: 10px 20px;
  	cursor: pointer;
  	border-radius: 5px;
  }
</style>
