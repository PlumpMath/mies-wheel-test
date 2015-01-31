// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('cljs.core.async')) {
goog.provide('cljs.core.async');
}
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t25983 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25983 = (function (f,fn_handler,meta25984){
this.f = f;
this.fn_handler = fn_handler;
this.meta25984 = meta25984;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25983.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25983.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25983.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25985){
var self__ = this;
var _25985__$1 = this;
return self__.meta25984;
});

cljs.core.async.t25983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25985,meta25984__$1){
var self__ = this;
var _25985__$1 = this;
return (new cljs.core.async.t25983(self__.f,self__.fn_handler,meta25984__$1));
});

cljs.core.async.t25983.cljs$lang$type = true;

cljs.core.async.t25983.cljs$lang$ctorStr = "cljs.core.async/t25983";

cljs.core.async.t25983.cljs$lang$ctorPrWriter = (function (this__13180__auto__,writer__13181__auto__,opt__13182__auto__){
return cljs.core._write.call(null,writer__13181__auto__,"cljs.core.async/t25983");
});

cljs.core.async.__GT_t25983 = (function __GT_t25983(f__$1,fn_handler__$1,meta25984){
return (new cljs.core.async.t25983(f__$1,fn_handler__$1,meta25984));
});

}

return (new cljs.core.async.t25983(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/carlos/OpenSource/mies-wheel-test/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__25987 = buff;
if(G__25987){
var bit__13274__auto__ = null;
if(cljs.core.truth_((function (){var or__12593__auto__ = bit__13274__auto__;
if(cljs.core.truth_(or__12593__auto__)){
return or__12593__auto__;
} else {
return G__25987.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25987.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25987);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25987);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25988 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25988);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25988,ret){
return (function (){
return fn1.call(null,val_25988);
});})(val_25988,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__13480__auto___25989 = n;
var x_25990 = (0);
while(true){
if((x_25990 < n__13480__auto___25989)){
(a[x_25990] = (0));

var G__25991 = (x_25990 + (1));
x_25990 = G__25991;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25992 = (i + (1));
i = G__25992;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25996 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25996 = (function (flag,alt_flag,meta25997){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25997 = meta25997;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25996.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25998){
var self__ = this;
var _25998__$1 = this;
return self__.meta25997;
});})(flag))
;

cljs.core.async.t25996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25998,meta25997__$1){
var self__ = this;
var _25998__$1 = this;
return (new cljs.core.async.t25996(self__.flag,self__.alt_flag,meta25997__$1));
});})(flag))
;

cljs.core.async.t25996.cljs$lang$type = true;

cljs.core.async.t25996.cljs$lang$ctorStr = "cljs.core.async/t25996";

cljs.core.async.t25996.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13180__auto__,writer__13181__auto__,opt__13182__auto__){
return cljs.core._write.call(null,writer__13181__auto__,"cljs.core.async/t25996");
});})(flag))
;

cljs.core.async.__GT_t25996 = ((function (flag){
return (function __GT_t25996(flag__$1,alt_flag__$1,meta25997){
return (new cljs.core.async.t25996(flag__$1,alt_flag__$1,meta25997));
});})(flag))
;

}

return (new cljs.core.async.t25996(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/carlos/OpenSource/mies-wheel-test/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t26002 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26002 = (function (cb,flag,alt_handler,meta26003){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26003 = meta26003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26002.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26004){
var self__ = this;
var _26004__$1 = this;
return self__.meta26003;
});

cljs.core.async.t26002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26004,meta26003__$1){
var self__ = this;
var _26004__$1 = this;
return (new cljs.core.async.t26002(self__.cb,self__.flag,self__.alt_handler,meta26003__$1));
});

cljs.core.async.t26002.cljs$lang$type = true;

cljs.core.async.t26002.cljs$lang$ctorStr = "cljs.core.async/t26002";

cljs.core.async.t26002.cljs$lang$ctorPrWriter = (function (this__13180__auto__,writer__13181__auto__,opt__13182__auto__){
return cljs.core._write.call(null,writer__13181__auto__,"cljs.core.async/t26002");
});

cljs.core.async.__GT_t26002 = (function __GT_t26002(cb__$1,flag__$1,alt_handler__$1,meta26003){
return (new cljs.core.async.t26002(cb__$1,flag__$1,alt_handler__$1,meta26003));
});

}

