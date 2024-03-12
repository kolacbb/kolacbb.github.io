'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "163789b55d582da19dfb9b3346ad212a",
"index.html": "51aeccce47c9dcdf223895be3e74df1e",
"/": "51aeccce47c9dcdf223895be3e74df1e",
"main.dart.js": "358769caa92d0b34b42c54f412e04790",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "807b0b1fab5b836c874a35adffa3d7b2",
"assets/AssetManifest.json": "84a8ce7c51ff49b2b205ef59cc89c1db",
"assets/NOTICES": "1a820457cf9b99eac3f3d4c2b4679ca7",
"assets/FontManifest.json": "0d57585a3dd272a5d0fc5c825658bfec",
"assets/AssetManifest.bin.json": "c876c43ee8d3fcb64ab30655e9b8b98a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "55d37e70583e56c2b37a03056599f9b9",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/drawable/img_divination_blocks_4.png": "7986ed75f79a312f59ed07b99a2d5383",
"assets/assets/drawable/img_divination_blocks_2.png": "e2db3d75052a4c530181f8071ed70b5e",
"assets/assets/drawable/img_divination_blocks_3.png": "23c3b658f75d2f39ef99dbf4bb97b395",
"assets/assets/drawable/img_divination_blocks_1.png": "367f6d32df8fe3ab6de73a8b378e0fd4",
"assets/assets/drawable/app_icon.png": "910145ea94ef8e8bead96ce4f4767781",
"assets/assets/drawable/gif_draw_lots_shake.gif": "277a7e8c9023ce992762384dde176908",
"assets/assets/drawable/img_home_status_bar.png": "4bb424e865d55c5de31a7bbbae2a9c22",
"assets/assets/drawable/img_show_lots_pic.png": "2ce6b855441583ab02c9221a78209b61",
"assets/assets/drawable/lottie_drop_blocks.json": "1d14d7cc6e928e8c2300b691f29cdb60",
"assets/assets/drawable/img_about_hint_bg.png": "02fd456f05e8441360e49b26f7ac3441",
"assets/assets/drawable/img_about_hint_bg.9.png": "b6579e891f4a393cefaa849d8e39921a",
"assets/assets/drawable/img/ndn63cmc.webp": "d3639e02ef3ed64dde945d03a8055880",
"assets/assets/drawable/img/rxvfiwuu.webp": "73a851a587a06f90b7ff26afdd83dfa0",
"assets/assets/drawable/img/98qwjqc7.webp": "cd7abe114f2010fe2ebaec4fd5702ce8",
"assets/assets/drawable/img/035ga3r8.webp": "1f590ab5da706c27fddb0a40d5ab4738",
"assets/assets/drawable/img/q6uo06tk.webp": "66c50ccc159f7ae54a9891a97b7ecdac",
"assets/assets/drawable/img/f5i2d2ag.webp": "5a99b756e7e60c02dc6a96222a3f2142",
"assets/assets/drawable/img/jrykc77f.webp": "e205b9364b584c12421171d3cb3b92be",
"assets/assets/drawable/img/o7hxm82c.webp": "f3dab348123f2798c26cb1973e2b67a2",
"assets/assets/drawable/img/0a0vb2xj.webp": "ccfdb18a20c6e18c0b0d0e37438f8c86",
"assets/assets/drawable/img/y9bfne6h.webp": "b048fd9b2a8556382d0c5bd3e10f895b",
"assets/assets/drawable/img/expawpcz.webp": "00d21d7bd91969f792b888cb9881085e",
"assets/assets/drawable/img/1d3o5kmo.webp": "f0ae690dca8d5d664b30432ed84cad6e",
"assets/assets/drawable/img/6yj9b8i3.webp": "c078cd1d3703cdbc955b41c444c32953",
"assets/assets/drawable/img/zy7tq3i7.webp": "d498b37af17438cc79f800967d4c837b",
"assets/assets/drawable/img/b0n3c6bm.webp": "1e2c55e1a40c72ae8e71bd74cbec5b9b",
"assets/assets/drawable/img/e1420zqh.webp": "1da1c1757c2a4cef94e9c442aade5c02",
"assets/assets/drawable/img/jonf5r66.webp": "0683593b450d2c1a0ca38da9f36a6929",
"assets/assets/drawable/img/dryulb1z.webp": "6f61f0326ecf9905b32e28ad2e8d01b0",
"assets/assets/drawable/img/49y99ssc.webp": "47e9d5bb2e2a7a213c303a8370b7c187",
"assets/assets/drawable/img/y1ov42q3.webp": "6b0fa7848701a22f22b7fb626cdd5dfe",
"assets/assets/drawable/img/m6fazuj8.webp": "3912331e429dffdb7262bdb1f38ca9cc",
"assets/assets/drawable/img/5uo32g8c.webp": "efdb2deb65a89da16609fdf2eac6eb82",
"assets/assets/drawable/img/nsurucva.webp": "2c574db16b694eecf031ae9491de359b",
"assets/assets/drawable/img/alr535eu.webp": "410b0ae03850a15bfac47270c0ccf024",
"assets/assets/drawable/img/if8wrqf1.webp": "14535ae6d6cdf514960ba2cfa4dd2fd6",
"assets/assets/drawable/img/euv6icp1.webp": "520eba7517bd92e48f57be493a2022c0",
"assets/assets/drawable/img/k8wd38ml.webp": "133de9f1e5b62c603f7b5aa17467b1e1",
"assets/assets/drawable/img/nip38n4h.webp": "b7ff419a54ea5a640451c0f2af7ebfa8",
"assets/assets/drawable/img/4sxxfcm6.webp": "2f560bb4ec877f8a666c9e7013d729ea",
"assets/assets/drawable/img/fbq4khm4.webp": "c6baaeb251d3c40c937f2f9186571c87",
"assets/assets/drawable/img/39aayzg2.webp": "776c84a58ce4e8449d0fdafd27dfa0b3",
"assets/assets/drawable/img/z83m4g0j.webp": "aab834f7844ea81ea19c3f2d0037c1a5",
"assets/assets/drawable/img/r4pz58mu.webp": "5af9a24f2e04dc25e52f09c673e284e5",
"assets/assets/drawable/img/tem3e4y5.webp": "12b90db10bdf14df20ab2cc49a12c3e0",
"assets/assets/drawable/img/nwudspdp.webp": "e1f26969168a185b454433773527610d",
"assets/assets/drawable/img/ppej0j60.webp": "c6890b7ede19e32ab6ddc6ca814ce190",
"assets/assets/drawable/img/5uravnbp.webp": "3cac448321ed7a7071939a4d15f39a68",
"assets/assets/drawable/img/egeaxq0n.webp": "d0059741cf55296c54318ac4dc78f59d",
"assets/assets/drawable/img/iwtwncd2.webp": "927bf7422b597f083fa44ecf50be0ff5",
"assets/assets/drawable/img/230lkd0l.webp": "c6d36639d7e7f1680d20e2657036f1b7",
"assets/assets/drawable/img/aowaz0dl.webp": "fdd60529173b766014f02cfb34a5412a",
"assets/assets/drawable/img/hovnoo3b.webp": "ef393a503ba56823762db954a83cd379",
"assets/assets/drawable/img/8fay6q5d.webp": "1f31650ea940cb975d19ecab2fdeab20",
"assets/assets/drawable/img/l97npdl7.webp": "f6a4a53ac502beb73c29bb7bf3e5506c",
"assets/assets/drawable/img/vo8k3xam.webp": "381702a6a3cab4ad9a4c747eb5982ecb",
"assets/assets/drawable/img/bskw8i2n.webp": "96a3d78a1a672a3fa82302ed8beab254",
"assets/assets/drawable/img/8yhhogpl.webp": "0b5e6a6e894a3384c88a7cdb16e0703e",
"assets/assets/drawable/img/ct0fzhq4.webp": "e5b32568464f44fc2339ee2e9e5b58d4",
"assets/assets/drawable/img/gta0e6h3.webp": "911e55eeb08e081dbf00f97d75531b18",
"assets/assets/drawable/img/zwn0uxlk.webp": "0588ab4959fa745b9fc51821173650ef",
"assets/assets/drawable/img/7apdvjuy.webp": "1ad74eff5c52f03290e0f73feb7b0c5a",
"assets/assets/drawable/img/bqkbk4qw.webp": "4a2cf4a69476b3edcdbcdcbdebc0d5b0",
"assets/assets/drawable/img/272d2kp8.webp": "f9a8b40a344e3fc385652d3f51e94cde",
"assets/assets/drawable/img/azew4njs.webp": "0a204f7ba419bc8ce846254904e25a9c",
"assets/assets/drawable/img/mqkvdggt.webp": "81e0d73e7f7b977b3d21725392925c29",
"assets/assets/drawable/img/ad1wz86o.webp": "dae6530229c714d79404999340c93210",
"assets/assets/drawable/img/0m4v20yp.webp": "6a70d05f4b8969a5c4aba37696c43154",
"assets/assets/drawable/img/n89qfnwf.webp": "ecddd2f592af7ee051cb040fa3c81255",
"assets/assets/drawable/img/1um5lr68.webp": "1231bba247daea68e517a5254e9d681d",
"assets/assets/drawable/img/lbhzyx8v.webp": "eecee7b86aed8c8b98a90af005fd6fc8",
"assets/assets/drawable/img/i27uo4m8.webp": "d7f1232fc9b2d558295788a535255bc8",
"assets/assets/drawable/img/egweac6u.webp": "96fcafbcd5475f234f5b6314f87a3e7b",
"assets/assets/drawable/img/h84vb4so.webp": "1257b17870c7334bf32981571c4abdaf",
"assets/assets/drawable/img/cgwu176v.webp": "28080533d1879b1476061fd535bd617f",
"assets/assets/drawable/img/8lyjas2p.webp": "ff0db5657295d7ce0616c45eae8507a7",
"assets/assets/drawable/img/3w0n73vk.webp": "997022513dcdf5d6b013041f356c5ae7",
"assets/assets/drawable/img/fh00koyx.webp": "a9eae3c06162a0e5db2156938087818b",
"assets/assets/drawable/img/is5tf1eo.webp": "70fc1cf463f8621458b671775ad1af7f",
"assets/assets/drawable/img/8w7um4da.webp": "c8c4dd36337c12c28fc4a978ab71abce",
"assets/assets/drawable/img/uw3n2oob.webp": "4d713bb1b8166afd79e028cbf1421b17",
"assets/assets/drawable/img/7ux9il2t.webp": "da6f279e75614bb9d18c09e64e4cf6e4",
"assets/assets/drawable/img/qs48evt0.webp": "f24f7ff26a2c7a2f15f1bcf4d755392b",
"assets/assets/drawable/img/ork1c0n4.webp": "ddcbf228f40fb0fae787072e1fa60178",
"assets/assets/drawable/img/mag2qb8b.webp": "e660b47a5e053964a01574d880719dc5",
"assets/assets/drawable/img/nma4osi6.webp": "8b1ca8bfd14af67a992c4496f081461a",
"assets/assets/drawable/img/qz2wjc50.webp": "46e68079a9d131f2bcae8e45080c62e1",
"assets/assets/drawable/img/obfwj6fn.webp": "97f96b1c2aa80c9168b65186288e3193",
"assets/assets/drawable/img/on2nvzzo.webp": "195f8920a7ee56f7040278927df8b537",
"assets/assets/drawable/img/286v2f9m.webp": "b70ca612f8bcef82a57ed7b30698620f",
"assets/assets/drawable/img/otaxdr61.webp": "0aa52e1463eea96f209a9976a9866b11",
"assets/assets/drawable/img/resdwcir.webp": "c8d6c5ac2faff52bf24080fc8ffe3940",
"assets/assets/drawable/img/jt8p5yq3.webp": "8d4f57a2cb723c92f6180a5bbcc24c43",
"assets/assets/drawable/img/lc20cf5k.webp": "e1c928804c2b7c725f9df51679db1339",
"assets/assets/drawable/img/53v1c9lh.webp": "0aceb8909d515140307e4ab219e94c7f",
"assets/assets/drawable/img/v8twzxch.webp": "67289ad8bc02b84152cd179f58b36d34",
"assets/assets/drawable/img/veg2jb5o.webp": "b5ee4a2e40337cd4aee576ab23eae7b5",
"assets/assets/drawable/img/am0v7gx7.webp": "f9e1bb5dfa37efc8ee08a2b275456009",
"assets/assets/drawable/img/3me1uy3v.webp": "47fa60a311391ef75caf0344dee0810a",
"assets/assets/drawable/img/sflksqqs.webp": "d66bffaadcc8c8e2230e8e8eb90fa5e4",
"assets/assets/drawable/img/gzn45kwm.webp": "0e053a2af9801e3a9f31faa06b1e5109",
"assets/assets/drawable/img/22sr495x.webp": "dda713d4d0d43f89cec9baa58d62dc3a",
"assets/assets/drawable/img/jbxvrkpm.webp": "b5fdab79d539fef09a4e3cfdc881b9cc",
"assets/assets/drawable/img/f1162kga.webp": "02a4f378192cbd55e687d847f5ce5071",
"assets/assets/drawable/img/xkvq65ki.webp": "2e38ee2cead98694790ca74210946393",
"assets/assets/drawable/img/uqy5pi35.webp": "0ec8b01e6315d9efb7c68e625551fbf5",
"assets/assets/drawable/img/138a7b3i.webp": "d959da230e81361a56ddc45b1081c9f0",
"assets/assets/drawable/img/3lx7tjce.webp": "6e7e2be2498e2207f08ec6ebb3a46c53",
"assets/assets/drawable/img/0nutbj80.webp": "cc0a70982210103fe6c98e105701c303",
"assets/assets/drawable/img/xrshpf19.webp": "22ca7c6db39c793b79a3a876aaeeeda9",
"assets/assets/drawable/img/5symdaen.webp": "ee7f8fd0380c3994af64d30a9d42c2f6",
"assets/assets/drawable/lottie_draw_lots_shake.json": "a9627d59fcfeee7636f80ada94ef2867",
"assets/assets/drawable/img_draw_lost_pic.png": "fa143b13c61462e88db17077bd16e855",
"assets/assets/drawable/img_home_header.png": "79bc24b90a9cb42a27b1f7a8fcb5bcc8",
"assets/assets/data.json": "0636d1bfa344754504e572a485d68d5f",
"assets/assets/fonts/gotham_round_medium.ttf": "ff02575f8b256f9a32d8531f3aaebb41",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
