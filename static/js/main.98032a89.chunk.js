(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"assets/images/matisse1.jpg"},{"id":2,"image":"assets/images/matisse2.jpg"},{"id":3,"image":"assets/images/matisse3.jpg"},{"id":4,"image":"assets/images/matisse4.jpg"},{"id":5,"image":"assets/images/matisse5.jpg"},{"id":6,"image":"assets/images/matisse6.jpg"},{"id":7,"image":"assets/images/matisse7.jpg"},{"id":8,"image":"assets/images/matisse8.jpg"},{"id":9,"image":"assets/images/matisse9.jpg"},{"id":10,"image":"assets/images/matisse10.jpg"},{"id":11,"image":"assets/images/matisse11.jpg"},{"id":12,"image":"assets/images/matisse12.jpg"}]')},,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(2),c=a.n(n),r=a(7),m=a(3),g=a(4),o=a(8),l=a(5),h=a(9);a(15);var u=function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.handleClick(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.id,src:e.image})))};a(16);var d=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(17);var f=function(e){return i.a.createElement("h1",{className:"title"},e.children)},p=a(6),j=function(e){function t(){var e,a;Object(m.a)(this,t);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={images:[],clicked:[],score:0,highScore:0},a.shuffle=function(e){for(var t=0;t<e.length;t++){var a=Math.floor(Math.random()*e.length),s=e[t],i=e[a];e[t]=i,e[a]=s}return e},a.handleClick=function(e){var t=a.state.clicked.includes(e);console.log(t),t?a.setState({clicked:[],images:a.shuffle(a.state.images),score:0,highScore:a.state.highScore>a.state.score?a.state.highScore:a.state.score},(function(){return localStorage.setItem("highScore",a.state.highScore)})):a.setState({clicked:[].concat(Object(r.a)(a.state.clicked),[e]),images:a.shuffle(a.state.images),score:a.state.score+1},(function(){return console.log(a.state)}))},a}return Object(h.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.setState({images:this.shuffle(p),highScore:parseInt(localStorage.getItem("highScore"))||0})}},{key:"render",value:function(){var e=this;return i.a.createElement(d,null,i.a.createElement(f,null,"Matisse Clicky Game"),i.a.createElement(f,null," Current Score: ",this.state.score," High Score: ",this.state.highScore),this.state.images.map((function(t){return i.a.createElement(u,{handleClick:e.handleClick,id:t.id,key:t.id,image:t.image})})))}}]),t}(s.Component);a(18);c.a.render(i.a.createElement(j,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.98032a89.chunk.js.map