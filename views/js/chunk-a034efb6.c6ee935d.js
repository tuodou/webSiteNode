(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a034efb6"],{"0504":function(t,a,i){"use strict";var e=i("a7d7"),c=i.n(e);c.a},a7d7:function(t,a,i){},d56a:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"artical-detail"},[i("div",{staticClass:"detail-action"},[i("a-button",{attrs:{type:"primary"},on:{click:t.back}},[t._v("back")]),i("a-button",{attrs:{type:"primary"},on:{click:t.editArtical}},[t._v("edit")])],1),i("h2",{staticClass:"artical-title"},[t._v(t._s(t.artical.title))]),i("div",{staticClass:"artical-content",domProps:{innerHTML:t._s(t.artical.content)}}),i("footer",{staticClass:"artical-footer"},[i("span",[t._v(t._s(t.artical.auth))]),i("span",[t._v("Create:"+t._s(t.artical.cTime))]),i("span",[t._v("Last update:"+t._s(t.artical.uTime))])])])},c=[],n=i("dec4"),r={name:"index",data:function(){return{articalId:"",artical:{articalId:"idaieb3t3tdaiwe",title:"artical title7, click me to detail.",auth:"我爱吃土豆",content:"众所周知，Ant Design作为一门设计语言面世，经历过多年的迭代和积累，它对UI的设计思想已经成为一套事实标准，受到众多前端开发者及企业的追捧和喜爱，也是React开发者手中的神兵利器。希望ant-design-vue能够让Vue开发者也享受到Ant Design的优秀设计。\n\nant-design-vue 是 Ant Design 的Vue实现，组件的风格与Ant Design保持同步，组件的html结构和css样式也保持一致，真正做到了样式0修改，组件API也尽量保持了一致。\n\nAnt Design Vue 致力于提供给程序员愉悦的开发体验。",cTime:"2019-04-26",uTime:"2019-05-01"}}},created:function(){this.articalId=this.$route.query.articalId,this.getArtical()},methods:{back:function(){this.$router.back()},getArtical:function(){var t=this;n["a"].getArticalDetail(this.articalId).then(function(a){t.artical=a.data}).catch(function(t){console.log(t)})},editArtical:function(){this.$router.push({name:"editArtical",query:{articalId:this.artical.articalId}})}}},s=r,l=(i("0504"),i("2877")),o=Object(l["a"])(s,e,c,!1,null,"499f1ec6",null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-a034efb6.c6ee935d.js.map