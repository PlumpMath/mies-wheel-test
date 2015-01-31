// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('figwheel.client')) {
goog.provide('figwheel.client');
}
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24760__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24760 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24761__i = 0, G__24761__a = new Array(arguments.length -  0);
while (G__24761__i < G__24761__a.length) {G__24761__a[G__24761__i] = arguments[G__24761__i + 0]; ++G__24761__i;}
  args = new cljs.core.IndexedSeq(G__24761__a,0);
} 
return G__24760__delegate.call(this,args);};
G__24760.cljs$lang$maxFixedArity = 0;
G__24760.cljs$lang$applyTo = (function (arglist__24762){
var args = cljs.core.seq(arglist__24762);
return G__24760__delegate(args);
});
G__24760.cljs$core$IFn$_invoke$arity$variadic = G__24760__delegate;
return G__24760;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__24763){
var map__24765 = p__24763;
var map__24765__$1 = ((cljs.core.seq_QMARK_.call(null,map__24765))?cljs.core.apply.call(null,cljs.core.hash_map,map__24765):map__24765);
var class$ = cljs.core.get.call(null,map__24765__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__24765__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__12593__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__12593__auto__)){
return or__12593__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__12581__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__12581__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__12581__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__15056__auto___24894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto___24894,ch){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto___24894,ch){
return (function (state_24868){
var state_val_24869 = (state_24868[(1)]);
if((state_val_24869 === (7))){
var inst_24864 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
var statearr_24870_24895 = state_24868__$1;
(statearr_24870_24895[(2)] = inst_24864);

(statearr_24870_24895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (1))){
var state_24868__$1 = state_24868;
var statearr_24871_24896 = state_24868__$1;
(statearr_24871_24896[(2)] = null);

(statearr_24871_24896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (4))){
var inst_24832 = (state_24868[(7)]);
var inst_24832__$1 = (state_24868[(2)]);
var state_24868__$1 = (function (){var statearr_24872 = state_24868;
(statearr_24872[(7)] = inst_24832__$1);

return statearr_24872;
})();
if(cljs.core.truth_(inst_24832__$1)){
var statearr_24873_24897 = state_24868__$1;
(statearr_24873_24897[(1)] = (5));

} else {
var statearr_24874_24898 = state_24868__$1;
(statearr_24874_24898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (13))){
var state_24868__$1 = state_24868;
var statearr_24875_24899 = state_24868__$1;
(statearr_24875_24899[(2)] = null);

(statearr_24875_24899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (6))){
var state_24868__$1 = state_24868;
var statearr_24876_24900 = state_24868__$1;
(statearr_24876_24900[(2)] = null);

(statearr_24876_24900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (3))){
var inst_24866 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24868__$1,inst_24866);
} else {
if((state_val_24869 === (12))){
var inst_24839 = (state_24868[(8)]);
var inst_24852 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24839);
var inst_24853 = cljs.core.first.call(null,inst_24852);
var inst_24854 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24853);
var inst_24855 = console.warn("Figwheel: Not loading code with warnings - ",inst_24854);
var state_24868__$1 = state_24868;
var statearr_24877_24901 = state_24868__$1;
(statearr_24877_24901[(2)] = inst_24855);

(statearr_24877_24901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (2))){
var state_24868__$1 = state_24868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24868__$1,(4),ch);
} else {
if((state_val_24869 === (11))){
var inst_24848 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
var statearr_24878_24902 = state_24868__$1;
(statearr_24878_24902[(2)] = inst_24848);

(statearr_24878_24902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (9))){
var inst_24838 = (state_24868[(9)]);
var inst_24850 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24838,opts);
var state_24868__$1 = state_24868;
if(inst_24850){
var statearr_24879_24903 = state_24868__$1;
(statearr_24879_24903[(1)] = (12));

} else {
var statearr_24880_24904 = state_24868__$1;
(statearr_24880_24904[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (5))){
var inst_24832 = (state_24868[(7)]);
var inst_24838 = (state_24868[(9)]);
var inst_24834 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24835 = (new cljs.core.PersistentArrayMap(null,2,inst_24834,null));
var inst_24836 = (new cljs.core.PersistentHashSet(null,inst_24835,null));
var inst_24837 = figwheel.client.focus_msgs.call(null,inst_24836,inst_24832);
var inst_24838__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24837);
var inst_24839 = cljs.core.first.call(null,inst_24837);
var inst_24840 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24838__$1,opts);
var state_24868__$1 = (function (){var statearr_24881 = state_24868;
(statearr_24881[(8)] = inst_24839);

(statearr_24881[(9)] = inst_24838__$1);

return statearr_24881;
})();
if(cljs.core.truth_(inst_24840)){
var statearr_24882_24905 = state_24868__$1;
(statearr_24882_24905[(1)] = (8));

} else {
var statearr_24883_24906 = state_24868__$1;
(statearr_24883_24906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (14))){
var inst_24858 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
var statearr_24884_24907 = state_24868__$1;
(statearr_24884_24907[(2)] = inst_24858);

(statearr_24884_24907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (10))){
var inst_24860 = (state_24868[(2)]);
var state_24868__$1 = (function (){var statearr_24885 = state_24868;
(statearr_24885[(10)] = inst_24860);

return statearr_24885;
})();
var statearr_24886_24908 = state_24868__$1;
(statearr_24886_24908[(2)] = null);

(statearr_24886_24908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (8))){
var inst_24839 = (state_24868[(8)]);
var inst_24842 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24843 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24839);
var inst_24844 = cljs.core.async.timeout.call(null,(1000));
var inst_24845 = [inst_24843,inst_24844];
var inst_24846 = (new cljs.core.PersistentVector(null,2,(5),inst_24842,inst_24845,null));
var state_24868__$1 = state_24868;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24868__$1,(11),inst_24846);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15056__auto___24894,ch))
;
return ((function (switch__15000__auto__,c__15056__auto___24894,ch){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_24890 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24890[(0)] = state_machine__15001__auto__);

(statearr_24890[(1)] = (1));

return statearr_24890;
});
var state_machine__15001__auto____1 = (function (state_24868){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_24868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e24891){if((e24891 instanceof Object)){
var ex__15004__auto__ = e24891;
var statearr_24892_24909 = state_24868;
(statearr_24892_24909[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24910 = state_24868;
state_24868 = G__24910;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_24868){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_24868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto___24894,ch))
})();
var state__15058__auto__ = (function (){var statearr_24893 = f__15057__auto__.call(null);
(statearr_24893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto___24894);

return statearr_24893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto___24894,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return clojure.string.join.call(null,"\n",cljs.core.take_while.call(null,(function (p1__24911_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24911_SHARP_));
}),clojure.string.split_lines.call(null,stack_str)));
});
figwheel.client.eval_javascript_STAR__STAR_ = (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_24915 = cljs.core._STAR_print_fn_STAR_;
try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24915){
return (function() { 
var G__24916__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24917__i = 0, G__24917__a = new Array(arguments.length -  0);
while (G__24917__i < G__24917__a.length) {G__24917__a[G__24917__i] = arguments[G__24917__i + 0]; ++G__24917__i;}
  args = new cljs.core.IndexedSeq(G__24917__a,0);
} 
return G__24916__delegate.call(this,args);};
G__24916.cljs$lang$maxFixedArity = 0;
G__24916.cljs$lang$applyTo = (function (arglist__24918){
var args = cljs.core.seq(arglist__24918);
return G__24916__delegate(args);
});
G__24916.cljs$core$IFn$_invoke$arity$variadic = G__24916__delegate;
return G__24916;
})()
;})(_STAR_print_fn_STAR_24915))
;

