function TmIndexController(t,o,e,r,i){for(var l=this,n={slidesToShow:3,slidesToScroll:1,dots:!0,infinite:!1},c=i.topics(),s=[],a=[],u=0;u<c.length;++u)u>0&&u%2==0&&(s.push(a),a=[]),a.push(c[u]);a.length>0&&s.push(a),l.pairs=s,r(function(){$(".slick").slick(n);var t=function(){$(this).addClass("slick__subitem--hover"),$(".slick__subitem").not(this).addClass("slick__subitem--nothover")},o=function(){$(this).removeClass("slick__subitem--hover"),$(".slick__subitem").not(this).removeClass("slick__subitem--nothover")};$(".slick__subitem").hoverIntent(t,o)}),l.go=function(t){o.go("topic.info",{topicId:t})}}function TmTopicController(t,o,e){var r=this;r.topics=e.topics(),r.topics.forEach(function(t){console.log(t)}),r.selectedId=o.topicId;for(var i=0;i<r.topics.length-1;++i)if(r.topics[i].id==r.selectedId){r.afterSelectedId=r.topics[i+1].id;break}r.go=function(o){t.go("topic.info",{topicId:o})}}function TmTopicInfoController(t){console.log("INFO")}function TmTopicCourseController(t,o,e){var r=this;r.courses=e.courses(o.topicId),r.selected=o.courseId?o.courseId:r.courses[0].id,r.related=e.related(r.selected),r.go=function(o){t.go("topic.course",{courseId:o})}}function TmData(){var t=[{title:"Overview",id:1},{title:"Reporting and other notifications",id:2},{title:"Wastes",id:3},{title:"POPs",id:4},{title:"Chemicals",id:5},{title:"National plans and strategies",id:6}],o=function(t){var o=[];return angular.forEach([1,2,3,4,5],function(t){o.push({id:t,title:"Course "+t,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tempus nisi. Sed ullamcorper mauris eget venenatis tempor."})}),o},e=function(t){var o=[];return angular.forEach([1,2,3,4,5],function(t){o.push({id:t,topicId:t,title:"Related course "+t})}),o};return{topics:function(){return t},courses:o,related:e}}angular.module("TmApp",["ui.router"]),angular.module("TmApp").config(function(t,o){o.otherwise("/"),t.state("index",{url:"/",templateUrl:"partials/index.tmpl.html",controller:"tmIndexController as vm"}).state("topic",{url:"/topic/:topicId","abstract":!0,templateUrl:"partials/topic.tmpl.html",controller:"tmTopicController as vm"}).state("topic.info",{url:"",templateUrl:"partials/topic.info.tmpl.html",controller:"tmTopicInfoController as vm"}).state("topic.course",{url:"/course/:courseId",templateUrl:"partials/topic.course.tmpl.html",controller:"tmTopicCourceController as vm"})}),angular.module("TmApp").controller("tmIndexController",TmIndexController),angular.module("TmApp").service("tmDataService",TmData),angular.module("TmApp").controller("tmTopicController",TmTopicController),angular.module("TmApp").controller("tmTopicInfoController",TmTopicInfoController),angular.module("TmApp").controller("tmTopicCourceController",TmTopicCourseController);