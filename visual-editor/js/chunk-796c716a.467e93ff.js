(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-796c716a","chunk-2cf42b2c","chunk-2d0b2394"],{"22ca":function(t,e,a){"use strict";a.r(e),a.d(e,"UpgradeState",(function(){return r}));a("7db0"),a("d3b7"),a("b64b");var n=a("f570"),r={all:["-1","所有状态"],unpushed:["0","待推送"],pushed:["1","已推送"],upgrading:["2","升级中"],upgraded:["3","升级成功"],failed:["4","升级失败"],cancelled:["5","已取消"],getText:function(t){return n["a"].t("PRODUCT_MANAGEMENT.FIRMWARE_LIST.TASK.UPGRADE_STATUS_CODE."+t)},getKey:function(t){return Object.keys(r).find((function(e){return r[e]===t}))}}},3197:function(t,e,a){},"56ce":function(t,e,a){"use strict";var n=a("18a6"),r=a("add0"),s="/tp_ota",i="/tp_ota_task",l="/tp_ota_device";e["a"]={add:function(t){return Object(n["a"])({url:s+"/add",method:"post",data:t})},list:function(t){return Object(n["a"])({url:s+"/list",method:"post",data:t})},delete:function(t){return Object(n["a"])({url:s+"/delete",method:"post",data:t})},uploadUrl:r["a"]+"api/file/up",taskList:function(t){return Object(n["a"])({url:i+"/list",method:"post",data:t})},taskAdd:function(t){return Object(n["a"])({url:i+"/add",method:"post",data:t})},taskDetailList:function(t){return Object(n["a"])({url:l+"/list",method:"post",data:t})},modifyUpgradeStatus:function(t){return Object(n["a"])({url:"/tp_ota_device/modfiyupdate",method:"post",data:t})}}},"7b08":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},t._l(t.stateList,(function(e,n){return a("el-col",{key:n,attrs:{span:3}},[a("widget",{attrs:{status:e.status,value:e.count},on:{click:t.handleSelectStatus}})],1)})),1),a("div",{staticClass:"rounded card p-4 el-table-transparent el-dark-input text-white"},[a("el-row",{staticClass:"pt-3 pb-4 px-3",attrs:{type:"flex",gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{placeholder:t.$t("PRODUCT_MANAGEMENT.FIRMWARE_LIST.TASK.PLACEHOLDER3")},model:{value:t.params.name,callback:function(e){t.$set(t.params,"name",e)},expression:"params.name"}})],1),a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{type:"border"},on:{click:t.getList}},[t._v(t._s(t.$t("COMMON.SEARCH")))])],1),a("el-col",{staticClass:"px-2 text-right",attrs:{span:14}},[a("el-button",{attrs:{size:"medium",type:"border"},on:{click:t.getList}},[t._v(t._s(t.$t("COMMON.THEREFRESH")))])],1)],1),a("el-form",{staticClass:"inline-edit"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.tableData}},[a("el-table-column",{attrs:{label:t.$t("PRODUCT_MANAGEMENT.FIRMWARE_LIST.TASK.DEVICE_CODE"),prop:"device_code",align:"left","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:t.$t("PRODUCT_MANAGEMENT.FIRMWARE_LIST.TASK.DEVICE_NAME"),prop:"name",align:"left"}}),a("el-table-column",{attrs:{label:t.$t("PRODUCT_MANAGEMENT.FIRMWARE_LIST.TASK.CURRENT_VERSION"),prop:"current_version",align:"left"}}),a("el-table-column",{attrs:{label:t.$t("PRODUCT_MANAGEMENT.FIRMWARE_LIST.TASK.TARGET_VERSION"),prop:"target_version",align:"left"}}),a("el-table-column",{attrs:{label:t.$t("PRODUCT_MANAGEMENT.FIRMWARE_LIST.TASK.UPGRADE_PROGERSS"),prop:"upgrade_progress",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-progress",{attrs:{percentage:t.getProgress(e.row.upgrade_progress)}})]}}])}),a("el-table-column",{attrs:{label:t.$t("PRODUCT_MANAGEMENT.FIRMWARE_LIST.TASK.STATUS_UPDATE_TIME"),prop:"status_update_time",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.status_update_time?e.row.status_update_time:"--")+" ")]}}])}),a("el-table-column",{attrs:{label:t.$t("PRODUCT_MANAGEMENT.FIRMWARE_LIST.TASK.UPGRADE_STATUS"),prop:"upgrade_status",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.upgradeState.getText(e.row.upgrade_status))+" ")]}}])}),a("el-table-column",{attrs:{label:t.$t("PRODUCT_MANAGEMENT.FIRMWARE_LIST.TASK.STATUS_DETAIL"),prop:"status_detail",align:"left"}}),a("el-table-column",{attrs:{align:"center",label:t.$t("PRODUCT_MANAGEMENT.PRODUCT_LIST.OPERATION"),width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"text-center"},[e.row.upgrade_status===t.upgradeState.failed[0]||e.row.upgrade_status===t.upgradeState.cancelled[0]?a("div",[a("el-popconfirm",{attrs:{"confirm-button-text":t.$t("COMMON.CONFIRM"),"cancel-button-text":t.$t("COMMON.CANCEL"),title:"确定要重新升级吗？"},on:{confirm:function(a){return t.reUpgrading(e.row)}}},[a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:!!e.row.isLoading,expression:"!!scope.row.isLoading"}],staticClass:"mr-3",attrs:{slot:"reference",type:"indigo",size:"mini"},slot:"reference"},[t._v(t._s(t.$t("PRODUCT_MANAGEMENT.FIRMWARE_LIST.TASK.REUPGRADE")))])],1)],1):e.row.status!==t.upgradeState.upgraded[0]?a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:!!e.row.isLoading,expression:"!!scope.row.isLoading"}],staticClass:"mr-3",attrs:{type:"indigo",size:"mini"},on:{click:function(a){return t.cancelUpgrading(e.row)}}},[t._v(t._s(t.$t("PRODUCT_MANAGEMENT.FIRMWARE_LIST.TASK.CANCEL_UPGRADE")))]):t._e()],1)]}}])})],1)],1),a("div",{staticClass:"text-right py-3"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.params.total,"current-page":t.params.current_page,"page-size":t.params.per_page},on:{"update:currentPage":function(e){return t.$set(t.params,"current_page",e)},"update:current-page":function(e){return t.$set(t.params,"current_page",e)},"current-change":t.getList}})],1)],1)],1)},r=[],s=(a("d3b7"),a("a9e3"),a("159b"),a("b64b"),a("c740"),a("ddb9")),i=a("56ce"),l=a("22ca"),u={components:{Widget:s["default"]},props:{},data:function(){return{stateList:[],loading:!1,tableData:[],params:{total:0,current_page:1,per_page:10},upgradeState:l["UpgradeState"],timer:null}},mounted:function(){var t=this;this.params.ota_task_id=this.$route.query.taskId,this.getList(),this.timer=setInterval((function(){t.getList()}),5e3)},destroyed:function(){clearInterval(this.timer)},methods:{handleSelectStatus:function(t){this.params.upgrade_status="-1"===t?"":t,this.getList()},getList:function(){var t=this;this.loading=!0,i["a"].taskDetailList(this.params).then((function(e){var a=e.data;if(200===a.code){var n,r,s,i;t.tableData=(null===(n=a.data)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.list)||[],t.params.total=a.data.total;var l=(null===(s=a.data)||void 0===s||null===(i=s.data)||void 0===i?void 0:i.statuscount)||[];t.computeStateList(l)}})).finally((function(){t.loading=!1}))},getProgress:function(t){var e=Number(t||0);return e>100&&(e=100),e<0&&(e=0),e},computeStateList:function(t){var e=this;this.stateList=[];var a=t.reduce((function(t,e){return t+e.count}),0)||0;Object.keys(l["UpgradeState"]).forEach((function(n){if("function"!==typeof l["UpgradeState"][n]){var r=l["UpgradeState"][n][0],s=t.findIndex((function(t){return t.upgrade_status===String(r)})),i=s>=0?t[s].count:0;r===l["UpgradeState"].all[0]&&(i=a),e.stateList.push({status:r,count:i})}}))},reUpgrading:function(t){this.modifyUpgradeStatus(t,l["UpgradeState"].unpushed[0])},cancelUpgrading:function(t){this.modifyUpgradeStatus(t,l["UpgradeState"].cancelled[0])},modifyUpgradeStatus:function(t,e){var a=this,n={id:t.id,ota_task_id:t.ota_task_id,upgrade_status:e};t.isLoading=!0,i["a"].modifyUpgradeStatus(n).then((function(t){t.data;a.getList()}))}}},o=u,d=a("2877"),c=Object(d["a"])(o,n,r,!1,null,"77e4c142",null);e["default"]=c.exports},ca8c:function(t,e,a){"use strict";a("3197")},ddb9:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"widget-container panel-bg-blue px-4 py-4 rounded text-center",on:{click:t.handleClick}},[a("div",{staticClass:"text-muted"},[t._v(t._s(t.d__title))]),a("div",{staticClass:" text-white title-num"},[t._v(" "+t._s(t.value)+" ")])])},r=[],s=(a("a9e3"),a("22ca")),i={props:{title:{type:[String],default:""},status:{type:[String,Number],default:0},value:{type:[String,Number],default:0},option:{type:[Object],default:function(){return{}}}},data:function(){return{d__title:""}},mounted:function(){this.d__title=this.title||s["UpgradeState"].getText(this.status)},methods:{handleClick:function(){this.$emit("click",this.status)}}},l=i,u=(a("ca8c"),a("2877")),o=Object(u["a"])(l,n,r,!1,null,"074583b4",null);e["default"]=o.exports}}]);