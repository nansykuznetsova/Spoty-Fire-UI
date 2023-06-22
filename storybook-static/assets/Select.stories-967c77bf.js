import{j as e,a as d}from"./jsx-runtime-91a467a5.js";import{R as o}from"./index-8db94870.js";import{P as u}from"./index-1fc0ca9a.js";import"./_commonjsHelpers-042e6b4d.js";const B="_selectTab_8z1iu_1",z="_buttonSelect_8z1iu_7",N="_select_8z1iu_1",x="_option_8z1iu_37",T="_optionsButton_8z1iu_42",k="_optionsButtonCurrent_8z1iu_56",n={selectTab:B,buttonSelect:z,select:N,option:x,optionsButton:T,optionsButtonCurrent:k};function b(){return e("svg",{"data-testid":"close-icon",role:"img",height:"16",width:"16","aria-hidden":"true",viewBox:"0 0 16 16",fill:"#fff",children:e("path",{d:"m14 6-6 6-6-6h12z"})})}b.__docgenInfo={description:"",methods:[],displayName:"ArrowCloseIcon"};function g(){return e("svg",{"data-testid":"open-icon",role:"img",height:"16",width:"16","aria-hidden":"true",viewBox:"0 0 16 16",fill:"#fff",children:e("path",{d:"M14 10 8 4l-6 6h12z"})})}g.__docgenInfo={description:"",methods:[],displayName:"ArrowOpenIcon"};function v(){return e("svg",{"data-testid":"check-icon",role:"img",height:"16",width:"16","aria-hidden":"true",viewBox:"0 0 16 16",fill:"#1ed760",children:e("path",{d:"M15.53 2.47a.75.75 0 0 1 0 1.06L4.907 14.153.47 9.716a.75.75 0 0 1 1.06-1.06l3.377 3.376L14.47 2.47a.75.75 0 0 1 1.06 0z"})})}v.__docgenInfo={description:"",methods:[],displayName:"CheckIcon"};const i=({label:r,options:p,onChange:C})=>{const[a,c]=o.useState(!1),[l,y]=o.useState({label:r}),[S,m]=o.useState(!1);o.useEffect(()=>{m(!!a)},[a]);const w=()=>{c(!a)},I=t=>{y({...t}),C(t),c(!1)};return d(o.Fragment,{children:[e("div",{className:n.selectTab,children:d("button",{type:"button",className:n.buttonSelect,onClick:w,children:[l.label,S?e(g,{}):e(b,{})]})}),a&&p.length&&e("ul",{className:n.select,role:"listbox",children:p.map(t=>e("li",{className:n.option,role:"option","aria-selected":t.id===l.id,children:d("button",{type:"button",className:[n.optionsButton,t.id===l.id?n.optionsButtonCurrent:null].join(" "),onClick:()=>I(t),children:[t.label,t.id===l.id?e(v,{}):null]})},t.id))})]})};i.propTypes={label:u.string.isRequired,options:u.array,onChange:u.func};i.defaultProps={label:"",options:[],onChange:()=>{}};i.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},options:{defaultValue:{value:"[]",computed:!1},type:{name:"array"},required:!1,description:""},onChange:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""}}};const P={title:"Select",component:i,tags:["autodocs"]},s={args:{label:"Select",options:[{id:"name1",label:"name1",value:1},{id:"name2",label:"name2",value:2},{id:"name3",label:"name3",value:3}],onChange:r=>{console.log(r.value)}}};var f,h,_;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Select',
    options: [{
      id: 'name1',
      label: 'name1',
      value: 1
    }, {
      id: 'name2',
      label: 'name2',
      value: 2
    }, {
      id: 'name3',
      label: 'name3',
      value: 3
    }],
    onChange: item => {
      console.log(item.value);
    }
  }
}`,...(_=(h=s.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const R=["SelectTab"];export{s as SelectTab,R as __namedExportsOrder,P as default};
//# sourceMappingURL=Select.stories-967c77bf.js.map
