import conf from '../conf/config.js'
const baseUrl = conf.baseUrl;
const hcBaseUrl = conf.commonBaseUrl;
export default {
	baseUrl: baseUrl,
	hcBaseUrl: hcBaseUrl, // 登录接口
	loginUrl: baseUrl + 'app/loginProperty',
	areaUrl: baseUrl + "app/area.listAreas",
	GetNoticeListUrl: baseUrl + 'app/notice.listNotices', //公告接口
	listMyEnteredCommunitys: baseUrl + 'app/community.listMyEnteredCommunitys', //查看员工小区
	listOwnerRepairs: baseUrl + 'app/ownerRepair.listOwnerRepairs', //查看报修
	saveOwnerRepair: baseUrl + 'app/ownerRepair.saveOwnerRepair', //维修
	replyRepairAppraise: baseUrl + 'app/repair.replyRepairAppraise', //维修
	
	queryStaffInfos: baseUrl + 'app/query.staff.infos', //查询员工信息
	changeStaffPwd: baseUrl + 'app/user.changeStaffPwd', //修改密码
	listAuditHistoryComplaints: baseUrl + 'app/auditUser.listAuditHistoryComplaints', //查询历史单
	saveComplaint: baseUrl + 'app/complaint', //查询业主房间
	userLogout: baseUrl + 'app/user.service.logout', //绑定业主
	listAuditComplaints: baseUrl + 'app/auditUser.listAuditComplaints', //查询绑定业主
	listComplaintEvent: baseUrl + 'app/complaint.listComplaintEvent', //查询工单流转
	listComplaintAppraise: baseUrl + 'app/complaintAppraise.listComplaintAppraise', //投诉评价
	replyComplaintAppraise: baseUrl + 'app/complaintAppraise.replyComplaintAppraise', //评价回复
	auditComplaint: baseUrl + 'app/complaint.auditComplaint', //查询业主门禁
	queryFloors: baseUrl + 'app/floor.queryFloors', // 查询楼栋
	queryUnits: baseUrl + "app/unit.queryUnits", //查询单元
	queryRooms: baseUrl + "app/room.queryRooms", //查询房屋
	applyVisitorApplicationKey: baseUrl + "app/applicationKey.applyVisitorApplicationKey", //上传业主照片
	uploadOwnerPhoto: baseUrl + "app/owner.uploadOwnerPhoto",
	getOwnerPhotoPath: hcBaseUrl + "callComponent/download/getFile/fileByObjId",
	filePath: hcBaseUrl + "callComponent/download/getFile/file", //查询业主车位信息
	queryParkingSpacesByOwner: baseUrl + "app/parkingSpace.queryParkingSpacesByOwner", //查询停车位费用
	queryFeeByParkingSpace: baseUrl + "app/fee.queryFeeByParkingSpace", //查询物业费用
	queryFeeByOwner: baseUrl + "app/fee.queryFee", //预下单
	preOrder: baseUrl + "app/payment/toPay", //查询小区
	listCommunitys: baseUrl + "app/community.listCommunitys", //查询小区文化
	listActivitiess: baseUrl + "app/activities.listActivitiess", //查询小区广告
	listAdvertPhoto: baseUrl + "app/advert.listAdvertPhoto",
	//查询巡检任务
	listInspectionTasks: baseUrl + "app/inspectionTask.listInspectionTasks",
	
	listMaintainanceTask:baseUrl+"app/maintainanceTask.listMaintainanceTask",
	//巡检任务详情
	listInspectionTaskDetails: baseUrl + 'app/inspectionTaskDetail.listInspectionTaskDetails',
	
	//保养明细
	listMaintainanceTaskDetail: baseUrl + 'app/maintainanceTask.listMaintainanceTaskDetail',
	
	//巡检
	updateInspectionTaskDetail: baseUrl + 'app/inspectionTaskDetail.updateInspectionTaskDetail',
	
	//保养
	updateMaintainanceTaskDetail: baseUrl + 'app/maintainanceTask.updateMaintainanceTaskDetail',
	
	// 查询报修单处理师傅
	listRepairStaffs: baseUrl + "app/ownerRepair.listRepairStaffs",
	//查询员工报修单
	listStaffRepairs: baseUrl + "app/ownerRepair.listStaffRepairs",
	//查询报修师傅查询
	listRepairTypeUsers: baseUrl + "app/repair.listRepairTypeUsers",
	//查询完成报修单
	listStaffFinishRepairs: baseUrl + "app/ownerRepair.listStaffFinishRepairs",
	repairDispatch: baseUrl + "app/ownerRepair.repairDispatch",
	//报修办结
	repairFinish: baseUrl + "app/ownerRepair.repairFinish",
	//报修评价
	appraiseRepair: baseUrl + 'app/repair/appraiseRepair',
	appraiseRepairNew: baseUrl + 'callComponent/ownerRepair.appraiseRepair',
	//查询房屋和业主接口
	listRoomAndOwner: baseUrl + 'app/fee.listRoomsWhereFeeSet',
	//查询费用信息
	listFee: baseUrl + 'app/fee.listFee',
	//查询缴费历史
	queryFeeDetail: baseUrl + "app/fee.queryFeeDetail",
	// 投诉 处理意见
	listWorkflowAuditInfo: baseUrl + 'app/workflow.listWorkflowAuditInfo',
	listOweFees: baseUrl + 'app/feeApi/listOweFees',
	toQrOweFeePay: baseUrl + 'app/payment.nativeQrcodePayment',
	// 报修抢单
	robRepairOrder: baseUrl + 'app/ownerRepair.grabbingRepair',
	// 获取空置房申请列表
	listApplyRoom: baseUrl + 'app/applyRoomDiscount/queryApplyRoomDiscount',
	queryFeeDiscount: baseUrl + "app/feeDiscount/queryFeeDiscount",
	updateApplyRoomDiscount: baseUrl + "app/applyRoomDiscount/updateApplyRoomDiscount",
	updateReviewApplyRoomDiscount: baseUrl + "app/applyRoomDiscount/updateReviewApplyRoomDiscount",
	queryMenus: baseUrl + "app/query.menu.info",
	listStaffPrivileges: baseUrl + "app/query.user.privilege",
	queryRoomRenovation: baseUrl + "app/roomRenovation/queryRoomRenovation",
	updateRoomToExamine: baseUrl + "app/roomRenovation/updateRoomToExamine",
	saveRoomRenovationDetail: baseUrl + "app/roomRenovation/saveRoomRenovationDetail",
	queryRoomRenovationRecord: baseUrl + "app/roomRenovation/queryRoomRenovationRecord",
	updateRoomDecorationRecord: baseUrl + "app/roomRenovation/updateRoomDecorationRecord",
	uploadVideo: baseUrl + "callComponent/upload/uploadVedio/upload",
	queryRoomRenovationRecordDetail: baseUrl + "app/roomRenovation/queryRoomRenovationRecordDetail",
	// 查询字典表
	queryDictInfo: baseUrl + "callComponent/core/list",
	// 报修相关信息（维修类型/状态/商品类型...）
	queryRepairInfo: baseUrl + "app/resourceStoreType.listResourceStoreTypes",
	// queryResourceStoreResName: baseUrl + "app/resourceStore/queryResourceStoreResName",
	queryResourceStoreResName: baseUrl + "app/resourceStore.listUserStorehouses",
	// 查询费用项（水电部分）
	queryFeeTypesItems: baseUrl + "app/feeConfig.listFeeConfigs",
	queryPreMeterWater: baseUrl + "app/meterWater/queryPreMeterWater",
	saveMeterWater: baseUrl + "app/meterWater.saveMeterWater",
	// 采购/出库申请部分
	queryPurchaseApplyList: baseUrl + "app/purchaseApply.listPurchaseApplys",
	queryResourceStoreList: baseUrl + "app/resourceStore.listResourceStores",
	listResourceStoresAndTimes: baseUrl + "app/resourceStore.listResourceStoresAndTimes",
	queryResourceSupplier: baseUrl + "app/resourceSupplier.listResourceSuppliers",
	queryFirstStaff: baseUrl + "app/workflow/getFirstStaff",
	queryFirstAuditStaff: baseUrl + "app/oaWorkflow.queryFirstAuditStaff",
	savePurchaseApply: baseUrl + "app/purchase/purchaseApply",
	updatePurchaseApply: baseUrl + "app/purchaseApply.updatePurchaseApply",
	saveItemOutApply: baseUrl + "app/collection/goodsCollection",
	listMyAuditOrders: baseUrl + "app/auditUser.listAuditOrders",
	listMyItemOutOrders: baseUrl + "app/collection/getCollectionAuditOrder",
	listMyAllocationStoreAuditOrders: baseUrl + "app/resourceStore.listAllocationStoreAuditOrders",
	saveResourceOut: baseUrl + "app/collection/resourceOut",
	saveResourceEnter: baseUrl + "app/purchase/resourceEnter",
	listAuditHistoryOrders: baseUrl + "app/auditUser.listAuditHistoryOrders",
	listItemOutAuditHistoryOrders: baseUrl + "app/auditUser.listItemOutAuditHistoryOrders",
	listAllocationStoreHisAuditOrders: baseUrl + "app/resourceStore.listAllocationStoreHisAuditOrders",
	// listWorkflowAuditInfo2: baseUrl + "callComponent/workflow.listWorkflowAuditInfo",
	// 调拨部分
	listAllocationStorehouseApplys: baseUrl + "app/resourceStore.listAllocationStorehouseApplys",
	listStoreHouses: baseUrl + "app/resourceStore.listStorehouses",
	saveAllocationStorehouse: baseUrl + "app/resourceStore.saveAllocationStorehouse",
	listAllocationStorehouses: baseUrl + "app/resourceStore.listAllocationStorehouses",
	saveAuditAllocationStoreOrder: baseUrl + "app/resourceStore.auditAllocationStoreOrder",
	listWorkflowStepStaffs: baseUrl + "app/workflow.listWorkflowStepStaffs",
	saveMyAuditOrders: baseUrl + "app/purchaseApply.auditApplyOrder",
	// 公司/员工信息
	queryOrgInfo: baseUrl + "app/org.listOrgs",
	queryStaffListInfo: baseUrl + "app/query.staff.infos",
	// 巡检流转
	UpdateInspectionTask: baseUrl + "app/inspectionTask.updateInspectionTask",
	
	// 保养流转
	UpdateMaintainanceTask: baseUrl + "app/maintainanceTask.updateMaintainanceTask",
	// 物品转赠
	saveResourceStoreTransfer: baseUrl + "app/resourceStore.saveAllocationUserStorehouse",
	// 紧急采购
	saveUrgentPurchaseApply: baseUrl + "app/purchase/urgentPurchaseApply",
	//取消调拨
	deleteAllocationStorehouse: baseUrl + "app/resourceStore.deleteAllocationStorehouse",
	// 取消申请
	deletePurchaseApply: baseUrl + "app/purchaseApply.deletePurchaseApply",
	//查询水电抄表记录
	listMeterWaters: baseUrl + "app/meterWater.listMeterWaters",
	listRepairSettings: baseUrl + 'app/repair.listRepairSettings',
	saveHelpOwnerRepair: baseUrl + "app/ownerRepair.saveOwnerRepair",
	updateRoomRenovationState: baseUrl + "app/roomRenovation/updateRoomRenovationState",
	queryOaWorkflow: baseUrl + "app/oaWorkflow/queryOaWorkflow",
	queryOaWorkflowForm: baseUrl + "app/oaWorkflow/queryOaWorkflowForm",
	saveOaWorkflowFormData: baseUrl + "app/oaWorkflow/saveOaWorkflowFormData",
	queryOaWorkflowUserHisTaskFormData: baseUrl + "app/oaWorkflow/queryOaWorkflowUserHisTaskFormData",
	queryOaWorkflowUserTaskFormData: baseUrl + "app/oaWorkflow/queryOaWorkflowUserTaskFormData",
	queryOaWorkflowFormData: baseUrl + "app/oaWorkflow/queryOaWorkflowFormData",
	queryOaWorkflowUser: baseUrl + "app/oaWorkflow/queryOaWorkflowUser",
	listRunWorkflowImage: baseUrl + "app/workflow.listRunWorkflowImage",
	getNextTask: baseUrl + "app/oaWorkflow/getNextTask",
	auditOaWorkflow: baseUrl + "app/oaWorkflow/auditOaWorkflow",
	updateOaWorkflowFormData: baseUrl + "app/oaWorkflow.updateOaWorkflowFormData",
	listMeterType: baseUrl + "app/meterType.listMeterType",
	// 空置房跟踪记录列表
	listApplyRoomDiscountRecord: baseUrl + "app/applyRoomDiscountRecord/queryApplyRoomDiscountRecord",
	// 空置房跟踪记录详情
	listApplyRoomDiscountRecordDetail: baseUrl + "app/applyRoomDiscountRecord/queryApplyRoomDiscountRecordDetail",
	// 添加空置房跟踪记录
	saveApplyRoomDiscountRecord: baseUrl + "app/applyRoomDiscountRecord/addApplyRoomDiscountRecord",
	// 删除空置房跟踪记录
	cutApplyRoomDiscountRecord: baseUrl + "app/applyRoomDiscountRecord/cutApplyRoomDiscountRecord",
	// 删除装修跟踪记录
	deleteRoomRenovationRecord: baseUrl + "app/roomRenovation/deleteRoomRenovationRecord",
	// 查询缴费历史
	listFeeDetail: baseUrl + "app/fee.queryFeeDetail",
	repairStop: baseUrl + "app/ownerRepair.repairStop",
	repairStart: baseUrl + "app/ownerRepair.repairStart",
	listInspectionItemTitle: baseUrl + "app/inspectionItemTitle.listInspectionItemTitle",
	listMaintainanceItem: baseUrl + "app/maintainance.listMaintainanceItem",
	listResourceStoreTypes: baseUrl + "app/resourceStoreType.listResourceStoreTypes",
	listSystemInfo: baseUrl + "app/system.listSystemInfo",
	uploadImage: baseUrl + "callComponent/uploadFile/uploadPhotoImage",
	// 查询核销订单
	listCommunitySpaceConfirmOrder: baseUrl + "app/communitySpace.listCommunitySpaceConfirmOrder",
	// 核销订单
	saveCommunitySpaceConfirmOrder: baseUrl + "app/communitySpace.saveCommunitySpaceConfirmOrder",
	queryReportStaffInspection: baseUrl+"app/inspection.queryReportStaffInspection",
	listCouponPropertyUserDetail: baseUrl+"app/couponProperty.listCouponPropertyUserDetail",
	writeOffCouponPropertyUser: baseUrl+"app/couponProperty.writeOffCouponPropertyUser",
	queryUndoItemRelease: baseUrl+"app/itemRelease.queryUndoItemRelease",
	queryFinishItemRelease: baseUrl+"app/itemRelease.queryFinishItemRelease",
	listItemRelease: baseUrl+"app/itemRelease.listItemRelease",
	listItemReleaseRes: baseUrl+"app/itemRelease.listItemReleaseRes",
	queryOaWorkflowUser: baseUrl+"app/oaWorkflow/queryOaWorkflowUser",
	queryNextDealUser: baseUrl+"app/oaWorkflow.queryNextDealUser",
	auditUndoItemRelease: baseUrl+"app/itemRelease.auditUndoItemRelease",
	listIntegralSetting: baseUrl+"app/integral.listIntegralSetting",
	queryOwners: baseUrl+"app/owner.queryOwners",
	queryOwnerAndMembers: baseUrl+"app/owner.queryOwnerAndMembers",
	saveRoomOwner: baseUrl+"app/owner.saveRoomOwner",
	deleteOwner: baseUrl + "app/owner.deleteOwner",
	editOwner: baseUrl + "app/owner.editOwner",
		
		
	
	queryOwnerAccount: baseUrl+"app/account/queryOwnerAccount",
	useIntegral: baseUrl+"app/integral.useIntegral",
	listIntegralUserDetail: baseUrl+"app/integral.listIntegralUserDetail",
	listReserveGoodsConfirmOrder: baseUrl+"app/reserveOrder.listReserveGoodsConfirmOrder",
	saveReserveGoodsConfirmOrder: baseUrl+"app/reserveOrder.saveReserveGoodsConfirmOrder",
	queryUndoVisit: baseUrl+"app/visit.queryUndoVisit",
	queryFinishVisit: baseUrl+"app/visit.queryFinishVisit",
	listVisit: baseUrl+"app/visit.listVisits",
	auditUndoVisit: baseUrl+"app/visit.auditUndoVisit",
	queryUndoCount: baseUrl+"callComponent/undo/list",
	allocationStoreEnter: baseUrl+"app/resourceStore.allocationStoreEnter",
	queryAttendanceClassesTask: baseUrl+"app/attendanceClass/queryAttendanceClassesTask",
	
	//todo 费用
	listOweFeeCallable: baseUrl+"app/oweFeeCallable.listOweFeeCallable",
	writeOweFeeCallable: baseUrl+"app/oweFeeCallable.writeOweFeeCallable",
	saveRoomCreateFee: baseUrl+"app/fee.saveRoomCreateFee",
	
	
	
	
	
	//todo 设备相关
	listMachines: baseUrl+"app/machine.listMachines",
	listMachineRecords: baseUrl+"app/machineRecord.listMachineRecords",
	listChargeMachine: baseUrl+"app/chargeMachine.listChargeMachine",
	listChargeMachineOrder: baseUrl+"app/chargeMachine.listChargeMachineOrder",
	
	
	
	
	//todo 车辆相关
	queryOwnerCars: baseUrl+"app/owner.queryOwnerCars",
	listParkingAreas: baseUrl+"app/parkingArea.listParkingAreas",
	listParkingAreaMachines: baseUrl+"app/machine.listParkingAreaMachines",
	openDoor: baseUrl+"app/machine/openDoor",
	closeDoor: baseUrl+"app/machine/closeDoor",
	customCarInOut: baseUrl+"app/machine.customCarInOutCmd",
	listCarInParkingArea: baseUrl+"app/carInout.listCarInParkingAreaCmd",
	listParkingCouponCar: baseUrl+"app/parkingCoupon.listParkingCouponCar",
	getTempCarFeeOrder: baseUrl+"app/tempCarFee.getTempCarFeeOrder",
	listCarInoutDetail: baseUrl+"app/carInoutDetail.listCarInoutDetail",
	listCarInoutPayment: baseUrl+"app/carInoutPayment.listCarInoutPayment",
	
	
	
	
	
	
	
	
	
	//todo 报表相关接口
	queryFeeDataReport:baseUrl+"app/dataReport.queryFeeDataReport",
	queryOrderDataReport:baseUrl+"app/dataReport.queryOrderDataReport",
	queryInoutDataReport:baseUrl+"app/dataReport.queryInoutDataReport",
	queryOthersDataReport:baseUrl+"app/dataReport.queryOthersDataReport",
	queryPayFeeDetail:baseUrl+"app/reportFeeMonthStatistics/queryPayFeeDetail",
	queryReportFeeDetailRoom:baseUrl+"app/reportFeeMonthStatistics.queryReportFeeDetailRoom",
	queryReportFeeSummary:baseUrl+"app/reportFeeMonthStatistics.queryReportFeeSummary",
	
	
	//todo 工作大
	queryStartWork:baseUrl+"app/work.queryStartWork",
	listWorkType:baseUrl+"app/workType.listWorkType",
	saveWorkPool:baseUrl+"app/work.saveWorkPool",
	listWorkTask:baseUrl+"app/work.listWorkTask",
	listWorkPool:baseUrl+"app/work.listWorkPool",
	listWorkEvent:baseUrl+"app/workEvent.listWorkEvent",
	listWorkPoolFile:baseUrl+"app/work.listWorkPoolFile",
	listWorkCopy:baseUrl+"app/work.listWorkCopy",
	listWorkCycle:baseUrl+"app/workCycle.listWorkCycle",
	updateWorkPool:baseUrl+"app/work.updateWorkPool",
	deleteWorkPool:baseUrl+"app/work.deleteWorkPool",
	queryTaskWork:baseUrl+"app/work.queryTaskWork",
	finishWorkTask:baseUrl+"app/work.finishWorkTask",
	queryCopyWork:baseUrl+"app/work.queryCopyWork",
	finishWorkCopy:baseUrl+"app/work.finishWorkCopy",
	
	//todo 调用物联网接口
	getIotOpenApi:baseUrl+"app/iot.getOpenApi",
	postIotOpenApi:baseUrl+"app/iot.postOpenApi",
	
	
	
}
