var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a;import{c as i}from"./mobile.020a3158.js";import{a as r,k as m,b as u,s as c,z as d,A as g,r as p,o as b,c as h,f,y as v,j as y}from"./vendor.ed841bd5.js";import"./index.6aaff52e.js";const{createDemo:j}=i("countup");var w=j({props:{},setup(){const e=r({customNumber:618,bgImage:"https://img10.360buyimg.com/imagetools/jfs/t1/133024/3/2251/2646/5ee7549aE8dc02d7e/de6901b6c72db396.png",startFlag:!1,startFlag2:!1,machineNum:3,bgImage2:"https://img10.360buyimg.com/imagetools/jfs/t1/121466/20/6784/28830/5f06e7f2Edbb8998c/9bdd9e7b24dff9fe.png",prizeLevel:0}),i=m(null);return u((()=>{setInterval((()=>{e.customNumber=Math.floor(601*Math.random()+100)}),5e3)})),d=((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&l(e,n,t[n]);if(a)for(var n of a(t))s.call(t,n)&&l(e,n,t[n]);return e})({},c(e)),t(d,n({scrollAniEnd:t=>{console.log(t?"恭喜中奖！！！":"很遗憾！没有中奖"),setTimeout((()=>{e.startFlag=!1}),300)},startRole:()=>{e.prizeLevel=Math.floor(5*Math.random()+1),console.log(e.prizeLevel,"中奖"),e.startFlag=!0,setTimeout((()=>{i.value.machineLuck()}),500)},startRole2:()=>{e.prizeLevel=-1,console.log(e.prizeLevel,"不中奖"),e.startFlag=!0,setTimeout((()=>{i.value.machineLuck()}),500)},countupMachine:i}));var d}});const z=v();d("data-v-f4fab49e");const O={class:"demo"},L=f("h2",null,"基础用法",-1),k={class:"show-demo"},E=f("h2",null,"数字滚动",-1),F={class:"show-demo"},I=f("h2",null,"自定义滚动图片展示",-1),M={class:"show-demo"},N=f("h2",null,"抽奖（模拟滚动抽奖）",-1),P={class:"show-demo"},x={class:"btnBtn"},C=y("抽奖"),R=y("不中奖");g();const _=z(((e,t,n,a,o,s)=>{const l=p("nut-countup"),i=p("nut-button");return b(),h("div",O,[L,f("div",k,[f(l,{"init-num":0,"end-num":200}),f(l,{"init-num":150,"end-num":0,speed:6.18,"to-fixed":2},null,8,["init-num","end-num","speed"]),f(l,{"init-num":500,"end-num":0,speed:17,"to-fixed":2},null,8,["init-num","end-num"])]),E,f("div",F,[f(l,{scrolling:!0,"init-num":17.618,during:600},null,8,["init-num"])]),I,f("div",M,[f(l,{"custom-change-num":e.customNumber,"custom-bg-img":e.bgImage,"custom-spac-num":11,"num-width":33,"num-height":47,during:8e3},null,8,["custom-change-num","custom-bg-img"])]),N,f("div",P,[f(l,{ref:"countupMachine",type:"machine","machine-num":e.machineNum,"machine-prize-num":5,"machine-prize-level":e.prizeLevel,"custom-bg-img":e.bgImage2,"num-width":100,"num-height":100,during:3e3,onScrollEnd:e.scrollAniEnd},null,8,["machine-num","machine-prize-level","custom-bg-img","onScrollEnd"]),f("div",x,[f(i,{type:"danger",onClick:e.startRole,disabled:e.startFlag},{default:z((()=>[C])),_:1},8,["onClick","disabled"]),f(i,{type:"danger",onClick:e.startRole2,disabled:e.startFlag},{default:z((()=>[R])),_:1},8,["onClick","disabled"])])])])}));w.render=_,w.__scopeId="data-v-f4fab49e";export default w;