return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24915;
}}catch (e24914){if((e24914 instanceof Error)){
var e = e24914;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?figwheel.client.truncate_stack_trace.call(null,e.stack):"No stacktrace available.")], null));
} else {
var e = e24914;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
figwheel.client.repl_plugin = (function repl_plugin(opts){
return (function (p__24922){
var vec__24923 = p__24922;
var map__24924 = cljs.core.nth.call(null,vec__24923,(0),null);
var map__24924__$1 = ((cljs.core.seq_QMARK_.call(null,map__24924))?cljs.core.apply.call(null,cljs.core.hash_map,map__24924):map__24924);
var msg = map__24924__$1;
var msg_name = cljs.core.get.call(null,map__24924__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24923,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__24923,map__24924,map__24924__$1,msg,msg_name,_){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24923,map__24924,map__24924__$1,msg,msg_name,_))
);
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__24928){
var vec__24929 = p__24928;
var map__24930 = cljs.core.nth.call(null,vec__24929,(0),null);
var map__24930__$1 = ((cljs.core.seq_QMARK_.call(null,map__24930))?cljs.core.apply.call(null,cljs.core.hash_map,map__24930):map__24930);
var msg = map__24930__$1;
var msg_name = cljs.core.get.call(null,map__24930__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24929,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__24931){
var map__24939 = p__24931;
var map__24939__$1 = ((cljs.core.seq_QMARK_.call(null,map__24939))?cljs.core.apply.call(null,cljs.core.hash_map,map__24939):map__24939);
var on_compile_fail = cljs.core.get.call(null,map__24939__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__24939__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__24939,map__24939__$1,on_compile_fail,on_compile_warning){
return (function (p__24940){
var vec__24941 = p__24940;
var map__24942 = cljs.core.nth.call(null,vec__24941,(0),null);
var map__24942__$1 = ((cljs.core.seq_QMARK_.call(null,map__24942))?cljs.core.apply.call(null,cljs.core.hash_map,map__24942):map__24942);
var msg = map__24942__$1;
var msg_name = cljs.core.get.call(null,map__24942__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24941,(1));
var pred__24943 = cljs.core._EQ_;
var expr__24944 = msg_name;
if(cljs.core.truth_(pred__24943.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24944))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24943.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24944))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24939,map__24939__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__15056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto__,msg_hist,msg_names,msg){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto__,msg_hist,msg_names,msg){
return (function (state_25121){
var state_val_25122 = (state_25121[(1)]);
if((state_val_25122 === (7))){
var inst_25070 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25121__$1 = state_25121;
if(inst_25070){
var statearr_25123_25160 = state_25121__$1;
(statearr_25123_25160[(1)] = (11));

} else {
var statearr_25124_25161 = state_25121__$1;
(statearr_25124_25161[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (20))){
var inst_25111 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
var statearr_25125_25162 = state_25121__$1;
(statearr_25125_25162[(2)] = inst_25111);

(statearr_25125_25162[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (27))){
var inst_25102 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25121__$1 = state_25121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25121__$1,(30),inst_25102);
} else {
if((state_val_25122 === (1))){
var inst_25053 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25121__$1 = state_25121;
if(cljs.core.truth_(inst_25053)){
var statearr_25126_25163 = state_25121__$1;
(statearr_25126_25163[(1)] = (2));

} else {
var statearr_25127_25164 = state_25121__$1;
(statearr_25127_25164[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (24))){
var inst_25100 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25121__$1 = state_25121;
if(inst_25100){
var statearr_25128_25165 = state_25121__$1;
(statearr_25128_25165[(1)] = (27));

} else {
var statearr_25129_25166 = state_25121__$1;
(statearr_25129_25166[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (4))){
var inst_25119 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25121__$1,inst_25119);
} else {
if((state_val_25122 === (15))){
var inst_25080 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25081 = figwheel.client.heads_up.append_message.call(null,inst_25080);
var state_25121__$1 = state_25121;
var statearr_25130_25167 = state_25121__$1;
(statearr_25130_25167[(2)] = inst_25081);

(statearr_25130_25167[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (21))){
var inst_25087 = (state_25121[(2)]);
var inst_25088 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25089 = figwheel.client.heads_up.display_warning.call(null,inst_25088);
var state_25121__$1 = (function (){var statearr_25131 = state_25121;
(statearr_25131[(7)] = inst_25087);

return statearr_25131;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25121__$1,(22),inst_25089);
} else {
if((state_val_25122 === (13))){
var inst_25115 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
var statearr_25132_25168 = state_25121__$1;
(statearr_25132_25168[(2)] = inst_25115);

(statearr_25132_25168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (22))){
var inst_25091 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
var statearr_25133_25169 = state_25121__$1;
(statearr_25133_25169[(2)] = inst_25091);

(statearr_25133_25169[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (29))){
var inst_25107 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
var statearr_25134_25170 = state_25121__$1;
(statearr_25134_25170[(2)] = inst_25107);

(statearr_25134_25170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (6))){
var inst_25061 = figwheel.client.heads_up.clear.call(null);
var state_25121__$1 = state_25121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25121__$1,(9),inst_25061);
} else {
if((state_val_25122 === (28))){
var state_25121__$1 = state_25121;
var statearr_25135_25171 = state_25121__$1;
(statearr_25135_25171[(2)] = null);

(statearr_25135_25171[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (25))){
var inst_25109 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
var statearr_25136_25172 = state_25121__$1;
(statearr_25136_25172[(2)] = inst_25109);

(statearr_25136_25172[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (17))){
var inst_25113 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
var statearr_25137_25173 = state_25121__$1;
(statearr_25137_25173[(2)] = inst_25113);

(statearr_25137_25173[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (3))){
var inst_25059 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25121__$1 = state_25121;
if(inst_25059){
var statearr_25138_25174 = state_25121__$1;
(statearr_25138_25174[(1)] = (6));

} else {
var statearr_25139_25175 = state_25121__$1;
(statearr_25139_25175[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (12))){
var inst_25078 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25121__$1 = state_25121;
if(inst_25078){
var statearr_25140_25176 = state_25121__$1;
(statearr_25140_25176[(1)] = (15));

} else {
var statearr_25141_25177 = state_25121__$1;
(statearr_25141_25177[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (2))){
var inst_25055 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25121__$1 = state_25121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25121__$1,(5),inst_25055);
} else {
if((state_val_25122 === (23))){
var inst_25095 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25096 = figwheel.client.heads_up.display_warning.call(null,inst_25095);
var state_25121__$1 = state_25121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25121__$1,(26),inst_25096);
} else {
if((state_val_25122 === (19))){
var inst_25093 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25121__$1 = state_25121;
if(inst_25093){
var statearr_25142_25178 = state_25121__$1;
(statearr_25142_25178[(1)] = (23));

} else {
var statearr_25143_25179 = state_25121__$1;
(statearr_25143_25179[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (11))){
var inst_25072 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25073 = figwheel.client.format_messages.call(null,inst_25072);
var inst_25074 = figwheel.client.heads_up.display_error.call(null,inst_25073);
var state_25121__$1 = state_25121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25121__$1,(14),inst_25074);
} else {
if((state_val_25122 === (9))){
var inst_25063 = (state_25121[(2)]);
var inst_25064 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25065 = figwheel.client.format_messages.call(null,inst_25064);
var inst_25066 = figwheel.client.heads_up.display_error.call(null,inst_25065);
var state_25121__$1 = (function (){var statearr_25144 = state_25121;
(statearr_25144[(8)] = inst_25063);

return statearr_25144;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25121__$1,(10),inst_25066);
} else {
if((state_val_25122 === (5))){
var inst_25057 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
var statearr_25145_25180 = state_25121__$1;
(statearr_25145_25180[(2)] = inst_25057);

(statearr_25145_25180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (14))){
var inst_25076 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
var statearr_25146_25181 = state_25121__$1;
(statearr_25146_25181[(2)] = inst_25076);

(statearr_25146_25181[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (26))){
var inst_25098 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
var statearr_25147_25182 = state_25121__$1;
(statearr_25147_25182[(2)] = inst_25098);

(statearr_25147_25182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (16))){
var inst_25083 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25121__$1 = state_25121;
if(inst_25083){
var statearr_25148_25183 = state_25121__$1;
(statearr_25148_25183[(1)] = (18));

} else {
var statearr_25149_25184 = state_25121__$1;
(statearr_25149_25184[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (30))){
var inst_25104 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
var statearr_25150_25185 = state_25121__$1;
(statearr_25150_25185[(2)] = inst_25104);

(statearr_25150_25185[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (10))){
var inst_25068 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
var statearr_25151_25186 = state_25121__$1;
(statearr_25151_25186[(2)] = inst_25068);

(statearr_25151_25186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (18))){
var inst_25085 = figwheel.client.heads_up.clear.call(null);
var state_25121__$1 = state_25121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25121__$1,(21),inst_25085);
} else {
if((state_val_25122 === (8))){
var inst_25117 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
var statearr_25152_25187 = state_25121__$1;
(statearr_25152_25187[(2)] = inst_25117);

(statearr_25152_25187[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15056__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__15000__auto__,c__15056__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_25156 = [null,null,null,null,null,null,null,null,null];
(statearr_25156[(0)] = state_machine__15001__auto__);

(statearr_25156[(1)] = (1));

return statearr_25156;
});
var state_machine__15001__auto____1 = (function (state_25121){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_25121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e25157){if((e25157 instanceof Object)){
var ex__15004__auto__ = e25157;
var statearr_25158_25188 = state_25121;
(statearr_25158_25188[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25189 = state_25121;
state_25121 = G__25189;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_25121){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_25121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto__,msg_hist,msg_names,msg))
})();
var state__15058__auto__ = (function (){var statearr_25159 = f__15057__auto__.call(null);
(statearr_25159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto__);

return statearr_25159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto__,msg_hist,msg_names,msg))
);

return c__15056__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__15056__auto___25252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto___25252,ch){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto___25252,ch){
return (function (state_25235){
var state_val_25236 = (state_25235[(1)]);
if((state_val_25236 === (8))){
var inst_25227 = (state_25235[(2)]);
var state_25235__$1 = (function (){var statearr_25237 = state_25235;
(statearr_25237[(7)] = inst_25227);

return statearr_25237;
})();
var statearr_25238_25253 = state_25235__$1;
(statearr_25238_25253[(2)] = null);

(statearr_25238_25253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (7))){
var inst_25231 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
var statearr_25239_25254 = state_25235__$1;
(statearr_25239_25254[(2)] = inst_25231);

(statearr_25239_25254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (6))){
var state_25235__$1 = state_25235;
var statearr_25240_25255 = state_25235__$1;
(statearr_25240_25255[(2)] = null);

(statearr_25240_25255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (5))){
var inst_25223 = (state_25235[(8)]);
var inst_25225 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25223);
var state_25235__$1 = state_25235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25235__$1,(8),inst_25225);
} else {
if((state_val_25236 === (4))){
var inst_25223 = (state_25235[(8)]);
var inst_25223__$1 = (state_25235[(2)]);
var state_25235__$1 = (function (){var statearr_25241 = state_25235;
(statearr_25241[(8)] = inst_25223__$1);

return statearr_25241;
})();
if(cljs.core.truth_(inst_25223__$1)){
var statearr_25242_25256 = state_25235__$1;
(statearr_25242_25256[(1)] = (5));

} else {
var statearr_25243_25257 = state_25235__$1;
(statearr_25243_25257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (3))){
var inst_25233 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25235__$1,inst_25233);
} else {
if((state_val_25236 === (2))){
var state_25235__$1 = state_25235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25235__$1,(4),ch);
} else {
if((state_val_25236 === (1))){
var state_25235__$1 = state_25235;
var statearr_25244_25258 = state_25235__$1;
(statearr_25244_25258[(2)] = null);

(statearr_25244_25258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__15056__auto___25252,ch))
;
return ((function (switch__15000__auto__,c__15056__auto___25252,ch){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_25248 = [null,null,null,null,null,null,null,null,null];
(statearr_25248[(0)] = state_machine__15001__auto__);

(statearr_25248[(1)] = (1));

return statearr_25248;
});
var state_machine__15001__auto____1 = (function (state_25235){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_25235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e25249){if((e25249 instanceof Object)){
var ex__15004__auto__ = e25249;
var statearr_25250_25259 = state_25235;
(statearr_25250_25259[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25260 = state_25235;
state_25235 = G__25260;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_25235){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_25235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto___25252,ch))
})();
var state__15058__auto__ = (function (){var statearr_25251 = f__15057__auto__.call(null);
(statearr_25251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto___25252);

return statearr_25251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto___25252,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__15056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto__){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto__){
return (function (state_25281){
var state_val_25282 = (state_25281[(1)]);
if((state_val_25282 === (2))){
var inst_25278 = (state_25281[(2)]);
var inst_25279 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25281__$1 = (function (){var statearr_25283 = state_25281;
(statearr_25283[(7)] = inst_25278);

return statearr_25283;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25281__$1,inst_25279);
} else {
if((state_val_25282 === (1))){
var inst_25276 = cljs.core.async.timeout.call(null,(3000));
var state_25281__$1 = state_25281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25281__$1,(2),inst_25276);
} else {
return null;
}
}
});})(c__15056__auto__))
;
return ((function (switch__15000__auto__,c__15056__auto__){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_25287 = [null,null,null,null,null,null,null,null];
(statearr_25287[(0)] = state_machine__15001__auto__);

(statearr_25287[(1)] = (1));

return statearr_25287;
});
var state_machine__15001__auto____1 = (function (state_25281){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_25281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e25288){if((e25288 instanceof Object)){
var ex__15004__auto__ = e25288;
var statearr_25289_25291 = state_25281;
(statearr_25289_25291[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25292 = state_25281;
state_25281 = G__25292;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_25281){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_25281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto__))
})();
var state__15058__auto__ = (function (){var statearr_25290 = f__15057__auto__.call(null);
(statearr_25290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto__);

return statearr_25290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto__))
);

return c__15056__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_(("CustomEvent" in window))){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj25296 = {"detail":url};
return obj25296;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__25297){
var map__25303 = p__25297;
var map__25303__$1 = ((cljs.core.seq_QMARK_.call(null,map__25303))?cljs.core.apply.call(null,cljs.core.hash_map,map__25303):map__25303);
var ed = map__25303__$1;
var exception_data = cljs.core.get.call(null,map__25303__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__25303__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__25304_25308 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25305_25309 = null;
var count__25306_25310 = (0);
var i__25307_25311 = (0);
while(true){
if((i__25307_25311 < count__25306_25310)){
var msg_25312 = cljs.core._nth.call(null,chunk__25305_25309,i__25307_25311);
console.log(msg_25312);

var G__25313 = seq__25304_25308;
var G__25314 = chunk__25305_25309;
var G__25315 = count__25306_25310;
var G__25316 = (i__25307_25311 + (1));
seq__25304_25308 = G__25313;
chunk__25305_25309 = G__25314;
count__25306_25310 = G__25315;
i__25307_25311 = G__25316;
continue;
} else {
var temp__4126__auto___25317 = cljs.core.seq.call(null,seq__25304_25308);
if(temp__4126__auto___25317){
var seq__25304_25318__$1 = temp__4126__auto___25317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25304_25318__$1)){
var c__13380__auto___25319 = cljs.core.chunk_first.call(null,seq__25304_25318__$1);
var G__25320 = cljs.core.chunk_rest.call(null,seq__25304_25318__$1);
var G__25321 = c__13380__auto___25319;
var G__25322 = cljs.core.count.call(null,c__13380__auto___25319);
var G__25323 = (0);
seq__25304_25308 = G__25320;
chunk__25305_25309 = G__25321;
count__25306_25310 = G__25322;
i__25307_25311 = G__25323;
continue;
} else {
var msg_25324 = cljs.core.first.call(null,seq__25304_25318__$1);
console.log(msg_25324);

var G__25325 = cljs.core.next.call(null,seq__25304_25318__$1);
var G__25326 = null;
var G__25327 = (0);
var G__25328 = (0);
seq__25304_25308 = G__25325;
chunk__25305_25309 = G__25326;
count__25306_25310 = G__25327;
i__25307_25311 = G__25328;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__25329){
var map__25331 = p__25329;
var map__25331__$1 = ((cljs.core.seq_QMARK_.call(null,map__25331))?cljs.core.apply.call(null,cljs.core.hash_map,map__25331):map__25331);
var w = map__25331__$1;
var message = cljs.core.get.call(null,map__25331__$1,new cljs.core.Keyword(null,"message","message",-406056002));
console.warn("Figwheel: Compile Warning -",message);

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,true,[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),cljs.core.identity,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options))){
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__25338 = cljs.core.seq.call(null,plugins);
var chunk__25339 = null;
var count__25340 = (0);
var i__25341 = (0);
while(true){
if((i__25341 < count__25340)){
var vec__25342 = cljs.core._nth.call(null,chunk__25339,i__25341);
var k = cljs.core.nth.call(null,vec__25342,(0),null);
var plugin = cljs.core.nth.call(null,vec__25342,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25344 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25338,chunk__25339,count__25340,i__25341,pl_25344,vec__25342,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25344.call(null,msg_hist);
});})(seq__25338,chunk__25339,count__25340,i__25341,pl_25344,vec__25342,k,plugin))
);
} else {
}

var G__25345 = seq__25338;
var G__25346 = chunk__25339;
var G__25347 = count__25340;
var G__25348 = (i__25341 + (1));
seq__25338 = G__25345;
chunk__25339 = G__25346;
count__25340 = G__25347;
i__25341 = G__25348;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25338);
if(temp__4126__auto__){
var seq__25338__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25338__$1)){
var c__13380__auto__ = cljs.core.chunk_first.call(null,seq__25338__$1);
var G__25349 = cljs.core.chunk_rest.call(null,seq__25338__$1);
var G__25350 = c__13380__auto__;
var G__25351 = cljs.core.count.call(null,c__13380__auto__);
var G__25352 = (0);
seq__25338 = G__25349;
chunk__25339 = G__25350;
count__25340 = G__25351;
i__25341 = G__25352;
continue;
} else {
var vec__25343 = cljs.core.first.call(null,seq__25338__$1);
var k = cljs.core.nth.call(null,vec__25343,(0),null);
var plugin = cljs.core.nth.call(null,vec__25343,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25353 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25338,chunk__25339,count__25340,i__25341,pl_25353,vec__25343,k,plugin,seq__25338__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25353.call(null,msg_hist);
});})(seq__25338,chunk__25339,count__25340,i__25341,pl_25353,vec__25343,k,plugin,seq__25338__$1,temp__4126__auto__))
);
} else {
}

var G__25354 = cljs.core.next.call(null,seq__25338__$1);
var G__25355 = null;
var G__25356 = (0);
var G__25357 = (0);
seq__25338 = G__25354;
chunk__25339 = G__25355;
count__25340 = G__25356;
i__25341 = G__25357;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = (function (){var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
})();
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__25358){
var map__25360 = p__25358;
var map__25360__$1 = ((cljs.core.seq_QMARK_.call(null,map__25360))?cljs.core.apply.call(null,cljs.core.hash_map,map__25360):map__25360);
var opts = map__25360__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__25358 = null;
if (arguments.length > 0) {
var G__25361__i = 0, G__25361__a = new Array(arguments.length -  0);
while (G__25361__i < G__25361__a.length) {G__25361__a[G__25361__i] = arguments[G__25361__i + 0]; ++G__25361__i;}
  p__25358 = new cljs.core.IndexedSeq(G__25361__a,0);
} 
return watch_and_reload__delegate.call(this,p__25358);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__25362){
var p__25358 = cljs.core.seq(arglist__25362);
return watch_and_reload__delegate(p__25358);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1422744170036