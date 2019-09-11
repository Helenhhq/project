<template>
  <div class="mainnav">
    <el-row>
		<el-col v-show="drawer" :xs="8" :sm="8" :md="6" :lg="4" :xl="4">
			<div class="grid-content bg-left">
				<div class="main-module">
					<router-link to="/main/home">
						<el-tooltip class="item" effect="dark" content="首页" placement="right-start">
							<i class="el-icon-s-home main-icon"></i>
						</el-tooltip>
						&nbsp;&nbsp;<span class="main-title hidden-sm-and-down">首页</span>
					</router-link>
				</div>
				<div class="main-module">
					<router-link to="/main/daily">
						<el-tooltip class="item" effect="dark" content="日常工作管理" placement="right-start">
							<i class="el-icon-user-solid main-icon"></i>
						</el-tooltip>
						&nbsp;&nbsp;<span class="main-title hidden-sm-and-down">日常工作管理</span>
					</router-link>
					<i v-show="hiddenArrow1" @click="hiddenArrow1 = !hiddenArrow1" class="el-icon-arrow-right down-icon"></i>
					<i v-show="!hiddenArrow1" @click="hiddenArrow1 = !hiddenArrow1" class="el-icon-arrow-down down-icon"></i>
					<el-collapse-transition>
						<div v-show="!hiddenArrow1">
							<router-link to="/main/evaluate"><div class="hiddenmenu">考核</div></router-link>
							<router-link to="/main/transfer"><div class="hiddenmenu">工作调动</div></router-link>
						</div>
					</el-collapse-transition>
				</div>
				<div class="main-module">
					<router-link to="/main/attend">
						<el-tooltip class="item" effect="dark" content="考勤管理" placement="right-start">
							<i class="el-icon-star-on main-icon"></i>
						</el-tooltip>
						&nbsp;&nbsp;<span class="main-title hidden-sm-and-down">考勤管理</span>
					</router-link>
					<i v-show="hiddenArrow2" @click="hiddenArrow2 = !hiddenArrow2" class="el-icon-arrow-right down-icon"></i>
					<i v-show="!hiddenArrow2" @click="hiddenArrow2 = !hiddenArrow2" class="el-icon-arrow-down down-icon"></i>
					<el-collapse-transition>
						<div v-show="!hiddenArrow2">
							<router-link to="/main/dailyAt"><div class="hiddenmenu">日常考勤</div></router-link>
							<router-link to="/main/AskForLeave"><div class="hiddenmenu">请假管理</div></router-link>
						</div>
					</el-collapse-transition>
				</div>
				<div class="main-module">
					<router-link to="/main/depart">
						<el-tooltip class="item" effect="dark" content="部门管理" placement="right-start">
							<i class="el-icon-s-management main-icon"></i>
						</el-tooltip>
						&nbsp;&nbsp;<span class="main-title hidden-sm-and-down">部门管理</span>
					</router-link>
				</div>
				<div class="main-module">
					<router-link to="/main/salary">
						<el-tooltip class="item" effect="dark" content="工资管理" placement="right-start">
							<i class="el-icon-s-finance main-icon"></i>
						</el-tooltip>
						&nbsp;&nbsp;<span class="main-title hidden-sm-and-down">工资管理</span>
					</router-link>
				</div>
				<div class="main-module">
					<router-link to="/main/basic">
						<el-tooltip class="item" effect="dark" content="职工信息管理" placement="right-start">
							<i class="el-icon-s-custom main-icon"></i>
						</el-tooltip>
						&nbsp;&nbsp;<span class="main-title hidden-sm-and-down">职工信息管理</span>
					</router-link>
				</div>
			</div>
		</el-col>
		<el-col v-if="!drawer">
			<div class="grid-content bg-purple-light">
				<div class="bar-header">
					<div class="left-func">
						<i class="el-icon-s-fold fold-icon" @click="showDrawer"></i>
						<span v-if="drawer" class="nav">隐藏左边栏</span>
						<span v-if="!drawer" class="nav">打开左边栏</span>
					</div>
					<div class="right-func">
						<img class="touxiang" src="../assets/headimg.jpeg" width="50" height="50">
						<el-dropdown>
							<span class="el-dropdown-link"><i class="el-icon-caret-bottom" @click="showPersonalInfo"></i></span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>换头像</el-dropdown-item>
								<el-dropdown-item>修改密码</el-dropdown-item>
								<el-dropdown-item>退出</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
				</div>
				<router-view />
			</div>
		</el-col>
		<el-col v-else :xs="16" :sm="16" :md="18" :lg="20" :xl="20">
			<div class="grid-content bg-purple-light">
				<div class="bar-header">
					<div class="left-func">
						<i class="el-icon-s-fold fold-icon" @click="showDrawer"></i>
						<span v-if="drawer" class="nav">隐藏左边栏</span>
						<span v-if="!drawer" class="nav">打开左边栏</span>
					</div>
					<div class="right-func">
						<img class="touxiang" src="../assets/headimg.jpeg" width="50" height="50">
						<el-dropdown>
							<span class="el-dropdown-link"><i class="el-icon-caret-bottom" @click="showPersonalInfo"></i></span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>换头像</el-dropdown-item>
								<el-dropdown-item>修改密码</el-dropdown-item>
								<el-dropdown-item>退出</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
				</div>
				<router-view />
			</div>
		</el-col>
	</el-row>
  </div>
</template>

<script>
	import animate from "animate.css"
	

	export default{
		name: 'mainnav',
		data(){
			return {
				hiddenArrow1:true,
				hiddenArrow2:true,
				drawer:true
			}
		},
		methods:{
			showDrawer(){
				this.drawer = !this.drawer;
			},
			showPersonalInfo(){

			}
		},
		components:{
			
		}
	}
</script>

<style lang="less" scoped>
	.bg-purple-dark {
		background: #99a9bf;
	}
	.bg-left {
		background: rgb(48,65,86);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.bg-purple-light {
		background: #e5e9f2;
	}
	.grid-content {
		height: 51rem;
	}
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	.main-icon{
		font-size: 30px;
		&:hover{
			color: #409eff;
		}
	}
	.main-title{
		font-size: 16px;
		display: inline-block;
		width: 96px;
		&:hover{
	  		color: #409eff;
		}
	}
	.main-module{
		color: #ccc;
		min-height: 100px;
		max-height: 200px;
		text-align: left;
		margin-left: 30px;
	}
	.down-icon{
		font-size: 16px;
		line-height: 30px;
		margin-left: 15px;
	}
	.hiddenmenu{
		margin-left: 45px;
		max-width: 100px;
		margin-top: 5px;
		padding-left: 10px;
		text-align: left;
		text-overflow: ellipsis;
		background-color: rgba(255,255,255,.05);
	}
	a {
		color: #fff;
		text-decoration: none;
		&.router-link-exact-active {
			color: #42b983;
		}
	}
	.bar-header{
		overflow: hidden;
		background-color: #fff;
		.left-func{
			float: left;
			width: 50%;
			text-align: left;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.right-func{
			float: right;
			margin: 5px 2% 0;
			.touxiang{
				border: 1px solid #ccc;
				border-radius: 50%;
			}
		}
		.fold-icon{
			font-size: 28px;
			margin: 16px 15px 0;
			color: #ccc;
			vertical-align: middle;
		}
	}
	.nav{
		color: #666;
		font-size: 18px;
		display: inline-block;
		vertical-align: middle;
		margin-top: 15px;
	}
	.el-dropdown-link {
		cursor: pointer;
		color: #409EFF;
	}
	.el-icon-arrow-down {
		font-size: 12px;
	}
</style>
