(function() {var type_impls = {
"rkyv":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RawRelPtr%3CO%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/validation.rs.html#14-36\">source</a><a href=\"#impl-RawRelPtr%3CO%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;O: <a class=\"trait\" href=\"rkyv/rel_ptr/trait.Offset.html\" title=\"trait rkyv::rel_ptr::Offset\">Offset</a>&gt; <a class=\"struct\" href=\"rkyv/rel_ptr/struct.RawRelPtr.html\" title=\"struct rkyv::rel_ptr::RawRelPtr\">RawRelPtr</a>&lt;O&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.manual_check_bytes\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/validation.rs.html#25-35\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"rkyv/rel_ptr/struct.RawRelPtr.html#tymethod.manual_check_bytes\" class=\"fn\">manual_check_bytes</a>&lt;'a, C: <a class=\"trait\" href=\"rkyv/trait.Fallible.html\" title=\"trait rkyv::Fallible\">Fallible</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*const Self</a>,\n    context: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut C</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a Self</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a>&gt;<div class=\"where\">where\n    O: <a class=\"trait\" href=\"rkyv/trait.CheckBytes.html\" title=\"trait rkyv::CheckBytes\">CheckBytes</a>&lt;C&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Checks the bytes of the given raw relative pointer.</p>\n<p>This is done rather than implementing <code>CheckBytes</code> to force users to manually write their\n<code>CheckBytes</code> implementation since they need to also provide the ownership model of their\nmemory.</p>\n<h5 id=\"safety\"><a class=\"doc-anchor\" href=\"#safety\">§</a>Safety</h5>\n<p>The given pointer must be aligned and point to enough bytes to represent a <code>RawRelPtr</code>.</p>\n</div></details></div></details>",0,"rkyv::rel_ptr::RawRelPtrI8","rkyv::rel_ptr::RawRelPtrI16","rkyv::rel_ptr::RawRelPtrI32","rkyv::rel_ptr::RawRelPtrI64","rkyv::rel_ptr::RawRelPtrU8","rkyv::rel_ptr::RawRelPtrU16","rkyv::rel_ptr::RawRelPtrU32","rkyv::rel_ptr::RawRelPtrU64","rkyv::RawRelPtr"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RawRelPtr%3CO%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#159-222\">source</a><a href=\"#impl-RawRelPtr%3CO%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;O: <a class=\"trait\" href=\"rkyv/rel_ptr/trait.Offset.html\" title=\"trait rkyv::rel_ptr::Offset\">Offset</a>&gt; <a class=\"struct\" href=\"rkyv/rel_ptr/struct.RawRelPtr.html\" title=\"struct rkyv::rel_ptr::RawRelPtr\">RawRelPtr</a>&lt;O&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_emplace\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#167-171\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"rkyv/rel_ptr/struct.RawRelPtr.html#tymethod.try_emplace\" class=\"fn\">try_emplace</a>(\n    from: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    to: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    out: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut Self</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"rkyv/rel_ptr/enum.OffsetError.html\" title=\"enum rkyv::rel_ptr::OffsetError\">OffsetError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to create a new <code>RawRelPtr</code> in-place between the given <code>from</code> and <code>to</code> positions.</p>\n<h5 id=\"safety\"><a class=\"doc-anchor\" href=\"#safety\">§</a>Safety</h5>\n<ul>\n<li><code>out</code> must be located at position <code>from</code></li>\n<li><code>to</code> must be a position within the archive</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.emplace\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#182-184\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"rkyv/rel_ptr/struct.RawRelPtr.html#tymethod.emplace\" class=\"fn\">emplace</a>(from: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, to: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, out: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut Self</a>)</h4></section></summary><div class=\"docblock\"><p>Creates a new <code>RawRelPtr</code> in-place between the given <code>from</code> and <code>to</code> positions.</p>\n<h5 id=\"safety-1\"><a class=\"doc-anchor\" href=\"#safety-1\">§</a>Safety</h5>\n<ul>\n<li><code>out</code> must be located at position <code>from</code></li>\n<li><code>to</code> must be a position within the archive</li>\n<li>The offset between <code>from</code> and <code>to</code> must fit in an <code>isize</code> and not exceed the offset\nstorage</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.base\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#188-190\">source</a><h4 class=\"code-header\">pub fn <a href=\"rkyv/rel_ptr/struct.RawRelPtr.html#tymethod.base\" class=\"fn\">base</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*const </a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a></h4></section></summary><div class=\"docblock\"><p>Gets the base pointer for the relative pointer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.base_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#194-196\">source</a><h4 class=\"code-header\">pub fn <a href=\"rkyv/rel_ptr/struct.RawRelPtr.html#tymethod.base_mut\" class=\"fn\">base_mut</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut </a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a></h4></section></summary><div class=\"docblock\"><p>Gets the mutable base pointer for the relative pointer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.offset\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#200-202\">source</a><h4 class=\"code-header\">pub fn <a href=\"rkyv/rel_ptr/struct.RawRelPtr.html#tymethod.offset\" class=\"fn\">offset</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.isize.html\">isize</a></h4></section></summary><div class=\"docblock\"><p>Gets the offset of the relative pointer from its base.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_null\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#206-208\">source</a><h4 class=\"code-header\">pub fn <a href=\"rkyv/rel_ptr/struct.RawRelPtr.html#tymethod.is_null\" class=\"fn\">is_null</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Gets whether the offset of the relative pointer is 0.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ptr\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#212-214\">source</a><h4 class=\"code-header\">pub fn <a href=\"rkyv/rel_ptr/struct.RawRelPtr.html#tymethod.as_ptr\" class=\"fn\">as_ptr</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*const </a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a></h4></section></summary><div class=\"docblock\"><p>Calculates the memory address being pointed to by this relative pointer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_mut_ptr\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#219-221\">source</a><h4 class=\"code-header\">pub fn <a href=\"rkyv/rel_ptr/struct.RawRelPtr.html#tymethod.as_mut_ptr\" class=\"fn\">as_mut_ptr</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut </a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a></h4></section></summary><div class=\"docblock\"><p>Returns an unsafe mutable pointer to the memory address being pointed to\nby this relative pointer.</p>\n</div></details></div></details>",0,"rkyv::rel_ptr::RawRelPtrI8","rkyv::rel_ptr::RawRelPtrI16","rkyv::rel_ptr::RawRelPtrI32","rkyv::rel_ptr::RawRelPtrI64","rkyv::rel_ptr::RawRelPtrU8","rkyv::rel_ptr::RawRelPtrU16","rkyv::rel_ptr::RawRelPtrU32","rkyv::rel_ptr::RawRelPtrU64","rkyv::RawRelPtr"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Pointer-for-RawRelPtr%3CO%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#232-236\">source</a><a href=\"#impl-Pointer-for-RawRelPtr%3CO%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;O: <a class=\"trait\" href=\"rkyv/rel_ptr/trait.Offset.html\" title=\"trait rkyv::rel_ptr::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"rkyv/rel_ptr/struct.RawRelPtr.html\" title=\"struct rkyv::rel_ptr::RawRelPtr\">RawRelPtr</a>&lt;O&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#233-235\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Pointer.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter.</div></details></div></details>","Pointer","rkyv::rel_ptr::RawRelPtrI8","rkyv::rel_ptr::RawRelPtrI16","rkyv::rel_ptr::RawRelPtrI32","rkyv::rel_ptr::RawRelPtrI64","rkyv::rel_ptr::RawRelPtrU8","rkyv::rel_ptr::RawRelPtrU16","rkyv::rel_ptr::RawRelPtrU32","rkyv::rel_ptr::RawRelPtrU64","rkyv::RawRelPtr"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-RawRelPtr%3CO%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#224-230\">source</a><a href=\"#impl-Debug-for-RawRelPtr%3CO%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;O: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"rkyv/rel_ptr/struct.RawRelPtr.html\" title=\"struct rkyv::rel_ptr::RawRelPtr\">RawRelPtr</a>&lt;O&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#225-229\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rkyv::rel_ptr::RawRelPtrI8","rkyv::rel_ptr::RawRelPtrI16","rkyv::rel_ptr::RawRelPtrI32","rkyv::rel_ptr::RawRelPtrI64","rkyv::rel_ptr::RawRelPtrU8","rkyv::rel_ptr::RawRelPtrU16","rkyv::rel_ptr::RawRelPtrU32","rkyv::rel_ptr::RawRelPtrU64","rkyv::RawRelPtr"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()