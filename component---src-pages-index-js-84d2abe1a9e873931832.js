(window.webpackJsonp=window.webpackJsonp||[]).push([[8,6,7,9],{"16l3":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),A=a("7vrA"),r=a("3Z9Z"),c=a("JI6e"),i=a("9eSz"),o=a.n(i),s=a("Wbzz"),m=[{name:"stats on sight",url:"https://devpost.com/software/stats-on-sight",description:"augmented reality app featuring live game data of NHL games",tech:["ios","swift","ARKit"]},{name:"abode",url:"https://devpost.com/software/abode-tn9hc8",description:"chores and expense tracking for roommates",tech:["ios","swift"]},{name:"check mates",description:"social media application to peer pressure friends to go to the gym",tech:["ios","swift","firebase"]},{name:"alexlaw.me",description:"personal website",tech:["react","css"]}],u=a("2qIC"),p=a("Bl7J");t.default=function(){var e=Object(s.useStaticQuery)("1591017346");Object(n.useEffect)((function(){document.title="Projects — Alex Law"}),[]);return l.a.createElement(p.a,null,l.a.createElement(A.a,{className:"vh-100 projects-container",fluid:"true"},l.a.createElement(r.a,{sm:2,style:{display:"flex",flex:1,alignItems:"center",justifyContent:"space-between"}},l.a.createElement(c.a,{xs:3},l.a.createElement(o.a,{className:"projects-img",style:{borderRadius:"0px 10px 10px 0px",maxWidth:500},fluid:e.file.childImageSharp.fluid,alt:"image"})),l.a.createElement(c.a,{xs:8},l.a.createElement(r.a,{xs:1,sm:2},m&&m.map((function(e){return function(e){return l.a.createElement("div",{className:"project-item",key:e.name},l.a.createElement("a",{style:{display:"inline-block",marginBottom:18},href:e.url,target:"_blank",rel:"noreferrer"},e.name),l.a.createElement(u.a,{secondary:l.a.createElement(r.a,null,e.tech.map((function(e){return l.a.createElement("p",{style:{padding:"0px 15px"},key:e},e)})))},l.a.createElement("p",{className:"project-description"},e.description)))}(e)})))))))}},"3XHS":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),A=a("Wbzz"),r=a("7vrA"),c=a("JI6e"),i=a("3Z9Z"),o=a("9eSz"),s=a.n(o),m=a("2qIC"),u=a("Bl7J");t.default=function(){var e=Object(n.useState)(void 0),t=e[0],a=e[1],o=Object(n.useState)(!1),p=o[0],d=o[1],f=Object(A.useStaticQuery)("1605282791");Object(n.useEffect)((function(){document.title="About — Alex Law",fetch("https://accounts.spotify.com/api/token",{method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"refresh_token",refresh_token:"AQBkA0Z5pyep_amhaIBGxwnNLy_GPN0VVrzXnFKb799OhFbZTnTBF2uAF_rgDfoq6NzWOaIlF6mtCK_XH9aBX5XnJJ-jbaEWy-Mo8eYh6Nr0Hea8DupZZ7NnsALvqvrbSOE",client_id:"d36191afeefc45ddbe74670b776e5ee4",client_secret:"adbb40111d4446249ddca8ef10f002fa"})}).then((function(e){return e.json()})).then((function(e){var t;(t=e.access_token,fetch("https://api.spotify.com/v1/me/player/currently-playing?market=CA",{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){if(e)return e.json()})).then((function(e){if(e&&e.item)return e.item})).catch((function(e){console.error(e)}))).then((function(t){t?(d(!0),a({name:t.name.toLowerCase(),artist:t.artists[0].name.toLowerCase()})):function(e){return fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1",{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){if(e&&e.items&&e.items.length>0)return e.items[0].track})).catch((function(e){console.error(e)}))}(e.access_token).then((function(e){e&&(d(!1),a({name:e.name.toLowerCase(),artist:e.artists[0].name.toLowerCase()}))}))}))}))}),[]);var g=function(){return l.a.createElement(c.a,{style:{maxWidth:600}},l.a.createElement("p",null,"im a recent computer science and microbiology & immunology grad from the university of british columbia currently working as a software engineer at amazon"),l.a.createElement("p",null,"full stack web and ios developer with a subtle passion for design with previous experience at apple and rbc"),l.a.createElement("br",null),l.a.createElement("p",null,"also an amateur cook, nature enthusiast and big time hockey and formula one fan"),t&&p&&l.a.createElement("p",{style:{marginBottom:0}},"currently jamming out to "+t.name+" by "+t.artist),t&&!p&&l.a.createElement("p",{style:{marginBottom:0}},"last jammed out to "+t.name+" by "+t.artist))};return l.a.createElement(u.a,null,l.a.createElement(r.a,{style:{maxWidth:1110},className:"vh-100",fluid:!0},l.a.createElement(c.a,{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"}},l.a.createElement("div",null),l.a.createElement(i.a,{xs:1,sm:2,style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(s.a,{className:"about-headshot",style:{borderRadius:150},fluid:f.headShot.childImageSharp.fluid,alt:"headshot"})),l.a.createElement(m.a,null,l.a.createElement(g,null))),l.a.createElement(s.a,{className:"about-img",style:{borderRadius:"10px 10px 0px 0px"},fluid:f.aerialbg.childImageSharp.fluid,alt:"image"}))))}},"4Fkd":function(e,t,a){},GQEG:function(e,t){e.exports="data:image/png;base64,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"},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),A=a("YwZP"),r=(a("4Fkd"),a("q4sD"),a("zldw")),c=a("3XHS"),i=a("16l3");t.default=function(){return l.a.createElement(A.Router,{path:"/app"},l.a.createElement(r.default,{path:"/"}),l.a.createElement(c.default,{path:"/about"}),l.a.createElement(i.default,{path:"/projects"}))}},W2si:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANpSURBVHic7Zo9SBxBFMd/c56I+AGiKEgsBAsRsdAUNpIijY1pLKIGBEG0EyxSpdIqlZWVpJCAhVWwSCUBGwtRLCRICClSRENEEYwxiMZNce/Ceu7O3nm3+87s/uE1M/Pe/+OW424Z4zgOcUZKW4A2kgC0BWgjCUBbgDaSALQFaCPttWiMaQEeAz1AVaSKSo9LYA/YcRznx51dx3H+FdAL7ALOf1q7QO8tzy7zc8BVGYgMu66AuVsBAKNlICzqGs3+DWgGjstAUNR1DDSngSmgEW8cAavAic9+uaMReE7mQ/bamwJYw57UT2DM/cXxEAoYE+02b2sABwGHsvUGqNY2lofxatGaj6cD8jyYrY9Al7ZJi/ku0ViIJ8/Fz5aGX8CEtlkP8xOizU+3nyfPxTpgJSC5t0BtGRivFS02rSviKb8AXMMngQvL4E9Aj6L5HtHgp+8CmHSdLywAaeoG9i0kv4FpBfPTwu2nax/ozukpPABprAGWAx6zVaA+AuP1wmXTsgzUePTeLwDXgHHg3EL8BegL0XyfcPjxnwPjlv7iApAhnWT+XvqJuARmQjA/I7P9ePeAzoAZxQcgg6qBpYDH8B3QUALjDTLLxrVEHj/SShaAa+AIcGYR9hXoL8J8v8zwm38GjBQwr7QByNAO7C9RroCXgClgppEe2/uJXaCjQK2lD0AGVwGLAY/pe6Apj1lNctY2axGouofOcAJwEQwDpxbh34ABS/+AnPHrPwWGi9AXbgBC0g5sWUxcA6+AlKsnJWvXlr4toL1IbeEHIESVwELAY7wOtEitB5xdACpLoCuaAFyEQ2TeJvkZ+y7lt38CDJVQT7QBCGkbsBnwCXvVJtBWYi3RByDEaeA1cJOH8Rs5mw5Bh04ALgGDZF60+pk/AgZD5NcNQES0AhsevBtAa8jc+gGIkApgHvgjNQ9URMB7x6vJpuCG4zgmdy0MGGOeCt+HiPjueFUNIGp4BRD7+wFJANoCtJEEoC1AG0kA2gK0kQSgLUAbKeAwd9EY06egJVT4eDpMATseG7PGmIqQNUUG8TLrsbWTBraBZzkbL4AnxphVMvdsHjLqyFyUeuSxtw0xvyaX/Z8c34uSrpcF8b0q6wohdpeljRi/hThdl/cMIE5IfglqC9BGEoC2AG0kAWgL0EbsA/gLrABGjBuJo78AAAAASUVORK5CYII="},q4sD:function(e,t,a){},zOWB:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFnSURBVFiF7dW9S1tRGMfxT6QYhRa7uUZcTCwdHKTg4tJB8Q/oJAWH0rmTf0HpInR16aIoiEXEDqlD1zo4SifBtQHF0hdJoF6Hm0BIc65pOMl0f3C495znec7zvc89L6Qqo4ob1PAeDw1JZfxG0tG+4sEwAKpdkrfaq2EA/MkA2Bp08hFp+UPKskUD2AnYEuwOGgAe4dS/5X83jOSF5nMUr7GIn9iWLs5cA1cBs5gL2A/xo63/HFNd/C7wufn+GGtYRkm6nmo4xwGOUG8PXhc+ByodifYDfh+b9pfSNRSaL8E3zLcmHAl8eT96gw/uv0NmpNWqxAR4irf/4T+BTeJdNtN9xCzgWcxf0K4GbnvwW4oNsIcnKGIcK/ie4R+1Al/wAmfNfgOfsJoRU4oJsKF72Y9xHYiZjAlwEhhPpJddN43FAkhwlWG/DIwXYwH8wt8Mez1kiFmBLAW35KDOgZ6VA+QAOUAOcAfj61+H23WbLAAAAABJRU5ErkJggg=="},zldw:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),A=a("Wbzz"),r=a("JI6e"),c=a("7vrA"),i=a("3Z9Z"),o=a("9eSz"),s=a.n(o),m=a("2qIC"),u=function(e){var t=e.link,a=e.source,n=e.alt;return l.a.createElement("a",{style:{margin:8},href:t,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{className:"iconLink",src:a,alt:n}))},p=a("zOWB"),d=a.n(p),f=a("GQEG"),g=a.n(f),h=a("W2si"),B=a.n(h),E=function(){return l.a.createElement(i.a,null,l.a.createElement(u,{link:"https://www.linkedin.com/in/alexcwlaw",source:d.a,alt:"linkedin"}),l.a.createElement(u,{link:"https://www.github.com/acwlaw",source:g.a,alt:"github"}),l.a.createElement(u,{link:"mailto:alex.law96@gmail.com",source:B.a,alt:"email"}))},w=a("Bl7J");t.default=function(){var e=Object(A.useStaticQuery)("3027304486");Object(n.useEffect)((function(){document.title="Alex Law"}),[]);var t=function(){return l.a.createElement(r.a,null,l.a.createElement("p",null,"hi, my name is alex law"),l.a.createElement("p",{style:{marginBottom:0}},"welcome"))};return l.a.createElement(w.a,null,l.a.createElement(c.a,{className:"vh-100",fluid:"true",style:{display:"flex",alignItems:"center"}},l.a.createElement(i.a,{style:{display:"flex",flex:1,alignItems:"center"}},l.a.createElement("div",{className:"home-spacer"}),l.a.createElement(r.a,{style:{flex:1}},l.a.createElement(m.a,{secondary:l.a.createElement(E,null)},l.a.createElement(t,null))),l.a.createElement(s.a,{className:"home-img",style:{borderRadius:"10px 0px 0px 10px",height:300},fluid:e.file.childImageSharp.fluid,alt:"image"}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-84d2abe1a9e873931832.js.map