(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,a,t){},134:function(e,a,t){},147:function(e,a,t){},148:function(e,a,t){},151:function(e,a,t){},152:function(e,a,t){},169:function(e,a,t){},178:function(e,a,t){},179:function(e,a,t){},180:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(28),l=t.n(r),o=(t(99),t(25)),c=t(10),s=t(11),m=t(13),u=t(12),d=t(14),p=t(39),b=t.n(p),E=t(15),h=t.n(E),f=t(2),g=t.n(f),v=t(19),C=t(40),N=(t(104),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"FooterContainer"},i.a.createElement(b.a,{fluid:!0},i.a.createElement(h.a,{className:"IconRow"},i.a.createElement(g.a,{sm:3,className:"my-auto"},i.a.createElement("div",{className:"CopyrightText"},"Copyright \xa9 UBC Subbots 2018")),i.a.createElement(g.a,null,i.a.createElement("a",{href:"https://www.facebook.com/ubc.subbots/"},i.a.createElement(v.a,{className:"Icon",icon:C.a,size:"2x"})),i.a.createElement("a",{href:"https://github.com/ubc-subbots"},i.a.createElement(v.a,{className:"Icon",icon:C.b,size:"2x"})),i.a.createElement("a",{href:"https://ca.linkedin.com/company/ubc-subbots"},i.a.createElement(v.a,{className:"Icon",icon:C.c,size:"2x"}))),i.a.createElement(g.a,{sm:3}))))}}]),a}(i.a.Component)),y=t(41),j=t.n(y),O=t(31),q=t.n(O),S=t(90),x=t.n(S),k=t(24),w=t.n(k),T=t(34),L=t.n(T),B=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(L.a,{show:this.props.isOpen},i.a.createElement(L.a.Header,{closeButton:!0},i.a.createElement(L.a.Title,null,"Modal title")),i.a.createElement(L.a.Body,null,i.a.createElement("p",null,"Modal body text goes here.")),i.a.createElement(L.a.Footer,null,i.a.createElement(w.a,{variant:"secondary"},"Close"),i.a.createElement(w.a,{variant:"primary"},"Save changes")))}}]),a}(i.a.Component),F=t(20),A=(t(134),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={navbarClass:"HeaderContainer",navbrandClass:"NavBrand",isSignInOpened:!1},window.onscroll=function(){document.body.scrollTop>60||document.documentElement.scrollTop>60?(t.setState({navbarClass:"HeaderContainerShrunk"}),t.setState({navbrandClass:"NavBrandShrunk"})):(t.setState({navbarClass:"HeaderContainer"}),t.setState({navbrandClass:"NavBrand"}))},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(j.a,{fixed:"top",expand:"lg",className:this.state.navbarClass},i.a.createElement(j.a.Brand,{className:"NavBrandContainer"},i.a.createElement(o.b,{to:"/",className:this.state.navbrandClass},i.a.createElement(v.a,{className:"SubbotsLogo",icon:F.b,size:"lg"})," UBC Subbots")),i.a.createElement(j.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(q.a,{className:"mr-auto"},i.a.createElement(q.a.Link,{className:"NavContainer"},i.a.createElement(o.b,{to:"/",className:"NavLink"},"Home")),i.a.createElement(q.a.Link,{className:"NavContainer"},i.a.createElement(o.b,{to:"/projects",className:"NavLink"},"Projects")),i.a.createElement(q.a.Link,{className:"NavContainer"},i.a.createElement(o.b,{to:"/teams",className:"NavLink"},"The Teams")),i.a.createElement(q.a.Link,{className:"NavContainer"},i.a.createElement(o.b,{to:"/join",className:"NavLink"},"Join Us")),i.a.createElement(q.a.Link,{className:"NavContainer"},i.a.createElement(o.b,{to:"/sponsors",className:"NavLink"},"Sponsorship"))),i.a.createElement(w.a,{className:"SignInButton",variant:"outline-warning",onClick:function(){return e.setState({isSignInOpened:!0})}},"Member Sign In"),i.a.createElement(B,{show:this.state.isSignInOpened}),i.a.createElement("a",{href:"https://www.ubc.ca/"},i.a.createElement(x.a,{className:"UBCLogo",src:"/subbots-website/images/ubc-logo.png"}))))}}]),a}(i.a.Component));t(147);function I(e){return i.a.createElement("div",{className:"ImageContainer"},i.a.createElement("img",{className:"Image",src:"/subbots-website/images/"+e.src,alt:"Error!"}))}t(148);var M=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h.a,null,i.a.createElement(g.a,{sm:1}),i.a.createElement(g.a,{sm:10}),i.a.createElement(g.a,{sm:1})),i.a.createElement(h.a,null,i.a.createElement(g.a,{sm:1}),i.a.createElement(g.a,{sm:10},i.a.createElement(I,{src:this.props.image})),i.a.createElement(g.a,{sm:1}),i.a.createElement("div",{className:"ViewHeaderTitle"},this.props.title)),i.a.createElement(h.a,null,i.a.createElement(g.a,{sm:1}),i.a.createElement(g.a,{s:10},i.a.createElement("div",{className:"ViewHeaderBlurb"},this.props.blurb)),i.a.createElement(g.a,{sm:1})),i.a.createElement("div",{className:"HeaderSeperator"}))}}]),a}(i.a.Component),_={FADE_DURATION:1600,ELECTRICAL_TEAM:"Electrical",SOFTWARE_TEAM:"Software",MECHANICAL_TEAM:"Mechanical"},H=t(91),R=t.n(H);function U(e){return i.a.createElement("div",null,i.a.createElement(R.a,{bottom:!0,duration:_.FADE_DURATION},i.a.createElement(b.a,{fluid:!0,className:"p-0"},e.children)))}t(151);function D(e){return i.a.createElement(w.a,{className:"ContactButton",variant:"warning"},i.a.createElement("div",{className:"ContactText"},i.a.createElement(v.a,{className:"MailIcon",icon:F.c,size:"lg"}),"Contact Us"))}var W=t(29),G=t(92),P={home:{image:"software.jpg",title:"Welcome To UBC Subbots",blurb:" (Home Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum.",pitch:{image:"mechanical.jpg",header:"Why Subbots?",body:" (Home Pitch) Lorem ipsum dolor sit amet, consectetur adipiscing elit,                sed do eiusmod tempor incididunt ut labore et dolore magna                aliqua. Ut enim ad minim veniam, quis nostrud exercitation                ullamco laboris nisi ut aliquip ex ea commodo consequat.                Duis aute irure dolor in reprehenderit in voluptate velit esse                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat                cupidatat non proident, sunt in culpa qui officia deserunt mollit                anim id est laborum. Excepteur sint occaecat cupidatat non proident,                 sunt in culpa qui officia deserunt mollit anim id est laborum."},goal:{image:"electrical.jpg",header:"Our Goal",body:" (Home Goals) Lorem ipsum dolor sit amet, consectetur adipiscing elit,                sed do eiusmod tempor incididunt ut labore et dolore magna                aliqua. Ut enim ad minim veniam, quis nostrud exercitation                ullamco laboris nisi ut aliquip ex ea commodo consequat.                Duis aute irure dolor in reprehenderit in voluptate velit esse                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat                cupidatat non proident, sunt in culpa qui officia deserunt mollit                anim id est laborum. Excepteur sint occaecat cupidatat non proident,                 sunt in culpa qui officia deserunt mollit anim id est laborum.                Duis aute irure dolor in reprehenderit in voluptate velit esse                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat                cupidatat non proident, sunt in culpa qui officia deserunt mollit                anim id est laborum. Excepteur sint occaecat cupidatat non proident,                 sunt in culpa qui officia deserunt mollit anim id est laborum."}},projects:{image:"mechanical.jpg",title:"See What We Make",blurb:" (Projects Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum."},teams:{image:"electrical.jpg",title:"See What Our Members Do",blurb:" (Teams Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum.",software:{blurb:" (Software Blurb) Lorem ipsum dolor sit amet, consectetur.",body:" (Software Body) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation                 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit                 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},electrical:{blurb:"(Electrical Blurb) Lorem ipsum dolor sit amet, consectetur.",body:" (Electrical Body) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation                 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit                 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},mechanical:{blurb:"(Mechanical Blurb) Lorem ipsum dolor sit amet, consectetur.",body:" (Mechanical Body) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation                 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit                 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}},join:{image:"software.jpg",title:"Become Part Of The Team",blurb:" (Join Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum."},sponsors:{image:"electrical.jpg",title:"See Who Makes Us Possible",blurb:" (Sponsors Blurb) Lorem ipsum dolor sit amet, consectetur adipiscing elit,            sed do eiusmod tempor incididunt ut labore et dolore magna            aliqua. Ut enim ad minim veniam, quis nostrud exercitation            ullamco laboris nisi ut aliquip ex ea commodo consequat.            Duis aute irure dolor in reprehenderit in voluptate velit esse            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat            cupidatat non proident, sunt in culpa qui officia deserunt mollit            anim id est laborum.",sponsor_list:[{image:"ubc_walter_gage.png",link:"http://waltergagebook.engineering.ubc.ca/walter-gage-memorial-bursary-in-engineering/"},{image:"subc.png",link:"https://subc.ca/"},{image:"ubc-applied-sciences-footer-logo.png",link:"https://apsc.ubc.ca/"},{image:"ubc-applied-sciences-footer-logo.png",link:"https://apsc.ubc.ca/"}]}},z=(t(152),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(U,null,i.a.createElement(M,{title:P.home.title,blurb:P.home.blurb,image:P.home.image}),i.a.createElement(h.a,null,i.a.createElement(g.a,{sm:1}),i.a.createElement(g.a,{sm:4},i.a.createElement(I,{src:P.home.pitch.image})),i.a.createElement(g.a,null,i.a.createElement("div",{className:"PitchHeader"},P.home.pitch.header),i.a.createElement("div",{className:"PitchBody"},P.home.pitch.body)),i.a.createElement(g.a,{sm:2})),i.a.createElement("div",{className:"ContentSeperatorTop"}),i.a.createElement("div",{className:"ContentContainer"},i.a.createElement("h4",{className:"GoalHeader"},i.a.createElement(v.a,{icon:F.e}),"  "+P.home.goal.header),i.a.createElement("hr",null),i.a.createElement(h.a,null,i.a.createElement(g.a,{sm:6},i.a.createElement("div",{className:"GoalBody"},P.home.goal.body)),i.a.createElement(g.a,{sm:6},i.a.createElement(I,{src:P.home.goal.image})))),i.a.createElement("div",{className:"ContentSeperatorBottom"}))}}]),a}(i.a.Component)),J=t(26),Y=t.n(J),V=t(7),K=t.n(V),Q=t(93),X=t.n(Q),Z=(t(169),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={validated:!1,first_name:"",last_name:"",email:"",year:0,team:"",reason:""},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"onFirstNameChange",value:function(e){this.setState({first_name:e.target.value})}},{key:"onLastNameChange",value:function(e){this.setState({last_name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onYearChange",value:function(e){this.setState({year:e.target.value})}},{key:"onTeamChange",value:function(e){this.setState({team:e.target.value})}},{key:"onReasonChange",value:function(e){this.setState({reason:e.target.value})}},{key:"onFormSubmit",value:function(e){if(e.preventDefault(),!0===e.currentTarget.checkValidity()){var a={first_name:this.state.first_name,last_name:this.state.last_name,email:this.state.email,year:this.state.year,team:this.state.team,reason:this.state.reason};X.a.post("/rest/join",a).then(function(e){console.log(e);var a=e.data.signee_email.status,t=e.data.subbot_email.status;a||t?!a&&t?alert("INFO: Subbots has recieved your infomation, but your personal confirmation failed to send"):a&&!t||alert("Success! Your application has been sent"):alert("ERROR: An unexpected email error has occured. Please try again in a few minutes")}).catch(function(e){console.log(e)})}else console.log("invalid form");this.setState({validated:!0})}},{key:"render",value:function(){return i.a.createElement(U,null,i.a.createElement(M,{title:P.join.title,blurb:P.join.blurb,image:P.join.image}),i.a.createElement(h.a,null,i.a.createElement(g.a,{sm:3}),i.a.createElement(g.a,{sm:6},i.a.createElement("div",{className:"JoinFormContainer"},i.a.createElement(Y.a,{className:"JoinFormCard"},i.a.createElement(Y.a.Header,{className:"JoinFormHeader"},"UBC Subbots 2019-2020 Application"),i.a.createElement(K.a,{noValidate:!0,validated:this.state.validated,className:"JoinForm",onSubmit:this.onFormSubmit.bind(this)},i.a.createElement(K.a.Row,null,i.a.createElement(K.a.Group,{as:g.a},i.a.createElement(K.a.Label,null,"First Name *"),i.a.createElement(K.a.Control,{onChange:this.onFirstNameChange.bind(this),placeholder:"Enter first name",required:!0}),i.a.createElement(K.a.Control.Feedback,{type:"invalid"},"Required Field")),i.a.createElement(K.a.Group,{as:g.a},i.a.createElement(K.a.Label,null,"Last Name * "),i.a.createElement(K.a.Control,{onChange:this.onLastNameChange.bind(this),placeholder:"Enter last name",required:!0}),i.a.createElement(K.a.Control.Feedback,{type:"invalid"},"Required Field"))),i.a.createElement(K.a.Group,{controlId:"formBasicEmail"},i.a.createElement(K.a.Label,null,"Email address * "),i.a.createElement(K.a.Control,{onChange:this.onEmailChange.bind(this),type:"email",placeholder:"Enter email",required:!0}),i.a.createElement(K.a.Control.Feedback,{type:"invalid"},"Required Field")),i.a.createElement(K.a.Row,null,i.a.createElement(K.a.Group,{as:g.a},i.a.createElement(K.a.Label,null,"Year *"),i.a.createElement(K.a.Control,{onChange:this.onYearChange.bind(this),as:"select",required:!0},i.a.createElement("option",{selected:!0,disabled:!0,hidden:!0}),i.a.createElement("option",null,"1"),i.a.createElement("option",null,"2"),i.a.createElement("option",null,"3"),i.a.createElement("option",null,"4"),i.a.createElement("option",null,"5"),i.a.createElement("option",null,"6")),i.a.createElement(K.a.Control.Feedback,{type:"invalid"},"Required Field")),i.a.createElement(K.a.Group,{as:g.a},i.a.createElement(K.a.Label,null,"Desired Team *"),i.a.createElement(K.a.Control,{onChange:this.onTeamChange.bind(this),as:"select",required:!0},i.a.createElement("option",{selected:!0,disabled:!0,hidden:!0}),i.a.createElement("option",null,_.ELECTRICAL_TEAM),i.a.createElement("option",null,_.SOFTWARE_TEAM),i.a.createElement("option",null,_.MECHANICAL_TEAM)),i.a.createElement(K.a.Control.Feedback,{type:"invalid"},"Required Field"))),i.a.createElement(K.a.Group,{controlId:"exampleForm.ControlTextarea1"},i.a.createElement(K.a.Label,null,"Reason for Application"),i.a.createElement(K.a.Control,{onChange:this.onReasonChange.bind(this),style:{resize:"none"},as:"textarea",rows:"4",placeholder:"Tell us why you want to join"})),i.a.createElement(w.a,{className:"PrimaryButton",variant:"warning",type:"submit"},i.a.createElement("div",{className:"ApplyButtonText"},"Apply")))))),i.a.createElement(g.a,{sm:3})))}}]),a}(i.a.Component)),$=(t(178),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(U,null,i.a.createElement(M,{title:P.projects.title,blurb:P.projects.blurb,image:P.projects.image}))}}]),a}(i.a.Component)),ee=(t(84),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(g.a,{sm:3},i.a.createElement("a",{href:this.props.link},i.a.createElement(Y.a,{className:"SponsorCard"},i.a.createElement(Y.a.Body,{className:"SponsorCardBody"},i.a.createElement("img",{className:"SponsorImage",src:"/subbots-website/sponsors/"+this.props.image,alt:"Sponsor"})))))}}]),a}(i.a.Component)),ae=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=P.sponsors.sponsor_list.map(function(e,a){return i.a.createElement(ee,{key:a,image:e.image,link:e.link})});return i.a.createElement(U,null,i.a.createElement(M,{title:P.sponsors.title,blurb:P.sponsors.blurb,image:P.sponsors.image}),i.a.createElement(h.a,null,i.a.createElement(g.a,{sm:2}),i.a.createElement(g.a,{sm:8},i.a.createElement(h.a,{className:"SponsorRow"},e)),i.a.createElement(g.a,{sm:2})))}}]),a}(i.a.Component),te=(t(85),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(i)))).icons={Software:F.d,Mechanical:F.f,Electrical:F.a},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(g.a,null,i.a.createElement(Y.a,{className:"TeamCard"},i.a.createElement(Y.a.Header,{className:"TeamCardHeader"},this.props.team),i.a.createElement(Y.a.Body,null,i.a.createElement(v.a,{className:"TeamIconLarge",icon:this.icons[this.props.team],size:"6x"}),i.a.createElement(Y.a.Text,{className:"TeamText"},P.teams[this.props.team.toLowerCase()].blurb),i.a.createElement(w.a,{className:"SecondaryButton",variant:"primary",href:"#"+this.props.team},"Learn More"))))}}]),a}(i.a.Component)),ne=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(i)))).icons={Software:F.d,Mechanical:F.f,Electrical:F.a},t.names={Software:"Software Team",Mechanical:"Mechanical Team",Electrical:"Electrical Team"},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{id:this.props.team,className:"HeaderBuffer"}),i.a.createElement(g.a,null,i.a.createElement("h3",{className:"TeamBodyHeader my-auto"},i.a.createElement(v.a,{className:"TeamIconSmall",icon:this.icons[this.props.team],size:"lg"}),this.names[this.props.team]),i.a.createElement("hr",null),i.a.createElement(h.a,null,i.a.createElement(g.a,{sm:6},i.a.createElement("h4",{className:"text-center"},"What We Do"),i.a.createElement("div",{className:"TeamBodyFrame"})),i.a.createElement(g.a,{sm:6},i.a.createElement("h4",{className:"text-center"},"What You'll Learn"),i.a.createElement("div",{className:"TeamBodyFrame"}))),i.a.createElement("div",{className:"TeamBodyText"},P.teams[this.props.team.toLowerCase()].body)))}}]),a}(i.a.Component),ie=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(U,null,i.a.createElement(M,{title:P.teams.title,blurb:P.teams.blurb,image:P.teams.image}),i.a.createElement(h.a,null,i.a.createElement(g.a,{sm:2}),i.a.createElement(g.a,{sm:8},i.a.createElement(h.a,null,i.a.createElement(te,{team:"Software"}),i.a.createElement(te,{team:"Electrical"}),i.a.createElement(te,{team:"Mechanical"}))),i.a.createElement(g.a,{sm:2})),i.a.createElement("div",{className:"ContentSeperatorTop"}),i.a.createElement("div",{className:"ContentContainer"},i.a.createElement(ne,{team:"Software"}),i.a.createElement(ne,{team:"Electrical"}),i.a.createElement(ne,{team:"Mechanical"})),i.a.createElement("div",{className:"ContentSeperatorBottom"}))}}]),a}(i.a.Component);function re(){return i.a.createElement("main",null,i.a.createElement(G.a,null),i.a.createElement(W.c,null,i.a.createElement(W.a,{exact:!0,path:"/",component:z}),i.a.createElement(W.a,{path:"/teams",component:ie}),i.a.createElement(W.a,{path:"/projects",component:$}),i.a.createElement(W.a,{path:"/sponsors",component:ae}),i.a.createElement(W.a,{path:"/join",component:Z})))}t(179);l.a.render(i.a.createElement(function(){return console.log("/subbots-website"),i.a.createElement("div",{className:"App"},i.a.createElement(o.a,{basename:"/subbots-website"},i.a.createElement(A,null),i.a.createElement(re,null),i.a.createElement(D,null),i.a.createElement(N,null)))},null),document.getElementById("root"))},84:function(e,a,t){},85:function(e,a,t){},94:function(e,a,t){e.exports=t(180)},99:function(e,a,t){}},[[94,1,2]]]);
//# sourceMappingURL=main.920f67f4.chunk.js.map