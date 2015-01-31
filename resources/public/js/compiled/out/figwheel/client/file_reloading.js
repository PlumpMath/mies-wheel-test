// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('figwheel.client.file_reloading')) {
goog.provide('figwheel.client.file_reloading');
}
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.net.jsloader');
goog.require('goog.string');
goog.require('goog.Uri');
figwheel.client.file_reloading.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.figwheel_closure_import_script;
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.reload_host = (function reload_host(p__25744){
var map__25746 = p__25744;
var map__25746__$1 = ((cljs.core.seq_QMARK_.call(null,map__25746))?cljs.core.apply.call(null,cljs.core.hash_map,map__25746):map__25746);
var websocket_url = cljs.core.get.call(null,map__25746__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^wss?:/,""),/^\/\//,""),/\//));
});
if(typeof figwheel.client.file_reloading.ns_meta_data !== 'undefined'){
} else {
figwheel.client.file_reloading.ns_meta_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.get_meta_data_for_ns = (function get_meta_data_for_ns(ns){
return cljs.core.get.call(null,figwheel.client.file_reloading.ns_meta_data,ns);
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){
return [cljs.core.str(clojure.string.replace_first.call(null,goog.basePath,"/goog","")),cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__25747,callback){
var map__25749 = p__25747;
var map__25749__$1 = ((cljs.core.seq_QMARK_.call(null,map__25749))?cljs.core.apply.call(null,cljs.core.hash_map,map__25749):map__25749);
var msg = map__25749__$1;
var meta_data = cljs.core.get.call(null,map__25749__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__25749__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__25749__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__25749__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.ns_meta_data,cljs.core.assoc,namespace,meta_data);

if(cljs.core.truth_((function (){var and__12581__auto__ = (function (){var or__12593__auto__ = dependency_file;
if(cljs.core.truth_(or__12593__auto__)){
return or__12593__auto__;
} else {
var or__12593__auto____$1 = (function (){var and__12581__auto__ = meta_data;
if(cljs.core.truth_(and__12581__auto__)){
return new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
} else {
return and__12581__auto__;
}
})();
if(cljs.core.truth_(or__12593__auto____$1)){
return or__12593__auto____$1;
} else {
return goog.isProvided_(cljs.core.name.call(null,namespace));
}
}
})();
if(cljs.core.truth_(and__12581__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1((function (){var or__12593__auto__ = meta_data;
if(cljs.core.truth_(or__12593__auto__)){
return or__12593__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else {
return and__12581__auto__;
}
})())){
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__25749,map__25749__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__25749,map__25749__$1,msg,meta_data,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.file_reloading.reload_js_file,files))));
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__25750,p__25751){
var map__25754 = p__25750;
var map__25754__$1 = ((cljs.core.seq_QMARK_.call(null,map__25754))?cljs.core.apply.call(null,cljs.core.hash_map,map__25754):map__25754);
var opts = map__25754__$1;
var url_rewriter = cljs.core.get.call(null,map__25754__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__25755 = p__25751;
var map__25755__$1 = ((cljs.core.seq_QMARK_.call(null,map__25755))?cljs.core.apply.call(null,cljs.core.hash_map,map__25755):map__25755);
var d = map__25755__$1;
var file = cljs.core.get.call(null,map__25755__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__25757,p__25758){
var map__25812 = p__25757;
var map__25812__$1 = ((cljs.core.seq_QMARK_.call(null,map__25812))?cljs.core.apply.call(null,cljs.core.hash_map,map__25812):map__25812);
var opts = map__25812__$1;
var on_jsload = cljs.core.get.call(null,map__25812__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__25812__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__25813 = p__25758;
var map__25813__$1 = ((cljs.core.seq_QMARK_.call(null,map__25813))?cljs.core.apply.call(null,cljs.core.hash_map,map__25813):map__25813);
var msg = map__25813__$1;
var files = cljs.core.get.call(null,map__25813__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__15056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto__,map__25812,map__25812__$1,opts,on_jsload,before_jsload,map__25813,map__25813__$1,msg,files){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto__,map__25812,map__25812__$1,opts,on_jsload,before_jsload,map__25813,map__25813__$1,msg,files){
return (function (state_25843){
var state_val_25844 = (state_25843[(1)]);
if((state_val_25844 === (8))){
var inst_25841 = (state_25843[(2)]);
var state_25843__$1 = state_25843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25843__$1,inst_25841);
} else {
if((state_val_25844 === (7))){
var state_25843__$1 = state_25843;
var statearr_25845_25865 = state_25843__$1;
(statearr_25845_25865[(2)] = null);

(statearr_25845_25865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25844 === (6))){
var inst_25821 = (state_25843[(7)]);
var inst_25835 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_25836 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25821);
var inst_25837 = cljs.core.pr_str.call(null,inst_25836);
var inst_25838 = console.log("not required:",inst_25837);
var state_25843__$1 = (function (){var statearr_25846 = state_25843;
(statearr_25846[(8)] = inst_25835);

return statearr_25846;
})();
var statearr_25847_25866 = state_25843__$1;
(statearr_25847_25866[(2)] = inst_25838);

(statearr_25847_25866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25844 === (5))){
var inst_25821 = (state_25843[(7)]);
var inst_25832 = (state_25843[(2)]);
var inst_25833 = cljs.core.not_empty.call(null,inst_25821);
var state_25843__$1 = (function (){var statearr_25848 = state_25843;
(statearr_25848[(9)] = inst_25832);

return statearr_25848;
})();
if(cljs.core.truth_(inst_25833)){
var statearr_25849_25867 = state_25843__$1;
(statearr_25849_25867[(1)] = (6));

} else {
var statearr_25850_25868 = state_25843__$1;
(statearr_25850_25868[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25844 === (4))){
var state_25843__$1 = state_25843;
var statearr_25851_25869 = state_25843__$1;
(statearr_25851_25869[(2)] = null);

(statearr_25851_25869[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25844 === (3))){
var inst_25821 = (state_25843[(7)]);
var inst_25819 = (state_25843[(10)]);
var inst_25818 = (state_25843[(11)]);
var inst_25815 = (state_25843[(12)]);
var inst_25824 = console.debug("Figwheel: loaded these files");
var inst_25825 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25819);
var inst_25826 = cljs.core.pr_str.call(null,inst_25825);
var inst_25827 = console.log(inst_25826);
var inst_25828 = (function (){var files_not_loaded = inst_25821;
var res = inst_25819;
var res_SINGLEQUOTE_ = inst_25818;
var files_SINGLEQUOTE_ = inst_25815;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_25821,inst_25819,inst_25818,inst_25815,inst_25824,inst_25825,inst_25826,inst_25827,state_val_25844,c__15056__auto__,map__25812,map__25812__$1,opts,on_jsload,before_jsload,map__25813,map__25813__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_25821,inst_25819,inst_25818,inst_25815,inst_25824,inst_25825,inst_25826,inst_25827,state_val_25844,c__15056__auto__,map__25812,map__25812__$1,opts,on_jsload,before_jsload,map__25813,map__25813__$1,msg,files))
})();
var inst_25829 = setTimeout(inst_25828,(10));
var state_25843__$1 = (function (){var statearr_25852 = state_25843;
(statearr_25852[(13)] = inst_25824);

(statearr_25852[(14)] = inst_25827);

return statearr_25852;
})();
var statearr_25853_25870 = state_25843__$1;
(statearr_25853_25870[(2)] = inst_25829);

(statearr_25853_25870[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25844 === (2))){
var inst_25819 = (state_25843[(10)]);
var inst_25818 = (state_25843[(11)]);
var inst_25815 = (state_25843[(12)]);
var inst_25818__$1 = (state_25843[(2)]);
var inst_25819__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25818__$1);
var inst_25820 = (function (){var res = inst_25819__$1;
var res_SINGLEQUOTE_ = inst_25818__$1;
var files_SINGLEQUOTE_ = inst_25815;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_25819,inst_25818,inst_25815,inst_25818__$1,inst_25819__$1,state_val_25844,c__15056__auto__,map__25812,map__25812__$1,opts,on_jsload,before_jsload,map__25813,map__25813__$1,msg,files){
return (function (p1__25756_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25756_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_25819,inst_25818,inst_25815,inst_25818__$1,inst_25819__$1,state_val_25844,c__15056__auto__,map__25812,map__25812__$1,opts,on_jsload,before_jsload,map__25813,map__25813__$1,msg,files))
})();
var inst_25821 = cljs.core.filter.call(null,inst_25820,inst_25818__$1);
var inst_25822 = cljs.core.not_empty.call(null,inst_25819__$1);
var state_25843__$1 = (function (){var statearr_25854 = state_25843;
(statearr_25854[(7)] = inst_25821);

(statearr_25854[(10)] = inst_25819__$1);

(statearr_25854[(11)] = inst_25818__$1);

return statearr_25854;
})();
if(cljs.core.truth_(inst_25822)){
var statearr_25855_25871 = state_25843__$1;
(statearr_25855_25871[(1)] = (3));

} else {
var statearr_25856_25872 = state_25843__$1;
(statearr_25856_25872[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25844 === (1))){
var inst_25815 = (state_25843[(12)]);
var inst_25814 = before_jsload.call(null,files);
var inst_25815__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_25816 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25815__$1);
var state_25843__$1 = (function (){var statearr_25857 = state_25843;
(statearr_25857[(15)] = inst_25814);

(statearr_25857[(12)] = inst_25815__$1);

return statearr_25857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25843__$1,(2),inst_25816);
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
});})(c__15056__auto__,map__25812,map__25812__$1,opts,on_jsload,before_jsload,map__25813,map__25813__$1,msg,files))
;
return ((function (switch__15000__auto__,c__15056__auto__,map__25812,map__25812__$1,opts,on_jsload,before_jsload,map__25813,map__25813__$1,msg,files){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_25861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25861[(0)] = state_machine__15001__auto__);

(statearr_25861[(1)] = (1));

return statearr_25861;
});
var state_machine__15001__auto____1 = (function (state_25843){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_25843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e25862){if((e25862 instanceof Object)){
var ex__15004__auto__ = e25862;
var statearr_25863_25873 = state_25843;
(statearr_25863_25873[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25874 = state_25843;
state_25843 = G__25874;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_25843){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_25843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto__,map__25812,map__25812__$1,opts,on_jsload,before_jsload,map__25813,map__25813__$1,msg,files))
})();
var state__15058__auto__ = (function (){var statearr_25864 = f__15057__auto__.call(null);
(statearr_25864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto__);

return statearr_25864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto__,map__25812,map__25812__$1,opts,on_jsload,before_jsload,map__25813,map__25813__$1,msg,files))
);

return c__15056__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__25875,link_href){
var map__25877 = p__25875;
var map__25877__$1 = ((cljs.core.seq_QMARK_.call(null,map__25877))?cljs.core.apply.call(null,cljs.core.hash_map,map__25877):map__25877);
var request_url = cljs.core.get.call(null,map__25877__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__25877__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.file_reloading.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.file_reloading.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.file_reloading.current_links.call(null));
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var c__15056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto__,parent){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto__,parent){
return (function (state_25898){
var state_val_25899 = (state_25898[(1)]);
if((state_val_25899 === (2))){
var inst_25895 = (state_25898[(2)]);
var inst_25896 = parent.removeChild(orig_link);
var state_25898__$1 = (function (){var statearr_25900 = state_25898;
(statearr_25900[(7)] = inst_25895);

return statearr_25900;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25898__$1,inst_25896);
} else {
if((state_val_25899 === (1))){
var inst_25893 = cljs.core.async.timeout.call(null,(200));
var state_25898__$1 = state_25898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25898__$1,(2),inst_25893);
} else {
return null;
}
}
});})(c__15056__auto__,parent))
;
return ((function (switch__15000__auto__,c__15056__auto__,parent){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_25904 = [null,null,null,null,null,null,null,null];
(statearr_25904[(0)] = state_machine__15001__auto__);

(statearr_25904[(1)] = (1));

return statearr_25904;
});
var state_machine__15001__auto____1 = (function (state_25898){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_25898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e25905){if((e25905 instanceof Object)){
var ex__15004__auto__ = e25905;
var statearr_25906_25908 = state_25898;
(statearr_25906_25908[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25909 = state_25898;
state_25898 = G__25909;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_25898){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_25898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto__,parent))
})();
var state__15058__auto__ = (function (){var statearr_25907 = f__15057__auto__.call(null);
(statearr_25907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto__);

return statearr_25907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto__,parent))
);

return c__15056__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__25910){
var map__25912 = p__25910;
var map__25912__$1 = ((cljs.core.seq_QMARK_.call(null,map__25912))?cljs.core.apply.call(null,cljs.core.hash_map,map__25912):map__25912);
var f_data = map__25912__$1;
var request_url = cljs.core.get.call(null,map__25912__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__25912__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__25913,files_msg){
var map__25935 = p__25913;
var map__25935__$1 = ((cljs.core.seq_QMARK_.call(null,map__25935))?cljs.core.apply.call(null,cljs.core.hash_map,map__25935):map__25935);
var opts = map__25935__$1;
var on_cssload = cljs.core.get.call(null,map__25935__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__25936_25956 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25937_25957 = null;
var count__25938_25958 = (0);
var i__25939_25959 = (0);
while(true){
if((i__25939_25959 < count__25938_25958)){
var f_25960 = cljs.core._nth.call(null,chunk__25937_25957,i__25939_25959);
figwheel.client.file_reloading.reload_css_file.call(null,f_25960);

var G__25961 = seq__25936_25956;
var G__25962 = chunk__25937_25957;
var G__25963 = count__25938_25958;
var G__25964 = (i__25939_25959 + (1));
seq__25936_25956 = G__25961;
chunk__25937_25957 = G__25962;
count__25938_25958 = G__25963;
i__25939_25959 = G__25964;
continue;
} else {
var temp__4126__auto___25965 = cljs.core.seq.call(null,seq__25936_25956);
if(temp__4126__auto___25965){
var seq__25936_25966__$1 = temp__4126__auto___25965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25936_25966__$1)){
var c__13380__auto___25967 = cljs.core.chunk_first.call(null,seq__25936_25966__$1);
var G__25968 = cljs.core.chunk_rest.call(null,seq__25936_25966__$1);
var G__25969 = c__13380__auto___25967;
var G__25970 = cljs.core.count.call(null,c__13380__auto___25967);
var G__25971 = (0);
seq__25936_25956 = G__25968;
chunk__25937_25957 = G__25969;
count__25938_25958 = G__25970;
i__25939_25959 = G__25971;
continue;
} else {
var f_25972 = cljs.core.first.call(null,seq__25936_25966__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25972);

var G__25973 = cljs.core.next.call(null,seq__25936_25966__$1);
var G__25974 = null;
var G__25975 = (0);
var G__25976 = (0);
seq__25936_25956 = G__25973;
chunk__25937_25957 = G__25974;
count__25938_25958 = G__25975;
i__25939_25959 = G__25976;
continue;
}
} else {
}
}
break;
}

var c__15056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto__,map__25935,map__25935__$1,opts,on_cssload){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto__,map__25935,map__25935__$1,opts,on_cssload){
return (function (state_25946){
var state_val_25947 = (state_25946[(1)]);
if((state_val_25947 === (2))){
var inst_25942 = (state_25946[(2)]);
var inst_25943 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_25944 = on_cssload.call(null,inst_25943);
var state_25946__$1 = (function (){var statearr_25948 = state_25946;
(statearr_25948[(7)] = inst_25942);

return statearr_25948;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25946__$1,inst_25944);
} else {
if((state_val_25947 === (1))){
var inst_25940 = cljs.core.async.timeout.call(null,(100));
var state_25946__$1 = state_25946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25946__$1,(2),inst_25940);
} else {
return null;
}
}
});})(c__15056__auto__,map__25935,map__25935__$1,opts,on_cssload))
;
return ((function (switch__15000__auto__,c__15056__auto__,map__25935,map__25935__$1,opts,on_cssload){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_25952 = [null,null,null,null,null,null,null,null];
(statearr_25952[(0)] = state_machine__15001__auto__);

(statearr_25952[(1)] = (1));

return statearr_25952;
});
var state_machine__15001__auto____1 = (function (state_25946){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_25946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e25953){if((e25953 instanceof Object)){
var ex__15004__auto__ = e25953;
var statearr_25954_25977 = state_25946;
(statearr_25954_25977[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25978 = state_25946;
state_25946 = G__25978;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_25946){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_25946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto__,map__25935,map__25935__$1,opts,on_cssload))
})();
var state__15058__auto__ = (function (){var statearr_25955 = f__15057__auto__.call(null);
(statearr_25955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto__);

return statearr_25955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto__,map__25935,map__25935__$1,opts,on_cssload))
);

return c__15056__auto__;
});

//# sourceMappingURL=file_reloading.js.map?rel=1422744170791