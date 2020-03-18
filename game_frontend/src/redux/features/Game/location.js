/*     1 */ $compiledmod = function() {
/*     2 */     var $scope146 = (function($forcegbl) {
/*     3 */         var $wakeFromSuspension = function() {
/*     4 */             var susp = $scope146.$wakingSuspension;
/*     5 */             $scope146.$wakingSuspension = undefined;
/*     6 */             $blk = susp.$blk;
/*     7 */             $loc = susp.$loc;
/*     8 */             $gbl = susp.$gbl;
/*     9 */             $exc = susp.$exc;
/*    10 */             $err = susp.$err;
/*    11 */             $postfinally = susp.$postfinally;
/*    12 */             $currLineNo = susp.$lineno;
/*    13 */             $currColNo = susp.$colno;
/*    14 */             Sk.lastYield = Date.now();
/*    15 */             try {
/*    16 */                 $ret = susp.child.resume();
/*    17 */             } catch (err) {
/*    18 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*    19 */                     err = new Sk.builtin.ExternalError(err);
/*    20 */                 }
/*    21 */                 err.traceback.push({
/*    22 */                     lineno: $currLineNo,
/*    23 */                     colno: $currColNo,
/*    24 */                     filename: '&lt;stdin&gt;.py'
/*    25 */                 });
/*    26 */                 if ($exc.length &gt; 0) {
/*    27 */                     $err = err;
/*    28 */                     $blk = $exc.pop();
/*    29 */                 } else {
/*    30 */                     throw err;
/*    31 */                 }
/*    32 */             }
/*    33 */         };
/*    34 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*    35 */             var susp = new Sk.misceval.Suspension();
/*    36 */             susp.child = $child;
/*    37 */             susp.resume = function() {
/*    38 */                 $scope146.$wakingSuspension = susp;
/*    39 */                 return $scope146();
/*    40 */             };
/*    41 */             susp.data = susp.child.data;
/*    42 */             susp.$blk = $blk;
/*    43 */             susp.$loc = $loc;
/*    44 */             susp.$gbl = $gbl;
/*    45 */             susp.$exc = $exc;
/*    46 */             susp.$err = $err;
/*    47 */             susp.$postfinally = $postfinally;
/*    48 */             susp.$filename = $filename;
/*    49 */             susp.$lineno = $lineno;
/*    50 */             susp.$colno = $colno;
/*    51 */             susp.optional = susp.child.optional;
/*    52 */             susp.$tmps = {};
/*    53 */             return susp;
/*    54 */         };
/*    55 */         var $gbl = $forcegbl || {},
/*    56 */             $blk = 0,
/*    57 */             $exc = [],
/*    58 */             $loc = $gbl,
/*    59 */             $cell = {},
/*    60 */             $err = undefined;
/*    61 */         $loc.__file__ = new Sk.builtins.str('&lt;stdin&gt;.py');
/*    62 */         var $ret = undefined,
/*    63 */             $postfinally = undefined,
/*    64 */             $currLineNo = undefined,
/*    65 */             $currColNo = undefined;
/*    66 */         if (typeof Sk.execStart === 'undefined') {
/*    67 */             Sk.execStart = Date.now()
/*    68 */         }
/*    69 */         if (typeof Sk.lastYield === 'undefined') {
/*    70 */             Sk.lastYield = Date.now()
/*    71 */         }
/*    72 */         if ($scope146.$wakingSuspension !== undefined) {
/*    73 */             $wakeFromSuspension();
/*    74 */         }
/*    75 */         if (Sk.retainGlobals) {
/*    76 */             if (Sk.globals) {
/*    77 */                 $gbl = Sk.globals;
/*    78 */                 Sk.globals = $gbl;
/*    79 */                 $loc = $gbl;
/*    80 */             }
/*    81 */             if (Sk.globals) {
/*    82 */                 $gbl = Sk.globals;
/*    83 */                 Sk.globals = $gbl;
/*    84 */                 $loc = $gbl;
/*    85 */                 $loc.__file__ = new Sk.builtins.str('&lt;stdin&gt;.py');
/*    86 */             } else {
/*    87 */                 Sk.globals = $gbl;
/*    88 */             }
/*    89 */         } else {
/*    90 */             Sk.globals = $gbl;
/*    91 */         }
/*    92 */         while (true) {
/*    93 */             try {
/*    94 */                 var $dateNow = Date.now();
/*    95 */                 if ($dateNow - Sk.execStart &gt; Sk.execLimit) {
/*    96 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*    97 */                 }
/*    98 */                 if ($dateNow - Sk.lastYield &gt; Sk.yieldLimit) {
/*    99 */                     var $susp = $saveSuspension({
/*   100 */                         data: {
/*   101 */                             type: 'Sk.yield'
/*   102 */                         },
/*   103 */                         resume: function() {}
/*   104 */                     }, '&lt;stdin&gt;.py', $currLineNo, $currColNo);
/*   105 */                     $susp.$blk = $blk;
/*   106 */                     $susp.optional = true;
/*   107 */                     return $susp;
/*   108 */                 }
/*   109 */                 switch ($blk) {
/*   110 */                     case 0:
/*   111 */                         /* --- module entry --- */ if (Sk.breakpoints('&lt;stdin&gt;.py', 1, 0)) {
/*   112 */                             var $susp = $saveSuspension({
/*   113 */                                 data: {
/*   114 */                                     type: 'Sk.debug'
/*   115 */                                 },
/*   116 */                                 resume: function() {}
/*   117 */                             }, '&lt;stdin&gt;.py', 1, 0);
/*   118 */                             $susp.$blk = 1;
/*   119 */                             $susp.optional = true;
/*   120 */                             return $susp;
/*   121 */                         }
/*   122 */                         $blk = 1; /* allowing case fallthrough */
/*   123 */                     case 1:
/*   124 */                         /* --- debug breakpoint for line 1 --- */
/*   125 */                         //
/*   126 */                         // line 1:
/*   127 */                         // class Location(object):
/*   128 */                         // ^
/*   129 */                         //
/*   130 */                         $currLineNo = 1;
/*   131 */                         $currColNo = 0;
/*   132 */ 
/*   133 */                         var $loadname147 = $loc.object !== undefined ? $loc.object : Sk.misceval.loadname('object', $gbl);;
/*   134 */                         $scope148.co_name = new Sk.builtins['str']('Location');
/*   135 */                         $ret = Sk.misceval.buildClass($gbl, $scope148, 'Location', [$loadname147], $cell);
/*   136 */                         $loc.Location = $ret;
/*   137 */                         return $loc;
/*   138 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   139 */                 }
/*   140 */             } catch (err) {
/*   141 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   142 */                     err = new Sk.builtin.ExternalError(err);
/*   143 */                 }
/*   144 */                 err.traceback.push({
/*   145 */                     lineno: $currLineNo,
/*   146 */                     colno: $currColNo,
/*   147 */                     filename: '&lt;stdin&gt;.py'
/*   148 */                 });
/*   149 */                 if ($exc.length &gt; 0) {
/*   150 */                     $err = err;
/*   151 */                     $blk = $exc.pop();
/*   152 */                     continue;
/*   153 */                 } else {
/*   154 */                     throw err;
/*   155 */                 }
/*   156 */             }
/*   157 */         }
/*   158 */     });
/*   159 */     var $scope148 = (function $Location$class_outer($globals, $locals, $cell) {
/*   160 */         var $gbl = $globals,
/*   161 */             $loc = $locals;
/*   162 */         $free = $globals;
/*   163 */         (function $Location$_closure($cell) {
/*   164 */             var $blk = 0,
/*   165 */                 $exc = [],
/*   166 */                 $ret = undefined,
/*   167 */                 $postfinally = undefined,
/*   168 */                 $currLineNo = undefined,
/*   169 */                 $currColNo = undefined;
/*   170 */             if (typeof Sk.execStart === 'undefined') {
/*   171 */                 Sk.execStart = Date.now()
/*   172 */             }
/*   173 */             while (true) {
/*   174 */                 try {
/*   175 */                     var $dateNow = Date.now();
/*   176 */                     if ($dateNow - Sk.execStart &gt; Sk.execLimit) {
/*   177 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   178 */                     }
/*   179 */                     switch ($blk) {
/*   180 */                         case 0:
/*   181 */                             /* --- class entry --- */
/*   182 */                             //
/*   183 */                             // line 2:
/*   184 */                             //     def __init__(self, x, y):
/*   185 */                             //     ^
/*   186 */                             //
/*   187 */                             $currLineNo = 2;
/*   188 */                             $currColNo = 4;
/*   189 */ 
/*   190 */                             $scope149.co_name = new Sk.builtins['str']('__init__');
/*   191 */                             $scope149.co_varnames = ['self', 'x', 'y'];
/*   192 */                             var $funcobj153 = new Sk.builtins['function']($scope149, $gbl);
/*   193 */                             $loc.__init__ = $funcobj153;
/*   194 */                             //
/*   195 */                             // line 6:
/*   196 */                             //     def __add__(self, direction):
/*   197 */                             //     ^
/*   198 */                             //
/*   199 */                             $currLineNo = 6;
/*   200 */                             $currColNo = 4;
/*   201 */ 
/*   202 */                             $scope154.co_name = new Sk.builtins['str']('__add__');
/*   203 */                             $scope154.co_varnames = ['self', 'direction'];
/*   204 */                             var $funcobj166 = new Sk.builtins['function']($scope154, $gbl);
/*   205 */                             $loc.__add__ = $funcobj166;
/*   206 */                             //
/*   207 */                             // line 9:
/*   208 */                             //     def __sub__(self, direction):
/*   209 */                             //     ^
/*   210 */                             //
/*   211 */                             $currLineNo = 9;
/*   212 */                             $currColNo = 4;
/*   213 */ 
/*   214 */                             $scope167.co_name = new Sk.builtins['str']('__sub__');
/*   215 */                             $scope167.co_varnames = ['self', 'direction'];
/*   216 */                             var $funcobj179 = new Sk.builtins['function']($scope167, $gbl);
/*   217 */                             $loc.__sub__ = $funcobj179;
/*   218 */                             //
/*   219 */                             // line 12:
/*   220 */                             //     def __repr__(self):
/*   221 */                             //     ^
/*   222 */                             //
/*   223 */                             $currLineNo = 12;
/*   224 */                             $currColNo = 4;
/*   225 */ 
/*   226 */                             $scope180.co_name = new Sk.builtins['str']('__repr__');
/*   227 */                             $scope180.co_varnames = ['self'];
/*   228 */                             var $funcobj190 = new Sk.builtins['function']($scope180, $gbl);
/*   229 */                             $loc.__repr__ = $funcobj190;
/*   230 */                             //
/*   231 */                             // line 15:
/*   232 */                             //     def __eq__(self, other):
/*   233 */                             //     ^
/*   234 */                             //
/*   235 */                             $currLineNo = 15;
/*   236 */                             $currColNo = 4;
/*   237 */ 
/*   238 */                             $scope191.co_name = new Sk.builtins['str']('__eq__');
/*   239 */                             $scope191.co_varnames = ['self', 'other'];
/*   240 */                             var $funcobj206 = new Sk.builtins['function']($scope191, $gbl);
/*   241 */                             $loc.__eq__ = $funcobj206;
/*   242 */                             //
/*   243 */                             // line 18:
/*   244 */                             //     def __ne__(self, other):
/*   245 */                             //     ^
/*   246 */                             //
/*   247 */                             $currLineNo = 18;
/*   248 */                             $currColNo = 4;
/*   249 */ 
/*   250 */                             $scope207.co_name = new Sk.builtins['str']('__ne__');
/*   251 */                             $scope207.co_varnames = ['self', 'other'];
/*   252 */                             var $funcobj212 = new Sk.builtins['function']($scope207, $gbl);
/*   253 */                             $loc.__ne__ = $funcobj212;
/*   254 */                             //
/*   255 */                             // line 21:
/*   256 */                             //     def __hash__(self):
/*   257 */                             //     ^
/*   258 */                             //
/*   259 */                             $currLineNo = 21;
/*   260 */                             $currColNo = 4;
/*   261 */ 
/*   262 */                             $scope213.co_name = new Sk.builtins['str']('__hash__');
/*   263 */                             $scope213.co_varnames = ['self'];
/*   264 */                             var $funcobj224 = new Sk.builtins['function']($scope213, $gbl);
/*   265 */                             $loc.__hash__ = $funcobj224;
/*   266 */                             return;
/*   267 */                             throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   268 */                     }
/*   269 */                 } catch (err) {
/*   270 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*   271 */                         err = new Sk.builtin.ExternalError(err);
/*   272 */                     }
/*   273 */                     err.traceback.push({
/*   274 */                         lineno: $currLineNo,
/*   275 */                         colno: $currColNo,
/*   276 */                         filename: '&lt;stdin&gt;.py'
/*   277 */                     });
/*   278 */                     if ($exc.length &gt; 0) {
/*   279 */                         $err = err;
/*   280 */                         $blk = $exc.pop();
/*   281 */                         continue;
/*   282 */                     } else {
/*   283 */                         throw err;
/*   284 */                     }
/*   285 */                 }
/*   286 */             }
/*   287 */         }).call(null, $cell);
/*   288 */     });
/*   289 */     var $scope149 = (function $__init__150$(self, x, y) {
/*   290 */         var self, self, self, x, x, y, y;
/*   291 */         var $wakeFromSuspension = function() {
/*   292 */             var susp = $scope149.$wakingSuspension;
/*   293 */             $scope149.$wakingSuspension = undefined;
/*   294 */             $blk = susp.$blk;
/*   295 */             $loc = susp.$loc;
/*   296 */             $gbl = susp.$gbl;
/*   297 */             $exc = susp.$exc;
/*   298 */             $err = susp.$err;
/*   299 */             $postfinally = susp.$postfinally;
/*   300 */             $currLineNo = susp.$lineno;
/*   301 */             $currColNo = susp.$colno;
/*   302 */             Sk.lastYield = Date.now();
/*   303 */             self = susp.$tmps.self;
/*   304 */             x = susp.$tmps.x;
/*   305 */             y = susp.$tmps.y;
/*   306 */             try {
/*   307 */                 $ret = susp.child.resume();
/*   308 */             } catch (err) {
/*   309 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   310 */                     err = new Sk.builtin.ExternalError(err);
/*   311 */                 }
/*   312 */                 err.traceback.push({
/*   313 */                     lineno: $currLineNo,
/*   314 */                     colno: $currColNo,
/*   315 */                     filename: '&lt;stdin&gt;.py'
/*   316 */                 });
/*   317 */                 if ($exc.length &gt; 0) {
/*   318 */                     $err = err;
/*   319 */                     $blk = $exc.pop();
/*   320 */                 } else {
/*   321 */                     throw err;
/*   322 */                 }
/*   323 */             }
/*   324 */         };
/*   325 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   326 */             var susp = new Sk.misceval.Suspension();
/*   327 */             susp.child = $child;
/*   328 */             susp.resume = function() {
/*   329 */                 $scope149.$wakingSuspension = susp;
/*   330 */                 return $scope149();
/*   331 */             };
/*   332 */             susp.data = susp.child.data;
/*   333 */             susp.$blk = $blk;
/*   334 */             susp.$loc = $loc;
/*   335 */             susp.$gbl = $gbl;
/*   336 */             susp.$exc = $exc;
/*   337 */             susp.$err = $err;
/*   338 */             susp.$postfinally = $postfinally;
/*   339 */             susp.$filename = $filename;
/*   340 */             susp.$lineno = $lineno;
/*   341 */             susp.$colno = $colno;
/*   342 */             susp.optional = susp.child.optional;
/*   343 */             susp.$tmps = {
/*   344 */                 "self": self,
/*   345 */                 "x": x,
/*   346 */                 "y": y
/*   347 */             };
/*   348 */             return susp;
/*   349 */         };
/*   350 */         var $blk = 0,
/*   351 */             $exc = [],
/*   352 */             $loc = {},
/*   353 */             $cell = {},
/*   354 */             $gbl = this,
/*   355 */             $err = undefined,
/*   356 */             $ret = undefined,
/*   357 */             $postfinally = undefined,
/*   358 */             $currLineNo = undefined,
/*   359 */             $currColNo = undefined;
/*   360 */         if (typeof Sk.execStart === 'undefined') {
/*   361 */             Sk.execStart = Date.now()
/*   362 */         }
/*   363 */         if (typeof Sk.lastYield === 'undefined') {
/*   364 */             Sk.lastYield = Date.now()
/*   365 */         }
/*   366 */         if ($scope149.$wakingSuspension !== undefined) {
/*   367 */             $wakeFromSuspension();
/*   368 */         } else {}
/*   369 */         $gbl.__class__ = this.Location;
/*   370 */         while (true) {
/*   371 */             try {
/*   372 */                 var $dateNow = Date.now();
/*   373 */                 if ($dateNow - Sk.execStart &gt; Sk.execLimit) {
/*   374 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   375 */                 }
/*   376 */                 if ($dateNow - Sk.lastYield &gt; Sk.yieldLimit) {
/*   377 */                     var $susp = $saveSuspension({
/*   378 */                         data: {
/*   379 */                             type: 'Sk.yield'
/*   380 */                         },
/*   381 */                         resume: function() {}
/*   382 */                     }, '&lt;stdin&gt;.py', $currLineNo, $currColNo);
/*   383 */                     $susp.$blk = $blk;
/*   384 */                     $susp.optional = true;
/*   385 */                     return $susp;
/*   386 */                 }
/*   387 */                 switch ($blk) {
/*   388 */                     case 0:
/*   389 */                         /* --- codeobj entry --- */ if (self === undefined) {
/*   390 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   391 */                         }
/*   392 */                         if (x === undefined) {
/*   393 */                             throw new Sk.builtin.UnboundLocalError('local variable \'x\' referenced before assignment');
/*   394 */                         }
/*   395 */                         if (y === undefined) {
/*   396 */                             throw new Sk.builtin.UnboundLocalError('local variable \'y\' referenced before assignment');
/*   397 */                         }
/*   398 */                         if (Sk.breakpoints('&lt;stdin&gt;.py', 3, 8)) {
/*   399 */                             var $susp = $saveSuspension({
/*   400 */                                 data: {
/*   401 */                                     type: 'Sk.debug'
/*   402 */                                 },
/*   403 */                                 resume: function() {}
/*   404 */                             }, '&lt;stdin&gt;.py', 3, 8);
/*   405 */                             $susp.$blk = 1;
/*   406 */                             $susp.optional = true;
/*   407 */                             return $susp;
/*   408 */                         }
/*   409 */                         $blk = 1; /* allowing case fallthrough */
/*   410 */                     case 1:
/*   411 */                         /* --- debug breakpoint for line 3 --- */
/*   412 */                         //
/*   413 */                         // line 3:
/*   414 */                         //         self.x = x
/*   415 */                         //         ^
/*   416 */                         //
/*   417 */                         $currLineNo = 3;
/*   418 */                         $currColNo = 8;
/*   419 */ 
/*   420 */                         if (x === undefined) {
/*   421 */                             throw new Sk.builtin.UnboundLocalError('local variable \'x\' referenced before assignment');
/*   422 */                         }
/*   423 */                         if (self === undefined) {
/*   424 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   425 */                         }
/*   426 */                         $ret = Sk.abstr.sattr(self, $scope149.$const151, x, true);
/*   427 */                         $blk = 2; /* allowing case fallthrough */
/*   428 */                     case 2:
/*   429 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*   430 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 3, 8);
/*   431 */                         }
/*   432 */                         if (Sk.breakpoints('&lt;stdin&gt;.py', 4, 8)) {
/*   433 */                             var $susp = $saveSuspension({
/*   434 */                                 data: {
/*   435 */                                     type: 'Sk.debug'
/*   436 */                                 },
/*   437 */                                 resume: function() {}
/*   438 */                             }, '&lt;stdin&gt;.py', 4, 8);
/*   439 */                             $susp.$blk = 3;
/*   440 */                             $susp.optional = true;
/*   441 */                             return $susp;
/*   442 */                         }
/*   443 */                         $blk = 3; /* allowing case fallthrough */
/*   444 */                     case 3:
/*   445 */                         /* --- debug breakpoint for line 4 --- */
/*   446 */                         //
/*   447 */                         // line 4:
/*   448 */                         //         self.y = y
/*   449 */                         //         ^
/*   450 */                         //
/*   451 */                         $currLineNo = 4;
/*   452 */                         $currColNo = 8;
/*   453 */ 
/*   454 */                         if (y === undefined) {
/*   455 */                             throw new Sk.builtin.UnboundLocalError('local variable \'y\' referenced before assignment');
/*   456 */                         }
/*   457 */                         if (self === undefined) {
/*   458 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   459 */                         }
/*   460 */                         $ret = Sk.abstr.sattr(self, $scope149.$const152, y, true);
/*   461 */                         $blk = 4; /* allowing case fallthrough */
/*   462 */                     case 4:
/*   463 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*   464 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 4, 8);
/*   465 */                         }
/*   466 */                         return Sk.builtin.none.none$;
/*   467 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   468 */                 }
/*   469 */             } catch (err) {
/*   470 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   471 */                     err = new Sk.builtin.ExternalError(err);
/*   472 */                 }
/*   473 */                 err.traceback.push({
/*   474 */                     lineno: $currLineNo,
/*   475 */                     colno: $currColNo,
/*   476 */                     filename: '&lt;stdin&gt;.py'
/*   477 */                 });
/*   478 */                 if ($exc.length &gt; 0) {
/*   479 */                     $err = err;
/*   480 */                     $blk = $exc.pop();
/*   481 */                     continue;
/*   482 */                 } else {
/*   483 */                     throw err;
/*   484 */                 }
/*   485 */             }
/*   486 */         }
/*   487 */     });
/*   488 */     $scope149.$const151 = new Sk.builtin.str('x');
/*   489 */     $scope149.$const152 = new Sk.builtin.str('y');
/*   490 */     var $scope154 = (function $__add__155$(self, direction) {
/*   491 */         var direction, direction, direction, self, self, self, $loadgbl156, $loadgbl156, $lattr158, $loadgbl156, $lattr158, $lattr159, $binop160, $loadgbl156, $lattr158, $lattr159, $binop160, $lattr162, $loadgbl156, $lattr158, $lattr159, $binop160, $lattr162, $lattr163, $binop164;
/*   492 */         var $wakeFromSuspension = function() {
/*   493 */             var susp = $scope154.$wakingSuspension;
/*   494 */             $scope154.$wakingSuspension = undefined;
/*   495 */             $blk = susp.$blk;
/*   496 */             $loc = susp.$loc;
/*   497 */             $gbl = susp.$gbl;
/*   498 */             $exc = susp.$exc;
/*   499 */             $err = susp.$err;
/*   500 */             $postfinally = susp.$postfinally;
/*   501 */             $currLineNo = susp.$lineno;
/*   502 */             $currColNo = susp.$colno;
/*   503 */             Sk.lastYield = Date.now();
/*   504 */             direction = susp.$tmps.direction;
/*   505 */             self = susp.$tmps.self;
/*   506 */             $loadgbl156 = susp.$tmps.$loadgbl156;
/*   507 */             $lattr158 = susp.$tmps.$lattr158;
/*   508 */             $lattr159 = susp.$tmps.$lattr159;
/*   509 */             $binop160 = susp.$tmps.$binop160;
/*   510 */             $lattr162 = susp.$tmps.$lattr162;
/*   511 */             $lattr163 = susp.$tmps.$lattr163;
/*   512 */             $binop164 = susp.$tmps.$binop164;
/*   513 */             try {
/*   514 */                 $ret = susp.child.resume();
/*   515 */             } catch (err) {
/*   516 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   517 */                     err = new Sk.builtin.ExternalError(err);
/*   518 */                 }
/*   519 */                 err.traceback.push({
/*   520 */                     lineno: $currLineNo,
/*   521 */                     colno: $currColNo,
/*   522 */                     filename: '&lt;stdin&gt;.py'
/*   523 */                 });
/*   524 */                 if ($exc.length &gt; 0) {
/*   525 */                     $err = err;
/*   526 */                     $blk = $exc.pop();
/*   527 */                 } else {
/*   528 */                     throw err;
/*   529 */                 }
/*   530 */             }
/*   531 */         };
/*   532 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   533 */             var susp = new Sk.misceval.Suspension();
/*   534 */             susp.child = $child;
/*   535 */             susp.resume = function() {
/*   536 */                 $scope154.$wakingSuspension = susp;
/*   537 */                 return $scope154();
/*   538 */             };
/*   539 */             susp.data = susp.child.data;
/*   540 */             susp.$blk = $blk;
/*   541 */             susp.$loc = $loc;
/*   542 */             susp.$gbl = $gbl;
/*   543 */             susp.$exc = $exc;
/*   544 */             susp.$err = $err;
/*   545 */             susp.$postfinally = $postfinally;
/*   546 */             susp.$filename = $filename;
/*   547 */             susp.$lineno = $lineno;
/*   548 */             susp.$colno = $colno;
/*   549 */             susp.optional = susp.child.optional;
/*   550 */             susp.$tmps = {
/*   551 */                 "direction": direction,
/*   552 */                 "self": self,
/*   553 */                 "$loadgbl156": $loadgbl156,
/*   554 */                 "$lattr158": $lattr158,
/*   555 */                 "$lattr159": $lattr159,
/*   556 */                 "$binop160": $binop160,
/*   557 */                 "$lattr162": $lattr162,
/*   558 */                 "$lattr163": $lattr163,
/*   559 */                 "$binop164": $binop164
/*   560 */             };
/*   561 */             return susp;
/*   562 */         };
/*   563 */         var $blk = 0,
/*   564 */             $exc = [],
/*   565 */             $loc = {},
/*   566 */             $cell = {},
/*   567 */             $gbl = this,
/*   568 */             $err = undefined,
/*   569 */             $ret = undefined,
/*   570 */             $postfinally = undefined,
/*   571 */             $currLineNo = undefined,
/*   572 */             $currColNo = undefined;
/*   573 */         if (typeof Sk.execStart === 'undefined') {
/*   574 */             Sk.execStart = Date.now()
/*   575 */         }
/*   576 */         if (typeof Sk.lastYield === 'undefined') {
/*   577 */             Sk.lastYield = Date.now()
/*   578 */         }
/*   579 */         if ($scope154.$wakingSuspension !== undefined) {
/*   580 */             $wakeFromSuspension();
/*   581 */         } else {}
/*   582 */         $gbl.__class__ = this.Location;
/*   583 */         while (true) {
/*   584 */             try {
/*   585 */                 var $dateNow = Date.now();
/*   586 */                 if ($dateNow - Sk.execStart &gt; Sk.execLimit) {
/*   587 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   588 */                 }
/*   589 */                 if ($dateNow - Sk.lastYield &gt; Sk.yieldLimit) {
/*   590 */                     var $susp = $saveSuspension({
/*   591 */                         data: {
/*   592 */                             type: 'Sk.yield'
/*   593 */                         },
/*   594 */                         resume: function() {}
/*   595 */                     }, '&lt;stdin&gt;.py', $currLineNo, $currColNo);
/*   596 */                     $susp.$blk = $blk;
/*   597 */                     $susp.optional = true;
/*   598 */                     return $susp;
/*   599 */                 }
/*   600 */                 switch ($blk) {
/*   601 */                     case 0:
/*   602 */                         /* --- codeobj entry --- */ if (self === undefined) {
/*   603 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   604 */                         }
/*   605 */                         if (direction === undefined) {
/*   606 */                             throw new Sk.builtin.UnboundLocalError('local variable \'direction\' referenced before assignment');
/*   607 */                         }
/*   608 */                         if (Sk.breakpoints('&lt;stdin&gt;.py', 7, 8)) {
/*   609 */                             var $susp = $saveSuspension({
/*   610 */                                 data: {
/*   611 */                                     type: 'Sk.debug'
/*   612 */                                 },
/*   613 */                                 resume: function() {}
/*   614 */                             }, '&lt;stdin&gt;.py', 7, 8);
/*   615 */                             $susp.$blk = 1;
/*   616 */                             $susp.optional = true;
/*   617 */                             return $susp;
/*   618 */                         }
/*   619 */                         $blk = 1; /* allowing case fallthrough */
/*   620 */                     case 1:
/*   621 */                         /* --- debug breakpoint for line 7 --- */
/*   622 */                         //
/*   623 */                         // line 7:
/*   624 */                         //         return Location(self.x + direction.x, self.y + direction.y)
/*   625 */                         //         ^
/*   626 */                         //
/*   627 */                         $currLineNo = 7;
/*   628 */                         $currColNo = 8;
/*   629 */ 
/*   630 */                         var $loadgbl156 = Sk.misceval.loadname('Location', $gbl);
/*   631 */                         if (self === undefined) {
/*   632 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   633 */                         }
/*   634 */                         $ret = Sk.abstr.gattr(self, $scope154.$const157, true);
/*   635 */                         $blk = 2; /* allowing case fallthrough */
/*   636 */                     case 2:
/*   637 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*   638 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 7, 24);
/*   639 */                         }
/*   640 */                         var $lattr158 = $ret;
/*   641 */                         if (direction === undefined) {
/*   642 */                             throw new Sk.builtin.UnboundLocalError('local variable \'direction\' referenced before assignment');
/*   643 */                         }
/*   644 */                         $ret = Sk.abstr.gattr(direction, $scope154.$const157, true);
/*   645 */                         $blk = 3; /* allowing case fallthrough */
/*   646 */                     case 3:
/*   647 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*   648 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 7, 33);
/*   649 */                         }
/*   650 */                         var $lattr159 = $ret;
/*   651 */                         var $binop160 = Sk.abstr.numberBinOp($lattr158, $lattr159, 'Add');
/*   652 */                         if (self === undefined) {
/*   653 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   654 */                         }
/*   655 */                         $ret = Sk.abstr.gattr(self, $scope154.$const161, true);
/*   656 */                         $blk = 4; /* allowing case fallthrough */
/*   657 */                     case 4:
/*   658 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*   659 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 7, 46);
/*   660 */                         }
/*   661 */                         var $lattr162 = $ret;
/*   662 */                         if (direction === undefined) {
/*   663 */                             throw new Sk.builtin.UnboundLocalError('local variable \'direction\' referenced before assignment');
/*   664 */                         }
/*   665 */                         $ret = Sk.abstr.gattr(direction, $scope154.$const161, true);
/*   666 */                         $blk = 5; /* allowing case fallthrough */
/*   667 */                     case 5:
/*   668 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*   669 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 7, 55);
/*   670 */                         }
/*   671 */                         var $lattr163 = $ret;
/*   672 */                         var $binop164 = Sk.abstr.numberBinOp($lattr162, $lattr163, 'Add');
/*   673 */                         $ret = ($loadgbl156.tp$call) ? $loadgbl156.tp$call([$binop160, $binop164], undefined) : Sk.misceval.applyOrSuspend($loadgbl156, undefined, undefined, undefined, [$binop160, $binop164]);
/*   674 */                         $blk = 6; /* allowing case fallthrough */
/*   675 */                     case 6:
/*   676 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*   677 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 7, 15);
/*   678 */                         }
/*   679 */                         var $call165 = $ret;
/*   680 */                         //
/*   681 */                         // line 7:
/*   682 */                         //         return Location(self.x + direction.x, self.y + direction.y)
/*   683 */                         //                ^
/*   684 */                         //
/*   685 */                         $currLineNo = 7;
/*   686 */                         $currColNo = 15;
/*   687 */ 
/*   688 */                         return $call165;
/*   689 */                         return Sk.builtin.none.none$;
/*   690 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   691 */                 }
/*   692 */             } catch (err) {
/*   693 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   694 */                     err = new Sk.builtin.ExternalError(err);
/*   695 */                 }
/*   696 */                 err.traceback.push({
/*   697 */                     lineno: $currLineNo,
/*   698 */                     colno: $currColNo,
/*   699 */                     filename: '&lt;stdin&gt;.py'
/*   700 */                 });
/*   701 */                 if ($exc.length &gt; 0) {
/*   702 */                     $err = err;
/*   703 */                     $blk = $exc.pop();
/*   704 */                     continue;
/*   705 */                 } else {
/*   706 */                     throw err;
/*   707 */                 }
/*   708 */             }
/*   709 */         }
/*   710 */     });
/*   711 */     $scope154.$const157 = new Sk.builtin.str('x');
/*   712 */     $scope154.$const161 = new Sk.builtin.str('y');
/*   713 */     var $scope167 = (function $__sub__168$(self, direction) {
/*   714 */         var direction, direction, direction, self, self, self, $loadgbl169, $loadgbl169, $lattr171, $loadgbl169, $lattr171, $lattr172, $binop173, $loadgbl169, $lattr171, $lattr172, $binop173, $lattr175, $loadgbl169, $lattr171, $lattr172, $binop173, $lattr175, $lattr176, $binop177;
/*   715 */         var $wakeFromSuspension = function() {
/*   716 */             var susp = $scope167.$wakingSuspension;
/*   717 */             $scope167.$wakingSuspension = undefined;
/*   718 */             $blk = susp.$blk;
/*   719 */             $loc = susp.$loc;
/*   720 */             $gbl = susp.$gbl;
/*   721 */             $exc = susp.$exc;
/*   722 */             $err = susp.$err;
/*   723 */             $postfinally = susp.$postfinally;
/*   724 */             $currLineNo = susp.$lineno;
/*   725 */             $currColNo = susp.$colno;
/*   726 */             Sk.lastYield = Date.now();
/*   727 */             direction = susp.$tmps.direction;
/*   728 */             self = susp.$tmps.self;
/*   729 */             $loadgbl169 = susp.$tmps.$loadgbl169;
/*   730 */             $lattr171 = susp.$tmps.$lattr171;
/*   731 */             $lattr172 = susp.$tmps.$lattr172;
/*   732 */             $binop173 = susp.$tmps.$binop173;
/*   733 */             $lattr175 = susp.$tmps.$lattr175;
/*   734 */             $lattr176 = susp.$tmps.$lattr176;
/*   735 */             $binop177 = susp.$tmps.$binop177;
/*   736 */             try {
/*   737 */                 $ret = susp.child.resume();
/*   738 */             } catch (err) {
/*   739 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   740 */                     err = new Sk.builtin.ExternalError(err);
/*   741 */                 }
/*   742 */                 err.traceback.push({
/*   743 */                     lineno: $currLineNo,
/*   744 */                     colno: $currColNo,
/*   745 */                     filename: '&lt;stdin&gt;.py'
/*   746 */                 });
/*   747 */                 if ($exc.length &gt; 0) {
/*   748 */                     $err = err;
/*   749 */                     $blk = $exc.pop();
/*   750 */                 } else {
/*   751 */                     throw err;
/*   752 */                 }
/*   753 */             }
/*   754 */         };
/*   755 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   756 */             var susp = new Sk.misceval.Suspension();
/*   757 */             susp.child = $child;
/*   758 */             susp.resume = function() {
/*   759 */                 $scope167.$wakingSuspension = susp;
/*   760 */                 return $scope167();
/*   761 */             };
/*   762 */             susp.data = susp.child.data;
/*   763 */             susp.$blk = $blk;
/*   764 */             susp.$loc = $loc;
/*   765 */             susp.$gbl = $gbl;
/*   766 */             susp.$exc = $exc;
/*   767 */             susp.$err = $err;
/*   768 */             susp.$postfinally = $postfinally;
/*   769 */             susp.$filename = $filename;
/*   770 */             susp.$lineno = $lineno;
/*   771 */             susp.$colno = $colno;
/*   772 */             susp.optional = susp.child.optional;
/*   773 */             susp.$tmps = {
/*   774 */                 "direction": direction,
/*   775 */                 "self": self,
/*   776 */                 "$loadgbl169": $loadgbl169,
/*   777 */                 "$lattr171": $lattr171,
/*   778 */                 "$lattr172": $lattr172,
/*   779 */                 "$binop173": $binop173,
/*   780 */                 "$lattr175": $lattr175,
/*   781 */                 "$lattr176": $lattr176,
/*   782 */                 "$binop177": $binop177
/*   783 */             };
/*   784 */             return susp;
/*   785 */         };
/*   786 */         var $blk = 0,
/*   787 */             $exc = [],
/*   788 */             $loc = {},
/*   789 */             $cell = {},
/*   790 */             $gbl = this,
/*   791 */             $err = undefined,
/*   792 */             $ret = undefined,
/*   793 */             $postfinally = undefined,
/*   794 */             $currLineNo = undefined,
/*   795 */             $currColNo = undefined;
/*   796 */         if (typeof Sk.execStart === 'undefined') {
/*   797 */             Sk.execStart = Date.now()
/*   798 */         }
/*   799 */         if (typeof Sk.lastYield === 'undefined') {
/*   800 */             Sk.lastYield = Date.now()
/*   801 */         }
/*   802 */         if ($scope167.$wakingSuspension !== undefined) {
/*   803 */             $wakeFromSuspension();
/*   804 */         } else {}
/*   805 */         $gbl.__class__ = this.Location;
/*   806 */         while (true) {
/*   807 */             try {
/*   808 */                 var $dateNow = Date.now();
/*   809 */                 if ($dateNow - Sk.execStart &gt; Sk.execLimit) {
/*   810 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   811 */                 }
/*   812 */                 if ($dateNow - Sk.lastYield &gt; Sk.yieldLimit) {
/*   813 */                     var $susp = $saveSuspension({
/*   814 */                         data: {
/*   815 */                             type: 'Sk.yield'
/*   816 */                         },
/*   817 */                         resume: function() {}
/*   818 */                     }, '&lt;stdin&gt;.py', $currLineNo, $currColNo);
/*   819 */                     $susp.$blk = $blk;
/*   820 */                     $susp.optional = true;
/*   821 */                     return $susp;
/*   822 */                 }
/*   823 */                 switch ($blk) {
/*   824 */                     case 0:
/*   825 */                         /* --- codeobj entry --- */ if (self === undefined) {
/*   826 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   827 */                         }
/*   828 */                         if (direction === undefined) {
/*   829 */                             throw new Sk.builtin.UnboundLocalError('local variable \'direction\' referenced before assignment');
/*   830 */                         }
/*   831 */                         if (Sk.breakpoints('&lt;stdin&gt;.py', 10, 8)) {
/*   832 */                             var $susp = $saveSuspension({
/*   833 */                                 data: {
/*   834 */                                     type: 'Sk.debug'
/*   835 */                                 },
/*   836 */                                 resume: function() {}
/*   837 */                             }, '&lt;stdin&gt;.py', 10, 8);
/*   838 */                             $susp.$blk = 1;
/*   839 */                             $susp.optional = true;
/*   840 */                             return $susp;
/*   841 */                         }
/*   842 */                         $blk = 1; /* allowing case fallthrough */
/*   843 */                     case 1:
/*   844 */                         /* --- debug breakpoint for line 10 --- */
/*   845 */                         //
/*   846 */                         // line 10:
/*   847 */                         //         return Location(self.x - direction.x, self.y - direction.y)
/*   848 */                         //         ^
/*   849 */                         //
/*   850 */                         $currLineNo = 10;
/*   851 */                         $currColNo = 8;
/*   852 */ 
/*   853 */                         var $loadgbl169 = Sk.misceval.loadname('Location', $gbl);
/*   854 */                         if (self === undefined) {
/*   855 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   856 */                         }
/*   857 */                         $ret = Sk.abstr.gattr(self, $scope167.$const170, true);
/*   858 */                         $blk = 2; /* allowing case fallthrough */
/*   859 */                     case 2:
/*   860 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*   861 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 10, 24);
/*   862 */                         }
/*   863 */                         var $lattr171 = $ret;
/*   864 */                         if (direction === undefined) {
/*   865 */                             throw new Sk.builtin.UnboundLocalError('local variable \'direction\' referenced before assignment');
/*   866 */                         }
/*   867 */                         $ret = Sk.abstr.gattr(direction, $scope167.$const170, true);
/*   868 */                         $blk = 3; /* allowing case fallthrough */
/*   869 */                     case 3:
/*   870 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*   871 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 10, 33);
/*   872 */                         }
/*   873 */                         var $lattr172 = $ret;
/*   874 */                         var $binop173 = Sk.abstr.numberBinOp($lattr171, $lattr172, 'Sub');
/*   875 */                         if (self === undefined) {
/*   876 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   877 */                         }
/*   878 */                         $ret = Sk.abstr.gattr(self, $scope167.$const174, true);
/*   879 */                         $blk = 4; /* allowing case fallthrough */
/*   880 */                     case 4:
/*   881 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*   882 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 10, 46);
/*   883 */                         }
/*   884 */                         var $lattr175 = $ret;
/*   885 */                         if (direction === undefined) {
/*   886 */                             throw new Sk.builtin.UnboundLocalError('local variable \'direction\' referenced before assignment');
/*   887 */                         }
/*   888 */                         $ret = Sk.abstr.gattr(direction, $scope167.$const174, true);
/*   889 */                         $blk = 5; /* allowing case fallthrough */
/*   890 */                     case 5:
/*   891 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*   892 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 10, 55);
/*   893 */                         }
/*   894 */                         var $lattr176 = $ret;
/*   895 */                         var $binop177 = Sk.abstr.numberBinOp($lattr175, $lattr176, 'Sub');
/*   896 */                         $ret = ($loadgbl169.tp$call) ? $loadgbl169.tp$call([$binop173, $binop177], undefined) : Sk.misceval.applyOrSuspend($loadgbl169, undefined, undefined, undefined, [$binop173, $binop177]);
/*   897 */                         $blk = 6; /* allowing case fallthrough */
/*   898 */                     case 6:
/*   899 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*   900 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 10, 15);
/*   901 */                         }
/*   902 */                         var $call178 = $ret;
/*   903 */                         //
/*   904 */                         // line 10:
/*   905 */                         //         return Location(self.x - direction.x, self.y - direction.y)
/*   906 */                         //                ^
/*   907 */                         //
/*   908 */                         $currLineNo = 10;
/*   909 */                         $currColNo = 15;
/*   910 */ 
/*   911 */                         return $call178;
/*   912 */                         return Sk.builtin.none.none$;
/*   913 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   914 */                 }
/*   915 */             } catch (err) {
/*   916 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   917 */                     err = new Sk.builtin.ExternalError(err);
/*   918 */                 }
/*   919 */                 err.traceback.push({
/*   920 */                     lineno: $currLineNo,
/*   921 */                     colno: $currColNo,
/*   922 */                     filename: '&lt;stdin&gt;.py'
/*   923 */                 });
/*   924 */                 if ($exc.length &gt; 0) {
/*   925 */                     $err = err;
/*   926 */                     $blk = $exc.pop();
/*   927 */                     continue;
/*   928 */                 } else {
/*   929 */                     throw err;
/*   930 */                 }
/*   931 */             }
/*   932 */         }
/*   933 */     });
/*   934 */     $scope167.$const170 = new Sk.builtin.str('x');
/*   935 */     $scope167.$const174 = new Sk.builtin.str('y');
/*   936 */     var $scope180 = (function $__repr__181$(self) {
/*   937 */         var self, self, self, $lattr184, $lattr184, $lattr186, $lattr184, $lattr186, $lattr188;
/*   938 */         var $wakeFromSuspension = function() {
/*   939 */             var susp = $scope180.$wakingSuspension;
/*   940 */             $scope180.$wakingSuspension = undefined;
/*   941 */             $blk = susp.$blk;
/*   942 */             $loc = susp.$loc;
/*   943 */             $gbl = susp.$gbl;
/*   944 */             $exc = susp.$exc;
/*   945 */             $err = susp.$err;
/*   946 */             $postfinally = susp.$postfinally;
/*   947 */             $currLineNo = susp.$lineno;
/*   948 */             $currColNo = susp.$colno;
/*   949 */             Sk.lastYield = Date.now();
/*   950 */             self = susp.$tmps.self;
/*   951 */             $lattr184 = susp.$tmps.$lattr184;
/*   952 */             $lattr186 = susp.$tmps.$lattr186;
/*   953 */             $lattr188 = susp.$tmps.$lattr188;
/*   954 */             try {
/*   955 */                 $ret = susp.child.resume();
/*   956 */             } catch (err) {
/*   957 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   958 */                     err = new Sk.builtin.ExternalError(err);
/*   959 */                 }
/*   960 */                 err.traceback.push({
/*   961 */                     lineno: $currLineNo,
/*   962 */                     colno: $currColNo,
/*   963 */                     filename: '&lt;stdin&gt;.py'
/*   964 */                 });
/*   965 */                 if ($exc.length &gt; 0) {
/*   966 */                     $err = err;
/*   967 */                     $blk = $exc.pop();
/*   968 */                 } else {
/*   969 */                     throw err;
/*   970 */                 }
/*   971 */             }
/*   972 */         };
/*   973 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   974 */             var susp = new Sk.misceval.Suspension();
/*   975 */             susp.child = $child;
/*   976 */             susp.resume = function() {
/*   977 */                 $scope180.$wakingSuspension = susp;
/*   978 */                 return $scope180();
/*   979 */             };
/*   980 */             susp.data = susp.child.data;
/*   981 */             susp.$blk = $blk;
/*   982 */             susp.$loc = $loc;
/*   983 */             susp.$gbl = $gbl;
/*   984 */             susp.$exc = $exc;
/*   985 */             susp.$err = $err;
/*   986 */             susp.$postfinally = $postfinally;
/*   987 */             susp.$filename = $filename;
/*   988 */             susp.$lineno = $lineno;
/*   989 */             susp.$colno = $colno;
/*   990 */             susp.optional = susp.child.optional;
/*   991 */             susp.$tmps = {
/*   992 */                 "self": self,
/*   993 */                 "$lattr184": $lattr184,
/*   994 */                 "$lattr186": $lattr186,
/*   995 */                 "$lattr188": $lattr188
/*   996 */             };
/*   997 */             return susp;
/*   998 */         };
/*   999 */         var $blk = 0,
/*  1000 */             $exc = [],
/*  1001 */             $loc = {},
/*  1002 */             $cell = {},
/*  1003 */             $gbl = this,
/*  1004 */             $err = undefined,
/*  1005 */             $ret = undefined,
/*  1006 */             $postfinally = undefined,
/*  1007 */             $currLineNo = undefined,
/*  1008 */             $currColNo = undefined;
/*  1009 */         if (typeof Sk.execStart === 'undefined') {
/*  1010 */             Sk.execStart = Date.now()
/*  1011 */         }
/*  1012 */         if (typeof Sk.lastYield === 'undefined') {
/*  1013 */             Sk.lastYield = Date.now()
/*  1014 */         }
/*  1015 */         if ($scope180.$wakingSuspension !== undefined) {
/*  1016 */             $wakeFromSuspension();
/*  1017 */         } else {}
/*  1018 */         $gbl.__class__ = this.Location;
/*  1019 */         while (true) {
/*  1020 */             try {
/*  1021 */                 var $dateNow = Date.now();
/*  1022 */                 if ($dateNow - Sk.execStart &gt; Sk.execLimit) {
/*  1023 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1024 */                 }
/*  1025 */                 if ($dateNow - Sk.lastYield &gt; Sk.yieldLimit) {
/*  1026 */                     var $susp = $saveSuspension({
/*  1027 */                         data: {
/*  1028 */                             type: 'Sk.yield'
/*  1029 */                         },
/*  1030 */                         resume: function() {}
/*  1031 */                     }, '&lt;stdin&gt;.py', $currLineNo, $currColNo);
/*  1032 */                     $susp.$blk = $blk;
/*  1033 */                     $susp.optional = true;
/*  1034 */                     return $susp;
/*  1035 */                 }
/*  1036 */                 switch ($blk) {
/*  1037 */                     case 0:
/*  1038 */                         /* --- codeobj entry --- */ if (self === undefined) {
/*  1039 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1040 */                         }
/*  1041 */                         if (Sk.breakpoints('&lt;stdin&gt;.py', 13, 8)) {
/*  1042 */                             var $susp = $saveSuspension({
/*  1043 */                                 data: {
/*  1044 */                                     type: 'Sk.debug'
/*  1045 */                                 },
/*  1046 */                                 resume: function() {}
/*  1047 */                             }, '&lt;stdin&gt;.py', 13, 8);
/*  1048 */                             $susp.$blk = 1;
/*  1049 */                             $susp.optional = true;
/*  1050 */                             return $susp;
/*  1051 */                         }
/*  1052 */                         $blk = 1; /* allowing case fallthrough */
/*  1053 */                     case 1:
/*  1054 */                         /* --- debug breakpoint for line 13 --- */
/*  1055 */                         //
/*  1056 */                         // line 13:
/*  1057 */                         //         return "Location({}, {})".format(self.x, self.y)
/*  1058 */                         //         ^
/*  1059 */                         //
/*  1060 */                         $currLineNo = 13;
/*  1061 */                         $currColNo = 8;
/*  1062 */ 
/*  1063 */                         $ret = Sk.abstr.gattr($scope180.$const182, $scope180.$const183, true);
/*  1064 */                         $blk = 2; /* allowing case fallthrough */
/*  1065 */                     case 2:
/*  1066 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*  1067 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 13, 15);
/*  1068 */                         }
/*  1069 */                         var $lattr184 = $ret;
/*  1070 */                         if (self === undefined) {
/*  1071 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1072 */                         }
/*  1073 */                         $ret = Sk.abstr.gattr(self, $scope180.$const185, true);
/*  1074 */                         $blk = 3; /* allowing case fallthrough */
/*  1075 */                     case 3:
/*  1076 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*  1077 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 13, 41);
/*  1078 */                         }
/*  1079 */                         var $lattr186 = $ret;
/*  1080 */                         if (self === undefined) {
/*  1081 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1082 */                         }
/*  1083 */                         $ret = Sk.abstr.gattr(self, $scope180.$const187, true);
/*  1084 */                         $blk = 4; /* allowing case fallthrough */
/*  1085 */                     case 4:
/*  1086 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*  1087 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 13, 49);
/*  1088 */                         }
/*  1089 */                         var $lattr188 = $ret;
/*  1090 */                         $ret = ($lattr184.tp$call) ? $lattr184.tp$call([$lattr186, $lattr188], undefined) : Sk.misceval.applyOrSuspend($lattr184, undefined, undefined, undefined, [$lattr186, $lattr188]);
/*  1091 */                         $blk = 5; /* allowing case fallthrough */
/*  1092 */                     case 5:
/*  1093 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*  1094 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 13, 15);
/*  1095 */                         }
/*  1096 */                         var $call189 = $ret;
/*  1097 */                         //
/*  1098 */                         // line 13:
/*  1099 */                         //         return "Location({}, {})".format(self.x, self.y)
/*  1100 */                         //                ^
/*  1101 */                         //
/*  1102 */                         $currLineNo = 13;
/*  1103 */                         $currColNo = 15;
/*  1104 */ 
/*  1105 */                         return $call189;
/*  1106 */                         return Sk.builtin.none.none$;
/*  1107 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1108 */                 }
/*  1109 */             } catch (err) {
/*  1110 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1111 */                     err = new Sk.builtin.ExternalError(err);
/*  1112 */                 }
/*  1113 */                 err.traceback.push({
/*  1114 */                     lineno: $currLineNo,
/*  1115 */                     colno: $currColNo,
/*  1116 */                     filename: '&lt;stdin&gt;.py'
/*  1117 */                 });
/*  1118 */                 if ($exc.length &gt; 0) {
/*  1119 */                     $err = err;
/*  1120 */                     $blk = $exc.pop();
/*  1121 */                     continue;
/*  1122 */                 } else {
/*  1123 */                     throw err;
/*  1124 */                 }
/*  1125 */             }
/*  1126 */         }
/*  1127 */     });
/*  1128 */     $scope180.$const182 = new Sk.builtin.str('Location({}, {})');
/*  1129 */     $scope180.$const183 = new Sk.builtin.str('format');
/*  1130 */     $scope180.$const185 = new Sk.builtin.str('x');
/*  1131 */     $scope180.$const187 = new Sk.builtin.str('y');
/*  1132 */     var $scope191 = (function $__eq__192$(self, other) {
/*  1133 */         var other, other, other, self, self, self, $lattr194, $compareres195, $lattr194, $compareres195, $lattr196, $lattr194, $compareres195, $lattr196, $jfalse197, $boolopsucc198, $jfalse199, $lattr194, $compareres195, $lattr196, $jfalse197, $boolopsucc198, $jfalse199, $lattr201, $compareres202, $lattr194, $compareres195, $lattr196, $jfalse197, $boolopsucc198, $jfalse199, $lattr201, $compareres202, $lattr203;
/*  1134 */         var $wakeFromSuspension = function() {
/*  1135 */             var susp = $scope191.$wakingSuspension;
/*  1136 */             $scope191.$wakingSuspension = undefined;
/*  1137 */             $blk = susp.$blk;
/*  1138 */             $loc = susp.$loc;
/*  1139 */             $gbl = susp.$gbl;
/*  1140 */             $exc = susp.$exc;
/*  1141 */             $err = susp.$err;
/*  1142 */             $postfinally = susp.$postfinally;
/*  1143 */             $currLineNo = susp.$lineno;
/*  1144 */             $currColNo = susp.$colno;
/*  1145 */             Sk.lastYield = Date.now();
/*  1146 */             other = susp.$tmps.other;
/*  1147 */             self = susp.$tmps.self;
/*  1148 */             $lattr194 = susp.$tmps.$lattr194;
/*  1149 */             $compareres195 = susp.$tmps.$compareres195;
/*  1150 */             $lattr196 = susp.$tmps.$lattr196;
/*  1151 */             $jfalse197 = susp.$tmps.$jfalse197;
/*  1152 */             $boolopsucc198 = susp.$tmps.$boolopsucc198;
/*  1153 */             $jfalse199 = susp.$tmps.$jfalse199;
/*  1154 */             $lattr201 = susp.$tmps.$lattr201;
/*  1155 */             $compareres202 = susp.$tmps.$compareres202;
/*  1156 */             $lattr203 = susp.$tmps.$lattr203;
/*  1157 */             try {
/*  1158 */                 $ret = susp.child.resume();
/*  1159 */             } catch (err) {
/*  1160 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1161 */                     err = new Sk.builtin.ExternalError(err);
/*  1162 */                 }
/*  1163 */                 err.traceback.push({
/*  1164 */                     lineno: $currLineNo,
/*  1165 */                     colno: $currColNo,
/*  1166 */                     filename: '&lt;stdin&gt;.py'
/*  1167 */                 });
/*  1168 */                 if ($exc.length &gt; 0) {
/*  1169 */                     $err = err;
/*  1170 */                     $blk = $exc.pop();
/*  1171 */                 } else {
/*  1172 */                     throw err;
/*  1173 */                 }
/*  1174 */             }
/*  1175 */         };
/*  1176 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1177 */             var susp = new Sk.misceval.Suspension();
/*  1178 */             susp.child = $child;
/*  1179 */             susp.resume = function() {
/*  1180 */                 $scope191.$wakingSuspension = susp;
/*  1181 */                 return $scope191();
/*  1182 */             };
/*  1183 */             susp.data = susp.child.data;
/*  1184 */             susp.$blk = $blk;
/*  1185 */             susp.$loc = $loc;
/*  1186 */             susp.$gbl = $gbl;
/*  1187 */             susp.$exc = $exc;
/*  1188 */             susp.$err = $err;
/*  1189 */             susp.$postfinally = $postfinally;
/*  1190 */             susp.$filename = $filename;
/*  1191 */             susp.$lineno = $lineno;
/*  1192 */             susp.$colno = $colno;
/*  1193 */             susp.optional = susp.child.optional;
/*  1194 */             susp.$tmps = {
/*  1195 */                 "other": other,
/*  1196 */                 "self": self,
/*  1197 */                 "$lattr194": $lattr194,
/*  1198 */                 "$compareres195": $compareres195,
/*  1199 */                 "$lattr196": $lattr196,
/*  1200 */                 "$jfalse197": $jfalse197,
/*  1201 */                 "$boolopsucc198": $boolopsucc198,
/*  1202 */                 "$jfalse199": $jfalse199,
/*  1203 */                 "$lattr201": $lattr201,
/*  1204 */                 "$compareres202": $compareres202,
/*  1205 */                 "$lattr203": $lattr203
/*  1206 */             };
/*  1207 */             return susp;
/*  1208 */         };
/*  1209 */         var $blk = 0,
/*  1210 */             $exc = [],
/*  1211 */             $loc = {},
/*  1212 */             $cell = {},
/*  1213 */             $gbl = this,
/*  1214 */             $err = undefined,
/*  1215 */             $ret = undefined,
/*  1216 */             $postfinally = undefined,
/*  1217 */             $currLineNo = undefined,
/*  1218 */             $currColNo = undefined;
/*  1219 */         if (typeof Sk.execStart === 'undefined') {
/*  1220 */             Sk.execStart = Date.now()
/*  1221 */         }
/*  1222 */         if (typeof Sk.lastYield === 'undefined') {
/*  1223 */             Sk.lastYield = Date.now()
/*  1224 */         }
/*  1225 */         if ($scope191.$wakingSuspension !== undefined) {
/*  1226 */             $wakeFromSuspension();
/*  1227 */         } else {}
/*  1228 */         $gbl.__class__ = this.Location;
/*  1229 */         while (true) {
/*  1230 */             try {
/*  1231 */                 var $dateNow = Date.now();
/*  1232 */                 if ($dateNow - Sk.execStart &gt; Sk.execLimit) {
/*  1233 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1234 */                 }
/*  1235 */                 if ($dateNow - Sk.lastYield &gt; Sk.yieldLimit) {
/*  1236 */                     var $susp = $saveSuspension({
/*  1237 */                         data: {
/*  1238 */                             type: 'Sk.yield'
/*  1239 */                         },
/*  1240 */                         resume: function() {}
/*  1241 */                     }, '&lt;stdin&gt;.py', $currLineNo, $currColNo);
/*  1242 */                     $susp.$blk = $blk;
/*  1243 */                     $susp.optional = true;
/*  1244 */                     return $susp;
/*  1245 */                 }
/*  1246 */                 switch ($blk) {
/*  1247 */                     case 0:
/*  1248 */                         /* --- codeobj entry --- */ if (self === undefined) {
/*  1249 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1250 */                         }
/*  1251 */                         if (other === undefined) {
/*  1252 */                             throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  1253 */                         }
/*  1254 */                         if (Sk.breakpoints('&lt;stdin&gt;.py', 16, 8)) {
/*  1255 */                             var $susp = $saveSuspension({
/*  1256 */                                 data: {
/*  1257 */                                     type: 'Sk.debug'
/*  1258 */                                 },
/*  1259 */                                 resume: function() {}
/*  1260 */                             }, '&lt;stdin&gt;.py', 16, 8);
/*  1261 */                             $susp.$blk = 1;
/*  1262 */                             $susp.optional = true;
/*  1263 */                             return $susp;
/*  1264 */                         }
/*  1265 */                         $blk = 1; /* allowing case fallthrough */
/*  1266 */                     case 1:
/*  1267 */                         /* --- debug breakpoint for line 16 --- */
/*  1268 */                         //
/*  1269 */                         // line 16:
/*  1270 */                         //         return self.x == other.x and self.y == other.y
/*  1271 */                         //         ^
/*  1272 */                         //
/*  1273 */                         $currLineNo = 16;
/*  1274 */                         $currColNo = 8;
/*  1275 */ 
/*  1276 */                         if (self === undefined) {
/*  1277 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1278 */                         }
/*  1279 */                         $ret = Sk.abstr.gattr(self, $scope191.$const193, true);
/*  1280 */                         $blk = 3; /* allowing case fallthrough */
/*  1281 */                     case 3:
/*  1282 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*  1283 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 16, 15);
/*  1284 */                         }
/*  1285 */                         var $lattr194 = $ret;
/*  1286 */                         var $compareres195 = null;
/*  1287 */                         if (other === undefined) {
/*  1288 */                             throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  1289 */                         }
/*  1290 */                         $ret = Sk.abstr.gattr(other, $scope191.$const193, true);
/*  1291 */                         $blk = 5; /* allowing case fallthrough */
/*  1292 */                     case 5:
/*  1293 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*  1294 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 16, 25);
/*  1295 */                         }
/*  1296 */                         var $lattr196 = $ret;
/*  1297 */                         $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr194, $lattr196, 'Eq', true));
/*  1298 */                         $blk = 6; /* allowing case fallthrough */
/*  1299 */                     case 6:
/*  1300 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*  1301 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 16, 15);
/*  1302 */                         }
/*  1303 */                         $compareres195 = $ret;
/*  1304 */                         var $jfalse197 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1305 */                         if ($jfalse197) {
/*  1306 */                             /*test failed */
/*  1307 */                             $blk = 4;
/*  1308 */                             continue;
/*  1309 */                         }
/*  1310 */                         $blk = 4; /* allowing case fallthrough */
/*  1311 */                     case 4:
/*  1312 */                         /* --- done --- */ var $boolopsucc198 = $compareres195;
/*  1313 */                         $boolopsucc198 = $compareres195;
/*  1314 */                         var $jfalse199 = ($compareres195 === false || !Sk.misceval.isTrue($compareres195));
/*  1315 */                         if ($jfalse199) {
/*  1316 */                             /*test failed */
/*  1317 */                             $blk = 2;
/*  1318 */                             continue;
/*  1319 */                         }
/*  1320 */                         if (self === undefined) {
/*  1321 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1322 */                         }
/*  1323 */                         $ret = Sk.abstr.gattr(self, $scope191.$const200, true);
/*  1324 */                         $blk = 7; /* allowing case fallthrough */
/*  1325 */                     case 7:
/*  1326 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*  1327 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 16, 37);
/*  1328 */                         }
/*  1329 */                         var $lattr201 = $ret;
/*  1330 */                         var $compareres202 = null;
/*  1331 */                         if (other === undefined) {
/*  1332 */                             throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  1333 */                         }
/*  1334 */                         $ret = Sk.abstr.gattr(other, $scope191.$const200, true);
/*  1335 */                         $blk = 9; /* allowing case fallthrough */
/*  1336 */                     case 9:
/*  1337 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*  1338 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 16, 47);
/*  1339 */                         }
/*  1340 */                         var $lattr203 = $ret;
/*  1341 */                         $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr201, $lattr203, 'Eq', true));
/*  1342 */                         $blk = 10; /* allowing case fallthrough */
/*  1343 */                     case 10:
/*  1344 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*  1345 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 16, 37);
/*  1346 */                         }
/*  1347 */                         $compareres202 = $ret;
/*  1348 */                         var $jfalse204 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1349 */                         if ($jfalse204) {
/*  1350 */                             /*test failed */
/*  1351 */                             $blk = 8;
/*  1352 */                             continue;
/*  1353 */                         }
/*  1354 */                         $blk = 8; /* allowing case fallthrough */
/*  1355 */                     case 8:
/*  1356 */                         /* --- done --- */ $boolopsucc198 = $compareres202;
/*  1357 */                         var $jfalse205 = ($compareres202 === false || !Sk.misceval.isTrue($compareres202));
/*  1358 */                         if ($jfalse205) {
/*  1359 */                             /*test failed */
/*  1360 */                             $blk = 2;
/*  1361 */                             continue;
/*  1362 */                         }
/*  1363 */                         $blk = 2; /* allowing case fallthrough */
/*  1364 */                     case 2:
/*  1365 */                         /* --- end of boolop --- */ return $boolopsucc198;
/*  1366 */                         return Sk.builtin.none.none$;
/*  1367 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1368 */                 }
/*  1369 */             } catch (err) {
/*  1370 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1371 */                     err = new Sk.builtin.ExternalError(err);
/*  1372 */                 }
/*  1373 */                 err.traceback.push({
/*  1374 */                     lineno: $currLineNo,
/*  1375 */                     colno: $currColNo,
/*  1376 */                     filename: '&lt;stdin&gt;.py'
/*  1377 */                 });
/*  1378 */                 if ($exc.length &gt; 0) {
/*  1379 */                     $err = err;
/*  1380 */                     $blk = $exc.pop();
/*  1381 */                     continue;
/*  1382 */                 } else {
/*  1383 */                     throw err;
/*  1384 */                 }
/*  1385 */             }
/*  1386 */         }
/*  1387 */     });
/*  1388 */     $scope191.$const193 = new Sk.builtin.str('x');
/*  1389 */     $scope191.$const200 = new Sk.builtin.str('y');
/*  1390 */     var $scope207 = (function $__ne__208$(self, other) {
/*  1391 */         var other, other, self, self, $compareres209;
/*  1392 */         var $wakeFromSuspension = function() {
/*  1393 */             var susp = $scope207.$wakingSuspension;
/*  1394 */             $scope207.$wakingSuspension = undefined;
/*  1395 */             $blk = susp.$blk;
/*  1396 */             $loc = susp.$loc;
/*  1397 */             $gbl = susp.$gbl;
/*  1398 */             $exc = susp.$exc;
/*  1399 */             $err = susp.$err;
/*  1400 */             $postfinally = susp.$postfinally;
/*  1401 */             $currLineNo = susp.$lineno;
/*  1402 */             $currColNo = susp.$colno;
/*  1403 */             Sk.lastYield = Date.now();
/*  1404 */             other = susp.$tmps.other;
/*  1405 */             self = susp.$tmps.self;
/*  1406 */             $compareres209 = susp.$tmps.$compareres209;
/*  1407 */             try {
/*  1408 */                 $ret = susp.child.resume();
/*  1409 */             } catch (err) {
/*  1410 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1411 */                     err = new Sk.builtin.ExternalError(err);
/*  1412 */                 }
/*  1413 */                 err.traceback.push({
/*  1414 */                     lineno: $currLineNo,
/*  1415 */                     colno: $currColNo,
/*  1416 */                     filename: '&lt;stdin&gt;.py'
/*  1417 */                 });
/*  1418 */                 if ($exc.length &gt; 0) {
/*  1419 */                     $err = err;
/*  1420 */                     $blk = $exc.pop();
/*  1421 */                 } else {
/*  1422 */                     throw err;
/*  1423 */                 }
/*  1424 */             }
/*  1425 */         };
/*  1426 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1427 */             var susp = new Sk.misceval.Suspension();
/*  1428 */             susp.child = $child;
/*  1429 */             susp.resume = function() {
/*  1430 */                 $scope207.$wakingSuspension = susp;
/*  1431 */                 return $scope207();
/*  1432 */             };
/*  1433 */             susp.data = susp.child.data;
/*  1434 */             susp.$blk = $blk;
/*  1435 */             susp.$loc = $loc;
/*  1436 */             susp.$gbl = $gbl;
/*  1437 */             susp.$exc = $exc;
/*  1438 */             susp.$err = $err;
/*  1439 */             susp.$postfinally = $postfinally;
/*  1440 */             susp.$filename = $filename;
/*  1441 */             susp.$lineno = $lineno;
/*  1442 */             susp.$colno = $colno;
/*  1443 */             susp.optional = susp.child.optional;
/*  1444 */             susp.$tmps = {
/*  1445 */                 "other": other,
/*  1446 */                 "self": self,
/*  1447 */                 "$compareres209": $compareres209
/*  1448 */             };
/*  1449 */             return susp;
/*  1450 */         };
/*  1451 */         var $blk = 0,
/*  1452 */             $exc = [],
/*  1453 */             $loc = {},
/*  1454 */             $cell = {},
/*  1455 */             $gbl = this,
/*  1456 */             $err = undefined,
/*  1457 */             $ret = undefined,
/*  1458 */             $postfinally = undefined,
/*  1459 */             $currLineNo = undefined,
/*  1460 */             $currColNo = undefined;
/*  1461 */         if (typeof Sk.execStart === 'undefined') {
/*  1462 */             Sk.execStart = Date.now()
/*  1463 */         }
/*  1464 */         if (typeof Sk.lastYield === 'undefined') {
/*  1465 */             Sk.lastYield = Date.now()
/*  1466 */         }
/*  1467 */         if ($scope207.$wakingSuspension !== undefined) {
/*  1468 */             $wakeFromSuspension();
/*  1469 */         } else {}
/*  1470 */         $gbl.__class__ = this.Location;
/*  1471 */         while (true) {
/*  1472 */             try {
/*  1473 */                 var $dateNow = Date.now();
/*  1474 */                 if ($dateNow - Sk.execStart &gt; Sk.execLimit) {
/*  1475 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1476 */                 }
/*  1477 */                 if ($dateNow - Sk.lastYield &gt; Sk.yieldLimit) {
/*  1478 */                     var $susp = $saveSuspension({
/*  1479 */                         data: {
/*  1480 */                             type: 'Sk.yield'
/*  1481 */                         },
/*  1482 */                         resume: function() {}
/*  1483 */                     }, '&lt;stdin&gt;.py', $currLineNo, $currColNo);
/*  1484 */                     $susp.$blk = $blk;
/*  1485 */                     $susp.optional = true;
/*  1486 */                     return $susp;
/*  1487 */                 }
/*  1488 */                 switch ($blk) {
/*  1489 */                     case 0:
/*  1490 */                         /* --- codeobj entry --- */ if (self === undefined) {
/*  1491 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1492 */                         }
/*  1493 */                         if (other === undefined) {
/*  1494 */                             throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  1495 */                         }
/*  1496 */                         if (Sk.breakpoints('&lt;stdin&gt;.py', 19, 8)) {
/*  1497 */                             var $susp = $saveSuspension({
/*  1498 */                                 data: {
/*  1499 */                                     type: 'Sk.debug'
/*  1500 */                                 },
/*  1501 */                                 resume: function() {}
/*  1502 */                             }, '&lt;stdin&gt;.py', 19, 8);
/*  1503 */                             $susp.$blk = 1;
/*  1504 */                             $susp.optional = true;
/*  1505 */                             return $susp;
/*  1506 */                         }
/*  1507 */                         $blk = 1; /* allowing case fallthrough */
/*  1508 */                     case 1:
/*  1509 */                         /* --- debug breakpoint for line 19 --- */
/*  1510 */                         //
/*  1511 */                         // line 19:
/*  1512 */                         //         return not self == other
/*  1513 */                         //         ^
/*  1514 */                         //
/*  1515 */                         $currLineNo = 19;
/*  1516 */                         $currColNo = 8;
/*  1517 */ 
/*  1518 */                         if (self === undefined) {
/*  1519 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1520 */                         }
/*  1521 */                         var $compareres209 = null;
/*  1522 */                         if (other === undefined) {
/*  1523 */                             throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/*  1524 */                         }
/*  1525 */                         $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(self, other, 'Eq', true));
/*  1526 */                         $blk = 3; /* allowing case fallthrough */
/*  1527 */                     case 3:
/*  1528 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*  1529 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 19, 19);
/*  1530 */                         }
/*  1531 */                         $compareres209 = $ret;
/*  1532 */                         var $jfalse210 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1533 */                         if ($jfalse210) {
/*  1534 */                             /*test failed */
/*  1535 */                             $blk = 2;
/*  1536 */                             continue;
/*  1537 */                         }
/*  1538 */                         $blk = 2; /* allowing case fallthrough */
/*  1539 */                     case 2:
/*  1540 */                         /* --- done --- */ var $unaryop211 = Sk.abstr.numberUnaryOp($compareres209, 'Not');
/*  1541 */                         return $unaryop211;
/*  1542 */                         return Sk.builtin.none.none$;
/*  1543 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1544 */                 }
/*  1545 */             } catch (err) {
/*  1546 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1547 */                     err = new Sk.builtin.ExternalError(err);
/*  1548 */                 }
/*  1549 */                 err.traceback.push({
/*  1550 */                     lineno: $currLineNo,
/*  1551 */                     colno: $currColNo,
/*  1552 */                     filename: '&lt;stdin&gt;.py'
/*  1553 */                 });
/*  1554 */                 if ($exc.length &gt; 0) {
/*  1555 */                     $err = err;
/*  1556 */                     $blk = $exc.pop();
/*  1557 */                     continue;
/*  1558 */                 } else {
/*  1559 */                     throw err;
/*  1560 */                 }
/*  1561 */             }
/*  1562 */         }
/*  1563 */     });
/*  1564 */     var $scope213 = (function $__hash__214$(self) {
/*  1565 */         var self, self, self, $loadgbl215, $loadgbl215, $lattr217, $loadgbl215, $lattr217, $lattr219, $elem220, $elem221, $loadtuple222;
/*  1566 */         var $wakeFromSuspension = function() {
/*  1567 */             var susp = $scope213.$wakingSuspension;
/*  1568 */             $scope213.$wakingSuspension = undefined;
/*  1569 */             $blk = susp.$blk;
/*  1570 */             $loc = susp.$loc;
/*  1571 */             $gbl = susp.$gbl;
/*  1572 */             $exc = susp.$exc;
/*  1573 */             $err = susp.$err;
/*  1574 */             $postfinally = susp.$postfinally;
/*  1575 */             $currLineNo = susp.$lineno;
/*  1576 */             $currColNo = susp.$colno;
/*  1577 */             Sk.lastYield = Date.now();
/*  1578 */             self = susp.$tmps.self;
/*  1579 */             $loadgbl215 = susp.$tmps.$loadgbl215;
/*  1580 */             $lattr217 = susp.$tmps.$lattr217;
/*  1581 */             $lattr219 = susp.$tmps.$lattr219;
/*  1582 */             $elem220 = susp.$tmps.$elem220;
/*  1583 */             $elem221 = susp.$tmps.$elem221;
/*  1584 */             $loadtuple222 = susp.$tmps.$loadtuple222;
/*  1585 */             try {
/*  1586 */                 $ret = susp.child.resume();
/*  1587 */             } catch (err) {
/*  1588 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1589 */                     err = new Sk.builtin.ExternalError(err);
/*  1590 */                 }
/*  1591 */                 err.traceback.push({
/*  1592 */                     lineno: $currLineNo,
/*  1593 */                     colno: $currColNo,
/*  1594 */                     filename: '&lt;stdin&gt;.py'
/*  1595 */                 });
/*  1596 */                 if ($exc.length &gt; 0) {
/*  1597 */                     $err = err;
/*  1598 */                     $blk = $exc.pop();
/*  1599 */                 } else {
/*  1600 */                     throw err;
/*  1601 */                 }
/*  1602 */             }
/*  1603 */         };
/*  1604 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1605 */             var susp = new Sk.misceval.Suspension();
/*  1606 */             susp.child = $child;
/*  1607 */             susp.resume = function() {
/*  1608 */                 $scope213.$wakingSuspension = susp;
/*  1609 */                 return $scope213();
/*  1610 */             };
/*  1611 */             susp.data = susp.child.data;
/*  1612 */             susp.$blk = $blk;
/*  1613 */             susp.$loc = $loc;
/*  1614 */             susp.$gbl = $gbl;
/*  1615 */             susp.$exc = $exc;
/*  1616 */             susp.$err = $err;
/*  1617 */             susp.$postfinally = $postfinally;
/*  1618 */             susp.$filename = $filename;
/*  1619 */             susp.$lineno = $lineno;
/*  1620 */             susp.$colno = $colno;
/*  1621 */             susp.optional = susp.child.optional;
/*  1622 */             susp.$tmps = {
/*  1623 */                 "self": self,
/*  1624 */                 "$loadgbl215": $loadgbl215,
/*  1625 */                 "$lattr217": $lattr217,
/*  1626 */                 "$lattr219": $lattr219,
/*  1627 */                 "$elem220": $elem220,
/*  1628 */                 "$elem221": $elem221,
/*  1629 */                 "$loadtuple222": $loadtuple222
/*  1630 */             };
/*  1631 */             return susp;
/*  1632 */         };
/*  1633 */         var $blk = 0,
/*  1634 */             $exc = [],
/*  1635 */             $loc = {},
/*  1636 */             $cell = {},
/*  1637 */             $gbl = this,
/*  1638 */             $err = undefined,
/*  1639 */             $ret = undefined,
/*  1640 */             $postfinally = undefined,
/*  1641 */             $currLineNo = undefined,
/*  1642 */             $currColNo = undefined;
/*  1643 */         if (typeof Sk.execStart === 'undefined') {
/*  1644 */             Sk.execStart = Date.now()
/*  1645 */         }
/*  1646 */         if (typeof Sk.lastYield === 'undefined') {
/*  1647 */             Sk.lastYield = Date.now()
/*  1648 */         }
/*  1649 */         if ($scope213.$wakingSuspension !== undefined) {
/*  1650 */             $wakeFromSuspension();
/*  1651 */         } else {}
/*  1652 */         $gbl.__class__ = this.Location;
/*  1653 */         while (true) {
/*  1654 */             try {
/*  1655 */                 var $dateNow = Date.now();
/*  1656 */                 if ($dateNow - Sk.execStart &gt; Sk.execLimit) {
/*  1657 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1658 */                 }
/*  1659 */                 if ($dateNow - Sk.lastYield &gt; Sk.yieldLimit) {
/*  1660 */                     var $susp = $saveSuspension({
/*  1661 */                         data: {
/*  1662 */                             type: 'Sk.yield'
/*  1663 */                         },
/*  1664 */                         resume: function() {}
/*  1665 */                     }, '&lt;stdin&gt;.py', $currLineNo, $currColNo);
/*  1666 */                     $susp.$blk = $blk;
/*  1667 */                     $susp.optional = true;
/*  1668 */                     return $susp;
/*  1669 */                 }
/*  1670 */                 switch ($blk) {
/*  1671 */                     case 0:
/*  1672 */                         /* --- codeobj entry --- */ if (self === undefined) {
/*  1673 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1674 */                         }
/*  1675 */                         if (Sk.breakpoints('&lt;stdin&gt;.py', 22, 8)) {
/*  1676 */                             var $susp = $saveSuspension({
/*  1677 */                                 data: {
/*  1678 */                                     type: 'Sk.debug'
/*  1679 */                                 },
/*  1680 */                                 resume: function() {}
/*  1681 */                             }, '&lt;stdin&gt;.py', 22, 8);
/*  1682 */                             $susp.$blk = 1;
/*  1683 */                             $susp.optional = true;
/*  1684 */                             return $susp;
/*  1685 */                         }
/*  1686 */                         $blk = 1; /* allowing case fallthrough */
/*  1687 */                     case 1:
/*  1688 */                         /* --- debug breakpoint for line 22 --- */
/*  1689 */                         //
/*  1690 */                         // line 22:
/*  1691 */                         //         return hash((self.x, self.y))
/*  1692 */                         //         ^
/*  1693 */                         //
/*  1694 */                         $currLineNo = 22;
/*  1695 */                         $currColNo = 8;
/*  1696 */ 
/*  1697 */                         var $loadgbl215 = Sk.misceval.loadname('hash', $gbl);
/*  1698 */                         if (self === undefined) {
/*  1699 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1700 */                         }
/*  1701 */                         $ret = Sk.abstr.gattr(self, $scope213.$const216, true);
/*  1702 */                         $blk = 2; /* allowing case fallthrough */
/*  1703 */                     case 2:
/*  1704 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*  1705 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 22, 21);
/*  1706 */                         }
/*  1707 */                         var $lattr217 = $ret;
/*  1708 */                         if (self === undefined) {
/*  1709 */                             throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1710 */                         }
/*  1711 */                         $ret = Sk.abstr.gattr(self, $scope213.$const218, true);
/*  1712 */                         $blk = 3; /* allowing case fallthrough */
/*  1713 */                     case 3:
/*  1714 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*  1715 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 22, 29);
/*  1716 */                         }
/*  1717 */                         var $lattr219 = $ret;
/*  1718 */                         var $elem220 = $lattr217;
/*  1719 */                         var $elem221 = $lattr219;
/*  1720 */                         var $loadtuple222 = new Sk.builtins['tuple']([$elem220, $elem221]);
/*  1721 */                         $ret = ($loadgbl215.tp$call) ? $loadgbl215.tp$call([$loadtuple222], undefined) : Sk.misceval.applyOrSuspend($loadgbl215, undefined, undefined, undefined, [$loadtuple222]);
/*  1722 */                         $blk = 4; /* allowing case fallthrough */
/*  1723 */                     case 4:
/*  1724 */                         /* --- function return or resume suspension --- */ if ($ret &amp;&amp; $ret.$isSuspension) {
/*  1725 */                             return $saveSuspension($ret, '&lt;stdin&gt;.py', 22, 15);
/*  1726 */                         }
/*  1727 */                         var $call223 = $ret;
/*  1728 */                         //
/*  1729 */                         // line 22:
/*  1730 */                         //         return hash((self.x, self.y))
/*  1731 */                         //                ^
/*  1732 */                         //
/*  1733 */                         $currLineNo = 22;
/*  1734 */                         $currColNo = 15;
/*  1735 */ 
/*  1736 */                         return $call223;
/*  1737 */                         return Sk.builtin.none.none$;
/*  1738 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1739 */                 }
/*  1740 */             } catch (err) {
/*  1741 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1742 */                     err = new Sk.builtin.ExternalError(err);
/*  1743 */                 }
/*  1744 */                 err.traceback.push({
/*  1745 */                     lineno: $currLineNo,
/*  1746 */                     colno: $currColNo,
/*  1747 */                     filename: '&lt;stdin&gt;.py'
/*  1748 */                 });
/*  1749 */                 if ($exc.length &gt; 0) {
/*  1750 */                     $err = err;
/*  1751 */                     $blk = $exc.pop();
/*  1752 */                     continue;
/*  1753 */                 } else {
/*  1754 */                     throw err;
/*  1755 */                 }
/*  1756 */             }
/*  1757 */         }
/*  1758 */     });
/*  1759 */     $scope213.$const216 = new Sk.builtin.str('x');
/*  1760 */     $scope213.$const218 = new Sk.builtin.str('y');
/*  1761 */     return $scope146;
/*  1762 */ }();