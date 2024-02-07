(function() {var type_impls = {
"rkyv":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RelPtr%3CT,+O%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/validation.rs.html#38-62\">source</a><a href=\"#impl-RelPtr%3CT,+O%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"rkyv/trait.ArchivePointee.html\" title=\"trait rkyv::ArchivePointee\">ArchivePointee</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, O: <a class=\"trait\" href=\"rkyv/rel_ptr/trait.Offset.html\" title=\"trait rkyv::rel_ptr::Offset\">Offset</a>&gt; <a class=\"struct\" href=\"rkyv/rel_ptr/struct.RelPtr.html\" title=\"struct rkyv::rel_ptr::RelPtr\">RelPtr</a>&lt;T, O&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.manual_check_bytes\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/validation.rs.html#49-61\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"rkyv/rel_ptr/struct.RelPtr.html#tymethod.manual_check_bytes\" class=\"fn\">manual_check_bytes</a>&lt;'a, C: <a class=\"trait\" href=\"rkyv/trait.Fallible.html\" title=\"trait rkyv::Fallible\">Fallible</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*const Self</a>,\n    context: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut C</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a Self</a>, &lt;T::<a class=\"associatedtype\" href=\"rkyv/trait.ArchivePointee.html#associatedtype.ArchivedMetadata\" title=\"type rkyv::ArchivePointee::ArchivedMetadata\">ArchivedMetadata</a> as <a class=\"trait\" href=\"rkyv/trait.CheckBytes.html\" title=\"trait rkyv::CheckBytes\">CheckBytes</a>&lt;C&gt;&gt;::<a class=\"associatedtype\" href=\"rkyv/trait.CheckBytes.html#associatedtype.Error\" title=\"type rkyv::CheckBytes::Error\">Error</a>&gt;<div class=\"where\">where\n    O: <a class=\"trait\" href=\"rkyv/trait.CheckBytes.html\" title=\"trait rkyv::CheckBytes\">CheckBytes</a>&lt;C&gt;,\n    T::<a class=\"associatedtype\" href=\"rkyv/trait.ArchivePointee.html#associatedtype.ArchivedMetadata\" title=\"type rkyv::ArchivePointee::ArchivedMetadata\">ArchivedMetadata</a>: <a class=\"trait\" href=\"rkyv/trait.CheckBytes.html\" title=\"trait rkyv::CheckBytes\">CheckBytes</a>&lt;C&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Checks the bytes of the given relative pointer.</p>\n<p>This is done rather than implementing <code>CheckBytes</code> to force users to manually write their\n<code>CheckBytes</code> implementation since they need to also provide the ownership model of their\nmemory.</p>\n<h5 id=\"safety\"><a class=\"doc-anchor\" href=\"#safety\">§</a>Safety</h5>\n<p>The given pointer must be aligned and point to enough bytes to represent a <code>RelPtr&lt;T&gt;</code>.</p>\n</div></details></div></details>",0,"rkyv::RelPtr"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RelPtr%3CT,+O%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#273-302\">source</a><a href=\"#impl-RelPtr%3CT,+O%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, O: <a class=\"trait\" href=\"rkyv/rel_ptr/trait.Offset.html\" title=\"trait rkyv::rel_ptr::Offset\">Offset</a>&gt; <a class=\"struct\" href=\"rkyv/rel_ptr/struct.RelPtr.html\" title=\"struct rkyv::rel_ptr::RelPtr\">RelPtr</a>&lt;T, O&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_emplace\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#281-285\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"rkyv/rel_ptr/struct.RelPtr.html#tymethod.try_emplace\" class=\"fn\">try_emplace</a>(\n    from: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    to: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    out: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut Self</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"rkyv/rel_ptr/enum.OffsetError.html\" title=\"enum rkyv::rel_ptr::OffsetError\">OffsetError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to create a relative pointer from one position to another.</p>\n<h5 id=\"safety\"><a class=\"doc-anchor\" href=\"#safety\">§</a>Safety</h5>\n<ul>\n<li><code>from</code> must be the position of <code>out</code> within the archive</li>\n<li><code>to</code> must be the position of some valid <code>T</code></li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.emplace\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#299-301\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"rkyv/rel_ptr/struct.RelPtr.html#tymethod.emplace\" class=\"fn\">emplace</a>(from: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, to: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, out: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut Self</a>)</h4></section></summary><div class=\"docblock\"><p>Creates a relative pointer from one position to another.</p>\n<h5 id=\"panics\"><a class=\"doc-anchor\" href=\"#panics\">§</a>Panics</h5>\n<ul>\n<li>The offset between <code>from</code> and <code>to</code> does not fit in an <code>isize</code></li>\n<li>The offset between <code>from</code> and <code>to</code> exceeds the offset storage</li>\n</ul>\n<h5 id=\"safety-1\"><a class=\"doc-anchor\" href=\"#safety-1\">§</a>Safety</h5>\n<ul>\n<li><code>from</code> must be the position of <code>out</code> within the archive</li>\n<li><code>to</code> must be the position of some valid <code>T</code></li>\n</ul>\n</div></details></div></details>",0,"rkyv::RelPtr"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RelPtr%3CT,+O%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#304-336\">source</a><a href=\"#impl-RelPtr%3CT,+O%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"rkyv/trait.ArchivePointee.html\" title=\"trait rkyv::ArchivePointee\">ArchivePointee</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, O: <a class=\"trait\" href=\"rkyv/rel_ptr/trait.Offset.html\" title=\"trait rkyv::rel_ptr::Offset\">Offset</a>&gt; <a class=\"struct\" href=\"rkyv/rel_ptr/struct.RelPtr.html\" title=\"struct rkyv::rel_ptr::RelPtr\">RelPtr</a>&lt;T, O&gt;<div class=\"where\">where\n    T::<a class=\"associatedtype\" href=\"rkyv/trait.ArchivePointee.html#associatedtype.ArchivedMetadata\" title=\"type rkyv::ArchivePointee::ArchivedMetadata\">ArchivedMetadata</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_emplace_null\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#314-320\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"rkyv/rel_ptr/struct.RelPtr.html#tymethod.try_emplace_null\" class=\"fn\">try_emplace_null</a>(\n    pos: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    out: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut Self</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"rkyv/rel_ptr/enum.OffsetError.html\" title=\"enum rkyv::rel_ptr::OffsetError\">OffsetError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to create a null relative pointer with default metadata.</p>\n<h5 id=\"safety\"><a class=\"doc-anchor\" href=\"#safety\">§</a>Safety</h5>\n<p><code>pos</code> must be the position of <code>out</code> within the archive.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.emplace_null\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#333-335\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"rkyv/rel_ptr/struct.RelPtr.html#tymethod.emplace_null\" class=\"fn\">emplace_null</a>(pos: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, out: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut Self</a>)</h4></section></summary><div class=\"docblock\"><p>Creates a null relative pointer with default metadata.</p>\n<h5 id=\"panics\"><a class=\"doc-anchor\" href=\"#panics\">§</a>Panics</h5>\n<ul>\n<li>An offset of <code>0</code> does not fit in an <code>isize</code></li>\n<li>An offset of <code>0</code> exceeds the offset storage</li>\n</ul>\n<h5 id=\"safety-1\"><a class=\"doc-anchor\" href=\"#safety-1\">§</a>Safety</h5>\n<p><code>pos</code> must be the position of <code>out</code> within the archive.</p>\n</div></details></div></details>",0,"rkyv::RelPtr"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RelPtr%3CT,+O%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#338-490\">source</a><a href=\"#impl-RelPtr%3CT,+O%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"rkyv/trait.ArchivePointee.html\" title=\"trait rkyv::ArchivePointee\">ArchivePointee</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, O: <a class=\"trait\" href=\"rkyv/rel_ptr/trait.Offset.html\" title=\"trait rkyv::rel_ptr::Offset\">Offset</a>&gt; <a class=\"struct\" href=\"rkyv/rel_ptr/struct.RelPtr.html\" title=\"struct rkyv::rel_ptr::RelPtr\">RelPtr</a>&lt;T, O&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_resolve_emplace\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#348-360\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"rkyv/rel_ptr/struct.RelPtr.html#tymethod.try_resolve_emplace\" class=\"fn\">try_resolve_emplace</a>&lt;U: <a class=\"trait\" href=\"rkyv/trait.ArchiveUnsized.html\" title=\"trait rkyv::ArchiveUnsized\">ArchiveUnsized</a>&lt;Archived = T&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    from: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    to: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;U</a>,\n    metadata_resolver: U::<a class=\"associatedtype\" href=\"rkyv/trait.ArchiveUnsized.html#associatedtype.MetadataResolver\" title=\"type rkyv::ArchiveUnsized::MetadataResolver\">MetadataResolver</a>,\n    out: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut Self</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"rkyv/rel_ptr/enum.OffsetError.html\" title=\"enum rkyv::rel_ptr::OffsetError\">OffsetError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to create a relative pointer from one position to another.</p>\n<h5 id=\"safety\"><a class=\"doc-anchor\" href=\"#safety\">§</a>Safety</h5>\n<ul>\n<li><code>from</code> must be the position of <code>out</code> within the archive</li>\n<li><code>to</code> must be the position of some valid <code>T</code></li>\n<li><code>value</code> must be the value being serialized</li>\n<li><code>metadata_resolver</code> must be the result of serializing the metadata of <code>value</code></li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.resolve_emplace\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#376-384\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"rkyv/rel_ptr/struct.RelPtr.html#tymethod.resolve_emplace\" class=\"fn\">resolve_emplace</a>&lt;U: <a class=\"trait\" href=\"rkyv/trait.ArchiveUnsized.html\" title=\"trait rkyv::ArchiveUnsized\">ArchiveUnsized</a>&lt;Archived = T&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    from: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    to: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;U</a>,\n    metadata_resolver: U::<a class=\"associatedtype\" href=\"rkyv/trait.ArchiveUnsized.html#associatedtype.MetadataResolver\" title=\"type rkyv::ArchiveUnsized::MetadataResolver\">MetadataResolver</a>,\n    out: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut Self</a>\n)</h4></section></summary><div class=\"docblock\"><p>Creates a relative pointer from one position to another.</p>\n<h5 id=\"panics\"><a class=\"doc-anchor\" href=\"#panics\">§</a>Panics</h5>\n<ul>\n<li>The offset between <code>from</code> and <code>to</code> does not fit in an <code>isize</code></li>\n<li>The offset between <code>from</code> and <code>to</code> exceeds the offset storage</li>\n</ul>\n<h5 id=\"safety-1\"><a class=\"doc-anchor\" href=\"#safety-1\">§</a>Safety</h5>\n<ul>\n<li><code>from</code> must be the position of <code>out</code> within the archive</li>\n<li><code>to</code> must be the position of some valid <code>T</code></li>\n<li><code>value</code> must be the value being serialized</li>\n<li><code>metadata_resolver</code> must be the result of serializing the metadata of <code>value</code></li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_resolve_emplace_from_raw_parts\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#402-413\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"rkyv/rel_ptr/struct.RelPtr.html#tymethod.try_resolve_emplace_from_raw_parts\" class=\"fn\">try_resolve_emplace_from_raw_parts</a>(\n    from: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    to: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    archived_metadata: &lt;T as <a class=\"trait\" href=\"rkyv/trait.ArchivePointee.html\" title=\"trait rkyv::ArchivePointee\">ArchivePointee</a>&gt;::<a class=\"associatedtype\" href=\"rkyv/trait.ArchivePointee.html#associatedtype.ArchivedMetadata\" title=\"type rkyv::ArchivePointee::ArchivedMetadata\">ArchivedMetadata</a>,\n    out: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut Self</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"rkyv/rel_ptr/enum.OffsetError.html\" title=\"enum rkyv::rel_ptr::OffsetError\">OffsetError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to create a relative pointer from one position to another given\nraw pointer metadata.</p>\n<p>This does the same thing as <a href=\"rkyv/rel_ptr/struct.RelPtr.html#method.try_resolve_emplace\" title=\"associated function rkyv::rel_ptr::RelPtr::try_resolve_emplace\"><code>RelPtr::try_resolve_emplace</code></a> but you must supply\nthe <a href=\"rkyv/trait.ArchivePointee.html#associatedtype.ArchivedMetadata\" title=\"associated type rkyv::ArchivePointee::ArchivedMetadata\"><code>&lt;T as ArchivePointee&gt;::ArchivedMetadata</code></a>\nyourself directly rather than through an implementation of <a href=\"rkyv/trait.ArchiveUnsized.html\" title=\"trait rkyv::ArchiveUnsized\"><code>ArchiveUnsized</code></a> on some\nvalue.</p>\n<h5 id=\"safety-2\"><a class=\"doc-anchor\" href=\"#safety-2\">§</a>Safety</h5>\n<ul>\n<li><code>from</code> must be the position of <code>out</code> within the archive</li>\n<li><code>to</code> must be the position of some valid <code>T</code></li>\n<li><code>value</code> must be the value being serialized</li>\n<li><code>archived_metadata</code> must produce valid metadata for the pointee of the resulting\n<code>RelPtr</code> (the thing being pointed at) when <a href=\"rkyv/trait.ArchivePointee.html#tymethod.pointer_metadata\" title=\"associated function rkyv::ArchivePointee::pointer_metadata\"><code>&lt;T as ArchivePointee&gt;::pointer_metadata(archived_metadata)</code></a>\nis called.</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.resolve_emplace_from_raw_parts\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#436-443\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"rkyv/rel_ptr/struct.RelPtr.html#tymethod.resolve_emplace_from_raw_parts\" class=\"fn\">resolve_emplace_from_raw_parts</a>(\n    from: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    to: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    archived_metadata: &lt;T as <a class=\"trait\" href=\"rkyv/trait.ArchivePointee.html\" title=\"trait rkyv::ArchivePointee\">ArchivePointee</a>&gt;::<a class=\"associatedtype\" href=\"rkyv/trait.ArchivePointee.html#associatedtype.ArchivedMetadata\" title=\"type rkyv::ArchivePointee::ArchivedMetadata\">ArchivedMetadata</a>,\n    out: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut Self</a>\n)</h4></section></summary><div class=\"docblock\"><p>Creates a relative pointer from one position to another given\nraw pointer metadata.</p>\n<p>This does the same thing as <a href=\"rkyv/rel_ptr/struct.RelPtr.html#method.resolve_emplace\" title=\"associated function rkyv::rel_ptr::RelPtr::resolve_emplace\"><code>RelPtr::resolve_emplace</code></a> but you must supply\nthe <a href=\"rkyv/trait.ArchivePointee.html#associatedtype.ArchivedMetadata\" title=\"associated type rkyv::ArchivePointee::ArchivedMetadata\"><code>&lt;T as ArchivePointee&gt;::ArchivedMetadata</code></a>\nyourself directly rather than through an implementation of <a href=\"rkyv/trait.ArchiveUnsized.html\" title=\"trait rkyv::ArchiveUnsized\"><code>ArchiveUnsized</code></a> on some\nvalue.</p>\n<h5 id=\"panics-1\"><a class=\"doc-anchor\" href=\"#panics-1\">§</a>Panics</h5>\n<ul>\n<li>The offset between <code>from</code> and <code>to</code> does not fit in an <code>isize</code></li>\n<li>The offset between <code>from</code> and <code>to</code> exceeds the offset storage</li>\n</ul>\n<h5 id=\"safety-3\"><a class=\"doc-anchor\" href=\"#safety-3\">§</a>Safety</h5>\n<ul>\n<li><code>from</code> must be the position of <code>out</code> within the archive</li>\n<li><code>to</code> must be the position of some valid <code>T</code></li>\n<li><code>value</code> must be the value being serialized</li>\n<li><code>archived_metadata</code> must produce valid metadata for the pointee of the resulting\n<code>RelPtr</code> (the thing being pointed at) when <a href=\"rkyv/trait.ArchivePointee.html#tymethod.pointer_metadata\" title=\"associated function rkyv::ArchivePointee::pointer_metadata\"><code>&lt;T as ArchivePointee&gt;::pointer_metadata(archived_metadata)</code></a>\nis called.</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.base\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#447-449\">source</a><h4 class=\"code-header\">pub fn <a href=\"rkyv/rel_ptr/struct.RelPtr.html#tymethod.base\" class=\"fn\">base</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*const </a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a></h4></section></summary><div class=\"docblock\"><p>Gets the base pointer for the relative pointer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.base_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#453-455\">source</a><h4 class=\"code-header\">pub fn <a href=\"rkyv/rel_ptr/struct.RelPtr.html#tymethod.base_mut\" class=\"fn\">base_mut</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut </a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a></h4></section></summary><div class=\"docblock\"><p>Gets the mutable base pointer for the relative pointer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.offset\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#459-461\">source</a><h4 class=\"code-header\">pub fn <a href=\"rkyv/rel_ptr/struct.RelPtr.html#tymethod.offset\" class=\"fn\">offset</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.isize.html\">isize</a></h4></section></summary><div class=\"docblock\"><p>Gets the offset of the relative pointer from its base.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_null\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#465-467\">source</a><h4 class=\"code-header\">pub fn <a href=\"rkyv/rel_ptr/struct.RelPtr.html#tymethod.is_null\" class=\"fn\">is_null</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Gets whether the offset of the relative pointer is 0.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.metadata\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#471-473\">source</a><h4 class=\"code-header\">pub fn <a href=\"rkyv/rel_ptr/struct.RelPtr.html#tymethod.metadata\" class=\"fn\">metadata</a>(&amp;self) -&gt; &amp;T::<a class=\"associatedtype\" href=\"rkyv/trait.ArchivePointee.html#associatedtype.ArchivedMetadata\" title=\"type rkyv::ArchivePointee::ArchivedMetadata\">ArchivedMetadata</a></h4></section></summary><div class=\"docblock\"><p>Gets the metadata of the relative pointer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ptr\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#477-479\">source</a><h4 class=\"code-header\">pub fn <a href=\"rkyv/rel_ptr/struct.RelPtr.html#tymethod.as_ptr\" class=\"fn\">as_ptr</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*const T</a></h4></section></summary><div class=\"docblock\"><p>Calculates the memory address being pointed to by this relative pointer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_mut_ptr\" class=\"method\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#484-489\">source</a><h4 class=\"code-header\">pub fn <a href=\"rkyv/rel_ptr/struct.RelPtr.html#tymethod.as_mut_ptr\" class=\"fn\">as_mut_ptr</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut T</a></h4></section></summary><div class=\"docblock\"><p>Returns an unsafe mutable pointer to the memory address being pointed to by this relative\npointer.</p>\n</div></details></div></details>",0,"rkyv::RelPtr"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Pointer-for-RelPtr%3CT,+O%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#504-508\">source</a><a href=\"#impl-Pointer-for-RelPtr%3CT,+O%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"rkyv/trait.ArchivePointee.html\" title=\"trait rkyv::ArchivePointee\">ArchivePointee</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, O: <a class=\"trait\" href=\"rkyv/rel_ptr/trait.Offset.html\" title=\"trait rkyv::rel_ptr::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"rkyv/rel_ptr/struct.RelPtr.html\" title=\"struct rkyv::rel_ptr::RelPtr\">RelPtr</a>&lt;T, O&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#505-507\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Pointer.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter.</div></details></div></details>","Pointer","rkyv::RelPtr"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-RelPtr%3CT,+O%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#492-502\">source</a><a href=\"#impl-Debug-for-RelPtr%3CT,+O%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"rkyv/trait.ArchivePointee.html\" title=\"trait rkyv::ArchivePointee\">ArchivePointee</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, O: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"rkyv/rel_ptr/struct.RelPtr.html\" title=\"struct rkyv::rel_ptr::RelPtr\">RelPtr</a>&lt;T, O&gt;<div class=\"where\">where\n    T::<a class=\"associatedtype\" href=\"rkyv/trait.ArchivePointee.html#associatedtype.ArchivedMetadata\" title=\"type rkyv::ArchivePointee::ArchivedMetadata\">ArchivedMetadata</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rkyv/rel_ptr/mod.rs.html#496-501\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rkyv::RelPtr"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()