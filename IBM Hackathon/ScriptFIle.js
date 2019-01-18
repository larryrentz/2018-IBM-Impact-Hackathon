//Apply Function
sync function applyingApplication(apply) {
   apply.application.traveler = apply.govt;
   let assetRegistry = await 
getAssetRegistry('org.blockchain.visa.Application');
   await assetRegistry.update(apply.application);
}

//Update Function
sync function updatingApplication(update) {
   update.application.traveler = update.govt;
   let assetRegistry = await 
getAssetRegistry('org.blockchain.visa.Application');
   await assetRegistry.update(update.application);
}

//Approve Function
sync function approvingApplication(approve) {
	approve.visa.govt = approve.traveler;
	let assetRegistry = await
getAssetRegistry('org.blockchain.visa.Visa');
	await assetRegistry.update(approve.visa);	
}

//Reject Function
sync function rejectingApplication(reject) {
   reject.application.govt = reject.traveler;
   let assetRegistry = await 
getAssetRegistry('org.blockchain.visa.Application');
   await assetRegistry.update(reject.application);
}
