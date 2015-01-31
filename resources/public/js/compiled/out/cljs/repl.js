// Compiled by ClojureScript 0.0-2665 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29203_29207 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29204_29208 = null;
var count__29205_29209 = (0);
var i__29206_29210 = (0);
while(true){
if((i__29206_29210 < count__29205_29209)){
var f_29211 = cljs.core._nth.call(null,chunk__29204_29208,i__29206_29210);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_29211);

var G__29212 = seq__29203_29207;
var G__29213 = chunk__29204_29208;
var G__29214 = count__29205_29209;
var G__29215 = (i__29206_29210 + (1));
seq__29203_29207 = G__29212;
chunk__29204_29208 = G__29213;
count__29205_29209 = G__29214;
i__29206_29210 = G__29215;
continue;
} else {
var temp__4126__auto___29216 = cljs.core.seq.call(null,seq__29203_29207);
if(temp__4126__auto___29216){
var seq__29203_29217__$1 = temp__4126__auto___29216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29203_29217__$1)){
var c__13380__auto___29218 = cljs.core.chunk_first.call(null,seq__29203_29217__$1);
var G__29219 = cljs.core.chunk_rest.call(null,seq__29203_29217__$1);
var G__29220 = c__13380__auto___29218;
var G__29221 = cljs.core.count.call(null,c__13380__auto___29218);
var G__29222 = (0);
seq__29203_29207 = G__29219;
chunk__29204_29208 = G__29220;
count__29205_29209 = G__29221;
i__29206_29210 = G__29222;
continue;
} else {
var f_29223 = cljs.core.first.call(null,seq__29203_29217__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_29223);

var G__29224 = cljs.core.next.call(null,seq__29203_29217__$1);
var G__29225 = null;
var G__29226 = (0);
var G__29227 = (0);
seq__29203_29207 = G__29224;
chunk__29204_29208 = G__29225;
count__29205_29209 = G__29226;
i__29206_29210 = G__29227;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map?rel=1422744196774