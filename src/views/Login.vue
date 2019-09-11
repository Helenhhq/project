<template>
  <div class="login">
    <form>
      <label><strong>人事后台管理系统</strong></label><br>
      <label class="login-label">登录</label><br>
      <input type="text" name="username" placeholder="请输入用户名"><br>
      <input type="password" name="password" placeholder="请输入密码"><br>
      <input class="idcard" type="radio" name="idcard" id="idcard1" checked /><label class="lab" for="idcard1">普通用户</label>
      <input class="idcard" type="radio" name="idcard" id="idcard2" /><label class="lab" for="idcard2">管理员</label>
      <el-button type="primary" class="btn-login">登录</el-button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'login',
  components: {
    
  }
}
</script>

<style lang="less" scoped>
  .login{
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 167px 0;
    background: url(../assets/bg.jpg);
    background-size: cover;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    form{
      width: 400px;
      height: 400px;
      border-radius: 4px;
      overflow: hidden;
      color: #fff;
      background: rgba(255,255,255,.2);
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      label{
        display: inline-block;
        margin-top: 40px;
        letter-spacing: 4px;
        font-size: 30px;
        color: #fff;
      }
      .login-label{
        margin-top: 15px;
        color: #eee;
      }
      input{
        width: 360px;
        height: 40px;
        margin-top: 30px;
        box-sizing: border-box;
        padding-left: 20px;
        border-radius: 4px;
        border: 0;
        color: #fff;
        background-color: rgba(255,255,255,.2);
        &:focus{
          outline:none;
          box-shadow: 0px 0px 4px 0 rgba(255,255,255,.9);
        }
      }
      .idcard{
        width: 25px;
        height: 25px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
        margin-top: 15px;
        background: url(../assets/radio_unchecked.png) no-repeat center;
        background-size: 25px;
        border-radius: 50%;
        appearance: none;
        &:checked,&:active{
          background: url(../assets/radio_checked.png) no-repeat center;
          background-size: 25px;
          box-shadow: 0 0 0 0 rgba(255,255,255,.01);
        }
      }
      .lab{
        margin: 13px 10px 0 0;
        font-size: 20px;
        display: inline-block;
        vertical-align: middle;
      }
      ::-webkit-input-placeholder{
        color: #ccc;
      }
      ::-moz-placeholder{
        color: #ccc;
      }
      ::-ms-input-placeholder{
        color: #ccc;
      }
      .btn-login{
        width: 360px;
        height: 40px;
        margin-top: 20px;
      }
    }
  }
</style>
