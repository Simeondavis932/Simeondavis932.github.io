function goToDetails() {
  document.getElementById("welcome-page").classList.remove("active");
  document.getElementById("details-page").classList.add("active");
}

function claimCoupon() {
  alert("优惠券领取成功！");
  document.getElementById("details-page").classList.remove("active");
  document.getElementById("success-page").classList.add("active");
}

function goToCenter() {
  alert("跳转到卡券中心...");
  // 在实际应用中，这里可以导航到小程序的其他页面
}
