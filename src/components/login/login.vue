<template>
  <el-dialog title="请登录" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="ruleForm">
        <el-form-item label="账号" :label-width="formLabelWidth" prop="username">
          <el-input type="text" v-model="form.username" auto-complete="off" style="width:50%;"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
          <el-input type="password" v-model="form.password" auto-complete="off" style="width:50%;"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth">
          <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
</template>
<script>
  export default {
    data () {
      return {
        form: {
          username: '',
          password: ''
        },
        rules:{ 
          username:[
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ]
        },
        dialogFormVisible: true,
        formLabelWidth: '80px'
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (this.form.username === 'system' && this.form.password === '123456') {
            this.dialogFormVisible = false;
            this.$router.push('/index')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style lang="scss">

</style>
