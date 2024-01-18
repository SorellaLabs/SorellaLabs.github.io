(function() {var type_impls = {
"boa_engine":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GcRef%3C'a,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/boa_gc/cell.rs.html#304\">source</a><a href=\"#impl-GcRef%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T&gt; <a class=\"struct\" href=\"boa_gc/cell/struct.GcRef.html\" title=\"struct boa_gc::cell::GcRef\">GcRef</a>&lt;'a, T&gt;<div class=\"where\">where\n    T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method\"><a class=\"src rightside\" href=\"src/boa_gc/cell.rs.html#315\">source</a><h4 class=\"code-header\">pub fn <a href=\"boa_gc/cell/struct.GcRef.html#tymethod.clone\" class=\"fn\">clone</a>(orig: &amp;<a class=\"struct\" href=\"boa_gc/cell/struct.GcRef.html\" title=\"struct boa_gc::cell::GcRef\">GcRef</a>&lt;'a, T&gt;) -&gt; <a class=\"struct\" href=\"boa_gc/cell/struct.GcRef.html\" title=\"struct boa_gc::cell::GcRef\">GcRef</a>&lt;'a, T&gt;</h4></section></summary><div class=\"docblock\"><p>Copies a <code>GcCellRef</code>.</p>\n<p>The <code>GcCell</code> is already immutably borrowed, so this cannot fail.</p>\n<p>This is an associated function that needs to be used as\n<code>GcCellRef::clone(...)</code>. A <code>Clone</code> implementation or a method\nwould interfere with the use of <code>c.borrow().clone()</code> to clone\nthe contents of a <code>GcCell</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map\" class=\"method\"><a class=\"src rightside\" href=\"src/boa_gc/cell.rs.html#330-333\">source</a><h4 class=\"code-header\">pub fn <a href=\"boa_gc/cell/struct.GcRef.html#tymethod.map\" class=\"fn\">map</a>&lt;U, F&gt;(orig: <a class=\"struct\" href=\"boa_gc/cell/struct.GcRef.html\" title=\"struct boa_gc::cell::GcRef\">GcRef</a>&lt;'a, T&gt;, f: F) -&gt; <a class=\"struct\" href=\"boa_gc/cell/struct.GcRef.html\" title=\"struct boa_gc::cell::GcRef\">GcRef</a>&lt;'a, U&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;U</a>,\n    U: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class=\"docblock\"><p>Makes a new <code>GcCellRef</code> from a component of the borrowed data.</p>\n<p>The <code>GcCell</code> is already immutably borrowed, so this cannot fail.</p>\n<p>This is an associated function that needs to be used as <code>GcCellRef::map(...)</code>.\nA method would interfere with methods of the same name on the contents\nof a <code>GcCellRef</code> used through <code>Deref</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map_split\" class=\"method\"><a class=\"src rightside\" href=\"src/boa_gc/cell.rs.html#353-357\">source</a><h4 class=\"code-header\">pub fn <a href=\"boa_gc/cell/struct.GcRef.html#tymethod.map_split\" class=\"fn\">map_split</a>&lt;U, V, F&gt;(\n    orig: <a class=\"struct\" href=\"boa_gc/cell/struct.GcRef.html\" title=\"struct boa_gc::cell::GcRef\">GcRef</a>&lt;'a, T&gt;,\n    f: F\n) -&gt; (<a class=\"struct\" href=\"boa_gc/cell/struct.GcRef.html\" title=\"struct boa_gc::cell::GcRef\">GcRef</a>&lt;'a, U&gt;, <a class=\"struct\" href=\"boa_gc/cell/struct.GcRef.html\" title=\"struct boa_gc::cell::GcRef\">GcRef</a>&lt;'a, V&gt;)<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a>) -&gt; (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;U</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;V</a>),\n    U: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    V: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class=\"docblock\"><p>Splits a <code>GcCellRef</code> into multiple <code>GcCellRef</code>s for different components of the borrowed data.</p>\n<p>The <code>GcCell</code> is already immutably borrowed, so this cannot fail.</p>\n<p>This is an associated function that needs to be used as <code>GcCellRef::map_split(...)</code>.\nA method would interfere with methods of the same name on the contents of a <code>GcCellRef</code> used through <code>Deref</code>.</p>\n</div></details></div></details>",0,"boa_engine::object::jsobject::Ref"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-GcRef%3C'_,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/boa_gc/cell.rs.html#382\">source</a><a href=\"#impl-Deref-for-GcRef%3C'_,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"boa_gc/cell/struct.GcRef.html\" title=\"struct boa_gc::cell::GcRef\">GcRef</a>&lt;'_, T&gt;<div class=\"where\">where\n    T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = T</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/boa_gc/cell.rs.html#385\">source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","boa_engine::object::jsobject::Ref"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-GcRef%3C'_,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/boa_gc/cell.rs.html#403\">source</a><a href=\"#impl-Display-for-GcRef%3C'_,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"boa_gc/cell/struct.GcRef.html\" title=\"struct boa_gc::cell::GcRef\">GcRef</a>&lt;'_, T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/boa_gc/cell.rs.html#404\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","boa_engine::object::jsobject::Ref"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-GcRef%3C'_,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/boa_gc/cell.rs.html#390\">source</a><a href=\"#impl-Drop-for-GcRef%3C'_,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"boa_gc/cell/struct.GcRef.html\" title=\"struct boa_gc::cell::GcRef\">GcRef</a>&lt;'_, T&gt;<div class=\"where\">where\n    T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/boa_gc/cell.rs.html#391\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","boa_engine::object::jsobject::Ref"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GcRef%3C'_,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/boa_gc/cell.rs.html#397\">source</a><a href=\"#impl-Debug-for-GcRef%3C'_,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"boa_gc/cell/struct.GcRef.html\" title=\"struct boa_gc::cell::GcRef\">GcRef</a>&lt;'_, T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/boa_gc/cell.rs.html#398\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","boa_engine::object::jsobject::Ref"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()