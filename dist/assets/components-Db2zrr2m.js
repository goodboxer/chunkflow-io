import{d as A,r as u,c as g,o as I}from"./vendor_vue-DGwlV1SQ.js";import{g as G,d as S,a as j,T as N,s as O}from"./vendor_firebase_firestore-VD6RhEoE.js";import{g as T,s as D,a as W,c as R,u as H,b as _,G as q,d as K,o as V}from"./vendor_firebase_auth-B-CTh_QA.js";import{i as L}from"./vendor_firebase_app-YLVDrfJD.js";import{g as X}from"./vendor_firebase_misc-rlVDSRsL.js";const k={apiKey:"AIzaSyDBmw23uE_yM7NZ0YKEydWmAvUsuwX-VEI",authDomain:"chunkflow-475417.firebaseapp.com",projectId:"chunkflow-475417",storageBucket:"chunkflow-475417.firebasestorage.app",messagingSenderId:"898500597511",appId:"1:898500597511:web:a9f0b29e7a8112328457a2"};function Y(){const e=["apiKey","authDomain","projectId","storageBucket","messagingSenderId","appId"];for(const s of e)if(!k[s])return console.warn(`Firebase config missing: ${s}`),!1;return!0}let h=null,o=null,b=null,E=null;if(Y())try{h=L(k),o=T(h),b=G(h),E=X(h),console.log("Firebase initialized successfully")}catch(e){console.error("Firebase initialization error:",e)}else console.warn("Firebase not initialized. Add Firebase config to .env.local to enable user accounts and data persistence.");async function F(e,s,t){if(!o)throw new Error("Firebase Auth is not initialized");const i=await R(o,e,s);return t&&i.user&&await H(i.user,{displayName:t}),i}async function C(e,s){if(!o)throw new Error("Firebase Auth is not initialized");return await _(o,e,s)}async function M(){if(!o)throw new Error("Firebase Auth is not initialized");const e=new q;return e.addScope("profile"),e.addScope("email"),await K(o,e)}async function U(){if(!o)throw new Error("Firebase Auth is not initialized");await D(o)}async function z(e){if(!o)throw new Error("Firebase Auth is not initialized");await W(o,e)}function Z(){return(o==null?void 0:o.currentUser)||null}function $(e){return o?V(o,e):(console.warn("Firebase Auth is not initialized"),()=>{})}async function J(e,s){if(!b)throw new Error("Firestore is not initialized");const t=S(b,"users",e),i=N.now();await O(t,{...s,uid:e,updatedAt:i,createdAt:s.createdAt||i},{merge:!0})}async function B(e){if(!b)throw new Error("Firestore is not initialized");const s=S(b,"users",e),t=await j(s);return t.exists()?t.data():null}const re=Object.freeze(Object.defineProperty({__proto__:null,get app(){return h},get auth(){return o},get db(){return b},getCurrentUser:Z,getUserProfile:B,onAuthChange:$,resetPassword:z,saveUserProfile:J,signInWithEmail:C,signInWithGoogle:M,signOutUser:U,signUpWithEmail:F,get storage(){return E}},Symbol.toStringTag,{value:"Module"})),ie=A({name:"AuthModal",props:{show:{type:Boolean,required:!0},initialMode:{type:String,default:"login"}},emits:["close","authenticated"],setup(e,{emit:s}){const t=u(e.initialMode),i=u(""),l=u(""),m=u(""),f=u(""),r=u(""),d=u(!1),v=u(""),y=g(()=>{switch(t.value){case"signup":return"Create Account";case"reset":return"Reset Password";default:return"Sign In"}}),w=g(()=>{if(d.value)return"Processing...";switch(t.value){case"signup":return"Sign Up";case"reset":return"Send Reset Email";default:return"Sign In"}});function p(){i.value="",l.value="",m.value="",f.value="",r.value="",v.value=""}function x(n){t.value=n,p()}async function P(){if(r.value="",v.value="",!i.value||!i.value.includes("@")){r.value="Please enter a valid email address";return}if(t.value==="reset"){try{d.value=!0,await z(i.value),v.value="Password reset email sent! Check your inbox.",setTimeout(()=>x("login"),3e3)}catch(n){r.value=n.message||"Failed to send reset email"}finally{d.value=!1}return}if(!l.value||l.value.length<6){r.value="Password must be at least 6 characters";return}if(t.value==="signup"){if(l.value!==m.value){r.value="Passwords do not match";return}if(!f.value){r.value="Please enter your name";return}}try{d.value=!0,t.value==="signup"?await F(i.value,l.value,f.value):await C(i.value,l.value),s("authenticated"),s("close"),p()}catch(n){n.code==="auth/email-already-in-use"?r.value="Email already in use. Try signing in instead.":n.code==="auth/invalid-credential"?r.value="Invalid email or password":n.code==="auth/user-not-found"?r.value="No account found with this email":n.code==="auth/wrong-password"?r.value="Incorrect password":r.value=n.message||"Authentication failed"}finally{d.value=!1}}async function a(){r.value="";try{d.value=!0,await M(),s("authenticated"),s("close"),p()}catch(n){n.code==="auth/popup-closed-by-user"?r.value="Sign-in cancelled":r.value=n.message||"Google sign-in failed"}finally{d.value=!1}}function c(){s("close"),p()}return{mode:t,email:i,password:l,confirmPassword:m,displayName:f,error:r,success:v,loading:d,title:y,buttonText:w,switchMode:x,handleEmailAuth:P,handleGoogleAuth:a,close:c}},template:`
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" @click.self="close">
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
        <!-- Header -->
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-800">{{ title }}</h2>
          <button @click="close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {{ error }}
        </div>

        <!-- Success Message -->
        <div v-if="success" class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {{ success }}
        </div>

        <!-- Email/Password Form -->
        <form @submit.prevent="handleEmailAuth" class="space-y-4">
          <!-- Name (signup only) -->
          <div v-if="mode === 'signup'">
            <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              v-model="displayName"
              type="text"
              placeholder="Enter your name"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :disabled="loading"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              v-model="email"
              type="email"
              placeholder="you@example.com"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :disabled="loading"
            />
          </div>

          <!-- Password (not for reset) -->
          <div v-if="mode !== 'reset'">
            <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              v-model="password"
              type="password"
              placeholder="Enter password (6+ characters)"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :disabled="loading"
            />
          </div>

          <!-- Confirm Password (signup only) -->
          <div v-if="mode === 'signup'">
            <label class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              v-model="confirmPassword"
              type="password"
              placeholder="Re-enter password"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :disabled="loading"
            />
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            :disabled="loading"
          >
            {{ buttonText }}
          </button>
        </form>

        <!-- Divider -->
        <div class="my-6 flex items-center">
          <div class="flex-1 border-t border-gray-300"></div>
          <span class="px-4 text-sm text-gray-500">or</span>
          <div class="flex-1 border-t border-gray-300"></div>
        </div>

        <!-- Google Sign In -->
        <button
          @click="handleGoogleAuth"
          class="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2 font-medium"
          :disabled="loading"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        <!-- Mode Switchers -->
        <div class="mt-6 text-center text-sm">
          <div v-if="mode === 'login'">
            <p class="text-gray-600">
              Don't have an account?
              <button @click="switchMode('signup')" class="text-blue-600 hover:underline font-medium">Sign up</button>
            </p>
            <button @click="switchMode('reset')" class="text-blue-600 hover:underline font-medium mt-2">
              Forgot password?
            </button>
          </div>
          <div v-else-if="mode === 'signup'">
            <p class="text-gray-600">
              Already have an account?
              <button @click="switchMode('login')" class="text-blue-600 hover:underline font-medium">Sign in</button>
            </p>
          </div>
          <div v-else>
            <button @click="switchMode('login')" class="text-blue-600 hover:underline font-medium">
              Back to sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  `}),oe=A({name:"UserProfile",props:{user:{type:Object,required:!0},show:{type:Boolean,required:!0}},emits:["close","signedOut"],setup(e,{emit:s}){const t=u(null),i=u(!0),l=u(""),m=g(()=>{var a,c;return((a=e.user)==null?void 0:a.displayName)||((c=t.value)==null?void 0:c.displayName)||"User"}),f=g(()=>{var a;return((a=e.user)==null?void 0:a.email)||"No email"}),r=g(()=>{var a,c;return((c=(a=t.value)==null?void 0:a.subscription)==null?void 0:c.plan)||"free"}),d=g(()=>{var a,c;return((c=(a=t.value)==null?void 0:a.subscription)==null?void 0:c.status)||"active"}),v=g(()=>{var a;return((a=t.value)==null?void 0:a.usage)||{audioBooksCreated:0,audioMinutesGenerated:0,imagesGenerated:0,storageUsedMB:0}}),y=g(()=>{switch(r.value){case"pro":return"bg-purple-100 text-purple-800";case"basic":return"bg-blue-100 text-blue-800";case"enterprise":return"bg-yellow-100 text-yellow-800";default:return"bg-gray-100 text-gray-800"}}),w=g(()=>{switch(d.value){case"active":return"bg-green-100 text-green-800";case"canceled":return"bg-orange-100 text-orange-800";case"expired":return"bg-red-100 text-red-800";default:return"bg-gray-100 text-gray-800"}});async function p(){if(e.user)try{i.value=!0,l.value="";const a=await B(e.user.uid);t.value=a}catch(a){console.error("Failed to load user profile:",a),l.value="Failed to load profile data"}finally{i.value=!1}}async function x(){try{await U(),s("signedOut"),s("close")}catch(a){console.error("Sign out failed:",a),l.value="Failed to sign out"}}function P(){s("close")}return I(()=>{e.user&&p()}),{userProfile:t,loading:i,error:l,displayName:m,email:f,subscriptionPlan:r,subscriptionStatus:d,usage:v,planBadgeColor:y,statusBadgeColor:w,handleSignOut:x,close:P}},template:`
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" @click.self="close">
      <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 p-6 max-h-[90vh] overflow-y-auto">
        <!-- Header -->
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-800">Profile</h2>
          <button @click="close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="p-4 bg-red-100 border border-red-400 text-red-700 rounded mb-4">
          {{ error }}
        </div>

        <!-- Profile Content -->
        <div v-else class="space-y-6">
          <!-- User Info -->
          <div class="flex items-center space-x-4 pb-6 border-b">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {{ displayName.charAt(0).toUpperCase() }}
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-800">{{ displayName }}</h3>
              <p class="text-gray-600">{{ email }}</p>
            </div>
          </div>

          <!-- Subscription Info -->
          <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
            <h4 class="text-lg font-semibold text-gray-800 mb-3">Subscription</h4>
            <div class="flex items-center gap-3 mb-2">
              <span :class="planBadgeColor" class="px-3 py-1 rounded-full text-sm font-medium uppercase">
                {{ subscriptionPlan }}
              </span>
              <span :class="statusBadgeColor" class="px-3 py-1 rounded-full text-sm font-medium">
                {{ subscriptionStatus }}
              </span>
            </div>
            <p class="text-sm text-gray-600 mt-2">
              <span v-if="subscriptionPlan === 'free'">
                Upgrade to unlock unlimited audiobook creation and advanced features.
              </span>
              <span v-else>
                Thank you for being a {{ subscriptionPlan }} member!
              </span>
            </p>
          </div>

          <!-- Usage Statistics -->
          <div>
            <h4 class="text-lg font-semibold text-gray-800 mb-3">Usage Statistics</h4>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-50 rounded-lg p-4">
                <div class="text-3xl font-bold text-blue-600">{{ usage.audioBooksCreated }}</div>
                <div class="text-sm text-gray-600 mt-1">Audiobooks Created</div>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <div class="text-3xl font-bold text-purple-600">{{ usage.audioMinutesGenerated }}</div>
                <div class="text-sm text-gray-600 mt-1">Audio Minutes</div>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <div class="text-3xl font-bold text-green-600">{{ usage.imagesGenerated }}</div>
                <div class="text-sm text-gray-600 mt-1">Images Generated</div>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <div class="text-3xl font-bold text-orange-600">{{ usage.storageUsedMB.toFixed(1) }}</div>
                <div class="text-sm text-gray-600 mt-1">MB Storage Used</div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="pt-4 border-t space-y-3">
            <button
              v-if="subscriptionPlan === 'free'"
              class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-medium"
            >
              Upgrade to Pro
            </button>
            <button
              @click="handleSignOut"
              class="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition font-medium"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  `});export{ie as A,oe as U,Z as g,re as i,$ as o};
//# sourceMappingURL=components-Db2zrr2m.js.map
