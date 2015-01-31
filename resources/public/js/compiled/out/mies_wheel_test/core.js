// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('mies_wheel_test.core')) {
goog.provide('mies_wheel_test.core');
}
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
mies_wheel_test.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
om.core.root.call(null,(function (app,owner){
if(typeof mies_wheel_test.core.t30189 !== 'undefined'){
} else {

/**
* @constructor
*/
mies_wheel_test.core.t30189 = (function (owner,app,meta30190){
this.owner = owner;
this.app = app;
this.meta30190 = meta30190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mies_wheel_test.core.t30189.prototype.om$core$IRender$ = true;

mies_wheel_test.core.t30189.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.app));
});

mies_wheel_test.core.t30189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30191){
var self__ = this;
var _30191__$1 = this;
return self__.meta30190;
});

mies_wheel_test.core.t30189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30191,meta30190__$1){
var self__ = this;
var _30191__$1 = this;
return (new mies_wheel_test.core.t30189(self__.owner,self__.app,meta30190__$1));
});

mies_wheel_test.core.t30189.cljs$lang$type = true;

mies_wheel_test.core.t30189.cljs$lang$ctorStr = "mies-wheel-test.core/t30189";

mies_wheel_test.core.t30189.cljs$lang$ctorPrWriter = (function (this__13180__auto__,writer__13181__auto__,opt__13182__auto__){
return cljs.core._write.call(null,writer__13181__auto__,"mies-wheel-test.core/t30189");
});

mies_wheel_test.core.__GT_t30189 = (function __GT_t30189(owner__$1,app__$1,meta30190){
return (new mies_wheel_test.core.t30189(owner__$1,app__$1,meta30190));
});

}

return (new mies_wheel_test.core.t30189(owner,app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),35,new cljs.core.Keyword(null,"end-line","end-line",1837326455),14,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/carlos/OpenSource/mies-wheel-test/src/mies_wheel_test/core.cljs"], null)));
}),mies_wheel_test.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
return null;
})], null));

//# sourceMappingURL=core.js.map?rel=1422744781040