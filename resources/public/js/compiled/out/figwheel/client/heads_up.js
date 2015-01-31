// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('figwheel.client.heads_up')) {
goog.provide('figwheel.client.heads_up');
}
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__25513_25521 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25514_25522 = null;
var count__25515_25523 = (0);
var i__25516_25524 = (0);
while(true){
if((i__25516_25524 < count__25515_25523)){
var k_25525 = cljs.core._nth.call(null,chunk__25514_25522,i__25516_25524);
e.setAttribute(cljs.core.name.call(null,k_25525),cljs.core.get.call(null,attrs,k_25525));

var G__25526 = seq__25513_25521;
var G__25527 = chunk__25514_25522;
var G__25528 = count__25515_25523;
var G__25529 = (i__25516_25524 + (1));
seq__25513_25521 = G__25526;
chunk__25514_25522 = G__25527;
count__25515_25523 = G__25528;
i__25516_25524 = G__25529;
continue;
} else {
var temp__4126__auto___25530 = cljs.core.seq.call(null,seq__25513_25521);
if(temp__4126__auto___25530){
var seq__25513_25531__$1 = temp__4126__auto___25530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25513_25531__$1)){
var c__13380__auto___25532 = cljs.core.chunk_first.call(null,seq__25513_25531__$1);
var G__25533 = cljs.core.chunk_rest.call(null,seq__25513_25531__$1);
var G__25534 = c__13380__auto___25532;
var G__25535 = cljs.core.count.call(null,c__13380__auto___25532);
var G__25536 = (0);
seq__25513_25521 = G__25533;
chunk__25514_25522 = G__25534;
count__25515_25523 = G__25535;
i__25516_25524 = G__25536;
continue;
} else {
var k_25537 = cljs.core.first.call(null,seq__25513_25531__$1);
e.setAttribute(cljs.core.name.call(null,k_25537),cljs.core.get.call(null,attrs,k_25537));

var G__25538 = cljs.core.next.call(null,seq__25513_25531__$1);
var G__25539 = null;
var G__25540 = (0);
var G__25541 = (0);
seq__25513_25521 = G__25538;
chunk__25514_25522 = G__25539;
count__25515_25523 = G__25540;
i__25516_25524 = G__25541;
continue;
}
} else {
}
}
break;
}