return (new cljs.core.async.t26002(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/carlos/OpenSource/mies-wheel-test/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26005_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26005_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26006_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26006_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12593__auto__ = wport;
if(cljs.core.truth_(or__12593__auto__)){
return or__12593__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26007 = (i + (1));
i = G__26007;
continue;
}
} else {
return null;
}
break;
}
})();
var or__12593__auto__ = ret;
if(cljs.core.truth_(or__12593__auto__)){
return or__12593__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__12581__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__12581__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__12581__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__26008){
var map__26010 = p__26008;
var map__26010__$1 = ((cljs.core.seq_QMARK_.call(null,map__26010))?cljs.core.apply.call(null,cljs.core.hash_map,map__26010):map__26010);
var opts = map__26010__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__26008 = null;
if (arguments.length > 1) {
var G__26011__i = 0, G__26011__a = new Array(arguments.length -  1);
while (G__26011__i < G__26011__a.length) {G__26011__a[G__26011__i] = arguments[G__26011__i + 1]; ++G__26011__i;}
  p__26008 = new cljs.core.IndexedSeq(G__26011__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__26008);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__26012){
var ports = cljs.core.first(arglist__26012);
var p__26008 = cljs.core.rest(arglist__26012);
return alts_BANG___delegate(ports,p__26008);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__15056__auto___26107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto___26107){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto___26107){
return (function (state_26083){
var state_val_26084 = (state_26083[(1)]);
if((state_val_26084 === (7))){
var inst_26079 = (state_26083[(2)]);
var state_26083__$1 = state_26083;
var statearr_26085_26108 = state_26083__$1;
(statearr_26085_26108[(2)] = inst_26079);

(statearr_26085_26108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (1))){
var state_26083__$1 = state_26083;
var statearr_26086_26109 = state_26083__$1;
(statearr_26086_26109[(2)] = null);

(statearr_26086_26109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (4))){
var inst_26062 = (state_26083[(7)]);
var inst_26062__$1 = (state_26083[(2)]);
var inst_26063 = (inst_26062__$1 == null);
var state_26083__$1 = (function (){var statearr_26087 = state_26083;
(statearr_26087[(7)] = inst_26062__$1);

return statearr_26087;
})();
if(cljs.core.truth_(inst_26063)){
var statearr_26088_26110 = state_26083__$1;
(statearr_26088_26110[(1)] = (5));

} else {
var statearr_26089_26111 = state_26083__$1;
(statearr_26089_26111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (13))){
var state_26083__$1 = state_26083;
var statearr_26090_26112 = state_26083__$1;
(statearr_26090_26112[(2)] = null);

(statearr_26090_26112[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (6))){
var inst_26062 = (state_26083[(7)]);
var state_26083__$1 = state_26083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26083__$1,(11),to,inst_26062);
} else {
if((state_val_26084 === (3))){
var inst_26081 = (state_26083[(2)]);
var state_26083__$1 = state_26083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26083__$1,inst_26081);
} else {
if((state_val_26084 === (12))){
var state_26083__$1 = state_26083;
var statearr_26091_26113 = state_26083__$1;
(statearr_26091_26113[(2)] = null);

(statearr_26091_26113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (2))){
var state_26083__$1 = state_26083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26083__$1,(4),from);
} else {
if((state_val_26084 === (11))){
var inst_26072 = (state_26083[(2)]);
var state_26083__$1 = state_26083;
if(cljs.core.truth_(inst_26072)){
var statearr_26092_26114 = state_26083__$1;
(statearr_26092_26114[(1)] = (12));

} else {
var statearr_26093_26115 = state_26083__$1;
(statearr_26093_26115[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (9))){
var state_26083__$1 = state_26083;
var statearr_26094_26116 = state_26083__$1;
(statearr_26094_26116[(2)] = null);

(statearr_26094_26116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (5))){
var state_26083__$1 = state_26083;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26095_26117 = state_26083__$1;
(statearr_26095_26117[(1)] = (8));

} else {
var statearr_26096_26118 = state_26083__$1;
(statearr_26096_26118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (14))){
var inst_26077 = (state_26083[(2)]);
var state_26083__$1 = state_26083;
var statearr_26097_26119 = state_26083__$1;
(statearr_26097_26119[(2)] = inst_26077);

(statearr_26097_26119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (10))){
var inst_26069 = (state_26083[(2)]);
var state_26083__$1 = state_26083;
var statearr_26098_26120 = state_26083__$1;
(statearr_26098_26120[(2)] = inst_26069);

(statearr_26098_26120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26084 === (8))){
var inst_26066 = cljs.core.async.close_BANG_.call(null,to);
var state_26083__$1 = state_26083;
var statearr_26099_26121 = state_26083__$1;
(statearr_26099_26121[(2)] = inst_26066);

(statearr_26099_26121[(1)] = (10));


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
});})(c__15056__auto___26107))
;
return ((function (switch__15000__auto__,c__15056__auto___26107){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_26103 = [null,null,null,null,null,null,null,null];
(statearr_26103[(0)] = state_machine__15001__auto__);

(statearr_26103[(1)] = (1));

return statearr_26103;
});
var state_machine__15001__auto____1 = (function (state_26083){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_26083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e26104){if((e26104 instanceof Object)){
var ex__15004__auto__ = e26104;
var statearr_26105_26122 = state_26083;
(statearr_26105_26122[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26123 = state_26083;
state_26083 = G__26123;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_26083){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_26083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto___26107))
})();
var state__15058__auto__ = (function (){var statearr_26106 = f__15057__auto__.call(null);
(statearr_26106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto___26107);

return statearr_26106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto___26107))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26307){
var vec__26308 = p__26307;
var v = cljs.core.nth.call(null,vec__26308,(0),null);
var p = cljs.core.nth.call(null,vec__26308,(1),null);
var job = vec__26308;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15056__auto___26490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto___26490,res,vec__26308,v,p,job,jobs,results){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto___26490,res,vec__26308,v,p,job,jobs,results){
return (function (state_26313){
var state_val_26314 = (state_26313[(1)]);
if((state_val_26314 === (2))){
var inst_26310 = (state_26313[(2)]);
var inst_26311 = cljs.core.async.close_BANG_.call(null,res);
var state_26313__$1 = (function (){var statearr_26315 = state_26313;
(statearr_26315[(7)] = inst_26310);

return statearr_26315;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26313__$1,inst_26311);
} else {
if((state_val_26314 === (1))){
var state_26313__$1 = state_26313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26313__$1,(2),res,v);
} else {
return null;
}
}
});})(c__15056__auto___26490,res,vec__26308,v,p,job,jobs,results))
;
return ((function (switch__15000__auto__,c__15056__auto___26490,res,vec__26308,v,p,job,jobs,results){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_26319 = [null,null,null,null,null,null,null,null];
(statearr_26319[(0)] = state_machine__15001__auto__);

(statearr_26319[(1)] = (1));

return statearr_26319;
});
var state_machine__15001__auto____1 = (function (state_26313){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_26313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e26320){if((e26320 instanceof Object)){
var ex__15004__auto__ = e26320;
var statearr_26321_26491 = state_26313;
(statearr_26321_26491[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26492 = state_26313;
state_26313 = G__26492;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_26313){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_26313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto___26490,res,vec__26308,v,p,job,jobs,results))
})();
var state__15058__auto__ = (function (){var statearr_26322 = f__15057__auto__.call(null);
(statearr_26322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto___26490);

return statearr_26322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto___26490,res,vec__26308,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26323){
var vec__26324 = p__26323;
var v = cljs.core.nth.call(null,vec__26324,(0),null);
var p = cljs.core.nth.call(null,vec__26324,(1),null);
var job = vec__26324;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__13480__auto___26493 = n;
var __26494 = (0);
while(true){
if((__26494 < n__13480__auto___26493)){
var G__26325_26495 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26325_26495) {
case "async":
var c__15056__auto___26497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26494,c__15056__auto___26497,G__26325_26495,n__13480__auto___26493,jobs,results,process,async){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (__26494,c__15056__auto___26497,G__26325_26495,n__13480__auto___26493,jobs,results,process,async){
return (function (state_26338){
var state_val_26339 = (state_26338[(1)]);
if((state_val_26339 === (7))){
var inst_26334 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
var statearr_26340_26498 = state_26338__$1;
(statearr_26340_26498[(2)] = inst_26334);

(statearr_26340_26498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (6))){
var state_26338__$1 = state_26338;
var statearr_26341_26499 = state_26338__$1;
(statearr_26341_26499[(2)] = null);

(statearr_26341_26499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (5))){
var state_26338__$1 = state_26338;
var statearr_26342_26500 = state_26338__$1;
(statearr_26342_26500[(2)] = null);

(statearr_26342_26500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (4))){
var inst_26328 = (state_26338[(2)]);
var inst_26329 = async.call(null,inst_26328);
var state_26338__$1 = state_26338;
if(cljs.core.truth_(inst_26329)){
var statearr_26343_26501 = state_26338__$1;
(statearr_26343_26501[(1)] = (5));

} else {
var statearr_26344_26502 = state_26338__$1;
(statearr_26344_26502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (3))){
var inst_26336 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26338__$1,inst_26336);
} else {
if((state_val_26339 === (2))){
var state_26338__$1 = state_26338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26338__$1,(4),jobs);
} else {
if((state_val_26339 === (1))){
var state_26338__$1 = state_26338;
var statearr_26345_26503 = state_26338__$1;
(statearr_26345_26503[(2)] = null);

(statearr_26345_26503[(1)] = (2));


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
});})(__26494,c__15056__auto___26497,G__26325_26495,n__13480__auto___26493,jobs,results,process,async))
;
return ((function (__26494,switch__15000__auto__,c__15056__auto___26497,G__26325_26495,n__13480__auto___26493,jobs,results,process,async){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_26349 = [null,null,null,null,null,null,null];
(statearr_26349[(0)] = state_machine__15001__auto__);

(statearr_26349[(1)] = (1));

return statearr_26349;
});
var state_machine__15001__auto____1 = (function (state_26338){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_26338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e26350){if((e26350 instanceof Object)){
var ex__15004__auto__ = e26350;
var statearr_26351_26504 = state_26338;
(statearr_26351_26504[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26505 = state_26338;
state_26338 = G__26505;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_26338){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_26338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(__26494,switch__15000__auto__,c__15056__auto___26497,G__26325_26495,n__13480__auto___26493,jobs,results,process,async))
})();
var state__15058__auto__ = (function (){var statearr_26352 = f__15057__auto__.call(null);
(statearr_26352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto___26497);

return statearr_26352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(__26494,c__15056__auto___26497,G__26325_26495,n__13480__auto___26493,jobs,results,process,async))
);


break;
case "compute":
var c__15056__auto___26506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26494,c__15056__auto___26506,G__26325_26495,n__13480__auto___26493,jobs,results,process,async){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (__26494,c__15056__auto___26506,G__26325_26495,n__13480__auto___26493,jobs,results,process,async){
return (function (state_26365){
var state_val_26366 = (state_26365[(1)]);
if((state_val_26366 === (7))){
var inst_26361 = (state_26365[(2)]);
var state_26365__$1 = state_26365;
var statearr_26367_26507 = state_26365__$1;
(statearr_26367_26507[(2)] = inst_26361);

(statearr_26367_26507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (6))){
var state_26365__$1 = state_26365;
var statearr_26368_26508 = state_26365__$1;
(statearr_26368_26508[(2)] = null);

(statearr_26368_26508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (5))){
var state_26365__$1 = state_26365;
var statearr_26369_26509 = state_26365__$1;
(statearr_26369_26509[(2)] = null);

(statearr_26369_26509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (4))){
var inst_26355 = (state_26365[(2)]);
var inst_26356 = process.call(null,inst_26355);
var state_26365__$1 = state_26365;
if(cljs.core.truth_(inst_26356)){
var statearr_26370_26510 = state_26365__$1;
(statearr_26370_26510[(1)] = (5));

} else {
var statearr_26371_26511 = state_26365__$1;
(statearr_26371_26511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (3))){
var inst_26363 = (state_26365[(2)]);
var state_26365__$1 = state_26365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26365__$1,inst_26363);
} else {
if((state_val_26366 === (2))){
var state_26365__$1 = state_26365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26365__$1,(4),jobs);
} else {
if((state_val_26366 === (1))){
var state_26365__$1 = state_26365;
var statearr_26372_26512 = state_26365__$1;
(statearr_26372_26512[(2)] = null);

(statearr_26372_26512[(1)] = (2));


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
});})(__26494,c__15056__auto___26506,G__26325_26495,n__13480__auto___26493,jobs,results,process,async))
;
return ((function (__26494,switch__15000__auto__,c__15056__auto___26506,G__26325_26495,n__13480__auto___26493,jobs,results,process,async){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_26376 = [null,null,null,null,null,null,null];
(statearr_26376[(0)] = state_machine__15001__auto__);

(statearr_26376[(1)] = (1));

return statearr_26376;
});
var state_machine__15001__auto____1 = (function (state_26365){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_26365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e26377){if((e26377 instanceof Object)){
var ex__15004__auto__ = e26377;
var statearr_26378_26513 = state_26365;
(statearr_26378_26513[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26514 = state_26365;
state_26365 = G__26514;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_26365){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_26365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(__26494,switch__15000__auto__,c__15056__auto___26506,G__26325_26495,n__13480__auto___26493,jobs,results,process,async))
})();
var state__15058__auto__ = (function (){var statearr_26379 = f__15057__auto__.call(null);
(statearr_26379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto___26506);

return statearr_26379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(__26494,c__15056__auto___26506,G__26325_26495,n__13480__auto___26493,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26515 = (__26494 + (1));
__26494 = G__26515;
continue;
} else {
}
break;
}

var c__15056__auto___26516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto___26516,jobs,results,process,async){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto___26516,jobs,results,process,async){
return (function (state_26401){
var state_val_26402 = (state_26401[(1)]);
if((state_val_26402 === (9))){
var inst_26394 = (state_26401[(2)]);
var state_26401__$1 = (function (){var statearr_26403 = state_26401;
(statearr_26403[(7)] = inst_26394);

return statearr_26403;
})();
var statearr_26404_26517 = state_26401__$1;
(statearr_26404_26517[(2)] = null);

(statearr_26404_26517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (8))){
var inst_26387 = (state_26401[(8)]);
var inst_26392 = (state_26401[(2)]);
var state_26401__$1 = (function (){var statearr_26405 = state_26401;
(statearr_26405[(9)] = inst_26392);

return statearr_26405;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26401__$1,(9),results,inst_26387);
} else {
if((state_val_26402 === (7))){
var inst_26397 = (state_26401[(2)]);
var state_26401__$1 = state_26401;
var statearr_26406_26518 = state_26401__$1;
(statearr_26406_26518[(2)] = inst_26397);

(statearr_26406_26518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (6))){
var inst_26387 = (state_26401[(8)]);
var inst_26382 = (state_26401[(10)]);
var inst_26387__$1 = cljs.core.async.chan.call(null,(1));
var inst_26388 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26389 = [inst_26382,inst_26387__$1];
var inst_26390 = (new cljs.core.PersistentVector(null,2,(5),inst_26388,inst_26389,null));
var state_26401__$1 = (function (){var statearr_26407 = state_26401;
(statearr_26407[(8)] = inst_26387__$1);

return statearr_26407;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26401__$1,(8),jobs,inst_26390);
} else {
if((state_val_26402 === (5))){
var inst_26385 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26401__$1 = state_26401;
var statearr_26408_26519 = state_26401__$1;
(statearr_26408_26519[(2)] = inst_26385);

(statearr_26408_26519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (4))){
var inst_26382 = (state_26401[(10)]);
var inst_26382__$1 = (state_26401[(2)]);
var inst_26383 = (inst_26382__$1 == null);
var state_26401__$1 = (function (){var statearr_26409 = state_26401;
(statearr_26409[(10)] = inst_26382__$1);

return statearr_26409;
})();
if(cljs.core.truth_(inst_26383)){
var statearr_26410_26520 = state_26401__$1;
(statearr_26410_26520[(1)] = (5));

} else {
var statearr_26411_26521 = state_26401__$1;
(statearr_26411_26521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26402 === (3))){
var inst_26399 = (state_26401[(2)]);
var state_26401__$1 = state_26401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26401__$1,inst_26399);
} else {
if((state_val_26402 === (2))){
var state_26401__$1 = state_26401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26401__$1,(4),from);
} else {
if((state_val_26402 === (1))){
var state_26401__$1 = state_26401;
var statearr_26412_26522 = state_26401__$1;
(statearr_26412_26522[(2)] = null);

(statearr_26412_26522[(1)] = (2));


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
});})(c__15056__auto___26516,jobs,results,process,async))
;
return ((function (switch__15000__auto__,c__15056__auto___26516,jobs,results,process,async){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_26416 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26416[(0)] = state_machine__15001__auto__);

(statearr_26416[(1)] = (1));

return statearr_26416;
});
var state_machine__15001__auto____1 = (function (state_26401){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_26401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e26417){if((e26417 instanceof Object)){
var ex__15004__auto__ = e26417;
var statearr_26418_26523 = state_26401;
(statearr_26418_26523[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26524 = state_26401;
state_26401 = G__26524;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_26401){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_26401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto___26516,jobs,results,process,async))
})();
var state__15058__auto__ = (function (){var statearr_26419 = f__15057__auto__.call(null);
(statearr_26419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto___26516);

return statearr_26419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto___26516,jobs,results,process,async))
);


var c__15056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto__,jobs,results,process,async){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto__,jobs,results,process,async){
return (function (state_26457){
var state_val_26458 = (state_26457[(1)]);
if((state_val_26458 === (7))){
var inst_26453 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
var statearr_26459_26525 = state_26457__$1;
(statearr_26459_26525[(2)] = inst_26453);

(statearr_26459_26525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (20))){
var state_26457__$1 = state_26457;
var statearr_26460_26526 = state_26457__$1;
(statearr_26460_26526[(2)] = null);

(statearr_26460_26526[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (1))){
var state_26457__$1 = state_26457;
var statearr_26461_26527 = state_26457__$1;
(statearr_26461_26527[(2)] = null);

(statearr_26461_26527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (4))){
var inst_26422 = (state_26457[(7)]);
var inst_26422__$1 = (state_26457[(2)]);
var inst_26423 = (inst_26422__$1 == null);
var state_26457__$1 = (function (){var statearr_26462 = state_26457;
(statearr_26462[(7)] = inst_26422__$1);

return statearr_26462;
})();
if(cljs.core.truth_(inst_26423)){
var statearr_26463_26528 = state_26457__$1;
(statearr_26463_26528[(1)] = (5));

} else {
var statearr_26464_26529 = state_26457__$1;
(statearr_26464_26529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (15))){
var inst_26435 = (state_26457[(8)]);
var state_26457__$1 = state_26457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26457__$1,(18),to,inst_26435);
} else {
if((state_val_26458 === (21))){
var inst_26448 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
var statearr_26465_26530 = state_26457__$1;
(statearr_26465_26530[(2)] = inst_26448);

(statearr_26465_26530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (13))){
var inst_26450 = (state_26457[(2)]);
var state_26457__$1 = (function (){var statearr_26466 = state_26457;
(statearr_26466[(9)] = inst_26450);

return statearr_26466;
})();
var statearr_26467_26531 = state_26457__$1;
(statearr_26467_26531[(2)] = null);

(statearr_26467_26531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (6))){
var inst_26422 = (state_26457[(7)]);
var state_26457__$1 = state_26457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26457__$1,(11),inst_26422);
} else {
if((state_val_26458 === (17))){
var inst_26443 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
if(cljs.core.truth_(inst_26443)){
var statearr_26468_26532 = state_26457__$1;
(statearr_26468_26532[(1)] = (19));

} else {
var statearr_26469_26533 = state_26457__$1;
(statearr_26469_26533[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (3))){
var inst_26455 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26457__$1,inst_26455);
} else {
if((state_val_26458 === (12))){
var inst_26432 = (state_26457[(10)]);
var state_26457__$1 = state_26457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26457__$1,(14),inst_26432);
} else {
if((state_val_26458 === (2))){
var state_26457__$1 = state_26457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26457__$1,(4),results);
} else {
if((state_val_26458 === (19))){
var state_26457__$1 = state_26457;
var statearr_26470_26534 = state_26457__$1;
(statearr_26470_26534[(2)] = null);

(statearr_26470_26534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (11))){
var inst_26432 = (state_26457[(2)]);
var state_26457__$1 = (function (){var statearr_26471 = state_26457;
(statearr_26471[(10)] = inst_26432);

return statearr_26471;
})();
var statearr_26472_26535 = state_26457__$1;
(statearr_26472_26535[(2)] = null);

(statearr_26472_26535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (9))){
var state_26457__$1 = state_26457;
var statearr_26473_26536 = state_26457__$1;
(statearr_26473_26536[(2)] = null);

(statearr_26473_26536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (5))){
var state_26457__$1 = state_26457;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26474_26537 = state_26457__$1;
(statearr_26474_26537[(1)] = (8));

} else {
var statearr_26475_26538 = state_26457__$1;
(statearr_26475_26538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (14))){
var inst_26437 = (state_26457[(11)]);
var inst_26435 = (state_26457[(8)]);
var inst_26435__$1 = (state_26457[(2)]);
var inst_26436 = (inst_26435__$1 == null);
var inst_26437__$1 = cljs.core.not.call(null,inst_26436);
var state_26457__$1 = (function (){var statearr_26476 = state_26457;
(statearr_26476[(11)] = inst_26437__$1);

(statearr_26476[(8)] = inst_26435__$1);

return statearr_26476;
})();
if(inst_26437__$1){
var statearr_26477_26539 = state_26457__$1;
(statearr_26477_26539[(1)] = (15));

} else {
var statearr_26478_26540 = state_26457__$1;
(statearr_26478_26540[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (16))){
var inst_26437 = (state_26457[(11)]);
var state_26457__$1 = state_26457;
var statearr_26479_26541 = state_26457__$1;
(statearr_26479_26541[(2)] = inst_26437);

(statearr_26479_26541[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (10))){
var inst_26429 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
var statearr_26480_26542 = state_26457__$1;
(statearr_26480_26542[(2)] = inst_26429);

(statearr_26480_26542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (18))){
var inst_26440 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
var statearr_26481_26543 = state_26457__$1;
(statearr_26481_26543[(2)] = inst_26440);

(statearr_26481_26543[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (8))){
var inst_26426 = cljs.core.async.close_BANG_.call(null,to);
var state_26457__$1 = state_26457;
var statearr_26482_26544 = state_26457__$1;
(statearr_26482_26544[(2)] = inst_26426);

(statearr_26482_26544[(1)] = (10));


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
});})(c__15056__auto__,jobs,results,process,async))
;
return ((function (switch__15000__auto__,c__15056__auto__,jobs,results,process,async){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_26486 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26486[(0)] = state_machine__15001__auto__);

(statearr_26486[(1)] = (1));

return statearr_26486;
});
var state_machine__15001__auto____1 = (function (state_26457){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_26457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e26487){if((e26487 instanceof Object)){
var ex__15004__auto__ = e26487;
var statearr_26488_26545 = state_26457;
(statearr_26488_26545[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26546 = state_26457;
state_26457 = G__26546;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_26457){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_26457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto__,jobs,results,process,async))
})();
var state__15058__auto__ = (function (){var statearr_26489 = f__15057__auto__.call(null);
(statearr_26489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto__);

return statearr_26489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto__,jobs,results,process,async))
);

return c__15056__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15056__auto___26647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto___26647,tc,fc){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto___26647,tc,fc){
return (function (state_26622){
var state_val_26623 = (state_26622[(1)]);
if((state_val_26623 === (7))){
var inst_26618 = (state_26622[(2)]);
var state_26622__$1 = state_26622;
var statearr_26624_26648 = state_26622__$1;
(statearr_26624_26648[(2)] = inst_26618);

(statearr_26624_26648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26623 === (1))){
var state_26622__$1 = state_26622;
var statearr_26625_26649 = state_26622__$1;
(statearr_26625_26649[(2)] = null);

(statearr_26625_26649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26623 === (4))){
var inst_26599 = (state_26622[(7)]);
var inst_26599__$1 = (state_26622[(2)]);
var inst_26600 = (inst_26599__$1 == null);
var state_26622__$1 = (function (){var statearr_26626 = state_26622;
(statearr_26626[(7)] = inst_26599__$1);

return statearr_26626;
})();
if(cljs.core.truth_(inst_26600)){
var statearr_26627_26650 = state_26622__$1;
(statearr_26627_26650[(1)] = (5));

} else {
var statearr_26628_26651 = state_26622__$1;
(statearr_26628_26651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26623 === (13))){
var state_26622__$1 = state_26622;
var statearr_26629_26652 = state_26622__$1;
(statearr_26629_26652[(2)] = null);

(statearr_26629_26652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26623 === (6))){
var inst_26599 = (state_26622[(7)]);
var inst_26605 = p.call(null,inst_26599);
var state_26622__$1 = state_26622;
if(cljs.core.truth_(inst_26605)){
var statearr_26630_26653 = state_26622__$1;
(statearr_26630_26653[(1)] = (9));

} else {
var statearr_26631_26654 = state_26622__$1;
(statearr_26631_26654[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26623 === (3))){
var inst_26620 = (state_26622[(2)]);
var state_26622__$1 = state_26622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26622__$1,inst_26620);
} else {
if((state_val_26623 === (12))){
var state_26622__$1 = state_26622;
var statearr_26632_26655 = state_26622__$1;
(statearr_26632_26655[(2)] = null);

(statearr_26632_26655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26623 === (2))){
var state_26622__$1 = state_26622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26622__$1,(4),ch);
} else {
if((state_val_26623 === (11))){
var inst_26599 = (state_26622[(7)]);
var inst_26609 = (state_26622[(2)]);
var state_26622__$1 = state_26622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26622__$1,(8),inst_26609,inst_26599);
} else {
if((state_val_26623 === (9))){
var state_26622__$1 = state_26622;
var statearr_26633_26656 = state_26622__$1;
(statearr_26633_26656[(2)] = tc);

(statearr_26633_26656[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26623 === (5))){
var inst_26602 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26603 = cljs.core.async.close_BANG_.call(null,fc);
var state_26622__$1 = (function (){var statearr_26634 = state_26622;
(statearr_26634[(8)] = inst_26602);

return statearr_26634;
})();
var statearr_26635_26657 = state_26622__$1;
(statearr_26635_26657[(2)] = inst_26603);

(statearr_26635_26657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26623 === (14))){
var inst_26616 = (state_26622[(2)]);
var state_26622__$1 = state_26622;
var statearr_26636_26658 = state_26622__$1;
(statearr_26636_26658[(2)] = inst_26616);

(statearr_26636_26658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26623 === (10))){
var state_26622__$1 = state_26622;
var statearr_26637_26659 = state_26622__$1;
(statearr_26637_26659[(2)] = fc);

(statearr_26637_26659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26623 === (8))){
var inst_26611 = (state_26622[(2)]);
var state_26622__$1 = state_26622;
if(cljs.core.truth_(inst_26611)){
var statearr_26638_26660 = state_26622__$1;
(statearr_26638_26660[(1)] = (12));

} else {
var statearr_26639_26661 = state_26622__$1;
(statearr_26639_26661[(1)] = (13));

}

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
});})(c__15056__auto___26647,tc,fc))
;
return ((function (switch__15000__auto__,c__15056__auto___26647,tc,fc){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_26643 = [null,null,null,null,null,null,null,null,null];
(statearr_26643[(0)] = state_machine__15001__auto__);

(statearr_26643[(1)] = (1));

return statearr_26643;
});
var state_machine__15001__auto____1 = (function (state_26622){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_26622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e26644){if((e26644 instanceof Object)){
var ex__15004__auto__ = e26644;
var statearr_26645_26662 = state_26622;
(statearr_26645_26662[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26663 = state_26622;
state_26622 = G__26663;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_26622){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_26622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto___26647,tc,fc))
})();
var state__15058__auto__ = (function (){var statearr_26646 = f__15057__auto__.call(null);
(statearr_26646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto___26647);

return statearr_26646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto___26647,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__15056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto__){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto__){
return (function (state_26710){
var state_val_26711 = (state_26710[(1)]);
if((state_val_26711 === (7))){
var inst_26706 = (state_26710[(2)]);
var state_26710__$1 = state_26710;
var statearr_26712_26728 = state_26710__$1;
(statearr_26712_26728[(2)] = inst_26706);

(statearr_26712_26728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26711 === (6))){
var inst_26696 = (state_26710[(7)]);
var inst_26699 = (state_26710[(8)]);
var inst_26703 = f.call(null,inst_26696,inst_26699);
var inst_26696__$1 = inst_26703;
var state_26710__$1 = (function (){var statearr_26713 = state_26710;
(statearr_26713[(7)] = inst_26696__$1);

return statearr_26713;
})();
var statearr_26714_26729 = state_26710__$1;
(statearr_26714_26729[(2)] = null);

(statearr_26714_26729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26711 === (5))){
var inst_26696 = (state_26710[(7)]);
var state_26710__$1 = state_26710;
var statearr_26715_26730 = state_26710__$1;
(statearr_26715_26730[(2)] = inst_26696);

(statearr_26715_26730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26711 === (4))){
var inst_26699 = (state_26710[(8)]);
var inst_26699__$1 = (state_26710[(2)]);
var inst_26700 = (inst_26699__$1 == null);
var state_26710__$1 = (function (){var statearr_26716 = state_26710;
(statearr_26716[(8)] = inst_26699__$1);

return statearr_26716;
})();
if(cljs.core.truth_(inst_26700)){
var statearr_26717_26731 = state_26710__$1;
(statearr_26717_26731[(1)] = (5));

} else {
var statearr_26718_26732 = state_26710__$1;
(statearr_26718_26732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26711 === (3))){
var inst_26708 = (state_26710[(2)]);
var state_26710__$1 = state_26710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26710__$1,inst_26708);
} else {
if((state_val_26711 === (2))){
var state_26710__$1 = state_26710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26710__$1,(4),ch);
} else {
if((state_val_26711 === (1))){
var inst_26696 = init;
var state_26710__$1 = (function (){var statearr_26719 = state_26710;
(statearr_26719[(7)] = inst_26696);

return statearr_26719;
})();
var statearr_26720_26733 = state_26710__$1;
(statearr_26720_26733[(2)] = null);

(statearr_26720_26733[(1)] = (2));


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
});})(c__15056__auto__))
;
return ((function (switch__15000__auto__,c__15056__auto__){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_26724 = [null,null,null,null,null,null,null,null,null];
(statearr_26724[(0)] = state_machine__15001__auto__);

(statearr_26724[(1)] = (1));

return statearr_26724;
});
var state_machine__15001__auto____1 = (function (state_26710){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_26710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e26725){if((e26725 instanceof Object)){
var ex__15004__auto__ = e26725;
var statearr_26726_26734 = state_26710;
(statearr_26726_26734[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26735 = state_26710;
state_26710 = G__26735;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_26710){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_26710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto__))
})();
var state__15058__auto__ = (function (){var statearr_26727 = f__15057__auto__.call(null);
(statearr_26727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto__);

return statearr_26727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto__))
);

return c__15056__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__15056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto__){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto__){
return (function (state_26809){
var state_val_26810 = (state_26809[(1)]);
if((state_val_26810 === (7))){
var inst_26791 = (state_26809[(2)]);
var state_26809__$1 = state_26809;
var statearr_26811_26834 = state_26809__$1;
(statearr_26811_26834[(2)] = inst_26791);

(statearr_26811_26834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (1))){
var inst_26785 = cljs.core.seq.call(null,coll);
var inst_26786 = inst_26785;
var state_26809__$1 = (function (){var statearr_26812 = state_26809;
(statearr_26812[(7)] = inst_26786);

return statearr_26812;
})();
var statearr_26813_26835 = state_26809__$1;
(statearr_26813_26835[(2)] = null);

(statearr_26813_26835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (4))){
var inst_26786 = (state_26809[(7)]);
var inst_26789 = cljs.core.first.call(null,inst_26786);
var state_26809__$1 = state_26809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26809__$1,(7),ch,inst_26789);
} else {
if((state_val_26810 === (13))){
var inst_26803 = (state_26809[(2)]);
var state_26809__$1 = state_26809;
var statearr_26814_26836 = state_26809__$1;
(statearr_26814_26836[(2)] = inst_26803);

(statearr_26814_26836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (6))){
var inst_26794 = (state_26809[(2)]);
var state_26809__$1 = state_26809;
if(cljs.core.truth_(inst_26794)){
var statearr_26815_26837 = state_26809__$1;
(statearr_26815_26837[(1)] = (8));

} else {
var statearr_26816_26838 = state_26809__$1;
(statearr_26816_26838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (3))){
var inst_26807 = (state_26809[(2)]);
var state_26809__$1 = state_26809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26809__$1,inst_26807);
} else {
if((state_val_26810 === (12))){
var state_26809__$1 = state_26809;
var statearr_26817_26839 = state_26809__$1;
(statearr_26817_26839[(2)] = null);

(statearr_26817_26839[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (2))){
var inst_26786 = (state_26809[(7)]);
var state_26809__$1 = state_26809;
if(cljs.core.truth_(inst_26786)){
var statearr_26818_26840 = state_26809__$1;
(statearr_26818_26840[(1)] = (4));

} else {
var statearr_26819_26841 = state_26809__$1;
(statearr_26819_26841[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (11))){
var inst_26800 = cljs.core.async.close_BANG_.call(null,ch);
var state_26809__$1 = state_26809;
var statearr_26820_26842 = state_26809__$1;
(statearr_26820_26842[(2)] = inst_26800);

(statearr_26820_26842[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (9))){
var state_26809__$1 = state_26809;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26821_26843 = state_26809__$1;
(statearr_26821_26843[(1)] = (11));

} else {
var statearr_26822_26844 = state_26809__$1;
(statearr_26822_26844[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (5))){
var inst_26786 = (state_26809[(7)]);
var state_26809__$1 = state_26809;
var statearr_26823_26845 = state_26809__$1;
(statearr_26823_26845[(2)] = inst_26786);

(statearr_26823_26845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (10))){
var inst_26805 = (state_26809[(2)]);
var state_26809__$1 = state_26809;
var statearr_26824_26846 = state_26809__$1;
(statearr_26824_26846[(2)] = inst_26805);

(statearr_26824_26846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26810 === (8))){
var inst_26786 = (state_26809[(7)]);
var inst_26796 = cljs.core.next.call(null,inst_26786);
var inst_26786__$1 = inst_26796;
var state_26809__$1 = (function (){var statearr_26825 = state_26809;
(statearr_26825[(7)] = inst_26786__$1);

return statearr_26825;
})();
var statearr_26826_26847 = state_26809__$1;
(statearr_26826_26847[(2)] = null);

(statearr_26826_26847[(1)] = (2));


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
});})(c__15056__auto__))
;
return ((function (switch__15000__auto__,c__15056__auto__){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_26830 = [null,null,null,null,null,null,null,null];
(statearr_26830[(0)] = state_machine__15001__auto__);

(statearr_26830[(1)] = (1));

return statearr_26830;
});
var state_machine__15001__auto____1 = (function (state_26809){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_26809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e26831){if((e26831 instanceof Object)){
var ex__15004__auto__ = e26831;
var statearr_26832_26848 = state_26809;
(statearr_26832_26848[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26849 = state_26809;
state_26809 = G__26849;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_26809){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_26809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto__))
})();
var state__15058__auto__ = (function (){var statearr_26833 = f__15057__auto__.call(null);
(statearr_26833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto__);

return statearr_26833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto__))
);

return c__15056__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj26851 = {};
return obj26851;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__12581__auto__ = _;
if(and__12581__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__12581__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__13237__auto__ = (((_ == null))?null:_);
return (function (){var or__12593__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13237__auto__)]);
if(or__12593__auto__){
return or__12593__auto__;
} else {
var or__12593__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__12593__auto____$1){
return or__12593__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj26853 = {};
return obj26853;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__12581__auto__ = m;
if(and__12581__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__12581__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__13237__auto__ = (((m == null))?null:m);
return (function (){var or__12593__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13237__auto__)]);
if(or__12593__auto__){
return or__12593__auto__;
} else {
var or__12593__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__12593__auto____$1){
return or__12593__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__12581__auto__ = m;
if(and__12581__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__12581__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__13237__auto__ = (((m == null))?null:m);
return (function (){var or__12593__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13237__auto__)]);
if(or__12593__auto__){
return or__12593__auto__;
} else {
var or__12593__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__12593__auto____$1){
return or__12593__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__12581__auto__ = m;
if(and__12581__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__12581__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__13237__auto__ = (((m == null))?null:m);
return (function (){var or__12593__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13237__auto__)]);
if(or__12593__auto__){
return or__12593__auto__;
} else {
var or__12593__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__12593__auto____$1){
return or__12593__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t27075 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27075 = (function (cs,ch,mult,meta27076){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27076 = meta27076;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27075.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27075.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27075.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27075.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27075.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27075.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27075.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27077){
var self__ = this;
var _27077__$1 = this;
return self__.meta27076;
});})(cs))
;

cljs.core.async.t27075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27077,meta27076__$1){
var self__ = this;
var _27077__$1 = this;
return (new cljs.core.async.t27075(self__.cs,self__.ch,self__.mult,meta27076__$1));
});})(cs))
;

cljs.core.async.t27075.cljs$lang$type = true;

cljs.core.async.t27075.cljs$lang$ctorStr = "cljs.core.async/t27075";

cljs.core.async.t27075.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13180__auto__,writer__13181__auto__,opt__13182__auto__){
return cljs.core._write.call(null,writer__13181__auto__,"cljs.core.async/t27075");
});})(cs))
;

cljs.core.async.__GT_t27075 = ((function (cs){
return (function __GT_t27075(cs__$1,ch__$1,mult__$1,meta27076){
return (new cljs.core.async.t27075(cs__$1,ch__$1,mult__$1,meta27076));
});})(cs))
;

}

return (new cljs.core.async.t27075(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/carlos/OpenSource/mies-wheel-test/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15056__auto___27296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto___27296,cs,m,dchan,dctr,done){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto___27296,cs,m,dchan,dctr,done){
return (function (state_27208){
var state_val_27209 = (state_27208[(1)]);
if((state_val_27209 === (7))){
var inst_27204 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
var statearr_27210_27297 = state_27208__$1;
(statearr_27210_27297[(2)] = inst_27204);

(statearr_27210_27297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (20))){
var inst_27109 = (state_27208[(7)]);
var inst_27119 = cljs.core.first.call(null,inst_27109);
var inst_27120 = cljs.core.nth.call(null,inst_27119,(0),null);
var inst_27121 = cljs.core.nth.call(null,inst_27119,(1),null);
var state_27208__$1 = (function (){var statearr_27211 = state_27208;
(statearr_27211[(8)] = inst_27120);

return statearr_27211;
})();
if(cljs.core.truth_(inst_27121)){
var statearr_27212_27298 = state_27208__$1;
(statearr_27212_27298[(1)] = (22));

} else {
var statearr_27213_27299 = state_27208__$1;
(statearr_27213_27299[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (27))){
var inst_27151 = (state_27208[(9)]);
var inst_27149 = (state_27208[(10)]);
var inst_27080 = (state_27208[(11)]);
var inst_27156 = (state_27208[(12)]);
var inst_27156__$1 = cljs.core._nth.call(null,inst_27149,inst_27151);
var inst_27157 = cljs.core.async.put_BANG_.call(null,inst_27156__$1,inst_27080,done);
var state_27208__$1 = (function (){var statearr_27214 = state_27208;
(statearr_27214[(12)] = inst_27156__$1);

return statearr_27214;
})();
if(cljs.core.truth_(inst_27157)){
var statearr_27215_27300 = state_27208__$1;
(statearr_27215_27300[(1)] = (30));

} else {
var statearr_27216_27301 = state_27208__$1;
(statearr_27216_27301[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (1))){
var state_27208__$1 = state_27208;
var statearr_27217_27302 = state_27208__$1;
(statearr_27217_27302[(2)] = null);

(statearr_27217_27302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (24))){
var inst_27109 = (state_27208[(7)]);
var inst_27126 = (state_27208[(2)]);
var inst_27127 = cljs.core.next.call(null,inst_27109);
var inst_27089 = inst_27127;
var inst_27090 = null;
var inst_27091 = (0);
var inst_27092 = (0);
var state_27208__$1 = (function (){var statearr_27218 = state_27208;
(statearr_27218[(13)] = inst_27092);

(statearr_27218[(14)] = inst_27126);

(statearr_27218[(15)] = inst_27090);

(statearr_27218[(16)] = inst_27089);

(statearr_27218[(17)] = inst_27091);

return statearr_27218;
})();
var statearr_27219_27303 = state_27208__$1;
(statearr_27219_27303[(2)] = null);

(statearr_27219_27303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (39))){
var state_27208__$1 = state_27208;
var statearr_27223_27304 = state_27208__$1;
(statearr_27223_27304[(2)] = null);

(statearr_27223_27304[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (4))){
var inst_27080 = (state_27208[(11)]);
var inst_27080__$1 = (state_27208[(2)]);
var inst_27081 = (inst_27080__$1 == null);
var state_27208__$1 = (function (){var statearr_27224 = state_27208;
(statearr_27224[(11)] = inst_27080__$1);

return statearr_27224;
})();
if(cljs.core.truth_(inst_27081)){
var statearr_27225_27305 = state_27208__$1;
(statearr_27225_27305[(1)] = (5));

} else {
var statearr_27226_27306 = state_27208__$1;
(statearr_27226_27306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (15))){
var inst_27092 = (state_27208[(13)]);
var inst_27090 = (state_27208[(15)]);
var inst_27089 = (state_27208[(16)]);
var inst_27091 = (state_27208[(17)]);
var inst_27105 = (state_27208[(2)]);
var inst_27106 = (inst_27092 + (1));
var tmp27220 = inst_27090;
var tmp27221 = inst_27089;
var tmp27222 = inst_27091;
var inst_27089__$1 = tmp27221;
var inst_27090__$1 = tmp27220;
var inst_27091__$1 = tmp27222;
var inst_27092__$1 = inst_27106;
var state_27208__$1 = (function (){var statearr_27227 = state_27208;
(statearr_27227[(18)] = inst_27105);

(statearr_27227[(13)] = inst_27092__$1);

(statearr_27227[(15)] = inst_27090__$1);

(statearr_27227[(16)] = inst_27089__$1);

(statearr_27227[(17)] = inst_27091__$1);

return statearr_27227;
})();
var statearr_27228_27307 = state_27208__$1;
(statearr_27228_27307[(2)] = null);

(statearr_27228_27307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (21))){
var inst_27130 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
var statearr_27232_27308 = state_27208__$1;
(statearr_27232_27308[(2)] = inst_27130);

(statearr_27232_27308[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (31))){
var inst_27156 = (state_27208[(12)]);
var inst_27160 = done.call(null,null);
var inst_27161 = cljs.core.async.untap_STAR_.call(null,m,inst_27156);
var state_27208__$1 = (function (){var statearr_27233 = state_27208;
(statearr_27233[(19)] = inst_27160);

return statearr_27233;
})();
var statearr_27234_27309 = state_27208__$1;
(statearr_27234_27309[(2)] = inst_27161);

(statearr_27234_27309[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (32))){
var inst_27148 = (state_27208[(20)]);
var inst_27151 = (state_27208[(9)]);
var inst_27149 = (state_27208[(10)]);
var inst_27150 = (state_27208[(21)]);
var inst_27163 = (state_27208[(2)]);
var inst_27164 = (inst_27151 + (1));
var tmp27229 = inst_27148;
var tmp27230 = inst_27149;
var tmp27231 = inst_27150;
var inst_27148__$1 = tmp27229;
var inst_27149__$1 = tmp27230;
var inst_27150__$1 = tmp27231;
var inst_27151__$1 = inst_27164;
var state_27208__$1 = (function (){var statearr_27235 = state_27208;
(statearr_27235[(20)] = inst_27148__$1);

(statearr_27235[(9)] = inst_27151__$1);

(statearr_27235[(10)] = inst_27149__$1);

(statearr_27235[(22)] = inst_27163);

(statearr_27235[(21)] = inst_27150__$1);

return statearr_27235;
})();
var statearr_27236_27310 = state_27208__$1;
(statearr_27236_27310[(2)] = null);

(statearr_27236_27310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (40))){
var inst_27176 = (state_27208[(23)]);
var inst_27180 = done.call(null,null);
var inst_27181 = cljs.core.async.untap_STAR_.call(null,m,inst_27176);
var state_27208__$1 = (function (){var statearr_27237 = state_27208;
(statearr_27237[(24)] = inst_27180);

return statearr_27237;
})();
var statearr_27238_27311 = state_27208__$1;
(statearr_27238_27311[(2)] = inst_27181);

(statearr_27238_27311[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (33))){
var inst_27167 = (state_27208[(25)]);
var inst_27169 = cljs.core.chunked_seq_QMARK_.call(null,inst_27167);
var state_27208__$1 = state_27208;
if(inst_27169){
var statearr_27239_27312 = state_27208__$1;
(statearr_27239_27312[(1)] = (36));

} else {
var statearr_27240_27313 = state_27208__$1;
(statearr_27240_27313[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (13))){
var inst_27099 = (state_27208[(26)]);
var inst_27102 = cljs.core.async.close_BANG_.call(null,inst_27099);
var state_27208__$1 = state_27208;
var statearr_27241_27314 = state_27208__$1;
(statearr_27241_27314[(2)] = inst_27102);

(statearr_27241_27314[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (22))){
var inst_27120 = (state_27208[(8)]);
var inst_27123 = cljs.core.async.close_BANG_.call(null,inst_27120);
var state_27208__$1 = state_27208;
var statearr_27242_27315 = state_27208__$1;
(statearr_27242_27315[(2)] = inst_27123);

(statearr_27242_27315[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (36))){
var inst_27167 = (state_27208[(25)]);
var inst_27171 = cljs.core.chunk_first.call(null,inst_27167);
var inst_27172 = cljs.core.chunk_rest.call(null,inst_27167);
var inst_27173 = cljs.core.count.call(null,inst_27171);
var inst_27148 = inst_27172;
var inst_27149 = inst_27171;
var inst_27150 = inst_27173;
var inst_27151 = (0);
var state_27208__$1 = (function (){var statearr_27243 = state_27208;
(statearr_27243[(20)] = inst_27148);

(statearr_27243[(9)] = inst_27151);

(statearr_27243[(10)] = inst_27149);

(statearr_27243[(21)] = inst_27150);

return statearr_27243;
})();
var statearr_27244_27316 = state_27208__$1;
(statearr_27244_27316[(2)] = null);

(statearr_27244_27316[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (41))){
var inst_27167 = (state_27208[(25)]);
var inst_27183 = (state_27208[(2)]);
var inst_27184 = cljs.core.next.call(null,inst_27167);
var inst_27148 = inst_27184;
var inst_27149 = null;
var inst_27150 = (0);
var inst_27151 = (0);
var state_27208__$1 = (function (){var statearr_27245 = state_27208;
(statearr_27245[(20)] = inst_27148);

(statearr_27245[(9)] = inst_27151);

(statearr_27245[(10)] = inst_27149);

(statearr_27245[(21)] = inst_27150);

(statearr_27245[(27)] = inst_27183);

return statearr_27245;
})();
var statearr_27246_27317 = state_27208__$1;
(statearr_27246_27317[(2)] = null);

(statearr_27246_27317[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (43))){
var state_27208__$1 = state_27208;
var statearr_27247_27318 = state_27208__$1;
(statearr_27247_27318[(2)] = null);

(statearr_27247_27318[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (29))){
var inst_27192 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
var statearr_27248_27319 = state_27208__$1;
(statearr_27248_27319[(2)] = inst_27192);

(statearr_27248_27319[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (44))){
var inst_27201 = (state_27208[(2)]);
var state_27208__$1 = (function (){var statearr_27249 = state_27208;
(statearr_27249[(28)] = inst_27201);

return statearr_27249;
})();
var statearr_27250_27320 = state_27208__$1;
(statearr_27250_27320[(2)] = null);

(statearr_27250_27320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (6))){
var inst_27140 = (state_27208[(29)]);
var inst_27139 = cljs.core.deref.call(null,cs);
var inst_27140__$1 = cljs.core.keys.call(null,inst_27139);
var inst_27141 = cljs.core.count.call(null,inst_27140__$1);
var inst_27142 = cljs.core.reset_BANG_.call(null,dctr,inst_27141);
var inst_27147 = cljs.core.seq.call(null,inst_27140__$1);
var inst_27148 = inst_27147;
var inst_27149 = null;
var inst_27150 = (0);
var inst_27151 = (0);
var state_27208__$1 = (function (){var statearr_27251 = state_27208;
(statearr_27251[(20)] = inst_27148);

(statearr_27251[(30)] = inst_27142);

(statearr_27251[(9)] = inst_27151);

(statearr_27251[(29)] = inst_27140__$1);

(statearr_27251[(10)] = inst_27149);

(statearr_27251[(21)] = inst_27150);

return statearr_27251;
})();
var statearr_27252_27321 = state_27208__$1;
(statearr_27252_27321[(2)] = null);

(statearr_27252_27321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (28))){
var inst_27167 = (state_27208[(25)]);
var inst_27148 = (state_27208[(20)]);
var inst_27167__$1 = cljs.core.seq.call(null,inst_27148);
var state_27208__$1 = (function (){var statearr_27253 = state_27208;
(statearr_27253[(25)] = inst_27167__$1);

return statearr_27253;
})();
if(inst_27167__$1){
var statearr_27254_27322 = state_27208__$1;
(statearr_27254_27322[(1)] = (33));

} else {
var statearr_27255_27323 = state_27208__$1;
(statearr_27255_27323[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (25))){
var inst_27151 = (state_27208[(9)]);
var inst_27150 = (state_27208[(21)]);
var inst_27153 = (inst_27151 < inst_27150);
var inst_27154 = inst_27153;
var state_27208__$1 = state_27208;
if(cljs.core.truth_(inst_27154)){
var statearr_27256_27324 = state_27208__$1;
(statearr_27256_27324[(1)] = (27));

} else {
var statearr_27257_27325 = state_27208__$1;
(statearr_27257_27325[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (34))){
var state_27208__$1 = state_27208;
var statearr_27258_27326 = state_27208__$1;
(statearr_27258_27326[(2)] = null);

(statearr_27258_27326[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (17))){
var state_27208__$1 = state_27208;
var statearr_27259_27327 = state_27208__$1;
(statearr_27259_27327[(2)] = null);

(statearr_27259_27327[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (3))){
var inst_27206 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27208__$1,inst_27206);
} else {
if((state_val_27209 === (12))){
var inst_27135 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
var statearr_27260_27328 = state_27208__$1;
(statearr_27260_27328[(2)] = inst_27135);

(statearr_27260_27328[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (2))){
var state_27208__$1 = state_27208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27208__$1,(4),ch);
} else {
if((state_val_27209 === (23))){
var state_27208__$1 = state_27208;
var statearr_27261_27329 = state_27208__$1;
(statearr_27261_27329[(2)] = null);

(statearr_27261_27329[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (35))){
var inst_27190 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
var statearr_27262_27330 = state_27208__$1;
(statearr_27262_27330[(2)] = inst_27190);

(statearr_27262_27330[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (19))){
var inst_27109 = (state_27208[(7)]);
var inst_27113 = cljs.core.chunk_first.call(null,inst_27109);
var inst_27114 = cljs.core.chunk_rest.call(null,inst_27109);
var inst_27115 = cljs.core.count.call(null,inst_27113);
var inst_27089 = inst_27114;
var inst_27090 = inst_27113;
var inst_27091 = inst_27115;
var inst_27092 = (0);
var state_27208__$1 = (function (){var statearr_27263 = state_27208;
(statearr_27263[(13)] = inst_27092);

(statearr_27263[(15)] = inst_27090);

(statearr_27263[(16)] = inst_27089);

(statearr_27263[(17)] = inst_27091);

return statearr_27263;
})();
var statearr_27264_27331 = state_27208__$1;
(statearr_27264_27331[(2)] = null);

(statearr_27264_27331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (11))){
var inst_27109 = (state_27208[(7)]);
var inst_27089 = (state_27208[(16)]);
var inst_27109__$1 = cljs.core.seq.call(null,inst_27089);
var state_27208__$1 = (function (){var statearr_27265 = state_27208;
(statearr_27265[(7)] = inst_27109__$1);

return statearr_27265;
})();
if(inst_27109__$1){
var statearr_27266_27332 = state_27208__$1;
(statearr_27266_27332[(1)] = (16));

} else {
var statearr_27267_27333 = state_27208__$1;
(statearr_27267_27333[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (9))){
var inst_27137 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
var statearr_27268_27334 = state_27208__$1;
(statearr_27268_27334[(2)] = inst_27137);

(statearr_27268_27334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (5))){
var inst_27087 = cljs.core.deref.call(null,cs);
var inst_27088 = cljs.core.seq.call(null,inst_27087);
var inst_27089 = inst_27088;
var inst_27090 = null;
var inst_27091 = (0);
var inst_27092 = (0);
var state_27208__$1 = (function (){var statearr_27269 = state_27208;
(statearr_27269[(13)] = inst_27092);

(statearr_27269[(15)] = inst_27090);

(statearr_27269[(16)] = inst_27089);

(statearr_27269[(17)] = inst_27091);

return statearr_27269;
})();
var statearr_27270_27335 = state_27208__$1;
(statearr_27270_27335[(2)] = null);

(statearr_27270_27335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (14))){
var state_27208__$1 = state_27208;
var statearr_27271_27336 = state_27208__$1;
(statearr_27271_27336[(2)] = null);

(statearr_27271_27336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (45))){
var inst_27198 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
var statearr_27272_27337 = state_27208__$1;
(statearr_27272_27337[(2)] = inst_27198);

(statearr_27272_27337[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (26))){
var inst_27140 = (state_27208[(29)]);
var inst_27194 = (state_27208[(2)]);
var inst_27195 = cljs.core.seq.call(null,inst_27140);
var state_27208__$1 = (function (){var statearr_27273 = state_27208;
(statearr_27273[(31)] = inst_27194);

return statearr_27273;
})();
if(inst_27195){
var statearr_27274_27338 = state_27208__$1;
(statearr_27274_27338[(1)] = (42));

} else {
var statearr_27275_27339 = state_27208__$1;
(statearr_27275_27339[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (16))){
var inst_27109 = (state_27208[(7)]);
var inst_27111 = cljs.core.chunked_seq_QMARK_.call(null,inst_27109);
var state_27208__$1 = state_27208;
if(inst_27111){
var statearr_27276_27340 = state_27208__$1;
(statearr_27276_27340[(1)] = (19));

} else {
var statearr_27277_27341 = state_27208__$1;
(statearr_27277_27341[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (38))){
var inst_27187 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
var statearr_27278_27342 = state_27208__$1;
(statearr_27278_27342[(2)] = inst_27187);

(statearr_27278_27342[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (30))){
var state_27208__$1 = state_27208;
var statearr_27279_27343 = state_27208__$1;
(statearr_27279_27343[(2)] = null);

(statearr_27279_27343[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (10))){
var inst_27092 = (state_27208[(13)]);
var inst_27090 = (state_27208[(15)]);
var inst_27098 = cljs.core._nth.call(null,inst_27090,inst_27092);
var inst_27099 = cljs.core.nth.call(null,inst_27098,(0),null);
var inst_27100 = cljs.core.nth.call(null,inst_27098,(1),null);
var state_27208__$1 = (function (){var statearr_27280 = state_27208;
(statearr_27280[(26)] = inst_27099);

return statearr_27280;
})();
if(cljs.core.truth_(inst_27100)){
var statearr_27281_27344 = state_27208__$1;
(statearr_27281_27344[(1)] = (13));

} else {
var statearr_27282_27345 = state_27208__$1;
(statearr_27282_27345[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (18))){
var inst_27133 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
var statearr_27283_27346 = state_27208__$1;
(statearr_27283_27346[(2)] = inst_27133);

(statearr_27283_27346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (42))){
var state_27208__$1 = state_27208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27208__$1,(45),dchan);
} else {
if((state_val_27209 === (37))){
var inst_27167 = (state_27208[(25)]);
var inst_27080 = (state_27208[(11)]);
var inst_27176 = (state_27208[(23)]);
var inst_27176__$1 = cljs.core.first.call(null,inst_27167);
var inst_27177 = cljs.core.async.put_BANG_.call(null,inst_27176__$1,inst_27080,done);
var state_27208__$1 = (function (){var statearr_27284 = state_27208;
(statearr_27284[(23)] = inst_27176__$1);

return statearr_27284;
})();
if(cljs.core.truth_(inst_27177)){
var statearr_27285_27347 = state_27208__$1;
(statearr_27285_27347[(1)] = (39));

} else {
var statearr_27286_27348 = state_27208__$1;
(statearr_27286_27348[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (8))){
var inst_27092 = (state_27208[(13)]);
var inst_27091 = (state_27208[(17)]);
var inst_27094 = (inst_27092 < inst_27091);
var inst_27095 = inst_27094;
var state_27208__$1 = state_27208;
if(cljs.core.truth_(inst_27095)){
var statearr_27287_27349 = state_27208__$1;
(statearr_27287_27349[(1)] = (10));

} else {
var statearr_27288_27350 = state_27208__$1;
(statearr_27288_27350[(1)] = (11));

}

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
});})(c__15056__auto___27296,cs,m,dchan,dctr,done))
;
return ((function (switch__15000__auto__,c__15056__auto___27296,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_27292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27292[(0)] = state_machine__15001__auto__);

(statearr_27292[(1)] = (1));

return statearr_27292;
});
var state_machine__15001__auto____1 = (function (state_27208){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_27208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e27293){if((e27293 instanceof Object)){
var ex__15004__auto__ = e27293;
var statearr_27294_27351 = state_27208;
(statearr_27294_27351[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27352 = state_27208;
state_27208 = G__27352;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_27208){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_27208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto___27296,cs,m,dchan,dctr,done))
})();
var state__15058__auto__ = (function (){var statearr_27295 = f__15057__auto__.call(null);
(statearr_27295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto___27296);

return statearr_27295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto___27296,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj27354 = {};
return obj27354;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__12581__auto__ = m;
if(and__12581__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__12581__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__13237__auto__ = (((m == null))?null:m);
return (function (){var or__12593__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13237__auto__)]);
if(or__12593__auto__){
return or__12593__auto__;
} else {
var or__12593__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__12593__auto____$1){
return or__12593__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__12581__auto__ = m;
if(and__12581__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__12581__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__13237__auto__ = (((m == null))?null:m);
return (function (){var or__12593__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13237__auto__)]);
if(or__12593__auto__){
return or__12593__auto__;
} else {
var or__12593__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__12593__auto____$1){
return or__12593__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__12581__auto__ = m;
if(and__12581__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__12581__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__13237__auto__ = (((m == null))?null:m);
return (function (){var or__12593__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13237__auto__)]);
if(or__12593__auto__){
return or__12593__auto__;
} else {
var or__12593__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__12593__auto____$1){
return or__12593__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__12581__auto__ = m;
if(and__12581__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__12581__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__13237__auto__ = (((m == null))?null:m);
return (function (){var or__12593__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13237__auto__)]);
if(or__12593__auto__){
return or__12593__auto__;
} else {
var or__12593__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__12593__auto____$1){
return or__12593__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__12581__auto__ = m;
if(and__12581__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__12581__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__13237__auto__ = (((m == null))?null:m);
return (function (){var or__12593__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13237__auto__)]);
if(or__12593__auto__){
return or__12593__auto__;
} else {
var or__12593__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__12593__auto____$1){
return or__12593__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__27355){
var map__27360 = p__27355;
var map__27360__$1 = ((cljs.core.seq_QMARK_.call(null,map__27360))?cljs.core.apply.call(null,cljs.core.hash_map,map__27360):map__27360);
var opts = map__27360__$1;
var statearr_27361_27364 = state;
(statearr_27361_27364[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__27360,map__27360__$1,opts){
return (function (val){
var statearr_27362_27365 = state;
(statearr_27362_27365[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27360,map__27360__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_27363_27366 = state;
(statearr_27363_27366[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__27355 = null;
if (arguments.length > 3) {
var G__27367__i = 0, G__27367__a = new Array(arguments.length -  3);
while (G__27367__i < G__27367__a.length) {G__27367__a[G__27367__i] = arguments[G__27367__i + 3]; ++G__27367__i;}
  p__27355 = new cljs.core.IndexedSeq(G__27367__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__27355);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__27368){
var state = cljs.core.first(arglist__27368);
arglist__27368 = cljs.core.next(arglist__27368);
var cont_block = cljs.core.first(arglist__27368);
arglist__27368 = cljs.core.next(arglist__27368);
var ports = cljs.core.first(arglist__27368);
var p__27355 = cljs.core.rest(arglist__27368);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__27355);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27488 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27488 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27489){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27489 = meta27489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27488.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27488.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27488.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27488.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27488.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27488.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27488.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27488.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27490){
var self__ = this;
var _27490__$1 = this;
return self__.meta27489;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27490,meta27489__$1){
var self__ = this;
var _27490__$1 = this;
return (new cljs.core.async.t27488(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27489__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27488.cljs$lang$type = true;

cljs.core.async.t27488.cljs$lang$ctorStr = "cljs.core.async/t27488";

cljs.core.async.t27488.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13180__auto__,writer__13181__auto__,opt__13182__auto__){
return cljs.core._write.call(null,writer__13181__auto__,"cljs.core.async/t27488");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27488 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27488(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27489){
return (new cljs.core.async.t27488(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27489));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27488(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/carlos/OpenSource/mies-wheel-test/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var c__15056__auto___27607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto___27607,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto___27607,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27560){
var state_val_27561 = (state_27560[(1)]);
if((state_val_27561 === (7))){
var inst_27504 = (state_27560[(7)]);
var inst_27509 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27504);
var state_27560__$1 = state_27560;
var statearr_27562_27608 = state_27560__$1;
(statearr_27562_27608[(2)] = inst_27509);

(statearr_27562_27608[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (20))){
var inst_27519 = (state_27560[(8)]);
var state_27560__$1 = state_27560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27560__$1,(23),out,inst_27519);
} else {
if((state_val_27561 === (1))){
var inst_27494 = (state_27560[(9)]);
var inst_27494__$1 = calc_state.call(null);
var inst_27495 = cljs.core.seq_QMARK_.call(null,inst_27494__$1);
var state_27560__$1 = (function (){var statearr_27563 = state_27560;
(statearr_27563[(9)] = inst_27494__$1);

return statearr_27563;
})();
if(inst_27495){
var statearr_27564_27609 = state_27560__$1;
(statearr_27564_27609[(1)] = (2));

} else {
var statearr_27565_27610 = state_27560__$1;
(statearr_27565_27610[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (24))){
var inst_27512 = (state_27560[(10)]);
var inst_27504 = inst_27512;
var state_27560__$1 = (function (){var statearr_27566 = state_27560;
(statearr_27566[(7)] = inst_27504);

return statearr_27566;
})();
var statearr_27567_27611 = state_27560__$1;
(statearr_27567_27611[(2)] = null);

(statearr_27567_27611[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (4))){
var inst_27494 = (state_27560[(9)]);
var inst_27500 = (state_27560[(2)]);
var inst_27501 = cljs.core.get.call(null,inst_27500,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27502 = cljs.core.get.call(null,inst_27500,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27503 = cljs.core.get.call(null,inst_27500,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27504 = inst_27494;
var state_27560__$1 = (function (){var statearr_27568 = state_27560;
(statearr_27568[(11)] = inst_27503);

(statearr_27568[(12)] = inst_27501);

(statearr_27568[(7)] = inst_27504);

(statearr_27568[(13)] = inst_27502);

return statearr_27568;
})();
var statearr_27569_27612 = state_27560__$1;
(statearr_27569_27612[(2)] = null);

(statearr_27569_27612[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (15))){
var state_27560__$1 = state_27560;
var statearr_27570_27613 = state_27560__$1;
(statearr_27570_27613[(2)] = null);

(statearr_27570_27613[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (21))){
var inst_27512 = (state_27560[(10)]);
var inst_27504 = inst_27512;
var state_27560__$1 = (function (){var statearr_27571 = state_27560;
(statearr_27571[(7)] = inst_27504);

return statearr_27571;
})();
var statearr_27572_27614 = state_27560__$1;
(statearr_27572_27614[(2)] = null);

(statearr_27572_27614[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (13))){
var inst_27556 = (state_27560[(2)]);
var state_27560__$1 = state_27560;
var statearr_27573_27615 = state_27560__$1;
(statearr_27573_27615[(2)] = inst_27556);

(statearr_27573_27615[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (22))){
var inst_27554 = (state_27560[(2)]);
var state_27560__$1 = state_27560;
var statearr_27574_27616 = state_27560__$1;
(statearr_27574_27616[(2)] = inst_27554);

(statearr_27574_27616[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (6))){
var inst_27558 = (state_27560[(2)]);
var state_27560__$1 = state_27560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27560__$1,inst_27558);
} else {
if((state_val_27561 === (25))){
var state_27560__$1 = state_27560;
var statearr_27575_27617 = state_27560__$1;
(statearr_27575_27617[(2)] = null);

(statearr_27575_27617[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (17))){
var inst_27534 = (state_27560[(14)]);
var state_27560__$1 = state_27560;
var statearr_27576_27618 = state_27560__$1;
(statearr_27576_27618[(2)] = inst_27534);

(statearr_27576_27618[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (3))){
var inst_27494 = (state_27560[(9)]);
var state_27560__$1 = state_27560;
var statearr_27577_27619 = state_27560__$1;
(statearr_27577_27619[(2)] = inst_27494);

(statearr_27577_27619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (12))){
var inst_27515 = (state_27560[(15)]);
var inst_27520 = (state_27560[(16)]);
var inst_27534 = (state_27560[(14)]);
var inst_27534__$1 = inst_27515.call(null,inst_27520);
var state_27560__$1 = (function (){var statearr_27578 = state_27560;
(statearr_27578[(14)] = inst_27534__$1);

return statearr_27578;
})();
if(cljs.core.truth_(inst_27534__$1)){
var statearr_27579_27620 = state_27560__$1;
(statearr_27579_27620[(1)] = (17));

} else {
var statearr_27580_27621 = state_27560__$1;
(statearr_27580_27621[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (2))){
var inst_27494 = (state_27560[(9)]);
var inst_27497 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27494);
var state_27560__$1 = state_27560;
var statearr_27581_27622 = state_27560__$1;
(statearr_27581_27622[(2)] = inst_27497);

(statearr_27581_27622[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (23))){
var inst_27545 = (state_27560[(2)]);
var state_27560__$1 = state_27560;
if(cljs.core.truth_(inst_27545)){
var statearr_27582_27623 = state_27560__$1;
(statearr_27582_27623[(1)] = (24));

} else {
var statearr_27583_27624 = state_27560__$1;
(statearr_27583_27624[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (19))){
var inst_27542 = (state_27560[(2)]);
var state_27560__$1 = state_27560;
if(cljs.core.truth_(inst_27542)){
var statearr_27584_27625 = state_27560__$1;
(statearr_27584_27625[(1)] = (20));

} else {
var statearr_27585_27626 = state_27560__$1;
(statearr_27585_27626[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (11))){
var inst_27519 = (state_27560[(8)]);
var inst_27525 = (inst_27519 == null);
var state_27560__$1 = state_27560;
if(cljs.core.truth_(inst_27525)){
var statearr_27586_27627 = state_27560__$1;
(statearr_27586_27627[(1)] = (14));

} else {
var statearr_27587_27628 = state_27560__$1;
(statearr_27587_27628[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (9))){
var inst_27512 = (state_27560[(10)]);
var inst_27512__$1 = (state_27560[(2)]);
var inst_27513 = cljs.core.get.call(null,inst_27512__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27514 = cljs.core.get.call(null,inst_27512__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27515 = cljs.core.get.call(null,inst_27512__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_27560__$1 = (function (){var statearr_27588 = state_27560;
(statearr_27588[(15)] = inst_27515);

(statearr_27588[(17)] = inst_27514);

(statearr_27588[(10)] = inst_27512__$1);

return statearr_27588;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27560__$1,(10),inst_27513);
} else {
if((state_val_27561 === (5))){
var inst_27504 = (state_27560[(7)]);
var inst_27507 = cljs.core.seq_QMARK_.call(null,inst_27504);
var state_27560__$1 = state_27560;
if(inst_27507){
var statearr_27589_27629 = state_27560__$1;
(statearr_27589_27629[(1)] = (7));

} else {
var statearr_27590_27630 = state_27560__$1;
(statearr_27590_27630[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (14))){
var inst_27520 = (state_27560[(16)]);
var inst_27527 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27520);
var state_27560__$1 = state_27560;
var statearr_27591_27631 = state_27560__$1;
(statearr_27591_27631[(2)] = inst_27527);

(statearr_27591_27631[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (26))){
var inst_27550 = (state_27560[(2)]);
var state_27560__$1 = state_27560;
var statearr_27592_27632 = state_27560__$1;
(statearr_27592_27632[(2)] = inst_27550);

(statearr_27592_27632[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (16))){
var inst_27530 = (state_27560[(2)]);
var inst_27531 = calc_state.call(null);
var inst_27504 = inst_27531;
var state_27560__$1 = (function (){var statearr_27593 = state_27560;
(statearr_27593[(18)] = inst_27530);

(statearr_27593[(7)] = inst_27504);

return statearr_27593;
})();
var statearr_27594_27633 = state_27560__$1;
(statearr_27594_27633[(2)] = null);

(statearr_27594_27633[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (10))){
var inst_27520 = (state_27560[(16)]);
var inst_27519 = (state_27560[(8)]);
var inst_27518 = (state_27560[(2)]);
var inst_27519__$1 = cljs.core.nth.call(null,inst_27518,(0),null);
var inst_27520__$1 = cljs.core.nth.call(null,inst_27518,(1),null);
var inst_27521 = (inst_27519__$1 == null);
var inst_27522 = cljs.core._EQ_.call(null,inst_27520__$1,change);
var inst_27523 = (inst_27521) || (inst_27522);
var state_27560__$1 = (function (){var statearr_27595 = state_27560;
(statearr_27595[(16)] = inst_27520__$1);

(statearr_27595[(8)] = inst_27519__$1);

return statearr_27595;
})();
if(cljs.core.truth_(inst_27523)){
var statearr_27596_27634 = state_27560__$1;
(statearr_27596_27634[(1)] = (11));

} else {
var statearr_27597_27635 = state_27560__$1;
(statearr_27597_27635[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (18))){
var inst_27515 = (state_27560[(15)]);
var inst_27520 = (state_27560[(16)]);
var inst_27514 = (state_27560[(17)]);
var inst_27537 = cljs.core.empty_QMARK_.call(null,inst_27515);
var inst_27538 = inst_27514.call(null,inst_27520);
var inst_27539 = cljs.core.not.call(null,inst_27538);
var inst_27540 = (inst_27537) && (inst_27539);
var state_27560__$1 = state_27560;
var statearr_27598_27636 = state_27560__$1;
(statearr_27598_27636[(2)] = inst_27540);

(statearr_27598_27636[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (8))){
var inst_27504 = (state_27560[(7)]);
var state_27560__$1 = state_27560;
var statearr_27599_27637 = state_27560__$1;
(statearr_27599_27637[(2)] = inst_27504);

(statearr_27599_27637[(1)] = (9));


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
});})(c__15056__auto___27607,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15000__auto__,c__15056__auto___27607,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_27603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27603[(0)] = state_machine__15001__auto__);

(statearr_27603[(1)] = (1));

return statearr_27603;
});
var state_machine__15001__auto____1 = (function (state_27560){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_27560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e27604){if((e27604 instanceof Object)){
var ex__15004__auto__ = e27604;
var statearr_27605_27638 = state_27560;
(statearr_27605_27638[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27639 = state_27560;
state_27560 = G__27639;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_27560){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_27560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto___27607,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15058__auto__ = (function (){var statearr_27606 = f__15057__auto__.call(null);
(statearr_27606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto___27607);

return statearr_27606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto___27607,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj27641 = {};
return obj27641;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__12581__auto__ = p;
if(and__12581__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__12581__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__13237__auto__ = (((p == null))?null:p);
return (function (){var or__12593__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13237__auto__)]);
if(or__12593__auto__){
return or__12593__auto__;
} else {
var or__12593__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__12593__auto____$1){
return or__12593__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__12581__auto__ = p;
if(and__12581__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__12581__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__13237__auto__ = (((p == null))?null:p);
return (function (){var or__12593__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13237__auto__)]);
if(or__12593__auto__){
return or__12593__auto__;
} else {
var or__12593__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__12593__auto____$1){
return or__12593__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__12581__auto__ = p;
if(and__12581__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__12581__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__13237__auto__ = (((p == null))?null:p);
return (function (){var or__12593__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13237__auto__)]);
if(or__12593__auto__){
return or__12593__auto__;
} else {
var or__12593__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12593__auto____$1){
return or__12593__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__12581__auto__ = p;
if(and__12581__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__12581__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__13237__auto__ = (((p == null))?null:p);
return (function (){var or__12593__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13237__auto__)]);
if(or__12593__auto__){
return or__12593__auto__;
} else {
var or__12593__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12593__auto____$1){
return or__12593__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__12593__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__12593__auto__)){
return or__12593__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12593__auto__,mults){
return (function (p1__27642_SHARP_){
if(cljs.core.truth_(p1__27642_SHARP_.call(null,topic))){
return p1__27642_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27642_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12593__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27765 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27765 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27766){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27766 = meta27766;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27765.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27765.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27765.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t27765.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27765.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27765.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27765.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27767){
var self__ = this;
var _27767__$1 = this;
return self__.meta27766;
});})(mults,ensure_mult))
;

cljs.core.async.t27765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27767,meta27766__$1){
var self__ = this;
var _27767__$1 = this;
return (new cljs.core.async.t27765(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27766__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27765.cljs$lang$type = true;

cljs.core.async.t27765.cljs$lang$ctorStr = "cljs.core.async/t27765";

cljs.core.async.t27765.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13180__auto__,writer__13181__auto__,opt__13182__auto__){
return cljs.core._write.call(null,writer__13181__auto__,"cljs.core.async/t27765");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27765 = ((function (mults,ensure_mult){
return (function __GT_t27765(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27766){
return (new cljs.core.async.t27765(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27766));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27765(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/carlos/OpenSource/mies-wheel-test/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var c__15056__auto___27887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto___27887,mults,ensure_mult,p){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto___27887,mults,ensure_mult,p){
return (function (state_27839){
var state_val_27840 = (state_27839[(1)]);
if((state_val_27840 === (7))){
var inst_27835 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
var statearr_27841_27888 = state_27839__$1;
(statearr_27841_27888[(2)] = inst_27835);

(statearr_27841_27888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (20))){
var state_27839__$1 = state_27839;
var statearr_27842_27889 = state_27839__$1;
(statearr_27842_27889[(2)] = null);

(statearr_27842_27889[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (1))){
var state_27839__$1 = state_27839;
var statearr_27843_27890 = state_27839__$1;
(statearr_27843_27890[(2)] = null);

(statearr_27843_27890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (24))){
var inst_27818 = (state_27839[(7)]);
var inst_27827 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27818);
var state_27839__$1 = state_27839;
var statearr_27844_27891 = state_27839__$1;
(statearr_27844_27891[(2)] = inst_27827);

(statearr_27844_27891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (4))){
var inst_27770 = (state_27839[(8)]);
var inst_27770__$1 = (state_27839[(2)]);
var inst_27771 = (inst_27770__$1 == null);
var state_27839__$1 = (function (){var statearr_27845 = state_27839;
(statearr_27845[(8)] = inst_27770__$1);

return statearr_27845;
})();
if(cljs.core.truth_(inst_27771)){
var statearr_27846_27892 = state_27839__$1;
(statearr_27846_27892[(1)] = (5));

} else {
var statearr_27847_27893 = state_27839__$1;
(statearr_27847_27893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (15))){
var inst_27812 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
var statearr_27848_27894 = state_27839__$1;
(statearr_27848_27894[(2)] = inst_27812);

(statearr_27848_27894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (21))){
var inst_27832 = (state_27839[(2)]);
var state_27839__$1 = (function (){var statearr_27849 = state_27839;
(statearr_27849[(9)] = inst_27832);

return statearr_27849;
})();
var statearr_27850_27895 = state_27839__$1;
(statearr_27850_27895[(2)] = null);

(statearr_27850_27895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (13))){
var inst_27794 = (state_27839[(10)]);
var inst_27796 = cljs.core.chunked_seq_QMARK_.call(null,inst_27794);
var state_27839__$1 = state_27839;
if(inst_27796){
var statearr_27851_27896 = state_27839__$1;
(statearr_27851_27896[(1)] = (16));

} else {
var statearr_27852_27897 = state_27839__$1;
(statearr_27852_27897[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (22))){
var inst_27824 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
if(cljs.core.truth_(inst_27824)){
var statearr_27853_27898 = state_27839__$1;
(statearr_27853_27898[(1)] = (23));

} else {
var statearr_27854_27899 = state_27839__$1;
(statearr_27854_27899[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (6))){
var inst_27820 = (state_27839[(11)]);
var inst_27770 = (state_27839[(8)]);
var inst_27818 = (state_27839[(7)]);
var inst_27818__$1 = topic_fn.call(null,inst_27770);
var inst_27819 = cljs.core.deref.call(null,mults);
var inst_27820__$1 = cljs.core.get.call(null,inst_27819,inst_27818__$1);
var state_27839__$1 = (function (){var statearr_27855 = state_27839;
(statearr_27855[(11)] = inst_27820__$1);

(statearr_27855[(7)] = inst_27818__$1);

return statearr_27855;
})();
if(cljs.core.truth_(inst_27820__$1)){
var statearr_27856_27900 = state_27839__$1;
(statearr_27856_27900[(1)] = (19));

} else {
var statearr_27857_27901 = state_27839__$1;
(statearr_27857_27901[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (25))){
var inst_27829 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
var statearr_27858_27902 = state_27839__$1;
(statearr_27858_27902[(2)] = inst_27829);

(statearr_27858_27902[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (17))){
var inst_27794 = (state_27839[(10)]);
var inst_27803 = cljs.core.first.call(null,inst_27794);
var inst_27804 = cljs.core.async.muxch_STAR_.call(null,inst_27803);
var inst_27805 = cljs.core.async.close_BANG_.call(null,inst_27804);
var inst_27806 = cljs.core.next.call(null,inst_27794);
var inst_27780 = inst_27806;
var inst_27781 = null;
var inst_27782 = (0);
var inst_27783 = (0);
var state_27839__$1 = (function (){var statearr_27859 = state_27839;
(statearr_27859[(12)] = inst_27781);

(statearr_27859[(13)] = inst_27805);

(statearr_27859[(14)] = inst_27780);

(statearr_27859[(15)] = inst_27782);

(statearr_27859[(16)] = inst_27783);

return statearr_27859;
})();
var statearr_27860_27903 = state_27839__$1;
(statearr_27860_27903[(2)] = null);

(statearr_27860_27903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (3))){
var inst_27837 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27839__$1,inst_27837);
} else {
if((state_val_27840 === (12))){
var inst_27814 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
var statearr_27861_27904 = state_27839__$1;
(statearr_27861_27904[(2)] = inst_27814);

(statearr_27861_27904[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (2))){
var state_27839__$1 = state_27839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27839__$1,(4),ch);
} else {
if((state_val_27840 === (23))){
var state_27839__$1 = state_27839;
var statearr_27862_27905 = state_27839__$1;
(statearr_27862_27905[(2)] = null);

(statearr_27862_27905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (19))){
var inst_27820 = (state_27839[(11)]);
var inst_27770 = (state_27839[(8)]);
var inst_27822 = cljs.core.async.muxch_STAR_.call(null,inst_27820);
var state_27839__$1 = state_27839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27839__$1,(22),inst_27822,inst_27770);
} else {
if((state_val_27840 === (11))){
var inst_27794 = (state_27839[(10)]);
var inst_27780 = (state_27839[(14)]);
var inst_27794__$1 = cljs.core.seq.call(null,inst_27780);
var state_27839__$1 = (function (){var statearr_27863 = state_27839;
(statearr_27863[(10)] = inst_27794__$1);

return statearr_27863;
})();
if(inst_27794__$1){
var statearr_27864_27906 = state_27839__$1;
(statearr_27864_27906[(1)] = (13));

} else {
var statearr_27865_27907 = state_27839__$1;
(statearr_27865_27907[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (9))){
var inst_27816 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
var statearr_27866_27908 = state_27839__$1;
(statearr_27866_27908[(2)] = inst_27816);

(statearr_27866_27908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (5))){
var inst_27777 = cljs.core.deref.call(null,mults);
var inst_27778 = cljs.core.vals.call(null,inst_27777);
var inst_27779 = cljs.core.seq.call(null,inst_27778);
var inst_27780 = inst_27779;
var inst_27781 = null;
var inst_27782 = (0);
var inst_27783 = (0);
var state_27839__$1 = (function (){var statearr_27867 = state_27839;
(statearr_27867[(12)] = inst_27781);

(statearr_27867[(14)] = inst_27780);

(statearr_27867[(15)] = inst_27782);

(statearr_27867[(16)] = inst_27783);

return statearr_27867;
})();
var statearr_27868_27909 = state_27839__$1;
(statearr_27868_27909[(2)] = null);

(statearr_27868_27909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (14))){
var state_27839__$1 = state_27839;
var statearr_27872_27910 = state_27839__$1;
(statearr_27872_27910[(2)] = null);

(statearr_27872_27910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (16))){
var inst_27794 = (state_27839[(10)]);
var inst_27798 = cljs.core.chunk_first.call(null,inst_27794);
var inst_27799 = cljs.core.chunk_rest.call(null,inst_27794);
var inst_27800 = cljs.core.count.call(null,inst_27798);
var inst_27780 = inst_27799;
var inst_27781 = inst_27798;
var inst_27782 = inst_27800;
var inst_27783 = (0);
var state_27839__$1 = (function (){var statearr_27873 = state_27839;
(statearr_27873[(12)] = inst_27781);

(statearr_27873[(14)] = inst_27780);

(statearr_27873[(15)] = inst_27782);

(statearr_27873[(16)] = inst_27783);

return statearr_27873;
})();
var statearr_27874_27911 = state_27839__$1;
(statearr_27874_27911[(2)] = null);

(statearr_27874_27911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (10))){
var inst_27781 = (state_27839[(12)]);
var inst_27780 = (state_27839[(14)]);
var inst_27782 = (state_27839[(15)]);
var inst_27783 = (state_27839[(16)]);
var inst_27788 = cljs.core._nth.call(null,inst_27781,inst_27783);
var inst_27789 = cljs.core.async.muxch_STAR_.call(null,inst_27788);
var inst_27790 = cljs.core.async.close_BANG_.call(null,inst_27789);
var inst_27791 = (inst_27783 + (1));
var tmp27869 = inst_27781;
var tmp27870 = inst_27780;
var tmp27871 = inst_27782;
var inst_27780__$1 = tmp27870;
var inst_27781__$1 = tmp27869;
var inst_27782__$1 = tmp27871;
var inst_27783__$1 = inst_27791;
var state_27839__$1 = (function (){var statearr_27875 = state_27839;
(statearr_27875[(12)] = inst_27781__$1);

(statearr_27875[(14)] = inst_27780__$1);

(statearr_27875[(15)] = inst_27782__$1);

(statearr_27875[(17)] = inst_27790);

(statearr_27875[(16)] = inst_27783__$1);

return statearr_27875;
})();
var statearr_27876_27912 = state_27839__$1;
(statearr_27876_27912[(2)] = null);

(statearr_27876_27912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (18))){
var inst_27809 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
var statearr_27877_27913 = state_27839__$1;
(statearr_27877_27913[(2)] = inst_27809);

(statearr_27877_27913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (8))){
var inst_27782 = (state_27839[(15)]);
var inst_27783 = (state_27839[(16)]);
var inst_27785 = (inst_27783 < inst_27782);
var inst_27786 = inst_27785;
var state_27839__$1 = state_27839;
if(cljs.core.truth_(inst_27786)){
var statearr_27878_27914 = state_27839__$1;
(statearr_27878_27914[(1)] = (10));

} else {
var statearr_27879_27915 = state_27839__$1;
(statearr_27879_27915[(1)] = (11));

}

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
});})(c__15056__auto___27887,mults,ensure_mult,p))
;
return ((function (switch__15000__auto__,c__15056__auto___27887,mults,ensure_mult,p){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_27883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27883[(0)] = state_machine__15001__auto__);

(statearr_27883[(1)] = (1));

return statearr_27883;
});
var state_machine__15001__auto____1 = (function (state_27839){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_27839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e27884){if((e27884 instanceof Object)){
var ex__15004__auto__ = e27884;
var statearr_27885_27916 = state_27839;
(statearr_27885_27916[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27917 = state_27839;
state_27839 = G__27917;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_27839){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_27839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto___27887,mults,ensure_mult,p))
})();
var state__15058__auto__ = (function (){var statearr_27886 = f__15057__auto__.call(null);
(statearr_27886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto___27887);

return statearr_27886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto___27887,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__15056__auto___28054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto___28054,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto___28054,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28024){
var state_val_28025 = (state_28024[(1)]);
if((state_val_28025 === (7))){
var state_28024__$1 = state_28024;
var statearr_28026_28055 = state_28024__$1;
(statearr_28026_28055[(2)] = null);

(statearr_28026_28055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28025 === (1))){
var state_28024__$1 = state_28024;
var statearr_28027_28056 = state_28024__$1;
(statearr_28027_28056[(2)] = null);

(statearr_28027_28056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28025 === (4))){
var inst_27988 = (state_28024[(7)]);
var inst_27990 = (inst_27988 < cnt);
var state_28024__$1 = state_28024;
if(cljs.core.truth_(inst_27990)){
var statearr_28028_28057 = state_28024__$1;
(statearr_28028_28057[(1)] = (6));

} else {
var statearr_28029_28058 = state_28024__$1;
(statearr_28029_28058[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28025 === (15))){
var inst_28020 = (state_28024[(2)]);
var state_28024__$1 = state_28024;
var statearr_28030_28059 = state_28024__$1;
(statearr_28030_28059[(2)] = inst_28020);

(statearr_28030_28059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28025 === (13))){
var inst_28013 = cljs.core.async.close_BANG_.call(null,out);
var state_28024__$1 = state_28024;
var statearr_28031_28060 = state_28024__$1;
(statearr_28031_28060[(2)] = inst_28013);

(statearr_28031_28060[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28025 === (6))){
var state_28024__$1 = state_28024;
var statearr_28032_28061 = state_28024__$1;
(statearr_28032_28061[(2)] = null);

(statearr_28032_28061[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28025 === (3))){
var inst_28022 = (state_28024[(2)]);
var state_28024__$1 = state_28024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28024__$1,inst_28022);
} else {
if((state_val_28025 === (12))){
var inst_28010 = (state_28024[(8)]);
var inst_28010__$1 = (state_28024[(2)]);
var inst_28011 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28010__$1);
var state_28024__$1 = (function (){var statearr_28033 = state_28024;
(statearr_28033[(8)] = inst_28010__$1);

return statearr_28033;
})();
if(cljs.core.truth_(inst_28011)){
var statearr_28034_28062 = state_28024__$1;
(statearr_28034_28062[(1)] = (13));

} else {
var statearr_28035_28063 = state_28024__$1;
(statearr_28035_28063[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28025 === (2))){
var inst_27987 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27988 = (0);
var state_28024__$1 = (function (){var statearr_28036 = state_28024;
(statearr_28036[(9)] = inst_27987);

(statearr_28036[(7)] = inst_27988);

return statearr_28036;
})();
var statearr_28037_28064 = state_28024__$1;
(statearr_28037_28064[(2)] = null);

(statearr_28037_28064[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28025 === (11))){
var inst_27988 = (state_28024[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28024,(10),Object,null,(9));
var inst_27997 = chs__$1.call(null,inst_27988);
var inst_27998 = done.call(null,inst_27988);
var inst_27999 = cljs.core.async.take_BANG_.call(null,inst_27997,inst_27998);
var state_28024__$1 = state_28024;
var statearr_28038_28065 = state_28024__$1;
(statearr_28038_28065[(2)] = inst_27999);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28024__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28025 === (9))){
var inst_27988 = (state_28024[(7)]);
var inst_28001 = (state_28024[(2)]);
var inst_28002 = (inst_27988 + (1));
var inst_27988__$1 = inst_28002;
var state_28024__$1 = (function (){var statearr_28039 = state_28024;
(statearr_28039[(7)] = inst_27988__$1);

(statearr_28039[(10)] = inst_28001);

return statearr_28039;
})();
var statearr_28040_28066 = state_28024__$1;
(statearr_28040_28066[(2)] = null);

(statearr_28040_28066[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28025 === (5))){
var inst_28008 = (state_28024[(2)]);
var state_28024__$1 = (function (){var statearr_28041 = state_28024;
(statearr_28041[(11)] = inst_28008);

return statearr_28041;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28024__$1,(12),dchan);
} else {
if((state_val_28025 === (14))){
var inst_28010 = (state_28024[(8)]);
var inst_28015 = cljs.core.apply.call(null,f,inst_28010);
var state_28024__$1 = state_28024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28024__$1,(16),out,inst_28015);
} else {
if((state_val_28025 === (16))){
var inst_28017 = (state_28024[(2)]);
var state_28024__$1 = (function (){var statearr_28042 = state_28024;
(statearr_28042[(12)] = inst_28017);

return statearr_28042;
})();
var statearr_28043_28067 = state_28024__$1;
(statearr_28043_28067[(2)] = null);

(statearr_28043_28067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28025 === (10))){
var inst_27992 = (state_28024[(2)]);
var inst_27993 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28024__$1 = (function (){var statearr_28044 = state_28024;
(statearr_28044[(13)] = inst_27992);

return statearr_28044;
})();
var statearr_28045_28068 = state_28024__$1;
(statearr_28045_28068[(2)] = inst_27993);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28024__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28025 === (8))){
var inst_28006 = (state_28024[(2)]);
var state_28024__$1 = state_28024;
var statearr_28046_28069 = state_28024__$1;
(statearr_28046_28069[(2)] = inst_28006);

(statearr_28046_28069[(1)] = (5));


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
});})(c__15056__auto___28054,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15000__auto__,c__15056__auto___28054,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_28050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28050[(0)] = state_machine__15001__auto__);

(statearr_28050[(1)] = (1));

return statearr_28050;
});
var state_machine__15001__auto____1 = (function (state_28024){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_28024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e28051){if((e28051 instanceof Object)){
var ex__15004__auto__ = e28051;
var statearr_28052_28070 = state_28024;
(statearr_28052_28070[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28071 = state_28024;
state_28024 = G__28071;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_28024){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_28024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto___28054,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15058__auto__ = (function (){var statearr_28053 = f__15057__auto__.call(null);
(statearr_28053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto___28054);

return statearr_28053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto___28054,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15056__auto___28179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto___28179,out){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto___28179,out){
return (function (state_28155){
var state_val_28156 = (state_28155[(1)]);
if((state_val_28156 === (7))){
var inst_28135 = (state_28155[(7)]);
var inst_28134 = (state_28155[(8)]);
var inst_28134__$1 = (state_28155[(2)]);
var inst_28135__$1 = cljs.core.nth.call(null,inst_28134__$1,(0),null);
var inst_28136 = cljs.core.nth.call(null,inst_28134__$1,(1),null);
var inst_28137 = (inst_28135__$1 == null);
var state_28155__$1 = (function (){var statearr_28157 = state_28155;
(statearr_28157[(9)] = inst_28136);

(statearr_28157[(7)] = inst_28135__$1);

(statearr_28157[(8)] = inst_28134__$1);

return statearr_28157;
})();
if(cljs.core.truth_(inst_28137)){
var statearr_28158_28180 = state_28155__$1;
(statearr_28158_28180[(1)] = (8));

} else {
var statearr_28159_28181 = state_28155__$1;
(statearr_28159_28181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (1))){
var inst_28126 = cljs.core.vec.call(null,chs);
var inst_28127 = inst_28126;
var state_28155__$1 = (function (){var statearr_28160 = state_28155;
(statearr_28160[(10)] = inst_28127);

return statearr_28160;
})();
var statearr_28161_28182 = state_28155__$1;
(statearr_28161_28182[(2)] = null);

(statearr_28161_28182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (4))){
var inst_28127 = (state_28155[(10)]);
var state_28155__$1 = state_28155;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28155__$1,(7),inst_28127);
} else {
if((state_val_28156 === (6))){
var inst_28151 = (state_28155[(2)]);
var state_28155__$1 = state_28155;
var statearr_28162_28183 = state_28155__$1;
(statearr_28162_28183[(2)] = inst_28151);

(statearr_28162_28183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (3))){
var inst_28153 = (state_28155[(2)]);
var state_28155__$1 = state_28155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28155__$1,inst_28153);
} else {
if((state_val_28156 === (2))){
var inst_28127 = (state_28155[(10)]);
var inst_28129 = cljs.core.count.call(null,inst_28127);
var inst_28130 = (inst_28129 > (0));
var state_28155__$1 = state_28155;
if(cljs.core.truth_(inst_28130)){
var statearr_28164_28184 = state_28155__$1;
(statearr_28164_28184[(1)] = (4));

} else {
var statearr_28165_28185 = state_28155__$1;
(statearr_28165_28185[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (11))){
var inst_28127 = (state_28155[(10)]);
var inst_28144 = (state_28155[(2)]);
var tmp28163 = inst_28127;
var inst_28127__$1 = tmp28163;
var state_28155__$1 = (function (){var statearr_28166 = state_28155;
(statearr_28166[(11)] = inst_28144);

(statearr_28166[(10)] = inst_28127__$1);

return statearr_28166;
})();
var statearr_28167_28186 = state_28155__$1;
(statearr_28167_28186[(2)] = null);

(statearr_28167_28186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (9))){
var inst_28135 = (state_28155[(7)]);
var state_28155__$1 = state_28155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28155__$1,(11),out,inst_28135);
} else {
if((state_val_28156 === (5))){
var inst_28149 = cljs.core.async.close_BANG_.call(null,out);
var state_28155__$1 = state_28155;
var statearr_28168_28187 = state_28155__$1;
(statearr_28168_28187[(2)] = inst_28149);

(statearr_28168_28187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (10))){
var inst_28147 = (state_28155[(2)]);
var state_28155__$1 = state_28155;
var statearr_28169_28188 = state_28155__$1;
(statearr_28169_28188[(2)] = inst_28147);

(statearr_28169_28188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (8))){
var inst_28136 = (state_28155[(9)]);
var inst_28135 = (state_28155[(7)]);
var inst_28134 = (state_28155[(8)]);
var inst_28127 = (state_28155[(10)]);
var inst_28139 = (function (){var c = inst_28136;
var v = inst_28135;
var vec__28132 = inst_28134;
var cs = inst_28127;
return ((function (c,v,vec__28132,cs,inst_28136,inst_28135,inst_28134,inst_28127,state_val_28156,c__15056__auto___28179,out){
return (function (p1__28072_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28072_SHARP_);
});
;})(c,v,vec__28132,cs,inst_28136,inst_28135,inst_28134,inst_28127,state_val_28156,c__15056__auto___28179,out))
})();
var inst_28140 = cljs.core.filterv.call(null,inst_28139,inst_28127);
var inst_28127__$1 = inst_28140;
var state_28155__$1 = (function (){var statearr_28170 = state_28155;
(statearr_28170[(10)] = inst_28127__$1);

return statearr_28170;
})();
var statearr_28171_28189 = state_28155__$1;
(statearr_28171_28189[(2)] = null);

(statearr_28171_28189[(1)] = (2));


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
});})(c__15056__auto___28179,out))
;
return ((function (switch__15000__auto__,c__15056__auto___28179,out){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_28175 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28175[(0)] = state_machine__15001__auto__);

(statearr_28175[(1)] = (1));

return statearr_28175;
});
var state_machine__15001__auto____1 = (function (state_28155){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_28155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e28176){if((e28176 instanceof Object)){
var ex__15004__auto__ = e28176;
var statearr_28177_28190 = state_28155;
(statearr_28177_28190[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28191 = state_28155;
state_28155 = G__28191;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_28155){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_28155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto___28179,out))
})();
var state__15058__auto__ = (function (){var statearr_28178 = f__15057__auto__.call(null);
(statearr_28178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto___28179);

return statearr_28178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto___28179,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15056__auto___28284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto___28284,out){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto___28284,out){
return (function (state_28261){
var state_val_28262 = (state_28261[(1)]);
if((state_val_28262 === (7))){
var inst_28243 = (state_28261[(7)]);
var inst_28243__$1 = (state_28261[(2)]);
var inst_28244 = (inst_28243__$1 == null);
var inst_28245 = cljs.core.not.call(null,inst_28244);
var state_28261__$1 = (function (){var statearr_28263 = state_28261;
(statearr_28263[(7)] = inst_28243__$1);

return statearr_28263;
})();
if(inst_28245){
var statearr_28264_28285 = state_28261__$1;
(statearr_28264_28285[(1)] = (8));

} else {
var statearr_28265_28286 = state_28261__$1;
(statearr_28265_28286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (1))){
var inst_28238 = (0);
var state_28261__$1 = (function (){var statearr_28266 = state_28261;
(statearr_28266[(8)] = inst_28238);

return statearr_28266;
})();
var statearr_28267_28287 = state_28261__$1;
(statearr_28267_28287[(2)] = null);

(statearr_28267_28287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (4))){
var state_28261__$1 = state_28261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28261__$1,(7),ch);
} else {
if((state_val_28262 === (6))){
var inst_28256 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
var statearr_28268_28288 = state_28261__$1;
(statearr_28268_28288[(2)] = inst_28256);

(statearr_28268_28288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (3))){
var inst_28258 = (state_28261[(2)]);
var inst_28259 = cljs.core.async.close_BANG_.call(null,out);
var state_28261__$1 = (function (){var statearr_28269 = state_28261;
(statearr_28269[(9)] = inst_28258);

return statearr_28269;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28261__$1,inst_28259);
} else {
if((state_val_28262 === (2))){
var inst_28238 = (state_28261[(8)]);
var inst_28240 = (inst_28238 < n);
var state_28261__$1 = state_28261;
if(cljs.core.truth_(inst_28240)){
var statearr_28270_28289 = state_28261__$1;
(statearr_28270_28289[(1)] = (4));

} else {
var statearr_28271_28290 = state_28261__$1;
(statearr_28271_28290[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (11))){
var inst_28238 = (state_28261[(8)]);
var inst_28248 = (state_28261[(2)]);
var inst_28249 = (inst_28238 + (1));
var inst_28238__$1 = inst_28249;
var state_28261__$1 = (function (){var statearr_28272 = state_28261;
(statearr_28272[(8)] = inst_28238__$1);

(statearr_28272[(10)] = inst_28248);

return statearr_28272;
})();
var statearr_28273_28291 = state_28261__$1;
(statearr_28273_28291[(2)] = null);

(statearr_28273_28291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (9))){
var state_28261__$1 = state_28261;
var statearr_28274_28292 = state_28261__$1;
(statearr_28274_28292[(2)] = null);

(statearr_28274_28292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (5))){
var state_28261__$1 = state_28261;
var statearr_28275_28293 = state_28261__$1;
(statearr_28275_28293[(2)] = null);

(statearr_28275_28293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (10))){
var inst_28253 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
var statearr_28276_28294 = state_28261__$1;
(statearr_28276_28294[(2)] = inst_28253);

(statearr_28276_28294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (8))){
var inst_28243 = (state_28261[(7)]);
var state_28261__$1 = state_28261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28261__$1,(11),out,inst_28243);
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
});})(c__15056__auto___28284,out))
;
return ((function (switch__15000__auto__,c__15056__auto___28284,out){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_28280 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28280[(0)] = state_machine__15001__auto__);

(statearr_28280[(1)] = (1));

return statearr_28280;
});
var state_machine__15001__auto____1 = (function (state_28261){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_28261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e28281){if((e28281 instanceof Object)){
var ex__15004__auto__ = e28281;
var statearr_28282_28295 = state_28261;
(statearr_28282_28295[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28296 = state_28261;
state_28261 = G__28296;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_28261){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_28261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto___28284,out))
})();
var state__15058__auto__ = (function (){var statearr_28283 = f__15057__auto__.call(null);
(statearr_28283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto___28284);

return statearr_28283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto___28284,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t28304 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28304 = (function (ch,f,map_LT_,meta28305){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28305 = meta28305;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28304.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28304.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28304.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28304.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28307 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28307 = (function (fn1,_,meta28305,map_LT_,f,ch,meta28308){
this.fn1 = fn1;
this._ = _;
this.meta28305 = meta28305;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28308 = meta28308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28307.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28307.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28307.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28297_SHARP_){
return f1.call(null,(((p1__28297_SHARP_ == null))?null:self__.f.call(null,p1__28297_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28307.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28309){
var self__ = this;
var _28309__$1 = this;
return self__.meta28308;
});})(___$1))
;

cljs.core.async.t28307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28309,meta28308__$1){
var self__ = this;
var _28309__$1 = this;
return (new cljs.core.async.t28307(self__.fn1,self__._,self__.meta28305,self__.map_LT_,self__.f,self__.ch,meta28308__$1));
});})(___$1))
;

cljs.core.async.t28307.cljs$lang$type = true;

cljs.core.async.t28307.cljs$lang$ctorStr = "cljs.core.async/t28307";

cljs.core.async.t28307.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13180__auto__,writer__13181__auto__,opt__13182__auto__){
return cljs.core._write.call(null,writer__13181__auto__,"cljs.core.async/t28307");
});})(___$1))
;

cljs.core.async.__GT_t28307 = ((function (___$1){
return (function __GT_t28307(fn1__$1,___$2,meta28305__$1,map_LT___$1,f__$1,ch__$1,meta28308){
return (new cljs.core.async.t28307(fn1__$1,___$2,meta28305__$1,map_LT___$1,f__$1,ch__$1,meta28308));
});})(___$1))
;

}

return (new cljs.core.async.t28307(fn1,___$1,self__.meta28305,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/carlos/OpenSource/mies-wheel-test/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__12581__auto__ = ret;
if(cljs.core.truth_(and__12581__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__12581__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28304.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28304.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28304.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28306){
var self__ = this;
var _28306__$1 = this;
return self__.meta28305;
});

cljs.core.async.t28304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28306,meta28305__$1){
var self__ = this;
var _28306__$1 = this;
return (new cljs.core.async.t28304(self__.ch,self__.f,self__.map_LT_,meta28305__$1));
});

cljs.core.async.t28304.cljs$lang$type = true;

cljs.core.async.t28304.cljs$lang$ctorStr = "cljs.core.async/t28304";

cljs.core.async.t28304.cljs$lang$ctorPrWriter = (function (this__13180__auto__,writer__13181__auto__,opt__13182__auto__){
return cljs.core._write.call(null,writer__13181__auto__,"cljs.core.async/t28304");
});

cljs.core.async.__GT_t28304 = (function __GT_t28304(ch__$1,f__$1,map_LT___$1,meta28305){
return (new cljs.core.async.t28304(ch__$1,f__$1,map_LT___$1,meta28305));
});

}

return (new cljs.core.async.t28304(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/carlos/OpenSource/mies-wheel-test/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t28313 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28313 = (function (ch,f,map_GT_,meta28314){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28314 = meta28314;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28313.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28313.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28313.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28313.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28313.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28313.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28315){
var self__ = this;
var _28315__$1 = this;
return self__.meta28314;
});

cljs.core.async.t28313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28315,meta28314__$1){
var self__ = this;
var _28315__$1 = this;
return (new cljs.core.async.t28313(self__.ch,self__.f,self__.map_GT_,meta28314__$1));
});

cljs.core.async.t28313.cljs$lang$type = true;

cljs.core.async.t28313.cljs$lang$ctorStr = "cljs.core.async/t28313";

cljs.core.async.t28313.cljs$lang$ctorPrWriter = (function (this__13180__auto__,writer__13181__auto__,opt__13182__auto__){
return cljs.core._write.call(null,writer__13181__auto__,"cljs.core.async/t28313");
});

cljs.core.async.__GT_t28313 = (function __GT_t28313(ch__$1,f__$1,map_GT___$1,meta28314){
return (new cljs.core.async.t28313(ch__$1,f__$1,map_GT___$1,meta28314));
});

}

return (new cljs.core.async.t28313(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/carlos/OpenSource/mies-wheel-test/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t28319 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28319 = (function (ch,p,filter_GT_,meta28320){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28320 = meta28320;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28319.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28319.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28319.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28319.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28319.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28319.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28319.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28321){
var self__ = this;
var _28321__$1 = this;
return self__.meta28320;
});

cljs.core.async.t28319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28321,meta28320__$1){
var self__ = this;
var _28321__$1 = this;
return (new cljs.core.async.t28319(self__.ch,self__.p,self__.filter_GT_,meta28320__$1));
});

cljs.core.async.t28319.cljs$lang$type = true;

cljs.core.async.t28319.cljs$lang$ctorStr = "cljs.core.async/t28319";

cljs.core.async.t28319.cljs$lang$ctorPrWriter = (function (this__13180__auto__,writer__13181__auto__,opt__13182__auto__){
return cljs.core._write.call(null,writer__13181__auto__,"cljs.core.async/t28319");
});

cljs.core.async.__GT_t28319 = (function __GT_t28319(ch__$1,p__$1,filter_GT___$1,meta28320){
return (new cljs.core.async.t28319(ch__$1,p__$1,filter_GT___$1,meta28320));
});

}

return (new cljs.core.async.t28319(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/carlos/OpenSource/mies-wheel-test/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15056__auto___28404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto___28404,out){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto___28404,out){
return (function (state_28383){
var state_val_28384 = (state_28383[(1)]);
if((state_val_28384 === (7))){
var inst_28379 = (state_28383[(2)]);
var state_28383__$1 = state_28383;
var statearr_28385_28405 = state_28383__$1;
(statearr_28385_28405[(2)] = inst_28379);

(statearr_28385_28405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28384 === (1))){
var state_28383__$1 = state_28383;
var statearr_28386_28406 = state_28383__$1;
(statearr_28386_28406[(2)] = null);

(statearr_28386_28406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28384 === (4))){
var inst_28365 = (state_28383[(7)]);
var inst_28365__$1 = (state_28383[(2)]);
var inst_28366 = (inst_28365__$1 == null);
var state_28383__$1 = (function (){var statearr_28387 = state_28383;
(statearr_28387[(7)] = inst_28365__$1);

return statearr_28387;
})();
if(cljs.core.truth_(inst_28366)){
var statearr_28388_28407 = state_28383__$1;
(statearr_28388_28407[(1)] = (5));

} else {
var statearr_28389_28408 = state_28383__$1;
(statearr_28389_28408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28384 === (6))){
var inst_28365 = (state_28383[(7)]);
var inst_28370 = p.call(null,inst_28365);
var state_28383__$1 = state_28383;
if(cljs.core.truth_(inst_28370)){
var statearr_28390_28409 = state_28383__$1;
(statearr_28390_28409[(1)] = (8));

} else {
var statearr_28391_28410 = state_28383__$1;
(statearr_28391_28410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28384 === (3))){
var inst_28381 = (state_28383[(2)]);
var state_28383__$1 = state_28383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28383__$1,inst_28381);
} else {
if((state_val_28384 === (2))){
var state_28383__$1 = state_28383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28383__$1,(4),ch);
} else {
if((state_val_28384 === (11))){
var inst_28373 = (state_28383[(2)]);
var state_28383__$1 = state_28383;
var statearr_28392_28411 = state_28383__$1;
(statearr_28392_28411[(2)] = inst_28373);

(statearr_28392_28411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28384 === (9))){
var state_28383__$1 = state_28383;
var statearr_28393_28412 = state_28383__$1;
(statearr_28393_28412[(2)] = null);

(statearr_28393_28412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28384 === (5))){
var inst_28368 = cljs.core.async.close_BANG_.call(null,out);
var state_28383__$1 = state_28383;
var statearr_28394_28413 = state_28383__$1;
(statearr_28394_28413[(2)] = inst_28368);

(statearr_28394_28413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28384 === (10))){
var inst_28376 = (state_28383[(2)]);
var state_28383__$1 = (function (){var statearr_28395 = state_28383;
(statearr_28395[(8)] = inst_28376);

return statearr_28395;
})();
var statearr_28396_28414 = state_28383__$1;
(statearr_28396_28414[(2)] = null);

(statearr_28396_28414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28384 === (8))){
var inst_28365 = (state_28383[(7)]);
var state_28383__$1 = state_28383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28383__$1,(11),out,inst_28365);
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
});})(c__15056__auto___28404,out))
;
return ((function (switch__15000__auto__,c__15056__auto___28404,out){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_28400 = [null,null,null,null,null,null,null,null,null];
(statearr_28400[(0)] = state_machine__15001__auto__);

(statearr_28400[(1)] = (1));

return statearr_28400;
});
var state_machine__15001__auto____1 = (function (state_28383){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_28383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e28401){if((e28401 instanceof Object)){
var ex__15004__auto__ = e28401;
var statearr_28402_28415 = state_28383;
(statearr_28402_28415[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28416 = state_28383;
state_28383 = G__28416;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_28383){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_28383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto___28404,out))
})();
var state__15058__auto__ = (function (){var statearr_28403 = f__15057__auto__.call(null);
(statearr_28403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto___28404);

return statearr_28403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto___28404,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__15056__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto__){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto__){
return (function (state_28582){
var state_val_28583 = (state_28582[(1)]);
if((state_val_28583 === (7))){
var inst_28578 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28584_28625 = state_28582__$1;
(statearr_28584_28625[(2)] = inst_28578);

(statearr_28584_28625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (20))){
var inst_28548 = (state_28582[(7)]);
var inst_28559 = (state_28582[(2)]);
var inst_28560 = cljs.core.next.call(null,inst_28548);
var inst_28534 = inst_28560;
var inst_28535 = null;
var inst_28536 = (0);
var inst_28537 = (0);
var state_28582__$1 = (function (){var statearr_28585 = state_28582;
(statearr_28585[(8)] = inst_28535);

(statearr_28585[(9)] = inst_28534);

(statearr_28585[(10)] = inst_28559);

(statearr_28585[(11)] = inst_28537);

(statearr_28585[(12)] = inst_28536);

return statearr_28585;
})();
var statearr_28586_28626 = state_28582__$1;
(statearr_28586_28626[(2)] = null);

(statearr_28586_28626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (1))){
var state_28582__$1 = state_28582;
var statearr_28587_28627 = state_28582__$1;
(statearr_28587_28627[(2)] = null);

(statearr_28587_28627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (4))){
var inst_28523 = (state_28582[(13)]);
var inst_28523__$1 = (state_28582[(2)]);
var inst_28524 = (inst_28523__$1 == null);
var state_28582__$1 = (function (){var statearr_28588 = state_28582;
(statearr_28588[(13)] = inst_28523__$1);

return statearr_28588;
})();
if(cljs.core.truth_(inst_28524)){
var statearr_28589_28628 = state_28582__$1;
(statearr_28589_28628[(1)] = (5));

} else {
var statearr_28590_28629 = state_28582__$1;
(statearr_28590_28629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (15))){
var state_28582__$1 = state_28582;
var statearr_28594_28630 = state_28582__$1;
(statearr_28594_28630[(2)] = null);

(statearr_28594_28630[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (21))){
var state_28582__$1 = state_28582;
var statearr_28595_28631 = state_28582__$1;
(statearr_28595_28631[(2)] = null);

(statearr_28595_28631[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (13))){
var inst_28535 = (state_28582[(8)]);
var inst_28534 = (state_28582[(9)]);
var inst_28537 = (state_28582[(11)]);
var inst_28536 = (state_28582[(12)]);
var inst_28544 = (state_28582[(2)]);
var inst_28545 = (inst_28537 + (1));
var tmp28591 = inst_28535;
var tmp28592 = inst_28534;
var tmp28593 = inst_28536;
var inst_28534__$1 = tmp28592;
var inst_28535__$1 = tmp28591;
var inst_28536__$1 = tmp28593;
var inst_28537__$1 = inst_28545;
var state_28582__$1 = (function (){var statearr_28596 = state_28582;
(statearr_28596[(14)] = inst_28544);

(statearr_28596[(8)] = inst_28535__$1);

(statearr_28596[(9)] = inst_28534__$1);

(statearr_28596[(11)] = inst_28537__$1);

(statearr_28596[(12)] = inst_28536__$1);

return statearr_28596;
})();
var statearr_28597_28632 = state_28582__$1;
(statearr_28597_28632[(2)] = null);

(statearr_28597_28632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (22))){
var state_28582__$1 = state_28582;
var statearr_28598_28633 = state_28582__$1;
(statearr_28598_28633[(2)] = null);

(statearr_28598_28633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (6))){
var inst_28523 = (state_28582[(13)]);
var inst_28532 = f.call(null,inst_28523);
var inst_28533 = cljs.core.seq.call(null,inst_28532);
var inst_28534 = inst_28533;
var inst_28535 = null;
var inst_28536 = (0);
var inst_28537 = (0);
var state_28582__$1 = (function (){var statearr_28599 = state_28582;
(statearr_28599[(8)] = inst_28535);

(statearr_28599[(9)] = inst_28534);

(statearr_28599[(11)] = inst_28537);

(statearr_28599[(12)] = inst_28536);

return statearr_28599;
})();
var statearr_28600_28634 = state_28582__$1;
(statearr_28600_28634[(2)] = null);

(statearr_28600_28634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (17))){
var inst_28548 = (state_28582[(7)]);
var inst_28552 = cljs.core.chunk_first.call(null,inst_28548);
var inst_28553 = cljs.core.chunk_rest.call(null,inst_28548);
var inst_28554 = cljs.core.count.call(null,inst_28552);
var inst_28534 = inst_28553;
var inst_28535 = inst_28552;
var inst_28536 = inst_28554;
var inst_28537 = (0);
var state_28582__$1 = (function (){var statearr_28601 = state_28582;
(statearr_28601[(8)] = inst_28535);

(statearr_28601[(9)] = inst_28534);

(statearr_28601[(11)] = inst_28537);

(statearr_28601[(12)] = inst_28536);

return statearr_28601;
})();
var statearr_28602_28635 = state_28582__$1;
(statearr_28602_28635[(2)] = null);

(statearr_28602_28635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (3))){
var inst_28580 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28582__$1,inst_28580);
} else {
if((state_val_28583 === (12))){
var inst_28568 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28603_28636 = state_28582__$1;
(statearr_28603_28636[(2)] = inst_28568);

(statearr_28603_28636[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (2))){
var state_28582__$1 = state_28582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28582__$1,(4),in$);
} else {
if((state_val_28583 === (23))){
var inst_28576 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28604_28637 = state_28582__$1;
(statearr_28604_28637[(2)] = inst_28576);

(statearr_28604_28637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (19))){
var inst_28563 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28605_28638 = state_28582__$1;
(statearr_28605_28638[(2)] = inst_28563);

(statearr_28605_28638[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (11))){
var inst_28548 = (state_28582[(7)]);
var inst_28534 = (state_28582[(9)]);
var inst_28548__$1 = cljs.core.seq.call(null,inst_28534);
var state_28582__$1 = (function (){var statearr_28606 = state_28582;
(statearr_28606[(7)] = inst_28548__$1);

return statearr_28606;
})();
if(inst_28548__$1){
var statearr_28607_28639 = state_28582__$1;
(statearr_28607_28639[(1)] = (14));

} else {
var statearr_28608_28640 = state_28582__$1;
(statearr_28608_28640[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (9))){
var inst_28570 = (state_28582[(2)]);
var inst_28571 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28582__$1 = (function (){var statearr_28609 = state_28582;
(statearr_28609[(15)] = inst_28570);

return statearr_28609;
})();
if(cljs.core.truth_(inst_28571)){
var statearr_28610_28641 = state_28582__$1;
(statearr_28610_28641[(1)] = (21));

} else {
var statearr_28611_28642 = state_28582__$1;
(statearr_28611_28642[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (5))){
var inst_28526 = cljs.core.async.close_BANG_.call(null,out);
var state_28582__$1 = state_28582;
var statearr_28612_28643 = state_28582__$1;
(statearr_28612_28643[(2)] = inst_28526);

(statearr_28612_28643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (14))){
var inst_28548 = (state_28582[(7)]);
var inst_28550 = cljs.core.chunked_seq_QMARK_.call(null,inst_28548);
var state_28582__$1 = state_28582;
if(inst_28550){
var statearr_28613_28644 = state_28582__$1;
(statearr_28613_28644[(1)] = (17));

} else {
var statearr_28614_28645 = state_28582__$1;
(statearr_28614_28645[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (16))){
var inst_28566 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28615_28646 = state_28582__$1;
(statearr_28615_28646[(2)] = inst_28566);

(statearr_28615_28646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (10))){
var inst_28535 = (state_28582[(8)]);
var inst_28537 = (state_28582[(11)]);
var inst_28542 = cljs.core._nth.call(null,inst_28535,inst_28537);
var state_28582__$1 = state_28582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28582__$1,(13),out,inst_28542);
} else {
if((state_val_28583 === (18))){
var inst_28548 = (state_28582[(7)]);
var inst_28557 = cljs.core.first.call(null,inst_28548);
var state_28582__$1 = state_28582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28582__$1,(20),out,inst_28557);
} else {
if((state_val_28583 === (8))){
var inst_28537 = (state_28582[(11)]);
var inst_28536 = (state_28582[(12)]);
var inst_28539 = (inst_28537 < inst_28536);
var inst_28540 = inst_28539;
var state_28582__$1 = state_28582;
if(cljs.core.truth_(inst_28540)){
var statearr_28616_28647 = state_28582__$1;
(statearr_28616_28647[(1)] = (10));

} else {
var statearr_28617_28648 = state_28582__$1;
(statearr_28617_28648[(1)] = (11));

}

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
});})(c__15056__auto__))
;
return ((function (switch__15000__auto__,c__15056__auto__){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_28621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28621[(0)] = state_machine__15001__auto__);

(statearr_28621[(1)] = (1));

return statearr_28621;
});
var state_machine__15001__auto____1 = (function (state_28582){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_28582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e28622){if((e28622 instanceof Object)){
var ex__15004__auto__ = e28622;
var statearr_28623_28649 = state_28582;
(statearr_28623_28649[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28650 = state_28582;
state_28582 = G__28650;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_28582){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_28582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto__))
})();
var state__15058__auto__ = (function (){var statearr_28624 = f__15057__auto__.call(null);
(statearr_28624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto__);

return statearr_28624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto__))
);

return c__15056__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15056__auto___28747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto___28747,out){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto___28747,out){
return (function (state_28722){
var state_val_28723 = (state_28722[(1)]);
if((state_val_28723 === (7))){
var inst_28717 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
var statearr_28724_28748 = state_28722__$1;
(statearr_28724_28748[(2)] = inst_28717);

(statearr_28724_28748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (1))){
var inst_28699 = null;
var state_28722__$1 = (function (){var statearr_28725 = state_28722;
(statearr_28725[(7)] = inst_28699);

return statearr_28725;
})();
var statearr_28726_28749 = state_28722__$1;
(statearr_28726_28749[(2)] = null);

(statearr_28726_28749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (4))){
var inst_28702 = (state_28722[(8)]);
var inst_28702__$1 = (state_28722[(2)]);
var inst_28703 = (inst_28702__$1 == null);
var inst_28704 = cljs.core.not.call(null,inst_28703);
var state_28722__$1 = (function (){var statearr_28727 = state_28722;
(statearr_28727[(8)] = inst_28702__$1);

return statearr_28727;
})();
if(inst_28704){
var statearr_28728_28750 = state_28722__$1;
(statearr_28728_28750[(1)] = (5));

} else {
var statearr_28729_28751 = state_28722__$1;
(statearr_28729_28751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (6))){
var state_28722__$1 = state_28722;
var statearr_28730_28752 = state_28722__$1;
(statearr_28730_28752[(2)] = null);

(statearr_28730_28752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (3))){
var inst_28719 = (state_28722[(2)]);
var inst_28720 = cljs.core.async.close_BANG_.call(null,out);
var state_28722__$1 = (function (){var statearr_28731 = state_28722;
(statearr_28731[(9)] = inst_28719);

return statearr_28731;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28722__$1,inst_28720);
} else {
if((state_val_28723 === (2))){
var state_28722__$1 = state_28722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28722__$1,(4),ch);
} else {
if((state_val_28723 === (11))){
var inst_28702 = (state_28722[(8)]);
var inst_28711 = (state_28722[(2)]);
var inst_28699 = inst_28702;
var state_28722__$1 = (function (){var statearr_28732 = state_28722;
(statearr_28732[(7)] = inst_28699);

(statearr_28732[(10)] = inst_28711);

return statearr_28732;
})();
var statearr_28733_28753 = state_28722__$1;
(statearr_28733_28753[(2)] = null);

(statearr_28733_28753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (9))){
var inst_28702 = (state_28722[(8)]);
var state_28722__$1 = state_28722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28722__$1,(11),out,inst_28702);
} else {
if((state_val_28723 === (5))){
var inst_28699 = (state_28722[(7)]);
var inst_28702 = (state_28722[(8)]);
var inst_28706 = cljs.core._EQ_.call(null,inst_28702,inst_28699);
var state_28722__$1 = state_28722;
if(inst_28706){
var statearr_28735_28754 = state_28722__$1;
(statearr_28735_28754[(1)] = (8));

} else {
var statearr_28736_28755 = state_28722__$1;
(statearr_28736_28755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (10))){
var inst_28714 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
var statearr_28737_28756 = state_28722__$1;
(statearr_28737_28756[(2)] = inst_28714);

(statearr_28737_28756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (8))){
var inst_28699 = (state_28722[(7)]);
var tmp28734 = inst_28699;
var inst_28699__$1 = tmp28734;
var state_28722__$1 = (function (){var statearr_28738 = state_28722;
(statearr_28738[(7)] = inst_28699__$1);

return statearr_28738;
})();
var statearr_28739_28757 = state_28722__$1;
(statearr_28739_28757[(2)] = null);

(statearr_28739_28757[(1)] = (2));


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
});})(c__15056__auto___28747,out))
;
return ((function (switch__15000__auto__,c__15056__auto___28747,out){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_28743 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28743[(0)] = state_machine__15001__auto__);

(statearr_28743[(1)] = (1));

return statearr_28743;
});
var state_machine__15001__auto____1 = (function (state_28722){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_28722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e28744){if((e28744 instanceof Object)){
var ex__15004__auto__ = e28744;
var statearr_28745_28758 = state_28722;
(statearr_28745_28758[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28759 = state_28722;
state_28722 = G__28759;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_28722){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_28722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto___28747,out))
})();
var state__15058__auto__ = (function (){var statearr_28746 = f__15057__auto__.call(null);
(statearr_28746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto___28747);

return statearr_28746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto___28747,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15056__auto___28894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto___28894,out){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto___28894,out){
return (function (state_28864){
var state_val_28865 = (state_28864[(1)]);
if((state_val_28865 === (7))){
var inst_28860 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28866_28895 = state_28864__$1;
(statearr_28866_28895[(2)] = inst_28860);

(statearr_28866_28895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (1))){
var inst_28827 = (new Array(n));
var inst_28828 = inst_28827;
var inst_28829 = (0);
var state_28864__$1 = (function (){var statearr_28867 = state_28864;
(statearr_28867[(7)] = inst_28829);

(statearr_28867[(8)] = inst_28828);

return statearr_28867;
})();
var statearr_28868_28896 = state_28864__$1;
(statearr_28868_28896[(2)] = null);

(statearr_28868_28896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (4))){
var inst_28832 = (state_28864[(9)]);
var inst_28832__$1 = (state_28864[(2)]);
var inst_28833 = (inst_28832__$1 == null);
var inst_28834 = cljs.core.not.call(null,inst_28833);
var state_28864__$1 = (function (){var statearr_28869 = state_28864;
(statearr_28869[(9)] = inst_28832__$1);

return statearr_28869;
})();
if(inst_28834){
var statearr_28870_28897 = state_28864__$1;
(statearr_28870_28897[(1)] = (5));

} else {
var statearr_28871_28898 = state_28864__$1;
(statearr_28871_28898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (15))){
var inst_28854 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28872_28899 = state_28864__$1;
(statearr_28872_28899[(2)] = inst_28854);

(statearr_28872_28899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (13))){
var state_28864__$1 = state_28864;
var statearr_28873_28900 = state_28864__$1;
(statearr_28873_28900[(2)] = null);

(statearr_28873_28900[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (6))){
var inst_28829 = (state_28864[(7)]);
var inst_28850 = (inst_28829 > (0));
var state_28864__$1 = state_28864;
if(cljs.core.truth_(inst_28850)){
var statearr_28874_28901 = state_28864__$1;
(statearr_28874_28901[(1)] = (12));

} else {
var statearr_28875_28902 = state_28864__$1;
(statearr_28875_28902[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (3))){
var inst_28862 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28864__$1,inst_28862);
} else {
if((state_val_28865 === (12))){
var inst_28828 = (state_28864[(8)]);
var inst_28852 = cljs.core.vec.call(null,inst_28828);
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28864__$1,(15),out,inst_28852);
} else {
if((state_val_28865 === (2))){
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28864__$1,(4),ch);
} else {
if((state_val_28865 === (11))){
var inst_28844 = (state_28864[(2)]);
var inst_28845 = (new Array(n));
var inst_28828 = inst_28845;
var inst_28829 = (0);
var state_28864__$1 = (function (){var statearr_28876 = state_28864;
(statearr_28876[(10)] = inst_28844);

(statearr_28876[(7)] = inst_28829);

(statearr_28876[(8)] = inst_28828);

return statearr_28876;
})();
var statearr_28877_28903 = state_28864__$1;
(statearr_28877_28903[(2)] = null);

(statearr_28877_28903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (9))){
var inst_28828 = (state_28864[(8)]);
var inst_28842 = cljs.core.vec.call(null,inst_28828);
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28864__$1,(11),out,inst_28842);
} else {
if((state_val_28865 === (5))){
var inst_28837 = (state_28864[(11)]);
var inst_28829 = (state_28864[(7)]);
var inst_28828 = (state_28864[(8)]);
var inst_28832 = (state_28864[(9)]);
var inst_28836 = (inst_28828[inst_28829] = inst_28832);
var inst_28837__$1 = (inst_28829 + (1));
var inst_28838 = (inst_28837__$1 < n);
var state_28864__$1 = (function (){var statearr_28878 = state_28864;
(statearr_28878[(11)] = inst_28837__$1);

(statearr_28878[(12)] = inst_28836);

return statearr_28878;
})();
if(cljs.core.truth_(inst_28838)){
var statearr_28879_28904 = state_28864__$1;
(statearr_28879_28904[(1)] = (8));

} else {
var statearr_28880_28905 = state_28864__$1;
(statearr_28880_28905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (14))){
var inst_28857 = (state_28864[(2)]);
var inst_28858 = cljs.core.async.close_BANG_.call(null,out);
var state_28864__$1 = (function (){var statearr_28882 = state_28864;
(statearr_28882[(13)] = inst_28857);

return statearr_28882;
})();
var statearr_28883_28906 = state_28864__$1;
(statearr_28883_28906[(2)] = inst_28858);

(statearr_28883_28906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (10))){
var inst_28848 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28884_28907 = state_28864__$1;
(statearr_28884_28907[(2)] = inst_28848);

(statearr_28884_28907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (8))){
var inst_28837 = (state_28864[(11)]);
var inst_28828 = (state_28864[(8)]);
var tmp28881 = inst_28828;
var inst_28828__$1 = tmp28881;
var inst_28829 = inst_28837;
var state_28864__$1 = (function (){var statearr_28885 = state_28864;
(statearr_28885[(7)] = inst_28829);

(statearr_28885[(8)] = inst_28828__$1);

return statearr_28885;
})();
var statearr_28886_28908 = state_28864__$1;
(statearr_28886_28908[(2)] = null);

(statearr_28886_28908[(1)] = (2));


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
});})(c__15056__auto___28894,out))
;
return ((function (switch__15000__auto__,c__15056__auto___28894,out){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_28890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28890[(0)] = state_machine__15001__auto__);

(statearr_28890[(1)] = (1));

return statearr_28890;
});
var state_machine__15001__auto____1 = (function (state_28864){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_28864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e28891){if((e28891 instanceof Object)){
var ex__15004__auto__ = e28891;
var statearr_28892_28909 = state_28864;
(statearr_28892_28909[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28910 = state_28864;
state_28864 = G__28910;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_28864){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_28864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto___28894,out))
})();
var state__15058__auto__ = (function (){var statearr_28893 = f__15057__auto__.call(null);
(statearr_28893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto___28894);

return statearr_28893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto___28894,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15056__auto___29053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15056__auto___29053,out){
return (function (){
var f__15057__auto__ = (function (){var switch__15000__auto__ = ((function (c__15056__auto___29053,out){
return (function (state_29023){
var state_val_29024 = (state_29023[(1)]);
if((state_val_29024 === (7))){
var inst_29019 = (state_29023[(2)]);
var state_29023__$1 = state_29023;
var statearr_29025_29054 = state_29023__$1;
(statearr_29025_29054[(2)] = inst_29019);

(statearr_29025_29054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29024 === (1))){
var inst_28982 = [];
var inst_28983 = inst_28982;
var inst_28984 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29023__$1 = (function (){var statearr_29026 = state_29023;
(statearr_29026[(7)] = inst_28983);

(statearr_29026[(8)] = inst_28984);

return statearr_29026;
})();
var statearr_29027_29055 = state_29023__$1;
(statearr_29027_29055[(2)] = null);

(statearr_29027_29055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29024 === (4))){
var inst_28987 = (state_29023[(9)]);
var inst_28987__$1 = (state_29023[(2)]);
var inst_28988 = (inst_28987__$1 == null);
var inst_28989 = cljs.core.not.call(null,inst_28988);
var state_29023__$1 = (function (){var statearr_29028 = state_29023;
(statearr_29028[(9)] = inst_28987__$1);

return statearr_29028;
})();
if(inst_28989){
var statearr_29029_29056 = state_29023__$1;
(statearr_29029_29056[(1)] = (5));

} else {
var statearr_29030_29057 = state_29023__$1;
(statearr_29030_29057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29024 === (15))){
var inst_29013 = (state_29023[(2)]);
var state_29023__$1 = state_29023;
var statearr_29031_29058 = state_29023__$1;
(statearr_29031_29058[(2)] = inst_29013);

(statearr_29031_29058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29024 === (13))){
var state_29023__$1 = state_29023;
var statearr_29032_29059 = state_29023__$1;
(statearr_29032_29059[(2)] = null);

(statearr_29032_29059[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29024 === (6))){
var inst_28983 = (state_29023[(7)]);
var inst_29008 = inst_28983.length;
var inst_29009 = (inst_29008 > (0));
var state_29023__$1 = state_29023;
if(cljs.core.truth_(inst_29009)){
var statearr_29033_29060 = state_29023__$1;
(statearr_29033_29060[(1)] = (12));

} else {
var statearr_29034_29061 = state_29023__$1;
(statearr_29034_29061[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29024 === (3))){
var inst_29021 = (state_29023[(2)]);
var state_29023__$1 = state_29023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29023__$1,inst_29021);
} else {
if((state_val_29024 === (12))){
var inst_28983 = (state_29023[(7)]);
var inst_29011 = cljs.core.vec.call(null,inst_28983);
var state_29023__$1 = state_29023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29023__$1,(15),out,inst_29011);
} else {
if((state_val_29024 === (2))){
var state_29023__$1 = state_29023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29023__$1,(4),ch);
} else {
if((state_val_29024 === (11))){
var inst_28991 = (state_29023[(10)]);
var inst_28987 = (state_29023[(9)]);
var inst_29001 = (state_29023[(2)]);
var inst_29002 = [];
var inst_29003 = inst_29002.push(inst_28987);
var inst_28983 = inst_29002;
var inst_28984 = inst_28991;
var state_29023__$1 = (function (){var statearr_29035 = state_29023;
(statearr_29035[(7)] = inst_28983);

(statearr_29035[(11)] = inst_29001);

(statearr_29035[(12)] = inst_29003);

(statearr_29035[(8)] = inst_28984);

return statearr_29035;
})();
var statearr_29036_29062 = state_29023__$1;
(statearr_29036_29062[(2)] = null);

(statearr_29036_29062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29024 === (9))){
var inst_28983 = (state_29023[(7)]);
var inst_28999 = cljs.core.vec.call(null,inst_28983);
var state_29023__$1 = state_29023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29023__$1,(11),out,inst_28999);
} else {
if((state_val_29024 === (5))){
var inst_28991 = (state_29023[(10)]);
var inst_28987 = (state_29023[(9)]);
var inst_28984 = (state_29023[(8)]);
var inst_28991__$1 = f.call(null,inst_28987);
var inst_28992 = cljs.core._EQ_.call(null,inst_28991__$1,inst_28984);
var inst_28993 = cljs.core.keyword_identical_QMARK_.call(null,inst_28984,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28994 = (inst_28992) || (inst_28993);
var state_29023__$1 = (function (){var statearr_29037 = state_29023;
(statearr_29037[(10)] = inst_28991__$1);

return statearr_29037;
})();
if(cljs.core.truth_(inst_28994)){
var statearr_29038_29063 = state_29023__$1;
(statearr_29038_29063[(1)] = (8));

} else {
var statearr_29039_29064 = state_29023__$1;
(statearr_29039_29064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29024 === (14))){
var inst_29016 = (state_29023[(2)]);
var inst_29017 = cljs.core.async.close_BANG_.call(null,out);
var state_29023__$1 = (function (){var statearr_29041 = state_29023;
(statearr_29041[(13)] = inst_29016);

return statearr_29041;
})();
var statearr_29042_29065 = state_29023__$1;
(statearr_29042_29065[(2)] = inst_29017);

(statearr_29042_29065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29024 === (10))){
var inst_29006 = (state_29023[(2)]);
var state_29023__$1 = state_29023;
var statearr_29043_29066 = state_29023__$1;
(statearr_29043_29066[(2)] = inst_29006);

(statearr_29043_29066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29024 === (8))){
var inst_28983 = (state_29023[(7)]);
var inst_28991 = (state_29023[(10)]);
var inst_28987 = (state_29023[(9)]);
var inst_28996 = inst_28983.push(inst_28987);
var tmp29040 = inst_28983;
var inst_28983__$1 = tmp29040;
var inst_28984 = inst_28991;
var state_29023__$1 = (function (){var statearr_29044 = state_29023;
(statearr_29044[(7)] = inst_28983__$1);

(statearr_29044[(14)] = inst_28996);

(statearr_29044[(8)] = inst_28984);

return statearr_29044;
})();
var statearr_29045_29067 = state_29023__$1;
(statearr_29045_29067[(2)] = null);

(statearr_29045_29067[(1)] = (2));


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
});})(c__15056__auto___29053,out))
;
return ((function (switch__15000__auto__,c__15056__auto___29053,out){
return (function() {
var state_machine__15001__auto__ = null;
var state_machine__15001__auto____0 = (function (){
var statearr_29049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29049[(0)] = state_machine__15001__auto__);

(statearr_29049[(1)] = (1));

return statearr_29049;
});
var state_machine__15001__auto____1 = (function (state_29023){
while(true){
var ret_value__15002__auto__ = (function (){try{while(true){
var result__15003__auto__ = switch__15000__auto__.call(null,state_29023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15003__auto__;
}
break;
}
}catch (e29050){if((e29050 instanceof Object)){
var ex__15004__auto__ = e29050;
var statearr_29051_29068 = state_29023;
(statearr_29051_29068[(5)] = ex__15004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29069 = state_29023;
state_29023 = G__29069;
continue;
} else {
return ret_value__15002__auto__;
}
break;
}
});
state_machine__15001__auto__ = function(state_29023){
switch(arguments.length){
case 0:
return state_machine__15001__auto____0.call(this);
case 1:
return state_machine__15001__auto____1.call(this,state_29023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15001__auto____0;
state_machine__15001__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15001__auto____1;
return state_machine__15001__auto__;
})()
;})(switch__15000__auto__,c__15056__auto___29053,out))
})();
var state__15058__auto__ = (function (){var statearr_29052 = f__15057__auto__.call(null);
(statearr_29052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15056__auto___29053);

return statearr_29052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15058__auto__);
});})(c__15056__auto___29053,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map?rel=1422744172396