var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return l.Date.now()};function v(e,t,n){var o,i,r,a,f,u,l=0,c=!1,v=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function S(e){return l=e,f=setTimeout(j,t),c?b(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-l>=r}function j(){var e=m();if(h(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-u);return v?d(n,r-(e-l)):n}(e))}function O(e){return f=void 0,y&&o?b(e):(o=i=void 0,a)}function w(){var e=m(),n=h(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return S(u);if(v)return f=setTimeout(j,t),b(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,r=(v="maxWait"in n)?s(p(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=i=f=void 0},w.flush=function(){return void 0===f?a:O(m())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||r.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),b=document.querySelector("input"),S=document.querySelector("textarea"),h=document.querySelector("button"),j={email:"",message:""};b.addEventListener("input",w),S.addEventListener("input",w),h.addEventListener("click",(function(e){e.preventDefault();const t=JSON.parse(localStorage.getItem("feedback-form-state"));b.value&&S.value?(console.log(t),localStorage.removeItem("feedback-form-state"),j.email="",j.message="",y.reset()):(console.log("error: Not all fields are filled"),alert("Please check if all fields are filled"))})),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(b.value=e.email,S.value=e.message,j.email=e.email,j.message=e.message)}();const O=t((function(){localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500);function w(e){j[this.name]=e.target.value,O()}
//# sourceMappingURL=03-feedback.17dd93a0.js.map
