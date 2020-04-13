(this["webpackJsonpreact-05"]=this["webpackJsonpreact-05"]||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),c=a.n(i),o=a(7),l=a.n(o),s=a(15),u=a(2),m=a(3),d=a(4),p=a(5),v=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value.toUpperCase()})},e.onInputSubmit=function(t){t.preventDefault(),console.log("onInputSubmit() callback ... Submitted with value: ".concat(e.state.term)),e.props.onFormSubmit(e.state.term)},e}return Object(m.a)(a,[{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",{className:"search-bar ui segment"},r.a.createElement("form",{className:"ui form",onSubmit:this.onInputSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Video Search"),r.a.createElement("input",{type:"text",value:this.state.term,onChange:this.onInputChange}))))}}]),a}(r.a.Component),h=a(16),f=a.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:15,key:"AIzaSyBwu7gddvbjSEAzsJRo7nJCgXLpLLDqMOo"}}),b=(a(41),function(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement("div",{className:"video-item item",onClick:function(){return a(t)}},r.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},t.snippet.title)))}),S=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return r.a.createElement(b,{key:e.id.videoId,video:e,onVideoSelect:a})}));return r.a.createElement("div",{className:"ui divided relaxed list"},n)},E=function(e){var t=e.video;if(!t)return r.a.createElement("div",null,"loading");var a="https://youtube.com/embed/".concat(t.id.videoId,"?&autoplay=1");return r.a.createElement("div",null,r.a.createElement("div",{className:"ui embed"},r.a.createElement("iframe",{title:"video player",src:a})),r.a.createElement("div",{className:"ui segment"},r.a.createElement("h4",{className:"ui header"},t.snippet.title),r.a.createElement("p",null,t.snippet.description)))},g=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={videos:[],selectedVideo:null},e.getSearchBarState=function(){var t=Object(s.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("getSearchBarState() callback ... Got value: ".concat(a)),t.next=3,f.get("/search",{params:{q:a}}).then((function(t){return e.setState({videos:t.data.items,selectedVideo:t.data.items[0]})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){console.log("onVideoSelect(video):",t),e.setState({selectedVideo:t})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getSearchBarState("Best Drum &amp; Bass ")}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(v,{onFormSubmit:this.getSearchBarState}),r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"eleven wide column"},r.a.createElement(E,{video:this.state.selectedVideo})),r.a.createElement("div",{className:"five wide column"},r.a.createElement(S,{videos:this.state.videos,onVideoSelect:this.onVideoSelect})))))}}]),a}(r.a.Component);c.a.render(r.a.createElement(g,null),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5f3ee28b.chunk.js.map