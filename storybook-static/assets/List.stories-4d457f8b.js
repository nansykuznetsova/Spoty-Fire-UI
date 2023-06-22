import{a as i,j as d}from"./jsx-runtime-91a467a5.js";import"./index-8db94870.js";import{P as e}from"./index-1fc0ca9a.js";import{B as q}from"./Button-6385ee7d.js";import"./_commonjsHelpers-042e6b4d.js";const L="_list_10vqo_1",C="_listItem_10vqo_9",T="_imgItem_10vqo_26",V="_item_10vqo_30",j="_nameItem_10vqo_36",B="_spanColor_10vqo_44",t={list:L,listItem:C,imgItem:T,item:V,nameItem:j,spanColor:B},l=({label:n,title:o,artists:a,album:v,img:w,...y})=>i("li",{className:t.listItem,...y,children:[i("div",{className:t.item,children:[d("img",{role:"img","aria-label":"Cover album image",draggable:"false",loading:"eager",src:w.url,width:"40",height:"40",className:t.imgItem}),i("div",{className:t.nameItem,children:[o,i("span",{title:"artistsInfo",className:t.spanColor,children:[a.map(I=>I.name).join(", ")," | ",v]})]})]}),n?d(q,{role:"button",label:n,variant:"outlined",onClick:()=>{console.log("Add item")}}):null]});l.propTypes={label:e.string,title:e.string,artists:e.array,album:e.string,img:e.object,onClick:e.func};l.defaultProps={title:"",artists:[],album:"",img:{},onClick:()=>{}};l.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{title:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},artists:{defaultValue:{value:"[]",computed:!1},type:{name:"array"},required:!1,description:""},album:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},img:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},onClick:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""},label:{type:{name:"string"},required:!1,description:""}}};const c=({list:n,label:o})=>d("ul",{className:t.list,children:n.map(a=>d(l,{title:a.name,artists:a.artists,album:a.album.name,img:a.album.images,label:o,children:a.label},a.id))});c.propTypes={list:e.array,label:e.string};c.defaultProps={list:[],label:""};c.__docgenInfo={description:"",methods:[],displayName:"List",props:{list:{defaultValue:{value:"[]",computed:!1},type:{name:"array"},required:!1,description:""},label:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""}}};const E={title:"List",component:c,tags:["autodocs"]},s={label:"",args:{list:[{id:"id1",name:"trackName1",artists:[{name:"artist1"},{name:"artist1"}],album:{name:"albumName1",images:{url:"https://i.scdn.co/image/ab67616d00004851003f81b1f4246362638e682d",height:40,width:40}}},{id:"id2",name:"trackName2",artists:[{name:"artist2"}],album:{name:"albumName2",images:{url:"https://i.scdn.co/image/ab67616d00004851eb6dc5900a0d8632af9913ca",height:40,width:40}}},{id:"id3",name:"trackName3",artists:[{name:"artist3"},{name:"artist3"}],album:{name:"albumName3",images:{url:"https://i.scdn.co/image/ab67616d000048514ac4dc1d0979e17534c8993e",height:40,width:40}}}]}},m={args:{label:"Add",list:[{id:"id1",name:"trackName1",artists:[{name:"artist1"},{name:"artist1"}],album:{name:"albumName1",images:{url:"https://i.scdn.co/image/ab67616d00004851003f81b1f4246362638e682d",height:40,width:40}}},{id:"id2",name:"trackName2",artists:[{name:"artist2"}],album:{name:"albumName2",images:{url:"https://i.scdn.co/image/ab67616d00004851eb6dc5900a0d8632af9913ca",height:40,width:40}}},{id:"id3",name:"trackName3",artists:[{name:"artist3"},{name:"artist3"}],album:{name:"albumName3",images:{url:"https://i.scdn.co/image/ab67616d000048514ac4dc1d0979e17534c8993e",height:40,width:40}}}]}},r={args:{label:"Remove",list:[{id:"id1",name:"trackName1",artists:[{name:"artist1"},{name:"artist1"}],album:{name:"albumName1",images:{url:"https://i.scdn.co/image/ab67616d00004851003f81b1f4246362638e682d",height:40,width:40}}},{id:"id2",name:"trackName2",artists:[{name:"artist2"}],album:{name:"albumName2",images:{url:"https://i.scdn.co/image/ab67616d00004851eb6dc5900a0d8632af9913ca",height:40,width:40}}},{id:"id3",name:"trackName3",artists:[{name:"artist3"},{name:"artist3"}],album:{name:"albumName3",images:{url:"https://i.scdn.co/image/ab67616d000048514ac4dc1d0979e17534c8993e",height:40,width:40}}}]}};var u,b,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  label: '',
  args: {
    list: [{
      id: 'id1',
      name: 'trackName1',
      artists: [{
        name: 'artist1'
      }, {
        name: 'artist1'
      }],
      album: {
        name: 'albumName1',
        images: {
          url: 'https://i.scdn.co/image/ab67616d00004851003f81b1f4246362638e682d',
          height: 40,
          width: 40
        }
      }
    }, {
      id: 'id2',
      name: 'trackName2',
      artists: [{
        name: 'artist2'
      }],
      album: {
        name: 'albumName2',
        images: {
          url: 'https://i.scdn.co/image/ab67616d00004851eb6dc5900a0d8632af9913ca',
          height: 40,
          width: 40
        }
      }
    }, {
      id: 'id3',
      name: 'trackName3',
      artists: [{
        name: 'artist3'
      }, {
        name: 'artist3'
      }],
      album: {
        name: 'albumName3',
        images: {
          url: 'https://i.scdn.co/image/ab67616d000048514ac4dc1d0979e17534c8993e',
          height: 40,
          width: 40
        }
      }
    }]
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var p,h,f;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Add',
    list: [{
      id: 'id1',
      name: 'trackName1',
      artists: [{
        name: 'artist1'
      }, {
        name: 'artist1'
      }],
      album: {
        name: 'albumName1',
        images: {
          url: 'https://i.scdn.co/image/ab67616d00004851003f81b1f4246362638e682d',
          height: 40,
          width: 40
        }
      }
    }, {
      id: 'id2',
      name: 'trackName2',
      artists: [{
        name: 'artist2'
      }],
      album: {
        name: 'albumName2',
        images: {
          url: 'https://i.scdn.co/image/ab67616d00004851eb6dc5900a0d8632af9913ca',
          height: 40,
          width: 40
        }
      }
    }, {
      id: 'id3',
      name: 'trackName3',
      artists: [{
        name: 'artist3'
      }, {
        name: 'artist3'
      }],
      album: {
        name: 'albumName3',
        images: {
          url: 'https://i.scdn.co/image/ab67616d000048514ac4dc1d0979e17534c8993e',
          height: 40,
          width: 40
        }
      }
    }]
  }
}`,...(f=(h=m.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var N,_,k;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Remove',
    list: [{
      id: 'id1',
      name: 'trackName1',
      artists: [{
        name: 'artist1'
      }, {
        name: 'artist1'
      }],
      album: {
        name: 'albumName1',
        images: {
          url: 'https://i.scdn.co/image/ab67616d00004851003f81b1f4246362638e682d',
          height: 40,
          width: 40
        }
      }
    }, {
      id: 'id2',
      name: 'trackName2',
      artists: [{
        name: 'artist2'
      }],
      album: {
        name: 'albumName2',
        images: {
          url: 'https://i.scdn.co/image/ab67616d00004851eb6dc5900a0d8632af9913ca',
          height: 40,
          width: 40
        }
      }
    }, {
      id: 'id3',
      name: 'trackName3',
      artists: [{
        name: 'artist3'
      }, {
        name: 'artist3'
      }],
      album: {
        name: 'albumName3',
        images: {
          url: 'https://i.scdn.co/image/ab67616d000048514ac4dc1d0979e17534c8993e',
          height: 40,
          width: 40
        }
      }
    }]
  }
}`,...(k=(_=r.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const O=["ListTab","ListTabAddButton","ListTabRemoveButton"];export{s as ListTab,m as ListTabAddButton,r as ListTabRemoveButton,O as __namedExportsOrder,E as default};
//# sourceMappingURL=List.stories-4d457f8b.js.map