var seq__25517_25542 = cljs.core.seq.call(null,children);
var chunk__25518_25543 = null;
var count__25519_25544 = (0);
var i__25520_25545 = (0);
while(true){
if((i__25520_25545 < count__25519_25544)){
var ch_25546 = cljs.core._nth.call(null,chunk__25518_25543,i__25520_25545);
e.appendChild(ch_25546);

var G__25547 = seq__25517_25542;
var G__25548 = chunk__25518_25543;
var G__25549 = count__25519_25544;
var G__25550 = (i__25520_25545 + (1));
seq__25517_25542 = G__25547;
chunk__25518_25543 = G__25548;
count__25519_25544 = G__25549;
i__25520_25545 = G__25550;
continue;
} else {
var temp__4126__auto___25551 = cljs.core.seq.call(null,seq__25517_25542);
if(temp__4126__auto___25551){
var seq__25517_25552__$1 = temp__4126__auto___25551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25517_25552__$1)){
var c__13380__auto___25553 = cljs.core.chunk_first.call(null,seq__25517_25552__$1);
var G__25554 = cljs.core.chunk_rest.call(null,seq__25517_25552__$1);
var G__25555 = c__13380__auto___25553;
var G__25556 = cljs.core.count.call(null,c__13380__auto___25553);
var G__25557 = (0);
seq__25517_25542 = G__25554;
chunk__25518_25543 = G__25555;
count__25519_25544 = G__25556;
i__25520_25545 = G__25557;
continue;
} else {
var ch_25558 = cljs.core.first.call(null,seq__25517_25552__$1);
e.appendChild(ch_25558);

var G__25559 = cljs.core.next.call(null,seq__25517_25552__$1);
var G__25560 = null;
var G__25561 = (0);
var G__25562 = (0);
seq__25517_25542 = G__25559;
chunk__25518_25543 = G__25560;
count__25519_25544 = G__25561;
i__25520_25545 = G__25562;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__25563__i = 0, G__25563__a = new Array(arguments.length -  2);
while (G__25563__i < G__25563__a.length) {G__25563__a[G__25563__i] = arguments[G__25563__i + 2]; ++G__25563__i;}
  children = new cljs.core.IndexedSeq(G__25563__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__25564){
var t = cljs.core.first(arglist__25564);
arglist__25564 = cljs.core.next(arglist__25564);
var attrs = cljs.core.first(arglist__25564);
var children = cljs.core.rest(arglist__25564);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__13490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__13491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__13492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__13493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__13494__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__13490__auto__,prefer_table__13491__auto__,method_cache__13492__auto__,cached_hierarchy__13493__auto__,hierarchy__13494__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__13490__auto__,prefer_table__13491__auto__,method_cache__13492__auto__,cached_hierarchy__13493__auto__,hierarchy__13494__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__13494__auto__,method_table__13490__auto__,prefer_table__13491__auto__,method_cache__13492__auto__,cached_hierarchy__13493__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

return document.body.appendChild(el);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
}
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__25565,st_map){
var map__25569 = p__25565;
var map__25569__$1 = ((cljs.core.seq_QMARK_.call(null,map__25569))?cljs.core.apply.call(null,cljs.core.hash_map,map__25569):map__25569);
var container_el = cljs.core.get.call(null,map__25569__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__25569,map__25569__$1,container_el){
return (function (p__25570){
var vec__25571 = p__25570;
var k = cljs.core.nth.call(null,vec__25571,(0),null);
var v = cljs.core.nth.call(null,vec__25571,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__25569,map__25569__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__25572,dom_str){
var map__25574 = p__25572;
var map__25574__$1 = ((cljs.core.seq_QMARK_.call(null,map__25574))?cljs.core.apply.call(null,cljs.core.hash_map,map__25574):map__25574);
var c = map__25574__$1;
var content_area_el = cljs.core.get.call(null,map__25574__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__25575){
var map__25577 = p__25575;
var map__25577__$1 = ((cljs.core.seq_QMARK_.call(null,map__25577))?cljs.core.apply.call(null,cljs.core.hash_map,map__25577):map__25577);
var content_area_el = cljs.core.get.call(null,map__25577__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__15056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto__){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto__){
return (function (state_25619){
var state_val_25620 = (state_25619[(1)]);
if((state_val_25620 === (2))){
var inst_25604 = (state_25619[(7)]);
var inst_25613 = (state_25619[(2)]);
var inst_25614 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25615 = ["auto"];
var inst_25616 = cljs.core.PersistentHashMap.fromArrays(inst_25614,inst_25615);
var inst_25617 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25604,inst_25616);
var state_25619__$1 = (function (){var statearr_25621 = state_25619;
(statearr_25621[(8)] = inst_25613);

return statearr_25621;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25619__$1,inst_25617);
} else {
if((state_val_25620 === (1))){
var inst_25604 = (state_25619[(7)]);
var inst_25604__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25605 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25606 = ["10px","10px","100%","68px","1.0"];
var inst_25607 = cljs.core.PersistentHashMap.fromArrays(inst_25605,inst_25606);
var inst_25608 = cljs.core.merge.call(null,inst_25607,style);
var inst_25609 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25604__$1,inst_25608);
var inst_25610 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25604__$1,msg);
var inst_25611 = cljs.core.async.timeout.call(null,(300));
var state_25619__$1 = (function (){var statearr_25622 = state_25619;
(statearr_25622[(9)] = inst_25609);

(statearr_25622[(7)] = inst_25604__$1);

(statearr_25622[(10)] = inst_25610);

return statearr_25622;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25619__$1,(2),inst_25611);
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
var statearr_25626 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25626[(0)] = state_machine__15001__auto__);

(statearr_25626[(1)] = (1));

return statearr_25626;
});
var state_machine__15001__auto____1 = (function (state_25619){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_25619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e25627){if((e25627 instanceof Object)){
var ex__15004__auto__ = e25627;
var statearr_25628_25630 = state_25619;
(statearr_25628_25630[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25631 = state_25619;
state_25619 = G__25631;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_25619){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_25619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto__))
})();
var state__15058__auto__ = (function (){var statearr_25629 = f__15057__auto__.call(null);
(statearr_25629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto__);

return statearr_25629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto__))
);

return c__15056__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__25633 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__25633,(0),null);
var ln = cljs.core.nth.call(null,vec__25633,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__25636 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__25636,(0),null);
var file_line = cljs.core.nth.call(null,vec__25636,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25636,file_name,file_line){
return (function (p1__25634_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__25634_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__25636,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__25638 = figwheel.client.heads_up.ensure_container.call(null);
var map__25638__$1 = ((cljs.core.seq_QMARK_.call(null,map__25638))?cljs.core.apply.call(null,cljs.core.hash_map,map__25638):map__25638);
var content_area_el = cljs.core.get.call(null,map__25638__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__15056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto__){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto__){
return (function (state_25685){
var state_val_25686 = (state_25685[(1)]);
if((state_val_25686 === (3))){
var inst_25668 = (state_25685[(7)]);
var inst_25682 = (state_25685[(2)]);
var inst_25683 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25668,"");
var state_25685__$1 = (function (){var statearr_25687 = state_25685;
(statearr_25687[(8)] = inst_25682);

return statearr_25687;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25685__$1,inst_25683);
} else {
if((state_val_25686 === (2))){
var inst_25668 = (state_25685[(7)]);
var inst_25675 = (state_25685[(2)]);
var inst_25676 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25677 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25678 = cljs.core.PersistentHashMap.fromArrays(inst_25676,inst_25677);
var inst_25679 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25668,inst_25678);
var inst_25680 = cljs.core.async.timeout.call(null,(200));
var state_25685__$1 = (function (){var statearr_25688 = state_25685;
(statearr_25688[(9)] = inst_25675);

(statearr_25688[(10)] = inst_25679);

return statearr_25688;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25685__$1,(3),inst_25680);
} else {
if((state_val_25686 === (1))){
var inst_25668 = (state_25685[(7)]);
var inst_25668__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25669 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25670 = ["0.0"];
var inst_25671 = cljs.core.PersistentHashMap.fromArrays(inst_25669,inst_25670);
var inst_25672 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25668__$1,inst_25671);
var inst_25673 = cljs.core.async.timeout.call(null,(300));
var state_25685__$1 = (function (){var statearr_25689 = state_25685;
(statearr_25689[(7)] = inst_25668__$1);

(statearr_25689[(11)] = inst_25672);

return statearr_25689;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25685__$1,(2),inst_25673);
} else {
return null;
}
}
}
});})(c__15056__auto__))
;
return ((function (switch__15000__auto__,c__15056__auto__){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_25693 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25693[(0)] = state_machine__15001__auto__);

(statearr_25693[(1)] = (1));

return statearr_25693;
});
var state_machine__15001__auto____1 = (function (state_25685){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_25685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e25694){if((e25694 instanceof Object)){
var ex__15004__auto__ = e25694;
var statearr_25695_25697 = state_25685;
(statearr_25695_25697[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25698 = state_25685;
state_25685 = G__25698;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_25685){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_25685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto__))
})();
var state__15058__auto__ = (function (){var statearr_25696 = f__15057__auto__.call(null);
(statearr_25696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto__);

return statearr_25696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto__))
);

return c__15056__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__15056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto__){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto__){
return (function (state_25730){
var state_val_25731 = (state_25730[(1)]);
if((state_val_25731 === (4))){
var inst_25728 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25730__$1,inst_25728);
} else {
if((state_val_25731 === (3))){
var inst_25725 = (state_25730[(2)]);
var inst_25726 = figwheel.client.heads_up.clear.call(null);
var state_25730__$1 = (function (){var statearr_25732 = state_25730;
(statearr_25732[(7)] = inst_25725);

return statearr_25732;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25730__$1,(4),inst_25726);
} else {
if((state_val_25731 === (2))){
var inst_25722 = (state_25730[(2)]);
var inst_25723 = cljs.core.async.timeout.call(null,(400));
var state_25730__$1 = (function (){var statearr_25733 = state_25730;
(statearr_25733[(8)] = inst_25722);

return statearr_25733;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25730__$1,(3),inst_25723);
} else {
if((state_val_25731 === (1))){
var inst_25720 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25730__$1 = state_25730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25730__$1,(2),inst_25720);
} else {
return null;
}
}
}
}
});})(c__15056__auto__))
;
return ((function (switch__15000__auto__,c__15056__auto__){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_25737 = [null,null,null,null,null,null,null,null,null];
(statearr_25737[(0)] = state_machine__15001__auto__);

(statearr_25737[(1)] = (1));

return statearr_25737;
});
var state_machine__15001__auto____1 = (function (state_25730){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_25730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e25738){if((e25738 instanceof Object)){
var ex__15004__auto__ = e25738;
var statearr_25739_25741 = state_25730;
(statearr_25739_25741[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25742 = state_25730;
state_25730 = G__25742;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_25730){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_25730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto__))
})();
var state__15058__auto__ = (function (){var statearr_25740 = f__15057__auto__.call(null);
(statearr_25740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto__);

return statearr_25740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto__))
);

return c__15056__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1422744170624