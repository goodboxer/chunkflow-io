import{_ as di,r as Kn,a as fi,g as mi,b as _i,S as gi}from"./vendor_firebase_app-YLVDrfJD.js";import{L as pi,I as Et,C as yi,F as Ei,n as ot,A as Ti,p as $r,s as Ii,u as Ai,d as Ri,B as wi,k as Ae,D as vi,l as Vi,M as Pi,X as Si,G as Ci,H as Ke,J as bi,K as Ni,W as de,N as Di,S as Wn}from"./vendor_firebase_misc-rlVDSRsL.js";const Hn="@firebase/firestore",Yn="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}G.UNAUTHENTICATED=new G(null),G.GOOGLE_CREDENTIALS=new G("google-credentials-uid"),G.FIRST_PARTY=new G("first-party-uid"),G.MOCK_USER=new G("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ut="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new pi("@firebase/firestore");function St(){return It.logLevel}function g(r,...t){if(It.logLevel<=ot.DEBUG){const e=t.map(_n);It.debug(`Firestore (${Ut}): ${r}`,...e)}}function ut(r,...t){if(It.logLevel<=ot.ERROR){const e=t.map(_n);It.error(`Firestore (${Ut}): ${r}`,...e)}}function kt(r,...t){if(It.logLevel<=ot.WARN){const e=t.map(_n);It.warn(`Firestore (${Ut}): ${r}`,...e)}}function _n(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Qr(r,n,e)}function Qr(r,t,e){let n=`FIRESTORE (${Ut}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw ut(n),new Error(n)}function S(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||Qr(t,s,n)}function A(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends Ei{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ki{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(G.UNAUTHENTICATED)))}shutdown(){}}class xi{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Oi{constructor(t){this.t=t,this.currentUser=G.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){S(this.o===void 0,42304);let n=this.i;const s=u=>this.i!==n?(n=this.i,e(u)):Promise.resolve();let i=new ht;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ht,t.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const u=i;t.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},a=u=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>a(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ht)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((n=>this.i!==t?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(S(typeof n.accessToken=="string",31837,{l:n}),new jr(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return S(t===null||typeof t=="string",2055,{h:t}),new G(t)}}class Mi{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=G.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Li{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Mi(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(G.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Xn{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fi{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,fi(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){S(this.o===void 0,3512);const n=i=>{i.error!=null&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,g("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable((()=>n(i)))};const s=i=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Xn(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(S(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Xn(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Ui(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function v(r,t){return r<t?-1:r>t?1:0}function Ze(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const s=r.charAt(n),i=t.charAt(n);if(s!==i)return We(s)===We(i)?v(s,i):We(s)?1:-1}return v(r.length,t.length)}const qi=55296,Bi=57343;function We(r){const t=r.charCodeAt(0);return t>=qi&&t<=Bi}function xt(r,t,e){return r.length===t.length&&r.every(((n,s)=>e(n,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="__name__";class J{constructor(t,e,n){e===void 0?e=0:e>t.length&&E(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&E(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return J.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof J?t.forEach((n=>{e.push(n)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=J.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return v(t.length,e.length)}static compareSegments(t,e){const n=J.isNumericId(t),s=J.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?J.extractNumericId(t).compare(J.extractNumericId(e)):Ze(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Et.fromString(t.substring(4,t.length-2))}}class b extends J{construct(t,e,n){return new b(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new p(f.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((s=>s.length>0)))}return new b(e)}static emptyPath(){return new b([])}}const zi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends J{construct(t,e,n){return new z(t,e,n)}static isValidIdentifier(t){return zi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Jn}static keyField(){return new z([Jn])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new p(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new p(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new p(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(n+=a,s++):(i(),s++)}if(i(),o)throw new p(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new z(e)}static emptyPath(){return new z([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(t){this.path=t}static fromPath(t){return new y(b.fromString(t))}static fromName(t){return new y(b.fromString(t).popFirst(5))}static empty(){return new y(b.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&b.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return b.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new y(new b(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(r,t,e){if(!e)throw new p(f.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Qi(r,t,e,n){if(t===!0&&n===!0)throw new p(f.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Zn(r){if(!y.isDocumentKey(r))throw new p(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Gr(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function pn(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":E(12329,{type:typeof r})}function Xt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new p(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=pn(r);throw new p(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(r,t){const e={typeString:r};return t&&(e.value=t),e}function ie(r,t){if(!Gr(r))throw new p(f.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const s=t[n].typeString,i="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){e=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){e=`Expected '${n}' field to equal '${i.value}'`;break}}if(e)throw new p(f.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=-62135596800,er=1e6;class C{static now(){return C.fromMillis(Date.now())}static fromDate(t){return C.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*er);return new C(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new p(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new p(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<tr)throw new p(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new p(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/er}_compareTo(t){return this.seconds===t.seconds?v(this.nanoseconds,t.nanoseconds):v(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:C._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(ie(t,C._jsonSchema))return new C(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-tr;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}C._jsonSchemaVersion="firestore/timestamp/1.0",C._jsonSchema={type:O("string",C._jsonSchemaVersion),seconds:O("number"),nanoseconds:O("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{static fromTimestamp(t){return new I(t)}static min(){return new I(new C(0,0))}static max(){return new I(new C(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=-1;function ji(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=I.fromTimestamp(n===1e9?new C(e+1,0):new C(e,n));return new dt(s,y.empty(),t)}function Gi(r){return new dt(r.readTime,r.key,Jt)}class dt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new dt(I.min(),y.empty(),Jt)}static max(){return new dt(I.max(),y.empty(),Jt)}}function Ki(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=y.comparator(r.documentKey,t.documentKey),e!==0?e:v(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(r){if(r.code!==f.FAILED_PRECONDITION||r.message!==Wi)throw r;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&E(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new d(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof d?e:d.resolve(e)}catch(e){return d.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):d.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):d.reject(e)}static resolve(t){return new d(((e,n)=>{e(t)}))}static reject(t){return new d(((e,n)=>{n(t)}))}static waitFor(t){return new d(((e,n)=>{let s=0,i=0,o=!1;t.forEach((a=>{++s,a.next((()=>{++i,o&&i===s&&e()}),(u=>n(u)))})),o=!0,i===s&&e()}))}static or(t){let e=d.resolve(!1);for(const n of t)e=e.next((s=>s?d.resolve(s):n()));return e}static forEach(t,e){const n=[];return t.forEach(((s,i)=>{n.push(e.call(this,s,i))})),this.waitFor(n)}static mapArray(t,e){return new d(((n,s)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;e(t[c]).next((l=>{o[c]=l,++a,a===i&&n(o)}),(l=>s(l)))}}))}static doWhile(t,e){return new d(((n,s)=>{const i=()=>{t()===!0?e().next((()=>{i()}),s):n()};i()}))}}function Yi(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Bt(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>e.writeSequenceNumber(n))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Oe.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=-1;function Me(r){return r==null}function Re(r){return r===0&&1/r==-1/0}function Xi(r){return typeof r=="number"&&Number.isInteger(r)&&!Re(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="";function Ji(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=nr(t)),t=Zi(r.get(e),t);return nr(t)}function Zi(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case Kr:e+="";break;default:e+=i}}return e}function nr(r){return r+Kr+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Rt(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Wr(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t,e){this.comparator=t,this.root=e||B.EMPTY}insert(t,e){return new N(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,B.BLACK,null,null))}remove(t){return new N(this.comparator,this.root.remove(t,this.comparator).copy(null,null,B.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fe(this.root,t,this.comparator,!1)}getReverseIterator(){return new fe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fe(this.root,t,this.comparator,!0)}}class fe{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class B{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??B.RED,this.left=s??B.EMPTY,this.right=i??B.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new B(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return B.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw E(43730,{key:this.key,value:this.value});if(this.right.isRed())throw E(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw E(27949);return t+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1;B.EMPTY=new class{constructor(){this.size=0}get key(){throw E(57766)}get value(){throw E(16141)}get color(){throw E(16727)}get left(){throw E(29726)}get right(){throw E(36894)}copy(t,e,n,s,i){return this}insert(t,e,n){return new B(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.comparator=t,this.data=new N(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new sr(this.data.getIterator())}getIteratorFrom(t){return new sr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((n=>{e=e.add(n)})),e}isEqual(t){if(!(t instanceof F)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new F(this.comparator);return e.data=t,e}}class sr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.fields=t,t.sort(z.comparator)}static empty(){return new X([])}unionWith(t){let e=new F(z.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new X(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return xt(this.fields,t.fields,((e,n)=>e.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Hr("Invalid base64 string: "+i):i}})(t);return new $(e)}static fromUint8Array(t){const e=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(t);return new $(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return v(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}$.EMPTY_BYTE_STRING=new $("");const to=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ft(r){if(S(!!r,39018),typeof r=="string"){let t=0;const e=to.exec(r);if(S(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:k(r.seconds),nanos:k(r.nanos)}}function k(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function mt(r){return typeof r=="string"?$.fromBase64String(r):$.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="server_timestamp",Xr="__type__",Jr="__previous_value__",Zr="__local_write_time__";function En(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Xr])==null?void 0:n.stringValue)===Yr}function Le(r){const t=r.mapValue.fields[Jr];return En(t)?Le(t):t}function Zt(r){const t=ft(r.mapValue.fields[Zr].timestampValue);return new C(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t,e,n,s,i,o,a,u,c,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=l}}const we="(default)";class te{constructor(t,e){this.projectId=t,this.database=e||we}static empty(){return new te("","")}get isDefaultDatabase(){return this.database===we}isEqual(t){return t instanceof te&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="__type__",no="__max__",me={mapValue:{}},es="__vector__",ve="value";function _t(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?En(r)?4:so(r)?9007199254740991:ro(r)?10:11:E(28295,{value:r})}function rt(r,t){if(r===t)return!0;const e=_t(r);if(e!==_t(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Zt(r).isEqual(Zt(t));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ft(s.timestampValue),a=ft(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(s,i){return mt(s.bytesValue).isEqual(mt(i.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(s,i){return k(s.geoPointValue.latitude)===k(i.geoPointValue.latitude)&&k(s.geoPointValue.longitude)===k(i.geoPointValue.longitude)})(r,t);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return k(s.integerValue)===k(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=k(s.doubleValue),a=k(i.doubleValue);return o===a?Re(o)===Re(a):isNaN(o)&&isNaN(a)}return!1})(r,t);case 9:return xt(r.arrayValue.values||[],t.arrayValue.values||[],rt);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(rr(o)!==rr(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!rt(o[u],a[u])))return!1;return!0})(r,t);default:return E(52216,{left:r})}}function ee(r,t){return(r.values||[]).find((e=>rt(e,t)))!==void 0}function Ot(r,t){if(r===t)return 0;const e=_t(r),n=_t(t);if(e!==n)return v(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return v(r.booleanValue,t.booleanValue);case 2:return(function(i,o){const a=k(i.integerValue||i.doubleValue),u=k(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1})(r,t);case 3:return ir(r.timestampValue,t.timestampValue);case 4:return ir(Zt(r),Zt(t));case 5:return Ze(r.stringValue,t.stringValue);case 6:return(function(i,o){const a=mt(i),u=mt(o);return a.compareTo(u)})(r.bytesValue,t.bytesValue);case 7:return(function(i,o){const a=i.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=v(a[c],u[c]);if(l!==0)return l}return v(a.length,u.length)})(r.referenceValue,t.referenceValue);case 8:return(function(i,o){const a=v(k(i.latitude),k(o.latitude));return a!==0?a:v(k(i.longitude),k(o.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return or(r.arrayValue,t.arrayValue);case 10:return(function(i,o){var m,_,R,w;const a=i.fields||{},u=o.fields||{},c=(m=a[ve])==null?void 0:m.arrayValue,l=(_=u[ve])==null?void 0:_.arrayValue,h=v(((R=c==null?void 0:c.values)==null?void 0:R.length)||0,((w=l==null?void 0:l.values)==null?void 0:w.length)||0);return h!==0?h:or(c,l)})(r.mapValue,t.mapValue);case 11:return(function(i,o){if(i===me.mapValue&&o===me.mapValue)return 0;if(i===me.mapValue)return 1;if(o===me.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const m=Ze(u[h],l[h]);if(m!==0)return m;const _=Ot(a[u[h]],c[l[h]]);if(_!==0)return _}return v(u.length,l.length)})(r.mapValue,t.mapValue);default:throw E(23264,{he:e})}}function ir(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return v(r,t);const e=ft(r),n=ft(t),s=v(e.seconds,n.seconds);return s!==0?s:v(e.nanos,n.nanos)}function or(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=Ot(e[s],n[s]);if(i)return i}return v(e.length,n.length)}function Mt(r){return tn(r)}function tn(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(e){const n=ft(e);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(e){return mt(e).toBase64()})(r.bytesValue):"referenceValue"in r?(function(e){return y.fromName(e).toString()})(r.referenceValue):"geoPointValue"in r?(function(e){return`geo(${e.latitude},${e.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=tn(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${tn(e.fields[o])}`;return s+"}"})(r.mapValue):E(61005,{value:r})}function pe(r){switch(_t(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Le(r);return t?16+pe(t):16;case 5:return 2*r.stringValue.length;case 6:return mt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+pe(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return Rt(n.fields,((i,o)=>{s+=i.length+pe(o)})),s})(r.mapValue);default:throw E(13486,{value:r})}}function en(r){return!!r&&"integerValue"in r}function Tn(r){return!!r&&"arrayValue"in r}function ar(r){return!!r&&"nullValue"in r}function ur(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ye(r){return!!r&&"mapValue"in r}function ro(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[ts])==null?void 0:n.stringValue)===es}function Gt(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return Rt(r.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Gt(n))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Gt(r.arrayValue.values[e]);return t}return{...r}}function so(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===no}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.value=t}static empty(){return new H({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ye(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Gt(e)}setAll(t){let e=z.emptyPath(),n={},s=[];t.forEach(((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,n,s),n={},s=[],e=a.popLast()}o?n[a.lastSegment()]=Gt(o):s.push(a.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());ye(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return rt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];ye(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Rt(e,((s,i)=>t[s]=i));for(const s of n)delete t[s]}clone(){return new H(Gt(this.value))}}function ns(r){const t=[];return Rt(r.fields,((e,n)=>{const s=new z([e]);if(ye(n)){const i=ns(n.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)})),new X(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t,e,n,s,i,o,a){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new K(t,0,I.min(),I.min(),I.min(),H.empty(),0)}static newFoundDocument(t,e,n,s){return new K(t,1,e,I.min(),n,s,0)}static newNoDocument(t,e){return new K(t,2,e,I.min(),I.min(),H.empty(),0)}static newUnknownDocument(t,e){return new K(t,3,e,I.min(),I.min(),H.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(I.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=H.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=H.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof K&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new K(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t,e){this.position=t,this.inclusive=e}}function cr(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],o=r.position[s];if(i.field.isKeyField()?n=y.comparator(y.fromName(o.referenceValue),e.key):n=Ot(o,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function lr(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!rt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,e="asc"){this.field=t,this.dir=e}}function io(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{}class L extends rs{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new ao(t,e,n):e==="array-contains"?new lo(t,n):e==="in"?new ho(t,n):e==="not-in"?new fo(t,n):e==="array-contains-any"?new mo(t,n):new L(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new uo(t,n):new co(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ot(e,this.value)):e!==null&&_t(this.value)===_t(e)&&this.matchesComparison(Ot(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return E(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class st extends rs{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new st(t,e)}matches(t){return ss(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ss(r){return r.op==="and"}function is(r){return oo(r)&&ss(r)}function oo(r){for(const t of r.filters)if(t instanceof st)return!1;return!0}function nn(r){if(r instanceof L)return r.field.canonicalString()+r.op.toString()+Mt(r.value);if(is(r))return r.filters.map((t=>nn(t))).join(",");{const t=r.filters.map((e=>nn(e))).join(",");return`${r.op}(${t})`}}function os(r,t){return r instanceof L?(function(n,s){return s instanceof L&&n.op===s.op&&n.field.isEqual(s.field)&&rt(n.value,s.value)})(r,t):r instanceof st?(function(n,s){return s instanceof st&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,o,a)=>i&&os(o,s.filters[a])),!0):!1})(r,t):void E(19439)}function as(r){return r instanceof L?(function(e){return`${e.field.canonicalString()} ${e.op} ${Mt(e.value)}`})(r):r instanceof st?(function(e){return e.op.toString()+" {"+e.getFilters().map(as).join(" ,")+"}"})(r):"Filter"}class ao extends L{constructor(t,e,n){super(t,e,n),this.key=y.fromName(n.referenceValue)}matches(t){const e=y.comparator(t.key,this.key);return this.matchesComparison(e)}}class uo extends L{constructor(t,e){super(t,"in",e),this.keys=us("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class co extends L{constructor(t,e){super(t,"not-in",e),this.keys=us("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function us(r,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((n=>y.fromName(n.referenceValue)))}class lo extends L{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Tn(e)&&ee(e.arrayValue,this.value)}}class ho extends L{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ee(this.value.arrayValue,e)}}class fo extends L{constructor(t,e){super(t,"not-in",e)}matches(t){if(ee(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!ee(this.value.arrayValue,e)}}class mo extends L{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Tn(e)||!e.arrayValue.values)&&e.arrayValue.values.some((n=>ee(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(t,e=null,n=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function hr(r,t=null,e=[],n=[],s=null,i=null,o=null){return new _o(r,t,e,n,s,i,o)}function In(r){const t=A(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((n=>nn(n))).join(","),e+="|ob:",e+=t.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),Me(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((n=>Mt(n))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((n=>Mt(n))).join(",")),t.Te=e}return t.Te}function An(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!io(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!os(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!lr(r.startAt,t.startAt)&&lr(r.endAt,t.endAt)}function rn(r){return y.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,e=null,n=[],s=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function go(r,t,e,n,s,i,o,a){return new Fe(r,t,e,n,s,i,o,a)}function Rn(r){return new Fe(r)}function dr(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function po(r){return r.collectionGroup!==null}function Kt(r){const t=A(r);if(t.Ie===null){t.Ie=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new F(z.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((c=>{c.isInequality()&&(a=a.add(c.field))}))})),a})(t).forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new Pe(i,n))})),e.has(z.keyField().canonicalString())||t.Ie.push(new Pe(z.keyField(),n))}return t.Ie}function Z(r){const t=A(r);return t.Ee||(t.Ee=yo(t,Kt(r))),t.Ee}function yo(r,t){if(r.limitType==="F")return hr(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Pe(s.field,i)}));const e=r.endAt?new Ve(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Ve(r.startAt.position,r.startAt.inclusive):null;return hr(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function sn(r,t,e){return new Fe(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Ue(r,t){return An(Z(r),Z(t))&&r.limitType===t.limitType}function cs(r){return`${In(Z(r))}|lt:${r.limitType}`}function Ct(r){return`Query(target=${(function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map((s=>as(s))).join(", ")}]`),Me(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Mt(s))).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Mt(s))).join(",")),`Target(${n})`})(Z(r))}; limitType=${r.limitType})`}function qe(r,t){return t.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):y.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,t)&&(function(n,s){for(const i of Kt(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,t)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,t)&&(function(n,s){return!(n.startAt&&!(function(o,a,u){const c=cr(o,a,u);return o.inclusive?c<=0:c<0})(n.startAt,Kt(n),s)||n.endAt&&!(function(o,a,u){const c=cr(o,a,u);return o.inclusive?c>=0:c>0})(n.endAt,Kt(n),s))})(r,t)}function Eo(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function ls(r){return(t,e)=>{let n=!1;for(const s of Kt(r)){const i=To(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function To(r,t,e){const n=r.field.isKeyField()?y.comparator(t.key,e.key):(function(i,o,a){const u=o.data.field(i),c=a.data.field(i);return u!==null&&c!==null?Ot(u,c):E(42886)})(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return E(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Rt(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return Wr(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new N(y.comparator);function ct(){return Io}const hs=new N(y.comparator);function $t(...r){let t=hs;for(const e of r)t=t.insert(e.key,e);return t}function ds(r){let t=hs;return r.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function yt(){return Wt()}function fs(){return Wt()}function Wt(){return new wt((r=>r.toString()),((r,t)=>r.isEqual(t)))}const Ao=new N(y.comparator),Ro=new F(y.comparator);function V(...r){let t=Ro;for(const e of r)t=t.add(e);return t}const wo=new F(v);function vo(){return wo}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Re(t)?"-0":t}}function ms(r){return{integerValue:""+r}}function Vo(r,t){return Xi(t)?ms(t):wn(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(){this._=void 0}}function Po(r,t,e){return r instanceof Se?(function(s,i){const o={fields:{[Xr]:{stringValue:Yr},[Zr]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&En(i)&&(i=Le(i)),i&&(o.fields[Jr]=i),{mapValue:o}})(e,t):r instanceof ne?gs(r,t):r instanceof re?ps(r,t):(function(s,i){const o=_s(s,i),a=fr(o)+fr(s.Ae);return en(o)&&en(s.Ae)?ms(a):wn(s.serializer,a)})(r,t)}function So(r,t,e){return r instanceof ne?gs(r,t):r instanceof re?ps(r,t):e}function _s(r,t){return r instanceof Ce?(function(n){return en(n)||(function(i){return!!i&&"doubleValue"in i})(n)})(t)?t:{integerValue:0}:null}class Se extends Be{}class ne extends Be{constructor(t){super(),this.elements=t}}function gs(r,t){const e=ys(t);for(const n of r.elements)e.some((s=>rt(s,n)))||e.push(n);return{arrayValue:{values:e}}}class re extends Be{constructor(t){super(),this.elements=t}}function ps(r,t){let e=ys(t);for(const n of r.elements)e=e.filter((s=>!rt(s,n)));return{arrayValue:{values:e}}}class Ce extends Be{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function fr(r){return k(r.integerValue||r.doubleValue)}function ys(r){return Tn(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Co(r,t){return r.field.isEqual(t.field)&&(function(n,s){return n instanceof ne&&s instanceof ne||n instanceof re&&s instanceof re?xt(n.elements,s.elements,rt):n instanceof Ce&&s instanceof Ce?rt(n.Ae,s.Ae):n instanceof Se&&s instanceof Se})(r.transform,t.transform)}class bo{constructor(t,e){this.version=t,this.transformResults=e}}class at{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new at}static exists(t){return new at(void 0,t)}static updateTime(t){return new at(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ee(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class ze{}function Es(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Is(r.key,at.none()):new oe(r.key,r.data,at.none());{const e=r.data,n=H.empty();let s=new F(z.comparator);for(let i of t.fields)if(!s.has(i)){let o=e.field(i);o===null&&i.length>1&&(i=i.popLast(),o=e.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new vt(r.key,n,new X(s.toArray()),at.none())}}function No(r,t,e){r instanceof oe?(function(s,i,o){const a=s.value.clone(),u=_r(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(r,t,e):r instanceof vt?(function(s,i,o){if(!Ee(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=_r(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Ts(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(r,t,e):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,t,e)}function Ht(r,t,e,n){return r instanceof oe?(function(i,o,a,u){if(!Ee(i.precondition,o))return a;const c=i.value.clone(),l=gr(i.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null})(r,t,e,n):r instanceof vt?(function(i,o,a,u){if(!Ee(i.precondition,o))return a;const c=gr(i.fieldTransforms,u,o),l=o.data;return l.setAll(Ts(i)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((h=>h.field)))})(r,t,e,n):(function(i,o,a){return Ee(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(r,t,e)}function Do(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=_s(n.transform,s||null);i!=null&&(e===null&&(e=H.empty()),e.set(n.field,i))}return e||null}function mr(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&xt(n,s,((i,o)=>Co(i,o)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class oe extends ze{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vt extends ze{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ts(r){const t=new Map;return r.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}})),t}function _r(r,t,e){const n=new Map;S(r.length===e.length,32656,{Re:e.length,Ve:r.length});for(let s=0;s<e.length;s++){const i=r[s],o=i.transform,a=t.data.field(i.field);n.set(i.field,So(o,a,e[s]))}return n}function gr(r,t,e){const n=new Map;for(const s of r){const i=s.transform,o=e.data.field(s.field);n.set(s.field,Po(i,o,t))}return n}class Is extends ze{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ko extends ze{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&No(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ht(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ht(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=fs();return this.mutations.forEach((s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=e.has(s.key)?null:a;const u=Es(o,a);u!==null&&n.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(I.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),V())}isEqual(t){return this.batchId===t.batchId&&xt(this.mutations,t.mutations,((e,n)=>mr(e,n)))&&xt(this.baseMutations,t.baseMutations,((e,n)=>mr(e,n)))}}class vn{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){S(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let s=(function(){return Ao})();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new vn(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x,P;function Lo(r){switch(r){case f.OK:return E(64938);case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0;default:return E(15467,{code:r})}}function As(r){if(r===void 0)return ut("GRPC error has no .code"),f.UNKNOWN;switch(r){case x.OK:return f.OK;case x.CANCELLED:return f.CANCELLED;case x.UNKNOWN:return f.UNKNOWN;case x.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case x.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case x.INTERNAL:return f.INTERNAL;case x.UNAVAILABLE:return f.UNAVAILABLE;case x.UNAUTHENTICATED:return f.UNAUTHENTICATED;case x.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case x.NOT_FOUND:return f.NOT_FOUND;case x.ALREADY_EXISTS:return f.ALREADY_EXISTS;case x.PERMISSION_DENIED:return f.PERMISSION_DENIED;case x.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case x.ABORTED:return f.ABORTED;case x.OUT_OF_RANGE:return f.OUT_OF_RANGE;case x.UNIMPLEMENTED:return f.UNIMPLEMENTED;case x.DATA_LOSS:return f.DATA_LOSS;default:return E(39323,{code:r})}}(P=x||(x={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=new Et([4294967295,4294967295],0);function pr(r){const t=Fo().encode(r),e=new Pi;return e.update(t),new Uint8Array(e.digest())}function yr(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Et([e,n],0),new Et([s,i],0)]}class Vn{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Qt(`Invalid padding: ${e}`);if(n<0)throw new Qt(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Qt(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Qt(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Et.fromNumber(this.ge)}ye(t,e,n){let s=t.add(e.multiply(Et.fromNumber(n)));return s.compare(Uo)===1&&(s=new Et([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=pr(t),[n,s]=yr(e);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);if(!this.we(o))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Vn(i,s,e);return n.forEach((a=>o.insert(a))),o}insert(t){if(this.ge===0)return;const e=pr(t),[n,s]=yr(e);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);this.Se(o)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Qt extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,ae.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new $e(I.min(),s,new N(v),ct(),V())}}class ae{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ae(n,e,V(),V(),V())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,e,n,s){this.be=t,this.removedTargetIds=e,this.key=n,this.De=s}}class Rs{constructor(t,e){this.targetId=t,this.Ce=e}}class ws{constructor(t,e,n=$.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Er{constructor(){this.ve=0,this.Fe=Tr(),this.Me=$.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=V(),e=V(),n=V();return this.Fe.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:E(38017,{changeType:i})}})),new ae(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=Tr()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,S(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class qo{constructor(t){this.Ge=t,this.ze=new Map,this.je=ct(),this.Je=_e(),this.He=_e(),this.Ye=new N(v)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.We(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:E(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((n,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,n=t.Ce.count,s=this.ot(e);if(s){const i=s.target;if(rn(i))if(n===0){const o=new y(i.path);this.et(e,o,K.newNoDocument(o,I.min()))}else S(n===1,20013,{expectedCount:n});else{const o=this._t(e);if(o!==n){const a=this.ut(t),u=a?this.ct(a,t,o):1;if(u!==0){this.it(e);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,c)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let o,a;try{o=mt(n).toUint8Array()}catch(u){if(u instanceof Hr)return kt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Vn(o,s,i)}catch(u){return kt(u instanceof Qt?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.ge===0?null:a}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let s=0;return n.forEach((i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.et(e,i,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((i,o)=>{const a=this.ot(o);if(a){if(i.current&&rn(a.target)){const u=new y(a.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,K.newNoDocument(u,t))}i.Be&&(e.set(o,i.ke()),i.qe())}}));let n=V();this.He.forEach(((i,o)=>{let a=!0;o.forEachWhile((u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(n=n.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(t)));const s=new $e(t,e,this.Ye,this.je,n);return this.je=ct(),this.Je=_e(),this.He=_e(),this.Ye=new N(v),s}Xe(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new Er,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new F(v),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new F(v),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||g("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Er),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function _e(){return new N(y.comparator)}function Tr(){return new N(y.comparator)}const Bo={asc:"ASCENDING",desc:"DESCENDING"},zo={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$o={and:"AND",or:"OR"};class Qo{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function on(r,t){return r.useProto3Json||Me(t)?t:{value:t}}function be(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function vs(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function jo(r,t){return be(r,t.toTimestamp())}function tt(r){return S(!!r,49232),I.fromTimestamp((function(e){const n=ft(e);return new C(n.seconds,n.nanos)})(r))}function Pn(r,t){return an(r,t).canonicalString()}function an(r,t){const e=(function(s){return new b(["projects",s.projectId,"databases",s.database])})(r).child("documents");return t===void 0?e:e.child(t)}function Vs(r){const t=b.fromString(r);return S(Ns(t),10190,{key:t.toString()}),t}function un(r,t){return Pn(r.databaseId,t.path)}function He(r,t){const e=Vs(t);if(e.get(1)!==r.databaseId.projectId)throw new p(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new p(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new y(Ss(e))}function Ps(r,t){return Pn(r.databaseId,t)}function Go(r){const t=Vs(r);return t.length===4?b.emptyPath():Ss(t)}function cn(r){return new b(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ss(r){return S(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Ir(r,t,e){return{name:un(r,t),fields:e.value.mapValue.fields}}function Ko(r,t){let e;if("targetChange"in t){t.targetChange;const n=(function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:E(39313,{state:c})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(c,l){return c.useProto3Json?(S(l===void 0||typeof l=="string",58123),$.fromBase64String(l||"")):(S(l===void 0||l instanceof Buffer||l instanceof Uint8Array,16193),$.fromUint8Array(l||new Uint8Array))})(r,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&(function(c){const l=c.code===void 0?f.UNKNOWN:As(c.code);return new p(l,c.message||"")})(o);e=new ws(n,s,i,a||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=He(r,n.document.name),i=tt(n.document.updateTime),o=n.document.createTime?tt(n.document.createTime):I.min(),a=new H({mapValue:{fields:n.document.fields}}),u=K.newFoundDocument(s,i,o,a),c=n.targetIds||[],l=n.removedTargetIds||[];e=new Te(c,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=He(r,n.document),i=n.readTime?tt(n.readTime):I.min(),o=K.newNoDocument(s,i),a=n.removedTargetIds||[];e=new Te([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=He(r,n.document),i=n.removedTargetIds||[];e=new Te([],i,s,null)}else{if(!("filter"in t))return E(11601,{Rt:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new Mo(s,i),a=n.targetId;e=new Rs(a,o)}}return e}function Wo(r,t){let e;if(t instanceof oe)e={update:Ir(r,t.key,t.value)};else if(t instanceof Is)e={delete:un(r,t.key)};else if(t instanceof vt)e={update:Ir(r,t.key,t.data),updateMask:ra(t.fieldMask)};else{if(!(t instanceof ko))return E(16599,{Vt:t.type});e={verify:un(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((n=>(function(i,o){const a=o.transform;if(a instanceof Se)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ne)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof re)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ce)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw E(20930,{transform:o.transform})})(0,n)))),t.precondition.isNone||(e.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:jo(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:E(27497)})(r,t.precondition)),e}function Ho(r,t){return r&&r.length>0?(S(t!==void 0,14353),r.map((e=>(function(s,i){let o=s.updateTime?tt(s.updateTime):tt(i);return o.isEqual(I.min())&&(o=tt(i)),new bo(o,s.transformResults||[])})(e,t)))):[]}function Yo(r,t){return{documents:[Ps(r,t.path)]}}function Xo(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Ps(r,s);const i=(function(c){if(c.length!==0)return bs(st.create(c,"and"))})(t.filters);i&&(e.structuredQuery.where=i);const o=(function(c){if(c.length!==0)return c.map((l=>(function(m){return{field:bt(m.field),direction:ta(m.dir)}})(l)))})(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=on(r,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=(function(c){return{before:c.inclusive,values:c.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(c){return{before:!c.inclusive,values:c.position}})(t.endAt)),{ft:e,parent:s}}function Jo(r){let t=Go(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){S(n===1,65062);const l=e.from[0];l.allDescendants?s=l.collectionId:t=t.child(l.collectionId)}let i=[];e.where&&(i=(function(h){const m=Cs(h);return m instanceof st&&is(m)?m.getFilters():[m]})(e.where));let o=[];e.orderBy&&(o=(function(h){return h.map((m=>(function(R){return new Pe(Nt(R.field),(function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(m)))})(e.orderBy));let a=null;e.limit&&(a=(function(h){let m;return m=typeof h=="object"?h.value:h,Me(m)?null:m})(e.limit));let u=null;e.startAt&&(u=(function(h){const m=!!h.before,_=h.values||[];return new Ve(_,m)})(e.startAt));let c=null;return e.endAt&&(c=(function(h){const m=!h.before,_=h.values||[];return new Ve(_,m)})(e.endAt)),go(t,s,o,i,a,"F",u,c)}function Zo(r,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return E(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Cs(r){return r.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Nt(e.unaryFilter.field);return L.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Nt(e.unaryFilter.field);return L.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Nt(e.unaryFilter.field);return L.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Nt(e.unaryFilter.field);return L.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return E(61313);default:return E(60726)}})(r):r.fieldFilter!==void 0?(function(e){return L.create(Nt(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return E(58110);default:return E(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(e){return st.create(e.compositeFilter.filters.map((n=>Cs(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return E(1026)}})(e.compositeFilter.op))})(r):E(30097,{filter:r})}function ta(r){return Bo[r]}function ea(r){return zo[r]}function na(r){return $o[r]}function bt(r){return{fieldPath:r.canonicalString()}}function Nt(r){return z.fromServerFormat(r.fieldPath)}function bs(r){return r instanceof L?(function(e){if(e.op==="=="){if(ur(e.value))return{unaryFilter:{field:bt(e.field),op:"IS_NAN"}};if(ar(e.value))return{unaryFilter:{field:bt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ur(e.value))return{unaryFilter:{field:bt(e.field),op:"IS_NOT_NAN"}};if(ar(e.value))return{unaryFilter:{field:bt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bt(e.field),op:ea(e.op),value:e.value}}})(r):r instanceof st?(function(e){const n=e.getFilters().map((s=>bs(s)));return n.length===1?n[0]:{compositeFilter:{op:na(e.op),filters:n}}})(r):E(54877,{filter:r})}function ra(r){const t=[];return r.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ns(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t,e,n,s,i=I.min(),o=I.min(),a=$.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new lt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(t){this.yt=t}}function ia(r){const t=Jo({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?sn(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.Cn=new aa}addToCollectionParentIndex(t,e){return this.Cn.add(e),d.resolve()}getCollectionParents(t,e){return d.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return d.resolve()}deleteFieldIndex(t,e){return d.resolve()}deleteAllFieldIndexes(t){return d.resolve()}createTargetIndexes(t,e){return d.resolve()}getDocumentsMatchingTarget(t,e){return d.resolve(null)}getIndexType(t,e){return d.resolve(0)}getFieldIndexes(t,e){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,e){return d.resolve(dt.min())}getMinOffsetFromCollectionGroup(t,e){return d.resolve(dt.min())}updateCollectionGroup(t,e,n){return d.resolve()}updateIndexEntries(t,e){return d.resolve()}}class aa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new F(b.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new F(b.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ds=41943040;class W{static withCacheSize(t){return new W(t,W.DEFAULT_COLLECTION_PERCENTILE,W.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */W.DEFAULT_COLLECTION_PERCENTILE=10,W.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,W.DEFAULT=new W(Ds,W.DEFAULT_COLLECTION_PERCENTILE,W.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),W.DISABLED=new W(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Lt(0)}static cr(){return new Lt(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="LruGarbageCollector",ua=1048576;function wr([r,t],[e,n]){const s=v(r,e);return s===0?v(t,n):s}class ca{constructor(t){this.Ir=t,this.buffer=new F(wr),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();wr(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class la{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){g(Rr,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Bt(e)?g(Rr,"Ignoring IndexedDB error during garbage collection: ",e):await qt(e)}await this.Vr(3e5)}))}}class ha{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((n=>Math.floor(e/100*n)))}nthSequenceNumber(t,e){if(e===0)return d.resolve(Oe.ce);const n=new ca(e);return this.mr.forEachTarget(t,(s=>n.Ar(s.sequenceNumber))).next((()=>this.mr.pr(t,(s=>n.Ar(s))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.mr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(g("LruGarbageCollector","Garbage collection skipped; disabled"),d.resolve(Ar)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(g("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ar):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let n,s,i,o,a,u,c;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((h=>(h>this.params.maximumSequenceNumbersToCollect?(g("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(t,s)))).next((h=>(n=h,a=Date.now(),this.removeTargets(t,n,e)))).next((h=>(i=h,u=Date.now(),this.removeOrphanedDocuments(t,n)))).next((h=>(c=Date.now(),St()<=ot.DEBUG&&g("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(c-u)+`ms
Total Duration: ${c-l}ms`),d.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h}))))}}function da(r,t){return new ha(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(){this.changes=new wt((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,K.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?d.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(n!==null&&Ht(n.mutation,s,X.empty(),C.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.getLocalViewOfDocuments(t,n,V()).next((()=>n))))}getLocalViewOfDocuments(t,e,n=V()){const s=yt();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((i=>{let o=$t();return i.forEach(((a,u)=>{o=o.insert(a,u.overlayedDocument)})),o}))))}getOverlayedDocuments(t,e){const n=yt();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,V())))}populateOverlays(t,e,n){const s=[];return n.forEach((i=>{e.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(t,s).next((i=>{i.forEach(((o,a)=>{e.set(o,a)}))}))}computeViews(t,e,n,s){let i=ct();const o=Wt(),a=(function(){return Wt()})();return e.forEach(((u,c)=>{const l=n.get(c.key);s.has(c.key)&&(l===void 0||l.mutation instanceof vt)?i=i.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),Ht(l.mutation,c,l.mutation.getFieldMask(),C.now())):o.set(c.key,X.empty())})),this.recalculateAndSaveOverlays(t,i).next((u=>(u.forEach(((c,l)=>o.set(c,l))),e.forEach(((c,l)=>a.set(c,new ma(l,o.get(c)??null)))),a)))}recalculateAndSaveOverlays(t,e){const n=Wt();let s=new N(((o,a)=>o-a)),i=V();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((o=>{for(const a of o)a.keys().forEach((u=>{const c=e.get(u);if(c===null)return;let l=n.get(u)||X.empty();l=a.applyToLocalView(c,l),n.set(u,l);const h=(s.get(a.batchId)||V()).add(u);s=s.insert(a.batchId,h)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=fs();l.forEach((m=>{if(!i.has(m)){const _=Es(e.get(m),n.get(m));_!==null&&h.set(m,_),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return d.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.recalculateAndSaveOverlays(t,n)))}getDocumentsMatchingQuery(t,e,n,s){return(function(o){return y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):po(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):d.resolve(yt());let a=Jt,u=i;return o.next((c=>d.forEach(c,((l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?d.resolve():this.remoteDocumentCache.getEntry(t,l).next((m=>{u=u.insert(l,m)}))))).next((()=>this.populateOverlays(t,c,i))).next((()=>this.computeViews(t,u,c,V()))).next((l=>({batchId:a,changes:ds(l)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new y(e)).next((n=>{let s=$t();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let o=$t();return this.indexManager.getCollectionParents(t,i).next((a=>d.forEach(a,(u=>{const c=(function(h,m){return new Fe(m,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)})(e,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,n,s).next((l=>{l.forEach(((h,m)=>{o=o.insert(h,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s)))).next((o=>{i.forEach(((u,c)=>{const l=c.getKey();o.get(l)===null&&(o=o.insert(l,K.newInvalidDocument(l)))}));let a=$t();return o.forEach(((u,c)=>{const l=i.get(u);l!==void 0&&Ht(l.mutation,c,X.empty(),C.now()),qe(e,c)&&(a=a.insert(u,c))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return d.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:tt(s.createTime)}})(e)),d.resolve()}getNamedQuery(t,e){return d.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(s){return{name:s.name,query:ia(s.bundledQuery),readTime:tt(s.readTime)}})(e)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(){this.overlays=new N(y.comparator),this.qr=new Map}getOverlay(t,e){return d.resolve(this.overlays.get(e))}getOverlays(t,e){const n=yt();return d.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((s,i)=>{this.St(t,e,i)})),d.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.qr.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(n)),d.resolve()}getOverlaysForCollection(t,e,n){const s=yt(),i=e.length+1,o=new y(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>n&&s.set(u.getKey(),u)}return d.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new N(((c,l)=>c-l));const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>n){let l=i.get(c.largestBatchId);l===null&&(l=yt(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=yt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((c,l)=>a.set(c,l))),!(a.size()>=s)););return d.resolve(a)}St(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(n.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Oo(e,n));let i=this.qr.get(e);i===void 0&&(i=V(),this.qr.set(e,i)),this.qr.set(e,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this.sessionToken=$.EMPTY_BYTE_STRING}getSessionToken(t){return d.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,d.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.Qr=new F(U.$r),this.Ur=new F(U.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const n=new U(t,e);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(t,e){t.forEach((n=>this.addReference(n,e)))}removeReference(t,e){this.Gr(new U(t,e))}zr(t,e){t.forEach((n=>this.removeReference(n,e)))}jr(t){const e=new y(new b([])),n=new U(e,t),s=new U(e,t+1),i=[];return this.Ur.forEachInRange([n,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new y(new b([])),n=new U(e,t),s=new U(e,t+1);let i=V();return this.Ur.forEachInRange([n,s],(o=>{i=i.add(o.key)})),i}containsKey(t){const e=new U(t,0),n=this.Qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class U{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return y.comparator(t.key,e.key)||v(t.Yr,e.Yr)}static Kr(t,e){return v(t.Yr,e.Yr)||y.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new F(U.$r)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xo(i,e,n,s);this.mutationQueue.push(o);for(const a of s)this.Zr=this.Zr.add(new U(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,e){return d.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ei(n),i=s<0?0:s;return d.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?yn:this.tr-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new U(e,0),s=new U(e,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,s],(o=>{const a=this.Xr(o.Yr);i.push(a)})),d.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new F(v);return e.forEach((s=>{const i=new U(s,0),o=new U(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(a=>{n=n.add(a.Yr)}))})),d.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;y.isDocumentKey(i)||(i=i.child(""));const o=new U(new y(i),0);let a=new F(v);return this.Zr.forEachWhile((u=>{const c=u.key.path;return!!n.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.Yr)),!0)}),o),d.resolve(this.ti(a))}ti(t){const e=[];return t.forEach((n=>{const s=this.Xr(n);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){S(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return d.forEach(e.mutations,(s=>{const i=new U(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Zr=n}))}ir(t){}containsKey(t,e){const n=new U(e,0),s=this.Zr.firstAfterOrEqual(n);return d.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(t){this.ri=t,this.docs=(function(){return new N(y.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,o=this.ri(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return d.resolve(n?n.document.mutableCopy():K.newInvalidDocument(e))}getEntries(t,e){let n=ct();return e.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():K.newInvalidDocument(s))})),d.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=ct();const o=e.path,a=new y(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Ki(Gi(l),n)<=0||(s.has(l.key)||qe(e,l))&&(i=i.insert(l.key,l.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(t,e,n,s){E(9500)}ii(t,e){return d.forEach(this.docs,(n=>e(n)))}newChangeBuffer(t){return new Ia(this)}getSize(t){return d.resolve(this.size)}}class Ia extends fa{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(n)})),d.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t){this.persistence=t,this.si=new wt((e=>In(e)),An),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.oi=0,this._i=new Sn,this.targetCount=0,this.ai=Lt.ur()}forEachTarget(t,e){return this.si.forEach(((n,s)=>e(s))),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.oi&&(this.oi=e),d.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Lt(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,d.resolve()}updateTargetData(t,e){return this.Pr(e),d.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.si.forEach(((o,a)=>{a.sequenceNumber<=e&&n.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)})),d.waitFor(i).next((()=>s))}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,e){const n=this.si.get(e)||null;return d.resolve(n)}addMatchingKeys(t,e,n){return this._i.Wr(e,n),d.resolve()}removeMatchingKeys(t,e,n){this._i.zr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((o=>{i.push(s.markPotentiallyOrphaned(t,o))})),d.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),d.resolve()}getMatchingKeysForTargetId(t,e){const n=this._i.Hr(e);return d.resolve(n)}containsKey(t,e){return d.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t,e){this.ui={},this.overlays={},this.ci=new Oe(0),this.li=!1,this.li=!0,this.hi=new ya,this.referenceDelegate=t(this),this.Pi=new Aa(this),this.indexManager=new oa,this.remoteDocumentCache=(function(s){return new Ta(s)})((n=>this.referenceDelegate.Ti(n))),this.serializer=new sa(e),this.Ii=new ga(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new pa,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ui[t.toKey()];return n||(n=new Ea(e,this.referenceDelegate),this.ui[t.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,n){g("MemoryPersistence","Starting transaction:",t);const s=new Ra(this.ci.next());return this.referenceDelegate.Ei(),n(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(t,e){return d.or(Object.values(this.ui).map((n=>()=>n.containsKey(t,e))))}}class Ra extends Hi{constructor(t){super(),this.currentSequenceNumber=t}}class Cn{constructor(t){this.persistence=t,this.Ri=new Sn,this.Vi=null}static mi(t){return new Cn(t)}get fi(){if(this.Vi)return this.Vi;throw E(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.fi.delete(n.toString()),d.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.fi.add(n.toString()),d.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),d.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((s=>this.fi.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>n.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.fi,(n=>{const s=y.fromPath(n);return this.gi(t,s).next((i=>{i||e.removeEntry(s,I.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((n=>{n?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return d.or([()=>d.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Ne{constructor(t,e){this.persistence=t,this.pi=new wt((n=>Ji(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=da(this,e)}static mi(t,e){return new Ne(t,e)}Ei(){}di(t){return d.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((n=>e.next((s=>n+s))))}wr(t){let e=0;return this.pr(t,(n=>{e++})).next((()=>e))}pr(t,e){return d.forEach(this.pi,((n,s)=>this.br(t,n,s).next((i=>i?d.resolve():e(s)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(t,(o=>this.br(t,o,e).next((a=>{a||(n++,i.removeEntry(o,I.min()))})))).next((()=>i.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),d.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),d.resolve()}removeReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),d.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),d.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=pe(t.data.value)),e}br(t,e,n){return d.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return d.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Es=n,this.ds=s}static As(t,e){let n=V(),s=V();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new bn(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return vi()?8:Yi(Vi())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.ys(t,e).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(t,e,s,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new wa;return this.Ss(t,e,o).next((a=>{if(i.result=a,this.Vs)return this.bs(t,e,o,a.size)}))})).next((()=>i.result))}bs(t,e,n,s){return n.documentReadCount<this.fs?(St()<=ot.DEBUG&&g("QueryEngine","SDK will not create cache indexes for query:",Ct(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),d.resolve()):(St()<=ot.DEBUG&&g("QueryEngine","Query:",Ct(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.gs*s?(St()<=ot.DEBUG&&g("QueryEngine","The SDK decides to create cache indexes for query:",Ct(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Z(e))):d.resolve())}ys(t,e){if(dr(e))return d.resolve(null);let n=Z(e);return this.indexManager.getIndexType(t,n).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=sn(e,null,"F"),n=Z(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const o=V(...i);return this.ps.getDocuments(t,o).next((a=>this.indexManager.getMinOffset(t,n).next((u=>{const c=this.Ds(e,a);return this.Cs(e,c,o,u.readTime)?this.ys(t,sn(e,null,"F")):this.vs(t,c,e,u)}))))})))))}ws(t,e,n,s){return dr(e)||s.isEqual(I.min())?d.resolve(null):this.ps.getDocuments(t,n).next((i=>{const o=this.Ds(e,i);return this.Cs(e,o,n,s)?d.resolve(null):(St()<=ot.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ct(e)),this.vs(t,o,e,ji(s,Jt)).next((a=>a)))}))}Ds(t,e){let n=new F(ls(t));return e.forEach(((s,i)=>{qe(t,i)&&(n=n.add(i))})),n}Cs(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,e,n){return St()<=ot.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",Ct(e)),this.ps.getDocumentsMatchingQuery(t,e,dt.min(),n)}vs(t,e,n,s){return this.ps.getDocumentsMatchingQuery(t,n,s).next((i=>(e.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn="LocalStore",Va=3e8;class Pa{constructor(t,e,n,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new N(v),this.xs=new wt((i=>In(i)),An),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(n)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new _a(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function Sa(r,t,e,n){return new Pa(r,t,e,n)}async function xs(r,t){const e=A(r);return await e.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,e.Bs(t),e.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],a=[];let u=V();for(const c of s){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return e.localDocuments.getDocuments(n,u).next((c=>({Ls:c,removedBatchIds:o,addedBatchIds:a})))}))}))}function Ca(r,t){const e=A(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=t.batch.keys(),i=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(a,u,c,l){const h=c.batch,m=h.keys();let _=d.resolve();return m.forEach((R=>{_=_.next((()=>l.getEntry(u,R))).next((w=>{const T=c.docVersions.get(R);S(T!==null,48541),w.version.compareTo(T)<0&&(h.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),l.addEntry(w)))}))})),_.next((()=>a.mutationQueue.removeMutationBatch(u,h)))})(e,n,t,i).next((()=>i.apply(n))).next((()=>e.mutationQueue.performConsistencyCheck(n))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(a){let u=V();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u})(t)))).next((()=>e.localDocuments.getDocuments(n,s)))}))}function Os(r){const t=A(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function ba(r,t){const e=A(r),n=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const a=[];t.targetChanges.forEach(((l,h)=>{const m=s.get(h);if(!m)return;a.push(e.Pi.removeMatchingKeys(i,l.removedDocuments,h).next((()=>e.Pi.addMatchingKeys(i,l.addedDocuments,h))));let _=m.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?_=_.withResumeToken($.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):l.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(l.resumeToken,n)),s=s.insert(h,_),(function(w,T,M){return w.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=Va?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0})(m,_,l)&&a.push(e.Pi.updateTargetData(i,_))}));let u=ct(),c=V();if(t.documentUpdates.forEach((l=>{t.resolvedLimboDocuments.has(l)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,l))})),a.push(Na(i,o,t.documentUpdates).next((l=>{u=l.ks,c=l.qs}))),!n.isEqual(I.min())){const l=e.Pi.getLastRemoteSnapshotVersion(i).next((h=>e.Pi.setTargetsMetadata(i,i.currentSequenceNumber,n)));a.push(l)}return d.waitFor(a).next((()=>o.apply(i))).next((()=>e.localDocuments.getLocalViewOfDocuments(i,u,c))).next((()=>u))})).then((i=>(e.Ms=s,i)))}function Na(r,t,e){let n=V(),s=V();return e.forEach((i=>n=n.add(i))),t.getEntries(r,n).next((i=>{let o=ct();return e.forEach(((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(I.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):g(Nn,"Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)})),{ks:o,qs:s}}))}function Da(r,t){const e=A(r);return e.persistence.runTransaction("Get next mutation batch","readonly",(n=>(t===void 0&&(t=yn),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t))))}function ka(r,t){const e=A(r);return e.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return e.Pi.getTargetData(n,t).next((i=>i?(s=i,d.resolve(s)):e.Pi.allocateTargetId(n).next((o=>(s=new lt(t,o,"TargetPurposeListen",n.currentSequenceNumber),e.Pi.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=e.Ms.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(n.targetId,n),e.xs.set(t,n.targetId)),n}))}async function ln(r,t,e){const n=A(r),s=n.Ms.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Bt(o))throw o;g(Nn,`Failed to update sequence numbers for target ${t}: ${o}`)}n.Ms=n.Ms.remove(t),n.xs.delete(s.target)}function vr(r,t,e){const n=A(r);let s=I.min(),i=V();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,c,l){const h=A(u),m=h.xs.get(l);return m!==void 0?d.resolve(h.Ms.get(m)):h.Pi.getTargetData(c,l)})(n,o,Z(t)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(o,a.targetId).next((u=>{i=u}))})).next((()=>n.Fs.getDocumentsMatchingQuery(o,t,e?s:I.min(),e?i:V()))).next((a=>(xa(n,Eo(t),a),{documents:a,Qs:i})))))}function xa(r,t,e){let n=r.Os.get(t)||I.min();e.forEach(((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),r.Os.set(t,n)}class Vr{constructor(){this.activeTargetIds=vo()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Oa{constructor(){this.Mo=new Vr,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,n){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Vr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="ConnectivityMonitor";class Sr{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){g(Pr,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){g(Pr,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ge=null;function hn(){return ge===null?ge=(function(){return 268435456+Math.round(2147483648*Math.random())})():ge++,"0x"+ge.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="RestConnection",La={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Fa{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${n}/databases/${s}`,this.Wo=this.databaseId.database===we?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Go(t,e,n,s,i){const o=hn(),a=this.zo(t,e.toUriEncodedString());g(Ye,`Sending RPC '${t}' ${o}:`,a,n);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:c}=new URL(a),l=$r(c);return this.Jo(t,a,u,n,l).then((h=>(g(Ye,`Received RPC '${t}' ${o}: `,h),h)),(h=>{throw kt(Ye,`RPC '${t}' ${o} failed with error: `,h,"url: ",a,"request:",n),h}))}Ho(t,e,n,s,i,o){return this.Go(t,e,n,s,i)}jo(t,e,n){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ut})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,i)=>t[i]=s)),n&&n.headers.forEach(((s,i)=>t[i]=s))}zo(t,e){const n=La[t];return`${this.Uo}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j="WebChannelConnection";class qa extends Fa{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,s,i){const o=hn();return new Promise(((a,u)=>{const c=new Si;c.setWithCredentials(!0),c.listenOnce(Ci.COMPLETE,(()=>{try{switch(c.getLastErrorCode()){case Ke.NO_ERROR:const h=c.getResponseJson();g(j,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(h)),a(h);break;case Ke.TIMEOUT:g(j,`RPC '${t}' ${o} timed out`),u(new p(f.DEADLINE_EXCEEDED,"Request time out"));break;case Ke.HTTP_ERROR:const m=c.getStatus();if(g(j,`RPC '${t}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const R=_==null?void 0:_.error;if(R&&R.status&&R.message){const w=(function(M){const D=M.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(D)>=0?D:f.UNKNOWN})(R.status);u(new p(w,R.message))}else u(new p(f.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new p(f.UNAVAILABLE,"Connection failed."));break;default:E(9055,{l_:t,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{g(j,`RPC '${t}' ${o} completed.`)}}));const l=JSON.stringify(s);g(j,`RPC '${t}' ${o} sending request:`,s),c.send(e,"POST",l,n,15)}))}T_(t,e,n){const s=hn(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=bi(),a=Ni(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,e,n),u.encodeInitMessageHeaders=!0;const l=i.join("");g(j,`Creating RPC '${t}' stream ${s}: ${l}`,u);const h=o.createWebChannel(l,u);this.I_(h);let m=!1,_=!1;const R=new Ua({Yo:T=>{_?g(j,`Not sending because RPC '${t}' stream ${s} is closed:`,T):(m||(g(j,`Opening RPC '${t}' stream ${s} transport.`),h.open(),m=!0),g(j,`RPC '${t}' stream ${s} sending:`,T),h.send(T))},Zo:()=>h.close()}),w=(T,M,D)=>{T.listen(M,(Q=>{try{D(Q)}catch(it){setTimeout((()=>{throw it}),0)}}))};return w(h,de.EventType.OPEN,(()=>{_||(g(j,`RPC '${t}' stream ${s} transport opened.`),R.o_())})),w(h,de.EventType.CLOSE,(()=>{_||(_=!0,g(j,`RPC '${t}' stream ${s} transport closed`),R.a_(),this.E_(h))})),w(h,de.EventType.ERROR,(T=>{_||(_=!0,kt(j,`RPC '${t}' stream ${s} transport errored. Name:`,T.name,"Message:",T.message),R.a_(new p(f.UNAVAILABLE,"The operation could not be completed")))})),w(h,de.EventType.MESSAGE,(T=>{var M;if(!_){const D=T.data[0];S(!!D,16349);const Q=D,it=(Q==null?void 0:Q.error)||((M=Q[0])==null?void 0:M.error);if(it){g(j,`RPC '${t}' stream ${s} received error:`,it);const le=it.status;let Pt=(function(hi){const Gn=x[hi];if(Gn!==void 0)return As(Gn)})(le),he=it.message;Pt===void 0&&(Pt=f.INTERNAL,he="Unknown error status: "+le+" with message "+it.message),_=!0,R.a_(new p(Pt,he)),h.close()}else g(j,`RPC '${t}' stream ${s} received:`,D),R.u_(D)}})),w(a,Di.STAT_EVENT,(T=>{T.stat===Wn.PROXY?g(j,`RPC '${t}' stream ${s} detected buffering proxy`):T.stat===Wn.NOPROXY&&g(j,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{R.__()}),0),R}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function Xe(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(r){return new Qo(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Mi=t,this.timerId=e,this.d_=n,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-n);s>0&&g("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="PersistentStream";class Ls{constructor(t,e,n,s,i,o,a,u){this.Mi=t,this.S_=n,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ms(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===f.RESOURCE_EXHAUSTED?(ut(e.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.D_===e&&this.G_(n,s)}),(n=>{t((()=>{const s=new p(f.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)}))}))}G_(t,e){const n=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{n((()=>this.listener.Xo()))})),this.stream.t_((()=>{n((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{n((()=>this.z_(s)))})),this.stream.onMessage((s=>{n((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return g(Cr,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(g(Cr,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ba extends Ls{constructor(t,e,n,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,o),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Ko(this.serializer,t),n=(function(i){if(!("targetChange"in i))return I.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?I.min():o.readTime?tt(o.readTime):I.min()})(t);return this.listener.H_(e,n)}Y_(t){const e={};e.database=cn(this.serializer),e.addTarget=(function(i,o){let a;const u=o.target;if(a=rn(u)?{documents:Yo(i,u)}:{query:Xo(i,u).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=vs(i,o.resumeToken);const c=on(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(I.min())>0){a.readTime=be(i,o.snapshotVersion.toTimestamp());const c=on(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a})(this.serializer,t);const n=Zo(this.serializer,t);n&&(e.labels=n),this.q_(e)}Z_(t){const e={};e.database=cn(this.serializer),e.removeTarget=t,this.q_(e)}}class za extends Ls{constructor(t,e,n,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return S(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,S(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){S(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Ho(t.writeResults,t.commitTime),n=tt(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=cn(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((n=>Wo(this.serializer,n)))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{}class Qa extends $a{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new p(f.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(t,an(e,n),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new p(f.UNKNOWN,i.toString())}))}Ho(t,e,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Ho(t,an(e,n),s,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new p(f.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class ja{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ut(e),this.aa=!1):g("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="RemoteStore";class Ga{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{n.enqueueAndForget((async()=>{Vt(this)&&(g(At,"Restarting streams for network reachability change."),await(async function(u){const c=A(u);c.Ea.add(4),await ue(c),c.Ra.set("Unknown"),c.Ea.delete(4),await je(c)})(this))}))})),this.Ra=new ja(n,s)}}async function je(r){if(Vt(r))for(const t of r.da)await t(!0)}async function ue(r){for(const t of r.da)await t(!1)}function Fs(r,t){const e=A(r);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),On(e)?xn(e):zt(e).O_()&&kn(e,t))}function Dn(r,t){const e=A(r),n=zt(e);e.Ia.delete(t),n.O_()&&Us(e,t),e.Ia.size===0&&(n.O_()?n.L_():Vt(e)&&e.Ra.set("Unknown"))}function kn(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(I.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}zt(r).Y_(t)}function Us(r,t){r.Va.Ue(t),zt(r).Z_(t)}function xn(r){r.Va=new qo({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),zt(r).start(),r.Ra.ua()}function On(r){return Vt(r)&&!zt(r).x_()&&r.Ia.size>0}function Vt(r){return A(r).Ea.size===0}function qs(r){r.Va=void 0}async function Ka(r){r.Ra.set("Online")}async function Wa(r){r.Ia.forEach(((t,e)=>{kn(r,t)}))}async function Ha(r,t){qs(r),On(r)?(r.Ra.ha(t),xn(r)):r.Ra.set("Unknown")}async function Ya(r,t,e){if(r.Ra.set("Online"),t instanceof ws&&t.state===2&&t.cause)try{await(async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.Va.removeTarget(a))})(r,t)}catch(n){g(At,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await De(r,n)}else if(t instanceof Te?r.Va.Ze(t):t instanceof Rs?r.Va.st(t):r.Va.tt(t),!e.isEqual(I.min()))try{const n=await Os(r.localStore);e.compareTo(n)>=0&&await(function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach(((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=i.Ia.get(c);l&&i.Ia.set(c,l.withResumeToken(u.resumeToken,o))}})),a.targetMismatches.forEach(((u,c)=>{const l=i.Ia.get(u);if(!l)return;i.Ia.set(u,l.withResumeToken($.EMPTY_BYTE_STRING,l.snapshotVersion)),Us(i,u);const h=new lt(l.target,u,c,l.sequenceNumber);kn(i,h)})),i.remoteSyncer.applyRemoteEvent(a)})(r,e)}catch(n){g(At,"Failed to raise snapshot:",n),await De(r,n)}}async function De(r,t,e){if(!Bt(t))throw t;r.Ea.add(1),await ue(r),r.Ra.set("Offline"),e||(e=()=>Os(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{g(At,"Retrying IndexedDB access"),await e(),r.Ea.delete(1),await je(r)}))}function Bs(r,t){return t().catch((e=>De(r,e,t)))}async function Ge(r){const t=A(r),e=gt(t);let n=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:yn;for(;Xa(t);)try{const s=await Da(t.localStore,n);if(s===null){t.Ta.length===0&&e.L_();break}n=s.batchId,Ja(t,s)}catch(s){await De(t,s)}zs(t)&&$s(t)}function Xa(r){return Vt(r)&&r.Ta.length<10}function Ja(r,t){r.Ta.push(t);const e=gt(r);e.O_()&&e.X_&&e.ea(t.mutations)}function zs(r){return Vt(r)&&!gt(r).x_()&&r.Ta.length>0}function $s(r){gt(r).start()}async function Za(r){gt(r).ra()}async function tu(r){const t=gt(r);for(const e of r.Ta)t.ea(e.mutations)}async function eu(r,t,e){const n=r.Ta.shift(),s=vn.from(n,t,e);await Bs(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await Ge(r)}async function nu(r,t){t&&gt(r).X_&&await(async function(n,s){if((function(o){return Lo(o)&&o!==f.ABORTED})(s.code)){const i=n.Ta.shift();gt(n).B_(),await Bs(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ge(n)}})(r,t),zs(r)&&$s(r)}async function br(r,t){const e=A(r);e.asyncQueue.verifyOperationInProgress(),g(At,"RemoteStore received new credentials");const n=Vt(e);e.Ea.add(3),await ue(e),n&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await je(e)}async function ru(r,t){const e=A(r);t?(e.Ea.delete(2),await je(e)):t||(e.Ea.add(2),await ue(e),e.Ra.set("Unknown"))}function zt(r){return r.ma||(r.ma=(function(e,n,s){const i=A(e);return i.sa(),new Ba(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Xo:Ka.bind(null,r),t_:Wa.bind(null,r),r_:Ha.bind(null,r),H_:Ya.bind(null,r)}),r.da.push((async t=>{t?(r.ma.B_(),On(r)?xn(r):r.Ra.set("Unknown")):(await r.ma.stop(),qs(r))}))),r.ma}function gt(r){return r.fa||(r.fa=(function(e,n,s){const i=A(e);return i.sa(),new za(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:Za.bind(null,r),r_:nu.bind(null,r),ta:tu.bind(null,r),na:eu.bind(null,r)}),r.da.push((async t=>{t?(r.fa.B_(),await Ge(r)):(await r.fa.stop(),r.Ta.length>0&&(g(At,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const o=Date.now()+n,a=new Mn(t,e,o,s,i);return a.start(n),a}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ln(r,t){if(ut("AsyncQueue",`${t}: ${r}`),Bt(r))return new p(f.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{static emptySet(t){return new Dt(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||y.comparator(e.key,n.key):(e,n)=>y.comparator(e.key,n.key),this.keyedMap=$t(),this.sortedSet=new N(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Dt)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Dt;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.ga=new N(y.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):E(63341,{Rt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Ft{constructor(t,e,n,s,i,o,a,u,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,s,i){const o=[];return e.forEach((a=>{o.push({type:0,doc:a})})),new Ft(t,e,Dt.emptySet(e),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ue(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class iu{constructor(){this.queries=Dr(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const s=A(e),i=s.queries;s.queries=Dr(),i.forEach(((o,a)=>{for(const u of a.Sa)u.onError(n)}))})(this,new p(f.ABORTED,"Firestore shutting down"))}}function Dr(){return new wt((r=>cs(r)),Ue)}async function ou(r,t){const e=A(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.ba()&&t.Da()&&(n=2):(i=new su,n=t.Da()?0:1);try{switch(n){case 0:i.wa=await e.onListen(s,!0);break;case 1:i.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(o){const a=Ln(o,`Initialization of query '${Ct(t.query)}' failed`);return void t.onError(a)}e.queries.set(s,i),i.Sa.push(t),t.va(e.onlineState),i.wa&&t.Fa(i.wa)&&Fn(e)}async function au(r,t){const e=A(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const o=i.Sa.indexOf(t);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function uu(r,t){const e=A(r);let n=!1;for(const s of t){const i=s.query,o=e.queries.get(i);if(o){for(const a of o.Sa)a.Fa(s)&&(n=!0);o.wa=s}}n&&Fn(e)}function cu(r,t,e){const n=A(r),s=n.queries.get(t);if(s)for(const i of s.Sa)i.onError(e);n.queries.delete(t)}function Fn(r){r.Ca.forEach((t=>{t.next()}))}var dn,kr;(kr=dn||(dn={})).Ma="default",kr.Cache="cache";class lu{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Ft(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Ft.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==dn.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t){this.key=t}}class js{constructor(t){this.key=t}}class hu{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=V(),this.mutatedKeys=V(),this.eu=ls(t),this.tu=new Dt(this.eu)}get nu(){return this.Ya}ru(t,e){const n=e?e.iu:new Nr,s=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((l,h)=>{const m=s.get(l),_=qe(this.query,h)?h:null,R=!!m&&this.mutatedKeys.has(m.key),w=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let T=!1;m&&_?m.data.isEqual(_.data)?R!==w&&(n.track({type:3,doc:_}),T=!0):this.su(m,_)||(n.track({type:2,doc:_}),T=!0,(u&&this.eu(_,u)>0||c&&this.eu(_,c)<0)&&(a=!0)):!m&&_?(n.track({type:0,doc:_}),T=!0):m&&!_&&(n.track({type:1,doc:m}),T=!0,(u||c)&&(a=!0)),T&&(_?(o=o.add(_),i=w?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),n.track({type:1,doc:l})}return{tu:o,iu:n,Cs:a,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const o=t.iu.ya();o.sort(((l,h)=>(function(_,R){const w=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E(20277,{Rt:T})}};return w(_)-w(R)})(l.type,h.type)||this.eu(l.doc,h.doc))),this.ou(n),s=s??!1;const a=e&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Ft(this.query,t.tu,i,o,t.mutatedKeys,u===0,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Nr,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=V(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))}));const e=[];return t.forEach((n=>{this.Xa.has(n)||e.push(new js(n))})),this.Xa.forEach((n=>{t.has(n)||e.push(new Qs(n))})),e}cu(t){this.Ya=t.Qs,this.Xa=V();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Ft.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Un="SyncEngine";class du{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class fu{constructor(t){this.key=t,this.hu=!1}}class mu{constructor(t,e,n,s,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new wt((a=>cs(a)),Ue),this.Iu=new Map,this.Eu=new Set,this.du=new N(y.comparator),this.Au=new Map,this.Ru=new Sn,this.Vu={},this.mu=new Map,this.fu=Lt.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function _u(r,t,e=!0){const n=Xs(r);let s;const i=n.Tu.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Gs(n,t,e,!0),s}async function gu(r,t){const e=Xs(r);await Gs(e,t,!0,!1)}async function Gs(r,t,e,n){const s=await ka(r.localStore,Z(t)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,e);let a;return n&&(a=await pu(r,t,i,o==="current",s.resumeToken)),r.isPrimaryClient&&e&&Fs(r.remoteStore,s),a}async function pu(r,t,e,n,s){r.pu=(h,m,_)=>(async function(w,T,M,D){let Q=T.view.ru(M);Q.Cs&&(Q=await vr(w.localStore,T.query,!1).then((({documents:he})=>T.view.ru(he,Q))));const it=D&&D.targetChanges.get(T.targetId),le=D&&D.targetMismatches.get(T.targetId)!=null,Pt=T.view.applyChanges(Q,w.isPrimaryClient,it,le);return Or(w,T.targetId,Pt.au),Pt.snapshot})(r,h,m,_);const i=await vr(r.localStore,t,!0),o=new hu(t,i.Qs),a=o.ru(i.documents),u=ae.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),c=o.applyChanges(a,r.isPrimaryClient,u);Or(r,e,c.au);const l=new du(t,e,o);return r.Tu.set(t,l),r.Iu.has(e)?r.Iu.get(e).push(t):r.Iu.set(e,[t]),c.snapshot}async function yu(r,t,e){const n=A(r),s=n.Tu.get(t),i=n.Iu.get(s.targetId);if(i.length>1)return n.Iu.set(s.targetId,i.filter((o=>!Ue(o,t)))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ln(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),e&&Dn(n.remoteStore,s.targetId),fn(n,s.targetId)})).catch(qt)):(fn(n,s.targetId),await ln(n.localStore,s.targetId,!0))}async function Eu(r,t){const e=A(r),n=e.Tu.get(t),s=e.Iu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Dn(e.remoteStore,n.targetId))}async function Tu(r,t,e){const n=Pu(r);try{const s=await(function(o,a){const u=A(o),c=C.now(),l=a.reduce(((_,R)=>_.add(R.key)),V());let h,m;return u.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let R=ct(),w=V();return u.Ns.getEntries(_,l).next((T=>{R=T,R.forEach(((M,D)=>{D.isValidDocument()||(w=w.add(M))}))})).next((()=>u.localDocuments.getOverlayedDocuments(_,R))).next((T=>{h=T;const M=[];for(const D of a){const Q=Do(D,h.get(D.key).overlayedDocument);Q!=null&&M.push(new vt(D.key,Q,ns(Q.value.mapValue),at.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,M,a)})).next((T=>{m=T;const M=T.applyToLocalDocumentSet(h,w);return u.documentOverlayCache.saveOverlays(_,T.batchId,M)}))})).then((()=>({batchId:m.batchId,changes:ds(h)})))})(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),(function(o,a,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new N(v)),c=c.insert(a,u),o.Vu[o.currentUser.toKey()]=c})(n,s.batchId,e),await ce(n,s.changes),await Ge(n.remoteStore)}catch(s){const i=Ln(s,"Failed to persist write");e.reject(i)}}async function Ks(r,t){const e=A(r);try{const n=await ba(e.localStore,t);t.targetChanges.forEach(((s,i)=>{const o=e.Au.get(i);o&&(S(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?S(o.hu,14607):s.removedDocuments.size>0&&(S(o.hu,42227),o.hu=!1))})),await ce(e,n,t)}catch(n){await qt(n)}}function xr(r,t,e){const n=A(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Tu.forEach(((i,o)=>{const a=o.view.va(t);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const u=A(o);u.onlineState=a;let c=!1;u.queries.forEach(((l,h)=>{for(const m of h.Sa)m.va(a)&&(c=!0)})),c&&Fn(u)})(n.eventManager,t),s.length&&n.Pu.H_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Iu(r,t,e){const n=A(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Au.get(t),i=s&&s.key;if(i){let o=new N(y.comparator);o=o.insert(i,K.newNoDocument(i,I.min()));const a=V().add(i),u=new $e(I.min(),new Map,new N(v),o,a);await Ks(n,u),n.du=n.du.remove(i),n.Au.delete(t),qn(n)}else await ln(n.localStore,t,!1).then((()=>fn(n,t,e))).catch(qt)}async function Au(r,t){const e=A(r),n=t.batch.batchId;try{const s=await Ca(e.localStore,t);Hs(e,n,null),Ws(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await ce(e,s)}catch(s){await qt(s)}}async function Ru(r,t,e){const n=A(r);try{const s=await(function(o,a){const u=A(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(c=>{let l;return u.mutationQueue.lookupMutationBatch(c,a).next((h=>(S(h!==null,37113),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h)))).next((()=>u.mutationQueue.performConsistencyCheck(c))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,a))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l))).next((()=>u.localDocuments.getDocuments(c,l)))}))})(n.localStore,t);Hs(n,t,e),Ws(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await ce(n,s)}catch(s){await qt(s)}}function Ws(r,t){(r.mu.get(t)||[]).forEach((e=>{e.resolve()})),r.mu.delete(t)}function Hs(r,t,e){const n=A(r);let s=n.Vu[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.Vu[n.currentUser.toKey()]=s}}function fn(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Iu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach((n=>{r.Ru.containsKey(n)||Ys(r,n)}))}function Ys(r,t){r.Eu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(Dn(r.remoteStore,e),r.du=r.du.remove(t),r.Au.delete(e),qn(r))}function Or(r,t,e){for(const n of e)n instanceof Qs?(r.Ru.addReference(n.key,t),wu(r,n)):n instanceof js?(g(Un,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,t),r.Ru.containsKey(n.key)||Ys(r,n.key)):E(19791,{wu:n})}function wu(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Eu.has(n)||(g(Un,"New document in limbo: "+e),r.Eu.add(n),qn(r))}function qn(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const e=new y(b.fromString(t)),n=r.fu.next();r.Au.set(n,new fu(e)),r.du=r.du.insert(e,n),Fs(r.remoteStore,new lt(Z(Rn(e.path)),n,"TargetPurposeLimboResolution",Oe.ce))}}async function ce(r,t,e){const n=A(r),s=[],i=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach(((a,u)=>{o.push(n.pu(u,t,e).then((c=>{var l;if((c||e)&&n.isPrimaryClient){const h=c?!c.fromCache:(l=e==null?void 0:e.targetChanges.get(u.targetId))==null?void 0:l.current;n.sharedClientState.updateQueryState(u.targetId,h?"current":"not-current")}if(c){s.push(c);const h=bn.As(u.targetId,c);i.push(h)}})))})),await Promise.all(o),n.Pu.H_(s),await(async function(u,c){const l=A(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",(h=>d.forEach(c,(m=>d.forEach(m.Es,(_=>l.persistence.referenceDelegate.addReference(h,m.targetId,_))).next((()=>d.forEach(m.ds,(_=>l.persistence.referenceDelegate.removeReference(h,m.targetId,_)))))))))}catch(h){if(!Bt(h))throw h;g(Nn,"Failed to update sequence numbers: "+h)}for(const h of c){const m=h.targetId;if(!h.fromCache){const _=l.Ms.get(m),R=_.snapshotVersion,w=_.withLastLimboFreeSnapshotVersion(R);l.Ms=l.Ms.insert(m,w)}}})(n.localStore,i))}async function vu(r,t){const e=A(r);if(!e.currentUser.isEqual(t)){g(Un,"User change. New user:",t.toKey());const n=await xs(e.localStore,t);e.currentUser=t,(function(i,o){i.mu.forEach((a=>{a.forEach((u=>{u.reject(new p(f.CANCELLED,o))}))})),i.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await ce(e,n.Ls)}}function Vu(r,t){const e=A(r),n=e.Au.get(t);if(n&&n.hu)return V().add(n.key);{let s=V();const i=e.Iu.get(t);if(!i)return s;for(const o of i){const a=e.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function Xs(r){const t=A(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ks.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vu.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Iu.bind(null,t),t.Pu.H_=uu.bind(null,t.eventManager),t.Pu.yu=cu.bind(null,t.eventManager),t}function Pu(r){const t=A(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Au.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ru.bind(null,t),t}class ke{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Qe(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Sa(this.persistence,new va,t.initialUser,this.serializer)}Cu(t){return new ks(Cn.mi,this.serializer)}Du(t){return new Oa}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ke.provider={build:()=>new ke};class Su extends ke{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){S(this.persistence.referenceDelegate instanceof Ne,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new la(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?W.withCacheSize(this.cacheSizeBytes):W.DEFAULT;return new ks((n=>Ne.mi(n,e)),this.serializer)}}class mn{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>xr(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=vu.bind(null,this.syncEngine),await ru(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new iu})()}createDatastore(t){const e=Qe(t.databaseInfo.databaseId),n=(function(i){return new qa(i)})(t.databaseInfo);return(function(i,o,a,u){return new Qa(i,o,a,u)})(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return(function(n,s,i,o,a){return new Ga(n,s,i,o,a)})(this.localStore,this.datastore,t.asyncQueue,(e=>xr(this.syncEngine,e,0)),(function(){return Sr.v()?new Sr:new Ma})())}createSyncEngine(t,e){return(function(s,i,o,a,u,c,l){const h=new mu(s,i,o,a,u,c);return l&&(h.gu=!0),h})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const i=A(s);g(At,"RemoteStore shutting down."),i.Ea.add(5),await ue(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}mn.provider={build:()=>new mn};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):ut("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="FirestoreClient";class bu{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=G.UNAUTHENTICATED,this.clientId=gn.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{g(pt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(g(pt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ln(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Je(r,t){r.asyncQueue.verifyOperationInProgress(),g(pt,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await xs(t.localStore,s),n=s)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function Mr(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Nu(r);g(pt,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener((n=>br(t.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>br(t.remoteStore,s))),r._onlineComponents=t}async function Nu(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){g(pt,"Using user provided OfflineComponentProvider");try{await Je(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===f.FAILED_PRECONDITION||s.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;kt("Error using user provided cache. Falling back to memory cache: "+e),await Je(r,new ke)}}else g(pt,"Using default OfflineComponentProvider"),await Je(r,new Su(void 0));return r._offlineComponents}async function Js(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(g(pt,"Using user provided OnlineComponentProvider"),await Mr(r,r._uninitializedComponentsProvider._online)):(g(pt,"Using default OnlineComponentProvider"),await Mr(r,new mn))),r._onlineComponents}function Du(r){return Js(r).then((t=>t.syncEngine))}async function ku(r){const t=await Js(r),e=t.eventManager;return e.onListen=_u.bind(null,t.syncEngine),e.onUnlisten=yu.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=gu.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Eu.bind(null,t.syncEngine),e}function xu(r,t,e={}){const n=new ht;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,u,c){const l=new Cu({next:m=>{l.Nu(),o.enqueueAndForget((()=>au(i,h)));const _=m.docs.has(a);!_&&m.fromCache?c.reject(new p(f.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&u&&u.source==="server"?c.reject(new p(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),h=new lu(Rn(a.path),l,{includeMetadataChanges:!0,qa:!0});return ou(i,h)})(await ku(r),r.asyncQueue,t,e,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="firestore.googleapis.com",Fr=!0;class Ur{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new p(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ti,this.ssl=Fr}else this.host=t.host,this.ssl=t.ssl??Fr;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Ds;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ua)throw new p(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Qi("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zs(t.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new p(f.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new p(f.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new p(f.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Bn{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ur({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new p(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new p(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ur(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new ki;switch(n.type){case"firstParty":return new Li(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new p(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const n=Lr.get(e);n&&(g("ComponentProvider","Removing Datastore"),Lr.delete(e),n.terminate())})(this),Promise.resolve()}}function Ou(r,t,e,n={}){var c;r=Xt(r,Bn);const s=$r(t),i=r._getSettings(),o={...i,emulatorOptions:r._getEmulatorOptions()},a=`${t}:${e}`;s&&(Ii(`https://${a}`),Ai("Firestore",!0)),i.host!==ti&&i.host!==a&&kt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:a,ssl:s,emulatorOptions:n};if(!Ri(u,o)&&(r._setSettings(u),n.mockUserToken)){let l,h;if(typeof n.mockUserToken=="string")l=n.mockUserToken,h=G.MOCK_USER;else{l=wi(n.mockUserToken,(c=r._app)==null?void 0:c.options.projectId);const m=n.mockUserToken.sub||n.mockUserToken.user_id;if(!m)throw new p(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new G(m)}r._authCredentials=new xi(new jr(l,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new zn(this.firestore,t,this._query)}}class q{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new se(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new q(this.firestore,t,this._key)}toJSON(){return{type:q._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(ie(e,q._jsonSchema))return new q(t,n||null,new y(b.fromString(e.referencePath)))}}q._jsonSchemaVersion="firestore/documentReference/1.0",q._jsonSchema={type:O("string",q._jsonSchemaVersion),referencePath:O("string")};class se extends zn{constructor(t,e,n){super(t,e,Rn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new q(this.firestore,null,new y(t))}withConverter(t){return new se(this.firestore,t,this._path)}}function nc(r,t,...e){if(r=Ae(r),arguments.length===1&&(t=gn.newId()),$i("doc","path",t),r instanceof Bn){const n=b.fromString(t,...e);return Zn(n),new q(r,null,new y(n))}{if(!(r instanceof q||r instanceof se))throw new p(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(b.fromString(t,...e));return Zn(n),new q(r.firestore,r instanceof se?r.converter:null,new y(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="AsyncQueue";class Br{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ms(this,"async_queue_retry"),this._c=()=>{const n=Xe();n&&g(qr,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=Xe();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Xe();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new ht;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Bt(t))throw t;g(qr,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((n=>{throw this.nc=n,this.rc=!1,ut("INTERNAL UNHANDLED ERROR: ",zr(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Mn.createAndSchedule(this,t,e,n,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&E(47125,{Pc:zr(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,n)=>e.targetTimeMs-n.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function zr(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class $n extends Bn{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Br,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Br(t),this._firestoreClient=void 0,await t}}}function rc(r,t){const e=typeof r=="object"?r:mi(),n=typeof r=="string"?r:we,s=_i(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Ti("firestore");i&&Ou(s,...i)}return s}function ei(r){if(r._terminated)throw new p(f.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Mu(r),r._firestoreClient}function Mu(r){var n,s,i;const t=r._freezeSettings(),e=(function(a,u,c,l){return new eo(a,u,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Zs(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,t);r._componentsProvider||(s=t.localCache)!=null&&s._offlineComponentProvider&&((i=t.localCache)!=null&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new bu(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&(function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Y($.fromBase64String(t))}catch(e){throw new p(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Y($.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Y._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(ie(t,Y._jsonSchema))return Y.fromBase64String(t.bytes)}}Y._jsonSchemaVersion="firestore/bytes/1.0",Y._jsonSchema={type:O("string",Y._jsonSchemaVersion),bytes:O("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new p(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new p(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new p(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return v(this._lat,t._lat)||v(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:et._jsonSchemaVersion}}static fromJSON(t){if(ie(t,et._jsonSchema))return new et(t.latitude,t.longitude)}}et._jsonSchemaVersion="firestore/geoPoint/1.0",et._jsonSchema={type:O("string",et._jsonSchemaVersion),latitude:O("number"),longitude:O("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,t._values)}toJSON(){return{type:nt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(ie(t,nt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new nt(t.vectorValues);throw new p(f.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}nt._jsonSchemaVersion="firestore/vectorValue/1.0",nt._jsonSchema={type:O("string",nt._jsonSchemaVersion),vectorValues:O("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=/^__.*__$/;class Fu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new vt(t,this.data,this.fieldMask,e,this.fieldTransforms):new oe(t,this.data,e,this.fieldTransforms)}}function ri(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E(40011,{Ac:r})}}class jn{constructor(t,e,n,s,i,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new jn({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.Vc({path:e,fc:!1});return n.gc(t),n}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.Vc({path:e,fc:!1});return n.Rc(),n}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return xe(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(ri(this.Ac)&&Lu.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Uu{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Qe(t)}Cc(t,e,n,s=!1){return new jn({Ac:t,methodName:e,Dc:n,path:z.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qu(r){const t=r._freezeSettings(),e=Qe(r._databaseId);return new Uu(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Bu(r,t,e,n,s,i={}){const o=r.Cc(i.merge||i.mergeFields?2:0,t,e,s);ai("Data must be an object, but it was:",o,n);const a=ii(n,o);let u,c;if(i.merge)u=new X(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const m=zu(t,h,e);if(!o.contains(m))throw new p(f.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Qu(l,m)||l.push(m)}u=new X(l),c=o.fieldTransforms.filter((h=>u.covers(h.field)))}else u=null,c=o.fieldTransforms;return new Fu(new H(a),u,c)}function si(r,t){if(oi(r=Ae(r)))return ai("Unsupported field value:",t,r),ii(r,t);if(r instanceof ni)return(function(n,s){if(!ri(s.Ac))throw s.Sc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(n,s){const i=[];let o=0;for(const a of n){let u=si(a,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}})(r,t)}return(function(n,s){if((n=Ae(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Vo(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=C.fromDate(n);return{timestampValue:be(s.serializer,i)}}if(n instanceof C){const i=new C(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:be(s.serializer,i)}}if(n instanceof et)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Y)return{bytesValue:vs(s.serializer,n._byteString)};if(n instanceof q){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pn(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof nt)return(function(o,a){return{mapValue:{fields:{[ts]:{stringValue:es},[ve]:{arrayValue:{values:o.toArray().map((c=>{if(typeof c!="number")throw a.Sc("VectorValues must only contain numeric values.");return wn(a.serializer,c)}))}}}}}})(n,s);throw s.Sc(`Unsupported field value: ${pn(n)}`)})(r,t)}function ii(r,t){const e={};return Wr(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Rt(r,((n,s)=>{const i=si(s,t.mc(n));i!=null&&(e[n]=i)})),{mapValue:{fields:e}}}function oi(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof C||r instanceof et||r instanceof Y||r instanceof q||r instanceof ni||r instanceof nt)}function ai(r,t,e){if(!oi(e)||!Gr(e)){const n=pn(e);throw n==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+n)}}function zu(r,t,e){if((t=Ae(t))instanceof Qn)return t._internalPath;if(typeof t=="string")return ui(r,t);throw xe("Field path arguments must be of type string or ",r,!1,void 0,e)}const $u=new RegExp("[~\\*/\\[\\]]");function ui(r,t,e){if(t.search($u)>=0)throw xe(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Qn(...t.split("."))._internalPath}catch{throw xe(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function xe(r,t,e,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${n}`),o&&(u+=` in document ${s}`),u+=")"),new p(f.INVALID_ARGUMENT,a+r+u)}function Qu(r,t){return r.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new q(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ju(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(li("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ju extends ci{data(){return super.data()}}function li(r,t){return typeof t=="string"?ui(r,t):t instanceof Qn?t._internalPath:t._delegate._internalPath}class Gu{convertValue(t,e="none"){switch(_t(t)){case 0:return null;case 1:return t.booleanValue;case 2:return k(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(mt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw E(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Rt(t,((s,i)=>{n[s]=this.convertValue(i,e)})),n}convertVectorValue(t){var n,s,i;const e=(i=(s=(n=t.fields)==null?void 0:n[ve].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>k(o.doubleValue)));return new nt(e)}convertGeoPoint(t){return new et(k(t.latitude),k(t.longitude))}convertArray(t,e){return(t.values||[]).map((n=>this.convertValue(n,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Le(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Zt(t));default:return null}}convertTimestamp(t){const e=ft(t);return new C(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=b.fromString(t);S(Ns(n),9688,{name:t});const s=new te(n.get(1),n.get(3)),i=new y(n.popFirst(5));return s.isEqual(e)||ut(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class jt{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Tt extends ci{constructor(t,e,n,s,i,o){super(t,e,n,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ie(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(li("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new p(f.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Tt._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Tt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Tt._jsonSchema={type:O("string",Tt._jsonSchemaVersion),bundleSource:O("string","DocumentSnapshot"),bundleName:O("string"),bundle:O("string")};class Ie extends Tt{data(t={}){return super.data(t)}}class Yt{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new jt(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Ie(this._firestore,this._userDataWriter,n.key,n,new jt(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new p(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const u=new Ie(s._firestore,s._userDataWriter,a.doc.key,a.doc,new jt(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const u=new Ie(s._firestore,s._userDataWriter,a.doc.key,a.doc,new jt(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Wu(a.type),doc:u,oldIndex:c,newIndex:l}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new p(f.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Yt._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=gn.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(e.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Wu(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(r){r=Xt(r,q);const t=Xt(r.firestore,$n);return xu(ei(t),r._key).then((e=>Xu(t,r,e)))}Yt._jsonSchemaVersion="firestore/querySnapshot/1.0",Yt._jsonSchema={type:O("string",Yt._jsonSchemaVersion),bundleSource:O("string","QuerySnapshot"),bundleName:O("string"),bundle:O("string")};class Hu extends Gu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Y(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new q(this.firestore,null,e)}}function ic(r,t,e){r=Xt(r,q);const n=Xt(r.firestore,$n),s=Ku(r.converter,t,e);return Yu(n,[Bu(qu(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,at.none())])}function Yu(r,t){return(function(n,s){const i=new ht;return n.asyncQueue.enqueueAndForget((async()=>Tu(await Du(n),s,i))),i.promise})(ei(r),t)}function Xu(r,t,e){const n=e.docs.get(t._key),s=new Hu(r);return new Tt(r,s,t._key,n,new jt(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){Ut=s})(gi),di(new yi("firestore",((n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),a=new $n(new Oi(n.getProvider("auth-internal")),new Fi(o,n.getProvider("app-check-internal")),(function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new p(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new te(c.options.projectId,l)})(o,s),o);return i={useFetchStreams:e,...i},a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),Kn(Hn,Yn,t),Kn(Hn,Yn,"esm2020")})();export{C as T,sc as a,nc as d,rc as g,ic as s};
//# sourceMappingURL=vendor_firebase_firestore-VD6RhEoE.js.map
