(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},15:function(e,t,a){e.exports=a.p+"static/media/logo.9e5086af.png"},18:function(e,t,a){e.exports=a(30)},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),s=a.n(r),o=a(32),l=(a(24),a(10)),i=a(5),u=a(6),h=a(8),d=a(7),p=a(9),m=a(33),f=a(31),v=(a(11),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={addedToList:a.props.addedToList},a.takeAwayBtns=function(e,t){a.setState({addedToList:!0},t(e))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"movie"},c.a.createElement("div",null,c.a.createElement("img",{src:this.props.poster,alt:"poster",className:"posters"})),this.props.title,c.a.createElement("div",null,!0===!this.state.addedToList&&c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return e.takeAwayBtns(e.props,e.props.watchedAlreadyFunc)}},"Watched"),c.a.createElement("button",{onClick:function(){return e.takeAwayBtns(e.props,e.props.watchLaterFunc)}},"Watch Later"))))}}]),t}(n.Component)),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={search:"",lastSearch:"",page:1,results:[],HOST:"https://www.omdbapi.com/",API_KEY:"62f9260f"},a.updateSearch=function(e){a.setState({search:e.target.value})},a.searchForMovies=function(e){e.preventDefault(),a.setState({page:1,lastSearch:a.state.search},function(){a.getInfo(a.state.search)})},a.getInfo=function(e){a.setState({results:[]}),fetch("".concat(a.state.HOST,"?s=").concat(e,"&apikey=").concat(a.state.API_KEY,"&page=").concat(a.state.page)).then(function(e){return e.json()}).then(function(e){e.Search&&e.Search.forEach(function(e){a.setState(function(t){return{results:[].concat(Object(l.a)(t.results),[e])}})})}).then(a.setState({search:""})).then(function(){0===a.state.results.length?a.setState({noResults:!0}):a.setState({noResults:!1})})},a.nextPage=function(){a.setState({page:a.state.page+1},function(){a.getInfo(a.state.lastSearch)})},a.lastPage=function(){a.setState({page:a.state.page-1},function(){a.getInfo(a.state.lastSearch)})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"search"},c.a.createElement("div",null,"search for a movie"),c.a.createElement("form",{onSubmit:this.searchForMovies},c.a.createElement("input",{type:"text",placeholder:"search for movie here",onChange:this.updateSearch,value:this.state.search}),c.a.createElement("button",{type:"submit"},"Search")),this.state.results.map(function(t,a){return c.a.createElement(v,{key:a,id:t.imdbID,title:t.Title,poster:t.Poster,watchedAlreadyFunc:e.props.watchedAlreadyFunc,watchLaterFunc:e.props.watchLaterFunc})}),this.state.page>1&&c.a.createElement("button",{type:"button",onClick:function(){return e.lastPage()}},"Last Page"),this.state.results.length>0&&c.a.createElement("button",{type:"button",onClick:function(){return e.nextPage()}},"Next Page"),!0===this.state.noResults&&c.a.createElement("div",null,c.a.createElement("div",null,"sorry no results for ",this.state.lastSearch),c.a.createElement("div",null,"Please try searching for something else")))}}]),t}(n.Component),E=a(15),b=a.n(E),g=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"lists"},this.props.watchedMovies.length>0&&c.a.createElement("h3",null,"Watched Movies"),c.a.createElement("ul",null,this.props.watchedMovies.map(function(e,t){return c.a.createElement("li",null,c.a.createElement(v,{key:e.id,poster:e.poster,title:e.title,addedToList:!0}))})),this.props.watchLaters.length>0&&c.a.createElement("h3",null,"Watch Later"),c.a.createElement("ul",null,this.props.watchLaters.map(function(e,t){return c.a.createElement("li",null,c.a.createElement(v,{key:e.id,poster:e.poster,title:e.title,addedToList:e.addedToList}))})))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={watchedMovies:[],watchLaters:[]},a.watchedAlreadyFunc=function(e){var t=Object.assign({key:e.id,addedToList:!0},e);a.setState(function(e){return{watchedMovies:[t].concat(Object(l.a)(e.watchedMovies))}})},a.watchLaterFunc=function(e){var t=Object.assign({key:e.id,addedToList:!0},e);a.setState(function(e){return{watchLaters:[t].concat(Object(l.a)(e.watchLaters))}})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("img",{src:b.a,alt:"logo",className:"App-logo"}),c.a.createElement(m.a,{exact:!0,path:"/",render:function(){return c.a.createElement("div",null,c.a.createElement(f.a,{to:"/search",className:"link"},"go to search"),c.a.createElement("div",null,"welcome back"),c.a.createElement(g,{watchedMovies:e.state.watchedMovies,watchLaters:e.state.watchLaters}))}}),c.a.createElement(m.a,{exact:!0,path:"/search",render:function(){return c.a.createElement("div",null,c.a.createElement(f.a,{to:"/",className:"link"},"go to home"),c.a.createElement(w,{watchedAlreadyFunc:e.watchedAlreadyFunc,watchLaterFunc:e.watchLaterFunc,watchedMovies:e.state.watchedMovies,watchLaters:e.state.watchLaters}))}}))}}]),t}(n.Component);s.a.render(c.a.createElement(o.a,{basename:"/movie-database"},c.a.createElement(y,null)),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.b727e25a.chunk.js.map