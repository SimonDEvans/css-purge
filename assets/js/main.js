function setTop(){overviewTop=$("#headerOverview").offset().top-40,usageTop=$("#headerUsage").offset().top-40,globalTop=$("#headerGlobal").offset().top-40,localTop=$("#headerLocal").offset().top-40,libraryTop=$("#headerLibrary").offset().top-40,reportTop=$("#headerReport").offset().top-40,configTop=$("#headerConfig").offset().top-40}var gId=document.getElementById.bind(document),overviewTab=gId("overviewTab"),featuresTab=gId("featuresTab"),getStartedTab=gId("getStartedTab"),helpTab=gId("helpTab"),overviewTop=0,usageTop=0,globalTop=0,localTop=0,libraryTop=0,reportTop=0,configTop=0;$(function(){$(".underTheHoodLink").on("click",function(){$("#layoutHeader").animate({scrollTop:0},300),featuresTab.click()}),$(".gettingStartedLink").on("click",function(){$("#layoutHeader").animate({scrollTop:0},300),getStartedTab.click()}),$(".helpLink").on("click",function(){$("#layoutHeader").animate({scrollTop:0},300),helpTab.click()}),$("#menuBtn1, .footerOverview").on("click",function(){getStartedTab.click(),setTimeout(function(){0==overviewTop&&setTop(),$("#layoutHeader").animate({scrollTop:overviewTop},300)},100)}),$("#menuBtn2, footerUsage").on("click",function(){getStartedTab.click(),setTimeout(function(){0==usageTop&&setTop(),$("#layoutHeader").animate({scrollTop:usageTop},300)},100)}),$("#submenuBtn1").on("click",function(){getStartedTab.click(),0==globalTop&&setTop(),$("#layoutHeader").animate({scrollTop:globalTop},300)}),$("#submenuBtn2").on("click",function(){getStartedTab.click(),0==localTop&&setTop(),$("#layoutHeader").animate({scrollTop:localTop},300)}),$("#submenuBtn3").on("click",function(){getStartedTab.click(),0==libraryTop&&setTop(),$("#layoutHeader").animate({scrollTop:libraryTop},300)}),$("#menuBtn3, .footerReport").on("click",function(){getStartedTab.click(),setTimeout(function(){0==reportTop&&setTop(),$("#layoutHeader").animate({scrollTop:reportTop},300)},100)}),$("#menuBtn4, .configHeaderLink, .footerConfig").on("click",function(){getStartedTab.click(),setTimeout(function(){0==configTop&&setTop(),$("#layoutHeader").animate({scrollTop:configTop},300)},100)})});