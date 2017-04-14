!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports["td-idf"]=factory():root["td-idf"]=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){module.exports=__webpack_require__(43)},function(module,exports,__webpack_require__){var store=__webpack_require__(37)("wks"),uid=__webpack_require__(25),Symbol=__webpack_require__(4).Symbol,USE_SYMBOL="function"==typeof Symbol,$exports=module.exports=function(name){return store[name]||(store[name]=USE_SYMBOL&&Symbol[name]||(USE_SYMBOL?Symbol:uid)("Symbol."+name))};$exports.store=store},function(module,exports,__webpack_require__){var anObject=__webpack_require__(8),IE8_DOM_DEFINE=__webpack_require__(65),toPrimitive=__webpack_require__(78),dP=Object.defineProperty;exports.f=__webpack_require__(3)?Object.defineProperty:function(O,P,Attributes){if(anObject(O),P=toPrimitive(P,!0),anObject(Attributes),IE8_DOM_DEFINE)try{return dP(O,P,Attributes)}catch(e){}if("get"in Attributes||"set"in Attributes)throw TypeError("Accessors not supported!");return"value"in Attributes&&(O[P]=Attributes.value),O}},function(module,exports,__webpack_require__){module.exports=!__webpack_require__(14)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(module,exports){var global=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=global)},function(module,exports,__webpack_require__){var dP=__webpack_require__(2),createDesc=__webpack_require__(19);module.exports=__webpack_require__(3)?function(object,key,value){return dP.f(object,key,createDesc(1,value))}:function(object,key,value){return object[key]=value,object}},function(module,exports){var core=module.exports={version:"2.4.0"};"number"==typeof __e&&(__e=core)},function(module,exports){module.exports=function(it){return"object"==typeof it?null!==it:"function"==typeof it}},function(module,exports,__webpack_require__){var isObject=__webpack_require__(7);module.exports=function(it){if(!isObject(it))throw TypeError(it+" is not an object!");return it}},function(module,exports,__webpack_require__){var aFunction=__webpack_require__(53);module.exports=function(fn,that,length){if(aFunction(fn),void 0===that)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}},function(module,exports,__webpack_require__){var global=__webpack_require__(4),core=__webpack_require__(6),ctx=__webpack_require__(9),hide=__webpack_require__(5),PROTOTYPE="prototype",$export=function(type,name,source){var key,own,out,IS_FORCED=type&$export.F,IS_GLOBAL=type&$export.G,IS_STATIC=type&$export.S,IS_PROTO=type&$export.P,IS_BIND=type&$export.B,IS_WRAP=type&$export.W,exports=IS_GLOBAL?core:core[name]||(core[name]={}),expProto=exports[PROTOTYPE],target=IS_GLOBAL?global:IS_STATIC?global[name]:(global[name]||{})[PROTOTYPE];IS_GLOBAL&&(source=name);for(key in source)own=!IS_FORCED&&target&&void 0!==target[key],own&&key in exports||(out=own?target[key]:source[key],exports[key]=IS_GLOBAL&&"function"!=typeof target[key]?source[key]:IS_BIND&&own?ctx(out,global):IS_WRAP&&target[key]==out?function(C){var F=function(a,b,c){if(this instanceof C){switch(arguments.length){case 0:return new C;case 1:return new C(a);case 2:return new C(a,b)}return new C(a,b,c)}return C.apply(this,arguments)};return F[PROTOTYPE]=C[PROTOTYPE],F}(out):IS_PROTO&&"function"==typeof out?ctx(Function.call,out):out,IS_PROTO&&((exports.virtual||(exports.virtual={}))[key]=out,type&$export.R&&expProto&&!expProto[key]&&hide(expProto,key,out)))};$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128,module.exports=$export},function(module,exports){var hasOwnProperty={}.hasOwnProperty;module.exports=function(it,key){return hasOwnProperty.call(it,key)}},function(module,exports){module.exports={}},function(module,exports){module.exports=function(it){if(void 0==it)throw TypeError("Can't call method on  "+it);return it}},function(module,exports){module.exports=function(exec){try{return!!exec()}catch(e){return!0}}},function(module,exports,__webpack_require__){var toInteger=__webpack_require__(22),min=Math.min;module.exports=function(it){return it>0?min(toInteger(it),9007199254740991):0}},function(module,exports){var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1)}},function(module,exports,__webpack_require__){var ctx=__webpack_require__(9),call=__webpack_require__(32),isArrayIter=__webpack_require__(31),anObject=__webpack_require__(8),toLength=__webpack_require__(15),getIterFn=__webpack_require__(38),BREAK={},RETURN={},exports=module.exports=function(iterable,entries,fn,that,ITERATOR){var length,step,iterator,result,iterFn=ITERATOR?function(){return iterable}:getIterFn(iterable),f=ctx(fn,that,entries?2:1),index=0;if("function"!=typeof iterFn)throw TypeError(iterable+" is not iterable!");if(isArrayIter(iterFn)){for(length=toLength(iterable.length);length>index;index++)if(result=entries?f(anObject(step=iterable[index])[0],step[1]):f(iterable[index]),result===BREAK||result===RETURN)return result}else for(iterator=iterFn.call(iterable);!(step=iterator.next()).done;)if(result=call(iterator,f,step.value,entries),result===BREAK||result===RETURN)return result};exports.BREAK=BREAK,exports.RETURN=RETURN},function(module,exports,__webpack_require__){"use strict";var LIBRARY=__webpack_require__(69),$export=__webpack_require__(10),redefine=__webpack_require__(74),hide=__webpack_require__(5),has=__webpack_require__(11),Iterators=__webpack_require__(12),$iterCreate=__webpack_require__(67),setToStringTag=__webpack_require__(20),getPrototypeOf=__webpack_require__(71),ITERATOR=__webpack_require__(1)("iterator"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",returnThis=function(){return this};module.exports=function(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCED){$iterCreate(Constructor,NAME,next);var methods,key,IteratorPrototype,getMethod=function(kind){if(!BUGGY&&kind in proto)return proto[kind];switch(kind){case KEYS:return function(){return new Constructor(this,kind)};case VALUES:return function(){return new Constructor(this,kind)}}return function(){return new Constructor(this,kind)}},TAG=NAME+" Iterator",DEF_VALUES=DEFAULT==VALUES,VALUES_BUG=!1,proto=Base.prototype,$native=proto[ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT],$default=$native||getMethod(DEFAULT),$entries=DEFAULT?DEF_VALUES?getMethod("entries"):$default:void 0,$anyNative="Array"==NAME?proto.entries||$native:$native;if($anyNative&&(IteratorPrototype=getPrototypeOf($anyNative.call(new Base)),IteratorPrototype!==Object.prototype&&(setToStringTag(IteratorPrototype,TAG,!0),LIBRARY||has(IteratorPrototype,ITERATOR)||hide(IteratorPrototype,ITERATOR,returnThis))),DEF_VALUES&&$native&&$native.name!==VALUES&&(VALUES_BUG=!0,$default=function(){return $native.call(this)}),LIBRARY&&!FORCED||!BUGGY&&!VALUES_BUG&&proto[ITERATOR]||hide(proto,ITERATOR,$default),Iterators[NAME]=$default,Iterators[TAG]=returnThis,DEFAULT)if(methods={values:DEF_VALUES?$default:getMethod(VALUES),keys:IS_SET?$default:getMethod(KEYS),entries:$entries},FORCED)for(key in methods)key in proto||redefine(proto,key,methods[key]);else $export($export.P+$export.F*(BUGGY||VALUES_BUG),NAME,methods);return methods}},function(module,exports){module.exports=function(bitmap,value){return{enumerable:!(1&bitmap),configurable:!(2&bitmap),writable:!(4&bitmap),value:value}}},function(module,exports,__webpack_require__){var def=__webpack_require__(2).f,has=__webpack_require__(11),TAG=__webpack_require__(1)("toStringTag");module.exports=function(it,tag,stat){it&&!has(it=stat?it:it.prototype,TAG)&&def(it,TAG,{configurable:!0,value:tag})}},function(module,exports,__webpack_require__){var shared=__webpack_require__(37)("keys"),uid=__webpack_require__(25);module.exports=function(key){return shared[key]||(shared[key]=uid(key))}},function(module,exports){var ceil=Math.ceil,floor=Math.floor;module.exports=function(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it)}},function(module,exports,__webpack_require__){var IObject=__webpack_require__(30),defined=__webpack_require__(13);module.exports=function(it){return IObject(defined(it))}},function(module,exports,__webpack_require__){var defined=__webpack_require__(13);module.exports=function(it){return Object(defined(it))}},function(module,exports){var id=0,px=Math.random();module.exports=function(key){return"Symbol(".concat(void 0===key?"":key,")_",(++id+px).toString(36))}},function(module,exports){module.exports=function(it,Constructor,name,forbiddenField){if(!(it instanceof Constructor)||void 0!==forbiddenField&&forbiddenField in it)throw TypeError(name+": incorrect invocation!");return it}},function(module,exports,__webpack_require__){var cof=__webpack_require__(16),TAG=__webpack_require__(1)("toStringTag"),ARG="Arguments"==cof(function(){return arguments}()),tryGet=function(it,key){try{return it[key]}catch(e){}};module.exports=function(it){var O,T,B;return void 0===it?"Undefined":null===it?"Null":"string"==typeof(T=tryGet(O=Object(it),TAG))?T:ARG?cof(O):"Object"==(B=cof(O))&&"function"==typeof O.callee?"Arguments":B}},function(module,exports,__webpack_require__){var isObject=__webpack_require__(7),document=__webpack_require__(4).document,is=isObject(document)&&isObject(document.createElement);module.exports=function(it){return is?document.createElement(it):{}}},function(module,exports){module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(module,exports,__webpack_require__){var cof=__webpack_require__(16);module.exports=Object("z").propertyIsEnumerable(0)?Object:function(it){return"String"==cof(it)?it.split(""):Object(it)}},function(module,exports,__webpack_require__){var Iterators=__webpack_require__(12),ITERATOR=__webpack_require__(1)("iterator"),ArrayProto=Array.prototype;module.exports=function(it){return void 0!==it&&(Iterators.Array===it||ArrayProto[ITERATOR]===it)}},function(module,exports,__webpack_require__){var anObject=__webpack_require__(8);module.exports=function(iterator,fn,value,entries){try{return entries?fn(anObject(value)[0],value[1]):fn(value)}catch(e){var ret=iterator.return;throw void 0!==ret&&anObject(ret.call(iterator)),e}}},function(module,exports){module.exports=function(done,value){return{value:value,done:!!done}}},function(module,exports,__webpack_require__){var META=__webpack_require__(25)("meta"),isObject=__webpack_require__(7),has=__webpack_require__(11),setDesc=__webpack_require__(2).f,id=0,isExtensible=Object.isExtensible||function(){return!0},FREEZE=!__webpack_require__(14)(function(){return isExtensible(Object.preventExtensions({}))}),setMeta=function(it){setDesc(it,META,{value:{i:"O"+ ++id,w:{}}})},fastKey=function(it,create){if(!isObject(it))return"symbol"==typeof it?it:("string"==typeof it?"S":"P")+it;if(!has(it,META)){if(!isExtensible(it))return"F";if(!create)return"E";setMeta(it)}return it[META].i},getWeak=function(it,create){if(!has(it,META)){if(!isExtensible(it))return!0;if(!create)return!1;setMeta(it)}return it[META].w},onFreeze=function(it){return FREEZE&&meta.NEED&&isExtensible(it)&&!has(it,META)&&setMeta(it),it},meta=module.exports={KEY:META,NEED:!1,fastKey:fastKey,getWeak:getWeak,onFreeze:onFreeze}},function(module,exports,__webpack_require__){var anObject=__webpack_require__(8),dPs=__webpack_require__(70),enumBugKeys=__webpack_require__(29),IE_PROTO=__webpack_require__(21)("IE_PROTO"),Empty=function(){},PROTOTYPE="prototype",createDict=function(){var iframeDocument,iframe=__webpack_require__(28)("iframe"),i=enumBugKeys.length,lt="<",gt=">";for(iframe.style.display="none",__webpack_require__(64).appendChild(iframe),iframe.src="javascript:",iframeDocument=iframe.contentWindow.document,iframeDocument.open(),iframeDocument.write(lt+"script"+gt+"document.F=Object"+lt+"/script"+gt),iframeDocument.close(),createDict=iframeDocument.F;i--;)delete createDict[PROTOTYPE][enumBugKeys[i]];return createDict()};module.exports=Object.create||function(O,Properties){var result;return null!==O?(Empty[PROTOTYPE]=anObject(O),result=new Empty,Empty[PROTOTYPE]=null,result[IE_PROTO]=O):result=createDict(),void 0===Properties?result:dPs(result,Properties)}},function(module,exports,__webpack_require__){var hide=__webpack_require__(5);module.exports=function(target,src,safe){for(var key in src)safe&&target[key]?target[key]=src[key]:hide(target,key,src[key]);return target}},function(module,exports,__webpack_require__){var global=__webpack_require__(4),SHARED="__core-js_shared__",store=global[SHARED]||(global[SHARED]={});module.exports=function(key){return store[key]||(store[key]={})}},function(module,exports,__webpack_require__){var classof=__webpack_require__(27),ITERATOR=__webpack_require__(1)("iterator"),Iterators=__webpack_require__(12);module.exports=__webpack_require__(6).getIteratorMethod=function(it){if(void 0!=it)return it[ITERATOR]||it["@@iterator"]||Iterators[classof(it)]}},function(module,exports,__webpack_require__){"use strict";var $at=__webpack_require__(76)(!0);__webpack_require__(18)(String,"String",function(iterated){this._t=String(iterated),this._i=0},function(){var point,O=this._t,index=this._i;return index>=O.length?{value:void 0,done:!0}:(point=$at(O,index),this._i+=point.length,{value:point,done:!1})})},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _classCallCheck2=__webpack_require__(47),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(48),_createClass3=_interopRequireDefault(_createClass2),TextMapper=function(){function TextMapper(){(0,_classCallCheck3.default)(this,TextMapper);for(var _len=arguments.length,spliters=Array(_len),_key=0;_key<_len;_key++)spliters[_key]=arguments[_key];this.spliters=spliters,this.documents=[]}return(0,_createClass3.default)(TextMapper,[{key:"splitDocuments",value:function(spliter){var newDocuments=[];this.documents.forEach(function(doc){var splitDocument=doc.split(spliter);splitDocument.forEach(function(doc){/^[\s]{0,}$/.test(doc)||newDocuments.push(doc)})}),this.documents=newDocuments}},{key:"generateDocuments",value:function(){var _this=this;return this.spliters.forEach(function(spliter){_this.splitDocuments(spliter)}),this.documents}},{key:"feedDocuments",value:function(){for(var _len2=arguments.length,documents=Array(_len2),_key2=0;_key2<_len2;_key2++)documents[_key2]=arguments[_key2];this.documents=documents}}]),TextMapper}();module.exports={TextMapper:TextMapper}},function(module,exports){"use strict";function unaryidf(nrDocs,nrOccurances){return 1}function idf(nrDocs,nrOccurances){return Math.log(nrDocs/nrOccurances)}function idfSmooth(nrDocs,nrOccurances){return Math.log(1+nrDocs/nrOccurances)}function probabilisticidf(nrDocs,nrOccurances){return Math.log((nrDocs-nrOccurances)/(1+nrOccurances))}function binarytf(termFrequency){return termFrequency>0?1:0}function rawtf(termFrequency){return termFrequency}function logNormalizationtf(termFrequency){return 1+Math.log(termFrequency)}module.exports={unaryidf:unaryidf,idf:idf,idfSmooth:idfSmooth,probabilisticidf:probabilisticidf,binarytf:binarytf,rawtf:rawtf,logNormalizationtf:logNormalizationtf}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function computeWordsDocumentsFrequency(documents){var documentMaps=documents.map(function(document){var documentMap=new _map2.default;return document.split(" ").forEach(function(rawWord){var word=purgeWord(rawWord),nrOfOccurances=documentMap.get(word);void 0===nrOfOccurances?documentMap.set(word,1):documentMap.set(word,++nrOfOccurances)}),documentMap});return documentMaps}function computeWordOccuranceFrequency(documentsWordFrequencyMaps){var occurancesMap=new _map2.default;return documentsWordFrequencyMaps.forEach(function(documentMap){documentMap.forEach(function(nrOccurancesInDoc,word){var nrOfOccurances=occurancesMap.get(word);void 0===nrOfOccurances?occurancesMap.set(word,1):occurancesMap.set(word,++nrOfOccurances)})}),occurancesMap}function computeWordsWeightMap(occurancesMap,nrOfDocuments,inverseDocumentFrequencyFunction){var weightMap=new _map2.default;return occurancesMap.forEach(function(nrOfOccurances,word){weightMap.set(word,inverseDocumentFrequencyFunction(nrOfDocuments,nrOfOccurances))}),weightMap}function computeDocumentWordImportanceMap(documentMaps,weightMap,textFrequencyWeightFunction){var importanceMaps=[];return documentMaps.forEach(function(documentMap){var importanceMap=new _map2.default;documentMap.forEach(function(nrOfOccurances,word){var importance=textFrequencyWeightFunction(nrOfOccurances)*weightMap.get(word);importanceMap.set(word,importance)}),importanceMaps.push(importanceMap)}),importanceMaps}function purgeWord(str){return str=str.replace(" ",""),str=str.replace(",",""),str=str.toLowerCase()}var _map=__webpack_require__(45),_map2=_interopRequireDefault(_map);module.exports={computeWordsDocumentsFrequency:computeWordsDocumentsFrequency,computeWordOccuranceFrequency:computeWordOccuranceFrequency,computeWordsWeightMap:computeWordsWeightMap,computeDocumentWordImportanceMap:computeDocumentWordImportanceMap}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function makeImportanceMap(){for(var textMapper=new(Function.prototype.bind.apply(TextMapper,[null].concat((0,_toConsumableArray3.default)(configurations.separators)))),_len=arguments.length,inText=Array(_len),_key=0;_key<_len;_key++)inText[_key]=arguments[_key];textMapper.feedDocuments.apply(textMapper,inText.concat((0,_toConsumableArray3.default)(configurations.trainingDocuments)));var documentsTrain=textMapper.generateDocuments();textMapper.feedDocuments.apply(textMapper,inText);var documents=textMapper.generateDocuments(),wordsMapsTrain=tdIdf.computeWordsDocumentsFrequency(documentsTrain),wordsOccuranceMapTrain=tdIdf.computeWordOccuranceFrequency(wordsMapsTrain),weightsMap=tdIdf.computeWordsWeightMap(wordsOccuranceMapTrain,documents.length,choseIdf()),wordsMaps=tdIdf.computeWordsDocumentsFrequency(documents);return tdIdf.computeDocumentWordImportanceMap(wordsMaps,weightsMap,choseTf())}function choseTf(){var rtf=void 0;return rtf="binary"==configurations.tfFunction?algs.binarytf:"logNormalization"==configurations.tfFunction?algs.logNormalizationtf:"raw"==configurations.tfFunction?algs.rawtf:algs.rawtf}function choseIdf(){var rtf=void 0;return rtf="idf"==configurations.idfFunction?algs.idf:"unary"==configurations.idfFunction?algs.unaryidf:"smooth"==configurations.idfFunction?algs.idfSmooth:"probabilistic"==configurations.idfFunction?algs.probabilisticidf:algs.idf}var _toConsumableArray2=__webpack_require__(49),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),TextMapper=__webpack_require__(40).TextMapper,tdIdf=__webpack_require__(42),algs=__webpack_require__(41),configurations={trainingDocuments:[""],tfFunction:"raw",idfFunction:"idf",separators:["\n","."]};module.exports={configurations:configurations,makeImportanceMap:makeImportanceMap}},function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(50),__esModule:!0}},function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(51),__esModule:!0}},function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(52),__esModule:!0}},function(module,exports){"use strict";exports.__esModule=!0,exports.default=function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.__esModule=!0;var _defineProperty=__webpack_require__(46),_defineProperty2=_interopRequireDefault(_defineProperty);exports.default=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),(0,_defineProperty2.default)(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}()},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.__esModule=!0;var _from=__webpack_require__(44),_from2=_interopRequireDefault(_from);exports.default=function(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return(0,_from2.default)(arr)}},function(module,exports,__webpack_require__){__webpack_require__(39),__webpack_require__(79),module.exports=__webpack_require__(6).Array.from},function(module,exports,__webpack_require__){__webpack_require__(83),__webpack_require__(39),__webpack_require__(85),__webpack_require__(81),__webpack_require__(84),module.exports=__webpack_require__(6).Map},function(module,exports,__webpack_require__){__webpack_require__(82);var $Object=__webpack_require__(6).Object;module.exports=function(it,key,desc){return $Object.defineProperty(it,key,desc)}},function(module,exports){module.exports=function(it){if("function"!=typeof it)throw TypeError(it+" is not a function!");return it}},function(module,exports){module.exports=function(){}},function(module,exports,__webpack_require__){var forOf=__webpack_require__(17);module.exports=function(iter,ITERATOR){var result=[];return forOf(iter,!1,result.push,result,ITERATOR),result}},function(module,exports,__webpack_require__){var toIObject=__webpack_require__(23),toLength=__webpack_require__(15),toIndex=__webpack_require__(77);module.exports=function(IS_INCLUDES){return function($this,el,fromIndex){var value,O=toIObject($this),length=toLength(O.length),index=toIndex(fromIndex,length);if(IS_INCLUDES&&el!=el){for(;length>index;)if(value=O[index++],value!=value)return!0}else for(;length>index;index++)if((IS_INCLUDES||index in O)&&O[index]===el)return IS_INCLUDES||index||0;return!IS_INCLUDES&&-1}}},function(module,exports,__webpack_require__){var ctx=__webpack_require__(9),IObject=__webpack_require__(30),toObject=__webpack_require__(24),toLength=__webpack_require__(15),asc=__webpack_require__(59);module.exports=function(TYPE,$create){var IS_MAP=1==TYPE,IS_FILTER=2==TYPE,IS_SOME=3==TYPE,IS_EVERY=4==TYPE,IS_FIND_INDEX=6==TYPE,NO_HOLES=5==TYPE||IS_FIND_INDEX,create=$create||asc;return function($this,callbackfn,that){for(var val,res,O=toObject($this),self=IObject(O),f=ctx(callbackfn,that,3),length=toLength(self.length),index=0,result=IS_MAP?create($this,length):IS_FILTER?create($this,0):void 0;length>index;index++)if((NO_HOLES||index in self)&&(val=self[index],res=f(val,index,O),TYPE))if(IS_MAP)result[index]=res;else if(res)switch(TYPE){case 3:return!0;case 5:return val;case 6:return index;case 2:result.push(val)}else if(IS_EVERY)return!1;return IS_FIND_INDEX?-1:IS_SOME||IS_EVERY?IS_EVERY:result}}},function(module,exports,__webpack_require__){var isObject=__webpack_require__(7),isArray=__webpack_require__(66),SPECIES=__webpack_require__(1)("species");module.exports=function(original){var C;return isArray(original)&&(C=original.constructor,"function"!=typeof C||C!==Array&&!isArray(C.prototype)||(C=void 0),isObject(C)&&(C=C[SPECIES],null===C&&(C=void 0))),void 0===C?Array:C}},function(module,exports,__webpack_require__){var speciesConstructor=__webpack_require__(58);module.exports=function(original,length){return new(speciesConstructor(original))(length)}},function(module,exports,__webpack_require__){"use strict";var dP=__webpack_require__(2).f,create=__webpack_require__(35),redefineAll=__webpack_require__(36),ctx=__webpack_require__(9),anInstance=__webpack_require__(26),defined=__webpack_require__(13),forOf=__webpack_require__(17),$iterDefine=__webpack_require__(18),step=__webpack_require__(33),setSpecies=__webpack_require__(75),DESCRIPTORS=__webpack_require__(3),fastKey=__webpack_require__(34).fastKey,SIZE=DESCRIPTORS?"_s":"size",getEntry=function(that,key){var entry,index=fastKey(key);if("F"!==index)return that._i[index];for(entry=that._f;entry;entry=entry.n)if(entry.k==key)return entry};module.exports={getConstructor:function(wrapper,NAME,IS_MAP,ADDER){var C=wrapper(function(that,iterable){anInstance(that,C,NAME,"_i"),that._i=create(null),that._f=void 0,that._l=void 0,that[SIZE]=0,void 0!=iterable&&forOf(iterable,IS_MAP,that[ADDER],that)});return redefineAll(C.prototype,{clear:function(){for(var that=this,data=that._i,entry=that._f;entry;entry=entry.n)entry.r=!0,entry.p&&(entry.p=entry.p.n=void 0),delete data[entry.i];that._f=that._l=void 0,that[SIZE]=0},delete:function(key){var that=this,entry=getEntry(that,key);if(entry){var next=entry.n,prev=entry.p;delete that._i[entry.i],entry.r=!0,prev&&(prev.n=next),next&&(next.p=prev),that._f==entry&&(that._f=next),that._l==entry&&(that._l=prev),that[SIZE]--}return!!entry},forEach:function(callbackfn){anInstance(this,C,"forEach");for(var entry,f=ctx(callbackfn,arguments.length>1?arguments[1]:void 0,3);entry=entry?entry.n:this._f;)for(f(entry.v,entry.k,this);entry&&entry.r;)entry=entry.p},has:function(key){return!!getEntry(this,key)}}),DESCRIPTORS&&dP(C.prototype,"size",{get:function(){return defined(this[SIZE])}}),C},def:function(that,key,value){var prev,index,entry=getEntry(that,key);return entry?entry.v=value:(that._l=entry={i:index=fastKey(key,!0),k:key,v:value,p:prev=that._l,n:void 0,r:!1},that._f||(that._f=entry),prev&&(prev.n=entry),that[SIZE]++,"F"!==index&&(that._i[index]=entry)),that},getEntry:getEntry,setStrong:function(C,NAME,IS_MAP){$iterDefine(C,NAME,function(iterated,kind){this._t=iterated,this._k=kind,this._l=void 0},function(){for(var that=this,kind=that._k,entry=that._l;entry&&entry.r;)entry=entry.p;return that._t&&(that._l=entry=entry?entry.n:that._t._f)?"keys"==kind?step(0,entry.k):"values"==kind?step(0,entry.v):step(0,[entry.k,entry.v]):(that._t=void 0,step(1))},IS_MAP?"entries":"values",!IS_MAP,!0),setSpecies(NAME)}}},function(module,exports,__webpack_require__){var classof=__webpack_require__(27),from=__webpack_require__(55);module.exports=function(NAME){return function(){if(classof(this)!=NAME)throw TypeError(NAME+"#toJSON isn't generic");return from(this)}}},function(module,exports,__webpack_require__){"use strict";var global=__webpack_require__(4),$export=__webpack_require__(10),meta=__webpack_require__(34),fails=__webpack_require__(14),hide=__webpack_require__(5),redefineAll=__webpack_require__(36),forOf=__webpack_require__(17),anInstance=__webpack_require__(26),isObject=__webpack_require__(7),setToStringTag=__webpack_require__(20),dP=__webpack_require__(2).f,each=__webpack_require__(57)(0),DESCRIPTORS=__webpack_require__(3);module.exports=function(NAME,wrapper,methods,common,IS_MAP,IS_WEAK){var Base=global[NAME],C=Base,ADDER=IS_MAP?"set":"add",proto=C&&C.prototype,O={};return DESCRIPTORS&&"function"==typeof C&&(IS_WEAK||proto.forEach&&!fails(function(){(new C).entries().next()}))?(C=wrapper(function(target,iterable){anInstance(target,C,NAME,"_c"),target._c=new Base,void 0!=iterable&&forOf(iterable,IS_MAP,target[ADDER],target)}),each("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(KEY){var IS_ADDER="add"==KEY||"set"==KEY;KEY in proto&&(!IS_WEAK||"clear"!=KEY)&&hide(C.prototype,KEY,function(a,b){if(anInstance(this,C,KEY),!IS_ADDER&&IS_WEAK&&!isObject(a))return"get"==KEY&&void 0;var result=this._c[KEY](0===a?0:a,b);return IS_ADDER?this:result})}),"size"in proto&&dP(C.prototype,"size",{get:function(){return this._c.size}})):(C=common.getConstructor(wrapper,NAME,IS_MAP,ADDER),redefineAll(C.prototype,methods),meta.NEED=!0),setToStringTag(C,NAME),O[NAME]=C,$export($export.G+$export.W+$export.F,O),IS_WEAK||common.setStrong(C,NAME,IS_MAP),C}},function(module,exports,__webpack_require__){"use strict";var $defineProperty=__webpack_require__(2),createDesc=__webpack_require__(19);module.exports=function(object,index,value){index in object?$defineProperty.f(object,index,createDesc(0,value)):object[index]=value}},function(module,exports,__webpack_require__){module.exports=__webpack_require__(4).document&&document.documentElement},function(module,exports,__webpack_require__){module.exports=!__webpack_require__(3)&&!__webpack_require__(14)(function(){return 7!=Object.defineProperty(__webpack_require__(28)("div"),"a",{get:function(){return 7}}).a})},function(module,exports,__webpack_require__){var cof=__webpack_require__(16);module.exports=Array.isArray||function(arg){return"Array"==cof(arg)}},function(module,exports,__webpack_require__){"use strict";var create=__webpack_require__(35),descriptor=__webpack_require__(19),setToStringTag=__webpack_require__(20),IteratorPrototype={};__webpack_require__(5)(IteratorPrototype,__webpack_require__(1)("iterator"),function(){return this}),module.exports=function(Constructor,NAME,next){Constructor.prototype=create(IteratorPrototype,{next:descriptor(1,next)}),setToStringTag(Constructor,NAME+" Iterator")}},function(module,exports,__webpack_require__){var ITERATOR=__webpack_require__(1)("iterator"),SAFE_CLOSING=!1;try{var riter=[7][ITERATOR]();riter.return=function(){SAFE_CLOSING=!0},Array.from(riter,function(){throw 2})}catch(e){}module.exports=function(exec,skipClosing){if(!skipClosing&&!SAFE_CLOSING)return!1;var safe=!1;try{var arr=[7],iter=arr[ITERATOR]();iter.next=function(){return{done:safe=!0}},arr[ITERATOR]=function(){return iter},exec(arr)}catch(e){}return safe}},function(module,exports){module.exports=!0},function(module,exports,__webpack_require__){var dP=__webpack_require__(2),anObject=__webpack_require__(8),getKeys=__webpack_require__(73);module.exports=__webpack_require__(3)?Object.defineProperties:function(O,Properties){anObject(O);for(var P,keys=getKeys(Properties),length=keys.length,i=0;length>i;)dP.f(O,P=keys[i++],Properties[P]);return O}},function(module,exports,__webpack_require__){var has=__webpack_require__(11),toObject=__webpack_require__(24),IE_PROTO=__webpack_require__(21)("IE_PROTO"),ObjectProto=Object.prototype;module.exports=Object.getPrototypeOf||function(O){return O=toObject(O),has(O,IE_PROTO)?O[IE_PROTO]:"function"==typeof O.constructor&&O instanceof O.constructor?O.constructor.prototype:O instanceof Object?ObjectProto:null}},function(module,exports,__webpack_require__){var has=__webpack_require__(11),toIObject=__webpack_require__(23),arrayIndexOf=__webpack_require__(56)(!1),IE_PROTO=__webpack_require__(21)("IE_PROTO");module.exports=function(object,names){var key,O=toIObject(object),i=0,result=[];for(key in O)key!=IE_PROTO&&has(O,key)&&result.push(key);for(;names.length>i;)has(O,key=names[i++])&&(~arrayIndexOf(result,key)||result.push(key));return result}},function(module,exports,__webpack_require__){var $keys=__webpack_require__(72),enumBugKeys=__webpack_require__(29);
module.exports=Object.keys||function(O){return $keys(O,enumBugKeys)}},function(module,exports,__webpack_require__){module.exports=__webpack_require__(5)},function(module,exports,__webpack_require__){"use strict";var global=__webpack_require__(4),core=__webpack_require__(6),dP=__webpack_require__(2),DESCRIPTORS=__webpack_require__(3),SPECIES=__webpack_require__(1)("species");module.exports=function(KEY){var C="function"==typeof core[KEY]?core[KEY]:global[KEY];DESCRIPTORS&&C&&!C[SPECIES]&&dP.f(C,SPECIES,{configurable:!0,get:function(){return this}})}},function(module,exports,__webpack_require__){var toInteger=__webpack_require__(22),defined=__webpack_require__(13);module.exports=function(TO_STRING){return function(that,pos){var a,b,s=String(defined(that)),i=toInteger(pos),l=s.length;return i<0||i>=l?TO_STRING?"":void 0:(a=s.charCodeAt(i),a<55296||a>56319||i+1===l||(b=s.charCodeAt(i+1))<56320||b>57343?TO_STRING?s.charAt(i):a:TO_STRING?s.slice(i,i+2):(a-55296<<10)+(b-56320)+65536)}}},function(module,exports,__webpack_require__){var toInteger=__webpack_require__(22),max=Math.max,min=Math.min;module.exports=function(index,length){return index=toInteger(index),index<0?max(index+length,0):min(index,length)}},function(module,exports,__webpack_require__){var isObject=__webpack_require__(7);module.exports=function(it,S){if(!isObject(it))return it;var fn,val;if(S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;if("function"==typeof(fn=it.valueOf)&&!isObject(val=fn.call(it)))return val;if(!S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value")}},function(module,exports,__webpack_require__){"use strict";var ctx=__webpack_require__(9),$export=__webpack_require__(10),toObject=__webpack_require__(24),call=__webpack_require__(32),isArrayIter=__webpack_require__(31),toLength=__webpack_require__(15),createProperty=__webpack_require__(63),getIterFn=__webpack_require__(38);$export($export.S+$export.F*!__webpack_require__(68)(function(iter){Array.from(iter)}),"Array",{from:function(arrayLike){var length,result,step,iterator,O=toObject(arrayLike),C="function"==typeof this?this:Array,aLen=arguments.length,mapfn=aLen>1?arguments[1]:void 0,mapping=void 0!==mapfn,index=0,iterFn=getIterFn(O);if(mapping&&(mapfn=ctx(mapfn,aLen>2?arguments[2]:void 0,2)),void 0==iterFn||C==Array&&isArrayIter(iterFn))for(length=toLength(O.length),result=new C(length);length>index;index++)createProperty(result,index,mapping?mapfn(O[index],index):O[index]);else for(iterator=iterFn.call(O),result=new C;!(step=iterator.next()).done;index++)createProperty(result,index,mapping?call(iterator,mapfn,[step.value,index],!0):step.value);return result.length=index,result}})},function(module,exports,__webpack_require__){"use strict";var addToUnscopables=__webpack_require__(54),step=__webpack_require__(33),Iterators=__webpack_require__(12),toIObject=__webpack_require__(23);module.exports=__webpack_require__(18)(Array,"Array",function(iterated,kind){this._t=toIObject(iterated),this._i=0,this._k=kind},function(){var O=this._t,kind=this._k,index=this._i++;return!O||index>=O.length?(this._t=void 0,step(1)):"keys"==kind?step(0,index):"values"==kind?step(0,O[index]):step(0,[index,O[index]])},"values"),Iterators.Arguments=Iterators.Array,addToUnscopables("keys"),addToUnscopables("values"),addToUnscopables("entries")},function(module,exports,__webpack_require__){"use strict";var strong=__webpack_require__(60);module.exports=__webpack_require__(62)("Map",function(get){return function(){return get(this,arguments.length>0?arguments[0]:void 0)}},{get:function(key){var entry=strong.getEntry(this,key);return entry&&entry.v},set:function(key,value){return strong.def(this,0===key?0:key,value)}},strong,!0)},function(module,exports,__webpack_require__){var $export=__webpack_require__(10);$export($export.S+$export.F*!__webpack_require__(3),"Object",{defineProperty:__webpack_require__(2).f})},function(module,exports){},function(module,exports,__webpack_require__){var $export=__webpack_require__(10);$export($export.P+$export.R,"Map",{toJSON:__webpack_require__(61)("Map")})},function(module,exports,__webpack_require__){__webpack_require__(80);for(var global=__webpack_require__(4),hide=__webpack_require__(5),Iterators=__webpack_require__(12),TO_STRING_TAG=__webpack_require__(1)("toStringTag"),collections=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],i=0;i<5;i++){var NAME=collections[i],Collection=global[NAME],proto=Collection&&Collection.prototype;proto&&!proto[TO_STRING_TAG]&&hide(proto,TO_STRING_TAG,NAME),Iterators[NAME]=Iterators.Array}}])});