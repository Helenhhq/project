<template>
	<div class="daily">
		<h2>《 人事专员日常工作 》</h2>
		<ul>
			<li>1. 组织制定公司人事规章制度，并督促、检查制度的贯彻执行。</li>
			<li>2. 组织设计和完善公司的组织结构，做好定岗定编，合理有效配置人力资源。</li>
			<li>3. 组织开展工作分析，编制职位说明书与岗位规范，建立健全岗位责任制。</li>
			<li>4. 进行人力资源开发，制定员工职业生涯规划和人才梯队计划。</li>
			<li>5. 负责人员招聘，通过多种渠道为公司寻求合适的人才。</li>
			<li>6. 负责制定公司培训计划，组织人员参加培训，评估培训效果。</li>
			<li>7. 负责组织实施绩效考核，统计考核结果。</li>
			<li>8. 负责核定各岗位的工资标准，编制年度薪资调整方案，核算每月员工的工资。</li>
			<li>9. 负责代表公司与员工签订劳动合同及其保管工作。</li>
			<li>10. 负责社会保险及商业保险的办理。</li>
			<li>11. 负责建立健全员工的人事档案。</li>
			<li>12. 负责公司员工奖惩、差假以及升、降、调、辞等人事调整手续办理。</li>
			<li>13. 负负责员工考勤管理和纪律监察。</li>
			<li>14. 负责对员工劳动保护用品定额和计划管理工作。</li>
			<li>15. 负责协调员工关系，解决劳动纠纷。</li>
			<li>16. 负责协调公司与政府及其他单位对口部门的关系。</li>
			<li>17. 负责组织企业文化建设。</li>
			<li>18. 负责公司人力资源信息的上传下达工作</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'daily',
		data(){
			return {
				hiddenArrow:true,
			}
		}
	}
</script>

<style lang="less" scoped>
	.daily{
		width: 80%;
		margin: 20px auto;
	}
	ul{
		text-align: left;
		letter-spacing: 1px;
	}
	li{
		line-height: 36px;
	}
	h2{
		font-size: 30px;
		font-weight: lighter;
		color: #5cb87a;
		text-shadow: 0 0 4px #fff;
		margin: 20px auto;
	}
</style>
