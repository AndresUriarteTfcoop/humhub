

var f,makefakes;function wrap(f){return __oni_rt.exseq(arguments,this,'lib/fakesSJS-src.sjs',[1,__oni_rt.Nb(function(){return __oni_rt.Return(function (x,y){var err,val;return __oni_rt.exseq(arguments,this,'lib/fakesSJS-src.sjs',[1,__oni_rt.Suspend(function(__oni_env,resume){return __oni_rt.ex(__oni_rt.Nb(function(){return f(x,y,resume);},8),__oni_env)}, function() {err=arguments[0];val=arguments[1];}),__oni_rt.Nb(function(){if(err){throw err;}return __oni_rt.Return(val);},10)])});},12)])}function dummySJS0(){var inner;return __oni_rt.exseq(arguments,this,'lib/fakesSJS-src.sjs',[1,__oni_rt.Nb(function(){inner=f.dummy(1);return __oni_rt.Return(function (){var err,val;return __oni_rt.exseq(arguments,this,'lib/fakesSJS-src.sjs',[1,__oni_rt.Suspend(function(__oni_env,resume){return __oni_rt.ex(__oni_rt.Nb(function(){return inner(resume);},19),__oni_env)}, function() {err=arguments[0];val=arguments[1];}),__oni_rt.Nb(function(){if(err){throw err;}return __oni_rt.Return(val);},21)])});},17)])}function dummySJS1(){var inner;return __oni_rt.exseq(arguments,this,'lib/fakesSJS-src.sjs',[1,__oni_rt.Nb(function(){inner=f.dummy(2);return __oni_rt.Return(function (x){var err,val;return __oni_rt.exseq(arguments,this,'lib/fakesSJS-src.sjs',[1,__oni_rt.Suspend(function(__oni_env,resume){return __oni_rt.ex(__oni_rt.Nb(function(){return inner(x,resume);},30),__oni_env)}, function() {err=arguments[0];val=arguments[1];}),__oni_rt.Nb(function(){if(err){throw err;}return __oni_rt.Return(val);},32)])});},28)])}function dummySJS(n){if(n === 1){return dummySJS0();}if(n === 2){return dummySJS1();}}function dummytSJS(n){var inner;return __oni_rt.exseq(arguments,this,'lib/fakesSJS-src.sjs',[1,__oni_rt.Nb(function(){inner=f.dummyt(n);return __oni_rt.Return(function (){var args,err,val;return __oni_rt.exseq(arguments,this,'lib/fakesSJS-src.sjs',[1,__oni_rt.Suspend(function(__oni_env,resume){return __oni_rt.ex(__oni_rt.Nb(function(){args=Array.prototype.slice.apply(this.aobj);args.push(resume);inner.apply(this,args);},0),__oni_env)}, function() {err=arguments[0];val=arguments[1];}),__oni_rt.Nb(function(){if(err){throw err;}return __oni_rt.Return(val);},51)])});},44)])}__oni_rt.exseq(this.arguments,this,'lib/fakesSJS-src.sjs',[24,__oni_rt.Sc(3,function(_oniX){return f=_oniX;},__oni_rt.C(function(){return require('./dummy.js')},1)),__oni_rt.Sc(5,function(_oniX){return makefakes=_oniX;},__oni_rt.C(function(){return require('./fakemaker.js')},3)),__oni_rt.Nb(function(){return makefakes(dummySJS,dummytSJS,wrap,global);},56)])
