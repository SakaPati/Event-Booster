// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/selectCountry.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countries = exports.codeContry = void 0;
var countries = exports.countries = [{
  value: "AD",
  label: "Andorra"
}, {
  value: "AI",
  label: "Anguilla"
}, {
  value: "AR",
  label: "Argentina"
}, {
  value: "AU",
  label: "Australia"
}, {
  value: "AT",
  label: "Austria"
}, {
  value: "AZ",
  label: "Azerbaijan"
}, {
  value: "BS",
  label: "Bahamas"
}, {
  value: "BH",
  label: "Bahrain"
}, {
  value: "BB",
  label: "Barbados"
}, {
  value: "BE",
  label: "Belgium"
}, {
  value: "BM",
  label: "Bermuda"
}, {
  value: "BR",
  label: "Brazil"
}, {
  value: "BG",
  label: "Bulgaria"
}, {
  value: "CA",
  label: "Canada"
}, {
  value: "CL",
  label: "Chile"
}, {
  value: "CN",
  label: "China"
}, {
  value: "CO",
  label: "Colombia"
}, {
  value: "CR",
  label: "Costa Rica"
}, {
  value: "HR",
  label: "Croatia"
}, {
  value: "CY",
  label: "Cyprus"
}, {
  value: "CZ",
  label: "Czech Republic"
}, {
  value: "DK",
  label: "Denmark"
}, {
  value: "DO",
  label: "Dominican Republic"
}, {
  value: "EC",
  label: "Ecuador"
}, {
  value: "EE",
  label: "Estonia"
}, {
  value: "FO",
  label: "Faroe Islands"
}, {
  value: "FI",
  label: "Finland"
}, {
  value: "FR",
  label: "France"
}, {
  value: "GE",
  label: "Georgia"
}, {
  value: "DE",
  label: "Germany"
}, {
  value: "GH",
  label: "Ghana"
}, {
  value: "GI",
  label: "Gibraltar"
}, {
  value: "GB",
  label: "Great Britain"
}, {
  value: "GR",
  label: "Greece"
}, {
  value: "HK",
  label: "Hong Kong"
}, {
  value: "HU",
  label: "Hungary"
}, {
  value: "IS",
  label: "Iceland"
}, {
  value: "IN",
  label: "India"
}, {
  value: "IE",
  label: "Ireland"
}, {
  value: "IL",
  label: "Israel"
}, {
  value: "IT",
  label: "Italy"
}, {
  value: "JM",
  label: "Jamaica"
}, {
  value: "JP",
  label: "Japan"
}, {
  value: "KR",
  label: "Korea, Republic of"
}, {
  value: "LV",
  label: "Latvia"
}, {
  value: "LB",
  label: "Lebanon"
}, {
  value: "LT",
  label: "Lithuania"
}, {
  value: "LU",
  label: "Luxembourg"
}, {
  value: "MY",
  label: "Malaysia"
}, {
  value: "MT",
  label: "Malta"
}, {
  value: "MX",
  label: "Mexico"
}, {
  value: "MC",
  label: "Monaco"
}, {
  value: "ME",
  label: "Montenegro"
}, {
  value: "MA",
  label: "Morocco"
}, {
  value: "NL",
  label: "Netherlands"
}, {
  value: "AN",
  label: "Netherlands Antilles"
}, {
  value: "NZ",
  label: "New Zealand"
}, {
  value: "ND",
  label: "Northern Ireland"
}, {
  value: "NO",
  label: "Norway"
}, {
  value: "PE",
  label: "Peru"
}, {
  value: "PL",
  label: "Poland"
}, {
  value: "PT",
  label: "Portugal"
}, {
  value: "RO",
  label: "Romania"
}, {
  value: "RU",
  label: "Russian Federation"
}, {
  value: "LC",
  label: "Saint Lucia"
}, {
  value: "SA",
  label: "Saudi Arabia"
}, {
  value: "RS",
  label: "Serbia"
}, {
  value: "SG",
  label: "Singapore"
}, {
  value: "SK",
  label: "Slovakia"
}, {
  value: "SI",
  label: "Slovenia"
}, {
  value: "ZA",
  label: "South Africa"
}, {
  value: "ES",
  label: "Spain"
}, {
  value: "SE",
  label: "Sweden"
}, {
  value: "CH",
  label: "Switzerland"
}, {
  value: "TW",
  label: "Taiwan"
}, {
  value: "TH",
  label: "Thailand"
}, {
  value: "TT",
  label: "Trinidad and Tobago"
}, {
  value: "TR",
  label: "Turkey"
}, {
  value: "UA",
  label: "Ukraine"
}, {
  value: "AE",
  label: "United Arab Emirates"
}, {
  value: "US",
  label: "United States"
}, {
  value: "UY",
  label: "Uruguay"
}, {
  value: "VE",
  label: "Venezuela"
}];
var BASE_URL = "https://app.ticketmaster.com/discovery/v2/";
var API_KEY = "apikey=L5MVL2ixI21Ju9UXQGF2ATKeC7WJ1iTw";
var btnContry = document.querySelector(".choose__btn");
var contryList = document.querySelector(".select__contry");
var icon = document.querySelectorAll(".container__input-icon");
btnContry.addEventListener("click", openSelectContry);
contryList.addEventListener("click", selectContry);
// Функция для открытия списка страны
var codeContry = exports.codeContry = null;
function openSelectContry() {
  icon[1].classList.toggle("rotate");
  contryList.toggleAttribute("hidden");
}
// Функция для получения данных
function selectContry(event) {
  exports.codeContry = codeContry = event.target.dataset.value;
  console.log(codeContry);
  fetch("".concat(BASE_URL, "events.json?countryCode=").concat(codeContry, "&classificationName=music&").concat(API_KEY)).then(function (response) {
    return response.json();
  }).then(function (data) {
    return console.log(data);
  });
  openSelectContry();
}
// Функция для отрисовки страны
function renderSelectCountry() {
  var listContry = document.querySelector(".select__contry");
  countries.forEach(function (contry) {
    var createContry = document.createElement("li");
    createContry.textContent = contry.label;
    createContry.dataset.value = contry.value;
    listContry.appendChild(createContry);
  });
}
renderSelectCountry();
},{}],"js/events.js":[function(require,module,exports) {
"use strict";

var _selectCountry = require("./selectCountry");
document.addEventListener("DOMContentLoaded", function () {
  var refs = {
    inputEvent: document.querySelector("#event-searching"),
    countrySearch: document.querySelector(".choose__input"),
    list: document.querySelector(".hero__list"),
    error: document.querySelector("#hero__error")
  };
  var BASE_URL = "https://app.ticketmaster.com/discovery/v2/";
  var API_KEY = "apikey=L5MVL2ixI21Ju9UXQGF2ATKeC7WJ1iTw";
  refs.inputEvent.addEventListener("input", inputSearching);
  function inputSearching() {
    var eventCountry = _selectCountry.codeContry;
    console.log(eventCountry);
    fetch("".concat(BASE_URL, "events.json?countryCode=").concat(_selectCountry.codeContry, "&classificationName=music&").concat(API_KEY)).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
      var array = data._embedded.events;
      var dataInfo;
      var itemsArray = array.map(function (element) {
        var _element$_embedded;
        var imgObj = element.images.find(function (img) {
          return img.width == 305 && img.height == 225;
        });
        dataInfo = {
          img: imgObj ? imgObj.url : "",
          name: element.name,
          time: element.dates.timezone,
          address: ((_element$_embedded = element._embedded) === null || _element$_embedded === void 0 || (_element$_embedded = _element$_embedded.venues) === null || _element$_embedded === void 0 || (_element$_embedded = _element$_embedded[0]) === null || _element$_embedded === void 0 || (_element$_embedded = _element$_embedded.city) === null || _element$_embedded === void 0 ? void 0 : _element$_embedded.name) || ""
        };
        for (var i = 1; i <= data.page.size; i++) {
          refs.list.innerHTML = "\n              <ul class=\"hero__list other\">\n              <li class=\"hero__list-item\">\n              <img\n                  src=".concat(dataInfo.img, "\n                  class=\"list__item-img\"\n                />\n                <div class=\"list__item-border\"></div>\n              <h3 class=\"list__item-title eurovision\">").concat(dataInfo.name, "</h3>\n              <time datetime=\"2021-05-13\" class=\"list__item-time\">").concat(dataInfo.time, "</time>\n              <address class=\"list__item-address\">\n                <svg width=\"6\" height=\"9\">\n                  <use href=\"./icons/symbol-defs.svg#icon-location\"></use>\n                </svg>\n                ").concat(dataInfo.address, "\n              </address>\n              </li>\n              </ul>\n              ");
          console.log("hi");
        }
      });
    });
  }
});
},{"./selectCountry":"js/selectCountry.js"}],"main.js":[function(require,module,exports) {
"use strict";

require("./js/events");
require("./js/selectCountry");
},{"./js/events":"js/events.js","./js/selectCountry":"js/selectCountry.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58994" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map