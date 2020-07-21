(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return c}));var a=o(2),n=o(9),i=(o(0),o(173)),r={id:"doc3",title:"DAO Outline",sidebar_label:"DAO Outline"},l={id:"doc3",isDocsHomePage:!1,title:"DAO Outline",description:"Crypto Thor Challenge",source:"@site/docs/doc3.md",permalink:"/crypto-comix/docs/doc3",editUrl:"https://github.com/burrrata/crypto-comix/edit/master/website/docs/doc3.md",sidebar_label:"DAO Outline",sidebar:"someSidebar",previous:{title:"Design Goals",permalink:"/crypto-comix/docs/doc2"},next:{title:"DAO Demo",permalink:"/crypto-comix/docs/doc4"}},s=[{value:"Tokens",id:"tokens",children:[{value:"Membership",id:"membership",children:[]},{value:"Rewards",id:"rewards",children:[]}]},{value:"Capital Allocation",id:"capital-allocation",children:[]},{value:"Non-capital votes",id:"non-capital-votes",children:[]},{value:"DAO Design TL;DR:",id:"dao-design-tldr",children:[]}],b={rightToc:s};function c(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/c9o0SJv.jpg",alt:"Crypto Thor Challenge"}))),Object(i.b)("h2",{id:"tokens"},"Tokens"),Object(i.b)("p",null,"Cooperatives are typically structured where each member has a vote, and votes do not have magnitude. CryptoComix, however, also wants to reward contributors based on their time, effort, and patronage to the shop. This means that we need two tokens! One for co-op membership and one for rewards."),Object(i.b)("h3",{id:"membership"},"Membership"),Object(i.b)("p",null,"Membership tokens (",Object(i.b)("inlineCode",{parentName:"p"},"MBR"),") are limited to 1 per account, they are non-transferable, and they do not have magnitude."),Object(i.b)("p",null,"There are many perks to being a member of CryptoComix! They include, but are not limited to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"10% off all purchases (",Object(i.b)("em",{parentName:"li"},"managed off-chain"),")."),Object(i.b)("li",{parentName:"ul"},"Access to exclusive members-only sales (",Object(i.b)("em",{parentName:"li"},"managed off-chain"),")."),Object(i.b)("li",{parentName:"ul"},"First right of refusal for new products and events (",Object(i.b)("em",{parentName:"li"},"managed off-chain"),")."),Object(i.b)("li",{parentName:"ul"},"The ability to engage in CryptoComix governance, including distributions of capital in the member's pool (",Object(i.b)("em",{parentName:"li"},"on-chain DAO vote"),")."),Object(i.b)("li",{parentName:"ul"},"The ability to earn TOKENs for contributions of time or capital (see ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"###Contributing"}),"contributing")," section) (",Object(i.b)("em",{parentName:"li"},"on-chain DAO votes/transfers"),").")),Object(i.b)("h3",{id:"rewards"},"Rewards"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"TOKEN")," (cool name TBD) is the reward token of CryptoComix. ",Object(i.b)("inlineCode",{parentName:"p"},"TOKEN")," is non-transferable and only members can hold ",Object(i.b)("inlineCode",{parentName:"p"},"TOKEN"),"."),Object(i.b)("p",null,"There are many ways to earn ",Object(i.b)("inlineCode",{parentName:"p"},"TOKEN"),"! They include, but are not limited to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"1 CryptoComix ",Object(i.b)("inlineCode",{parentName:"li"},"TOKEN")," for every dollar spent at CrytpoComix."),Object(i.b)("li",{parentName:"ul"},"The ability to redeem ",Object(i.b)("inlineCode",{parentName:"li"},"TOKEN"),"s in exchange for a proportional amount of capital in the CryptoComix members pool.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Non-members can still shop at CryptoComix, however, they will not receive any of the perks above for their patronage.")),Object(i.b)("h2",{id:"capital-allocation"},"Capital Allocation"),Object(i.b)("p",null,"All CryptoComix revenues will go into the CryptoComix treasury. From there, members can choose how they want to allocate it. This might look like a monthly or yearly budget for various departments and initiatives, including the CryptoComix members redemption pool. In this way members can choose if they want to use capital to support operations, community projects, or to give members a bonus."),Object(i.b)("p",null,"To make high level decisions CryptoComix members might use a mechanism such as ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/1Hive/conviction-voting-app/"}),"conviction voting")," to signal their preference towards various initiatives. In this case the amount of signalling required to pass votes would be dependent on the proportional amount of the treasury that the vote would move. Smaller proposals would need less support, whereas larger ones (say monthly/yearly budgets) would require more support."),Object(i.b)("p",null,"In the event that conviction voting is not yet available, a time-boxed voting app (such as the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aragon/aragon-apps/blob/master/apps/voting/"}),"default Aragon voting app"),") could be used."),Object(i.b)("p",null,"Regardless of the voting app used, budgetting decisions could be made at the cooperative level (1 member 1 vote via ",Object(i.b)("inlineCode",{parentName:"p"},"MBR"),"). From there funds would be sent to separate pools (DAOs, Colonies, multi-sigs, etc) to be distributed as needed. This gives every member in the cooperative a voice in the high level operations of the cooperative, but everyone doesn't need to weigh in on every decision every day."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When a decision is made to fund tasks and/or projects capital would be allocated into mechanisms such as a team DAO, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://colony.io/"}),"Colony"),", ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://colony.io/"}),"bounties"),", or a ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://gnosis-safe.io/"}),"multi-sig")," in order to allow team leaders to get stuff done."),Object(i.b)("li",{parentName:"ul"},"When a decision is made to give capital back to members it would be send to the membership pool where TOKEN holders would be allowed to redeem their TOKENs for a proportional share of the pool.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Members determine high level capital allocation. This creates a balance of power between members (",Object(i.b)("inlineCode",{parentName:"p"},"MBR"),") and contributors (",Object(i.b)("inlineCode",{parentName:"p"},"TOKEN"),"). We expect many members to be contributors and vice versa, but separating the two ensures a democratic system of governance.")),Object(i.b)("h2",{id:"non-capital-votes"},"Non-capital votes"),Object(i.b)("p",null,"If members want to create votes that do not allocate capital they can do so by submitting a text proposal to the DAO for members to vote on. These proposals are non-binding unless they are modifying the cooperative's operating agreement."),Object(i.b)("h2",{id:"dao-design-tldr"},"DAO Design TL;DR:"),Object(i.b)("p",null,"Aragon Membership template with a ",Object(i.b)("inlineCode",{parentName:"p"},"MBR")," token."),Object(i.b)("p",null,"Add a non-transferable ",Object(i.b)("inlineCode",{parentName:"p"},"TOKEN")," token that has magnitude. Then add a vault with redemptions that's tied to the ",Object(i.b)("inlineCode",{parentName:"p"},"TOKEN"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MBR")," votes are the root authority in the cooperative. This includes, but is not limited to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Minting/burning of ",Object(i.b)("inlineCode",{parentName:"li"},"MBR")," tokens."),Object(i.b)("li",{parentName:"ul"},"Minting/burning of ",Object(i.b)("inlineCode",{parentName:"li"},"TOKEN")," tokens."),Object(i.b)("li",{parentName:"ul"},"Transfers of tokens from the main DAO vault to secondary funding mechanisms (to do work or reward ",Object(i.b)("inlineCode",{parentName:"li"},"TOKEN")," contributors).")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: while we could set this up as two separate DAOs (Membership and Moloch), giving ",Object(i.b)("inlineCode",{parentName:"p"},"MBR")," tokens control over ",Object(i.b)("inlineCode",{parentName:"p"},"TOKEN")," minting/burning ensures that a concentration of power in the ",Object(i.b)("inlineCode",{parentName:"p"},"TOKEN")," DAO won't skew incentives/governance for the entire cooperative (esp when it comes to member rewards).")))}c.isMDXComponent=!0}}]);