(function() {var type_impls = {
"rkyv":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ArchiveWith%3C%26F%3E-for-RefAsBox\" class=\"impl\"><a class=\"src rightside\" href=\"src/rkyv/with/core.rs.html#133-146\">source</a><a href=\"#impl-ArchiveWith%3C%26F%3E-for-RefAsBox\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"rkyv/trait.ArchiveUnsized.html\" title=\"trait rkyv::ArchiveUnsized\">ArchiveUnsized</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"rkyv/with/trait.ArchiveWith.html\" title=\"trait rkyv::with::ArchiveWith\">ArchiveWith</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;F</a>&gt; for <a class=\"struct\" href=\"rkyv/with/struct.RefAsBox.html\" title=\"struct rkyv::with::RefAsBox\">RefAsBox</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Archived\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Archived\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rkyv/with/trait.ArchiveWith.html#associatedtype.Archived\" class=\"associatedtype\">Archived</a> = <a class=\"struct\" href=\"rkyv/boxed/struct.ArchivedBox.html\" title=\"struct rkyv::boxed::ArchivedBox\">ArchivedBox</a>&lt;&lt;F as <a class=\"trait\" href=\"rkyv/trait.ArchiveUnsized.html\" title=\"trait rkyv::ArchiveUnsized\">ArchiveUnsized</a>&gt;::<a class=\"associatedtype\" href=\"rkyv/trait.ArchiveUnsized.html#associatedtype.Archived\" title=\"type rkyv::ArchiveUnsized::Archived\">Archived</a>&gt;</h4></section></summary><div class='docblock'>The archived type of a <code>With&lt;F, Self&gt;</code>.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Resolver\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Resolver\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rkyv/with/trait.ArchiveWith.html#associatedtype.Resolver\" class=\"associatedtype\">Resolver</a> = <a class=\"struct\" href=\"rkyv/boxed/struct.BoxResolver.html\" title=\"struct rkyv::boxed::BoxResolver\">BoxResolver</a>&lt;&lt;F as <a class=\"trait\" href=\"rkyv/trait.ArchiveUnsized.html\" title=\"trait rkyv::ArchiveUnsized\">ArchiveUnsized</a>&gt;::<a class=\"associatedtype\" href=\"rkyv/trait.ArchiveUnsized.html#associatedtype.MetadataResolver\" title=\"type rkyv::ArchiveUnsized::MetadataResolver\">MetadataResolver</a>&gt;</h4></section></summary><div class='docblock'>The resolver of a <code>With&lt;F, Self&gt;</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.resolve_with\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rkyv/with/core.rs.html#138-145\">source</a><a href=\"#method.resolve_with\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"rkyv/with/trait.ArchiveWith.html#tymethod.resolve_with\" class=\"fn\">resolve_with</a>(\n    field: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;F</a>,\n    pos: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    resolver: Self::<a class=\"associatedtype\" href=\"rkyv/with/trait.ArchiveWith.html#associatedtype.Resolver\" title=\"type rkyv::with::ArchiveWith::Resolver\">Resolver</a>,\n    out: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut </a>Self::<a class=\"associatedtype\" href=\"rkyv/with/trait.ArchiveWith.html#associatedtype.Archived\" title=\"type rkyv::with::ArchiveWith::Archived\">Archived</a>\n)</h4></section></summary><div class='docblock'>Resolves the archived type using a reference to the field type <code>F</code>. <a href=\"rkyv/with/trait.ArchiveWith.html#tymethod.resolve_with\">Read more</a></div></details></div></details>","ArchiveWith<&F>","rkyv::with::Boxed"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SerializeWith%3C%26F,+S%3E-for-RefAsBox\" class=\"impl\"><a class=\"src rightside\" href=\"src/rkyv/with/core.rs.html#148-153\">source</a><a href=\"#impl-SerializeWith%3C%26F,+S%3E-for-RefAsBox\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"rkyv/trait.SerializeUnsized.html\" title=\"trait rkyv::SerializeUnsized\">SerializeUnsized</a>&lt;S&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, S: <a class=\"trait\" href=\"rkyv/trait.Fallible.html\" title=\"trait rkyv::Fallible\">Fallible</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"rkyv/with/trait.SerializeWith.html\" title=\"trait rkyv::with::SerializeWith\">SerializeWith</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;F</a>, S&gt; for <a class=\"struct\" href=\"rkyv/with/struct.RefAsBox.html\" title=\"struct rkyv::with::RefAsBox\">RefAsBox</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize_with\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rkyv/with/core.rs.html#150-152\">source</a><a href=\"#method.serialize_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rkyv/with/trait.SerializeWith.html#tymethod.serialize_with\" class=\"fn\">serialize_with</a>(\n    field: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;F</a>,\n    serializer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut S</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self::<a class=\"associatedtype\" href=\"rkyv/with/trait.ArchiveWith.html#associatedtype.Resolver\" title=\"type rkyv::with::ArchiveWith::Resolver\">Resolver</a>, S::<a class=\"associatedtype\" href=\"rkyv/trait.Fallible.html#associatedtype.Error\" title=\"type rkyv::Fallible::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Serializes the field type <code>F</code> using the given serializer.</div></details></div></details>","SerializeWith<&F, S>","rkyv::with::Boxed"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-RefAsBox\" class=\"impl\"><a class=\"src rightside\" href=\"src/rkyv/with/mod.rs.html#397\">source</a><a href=\"#impl-Debug-for-RefAsBox\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"rkyv/with/struct.RefAsBox.html\" title=\"struct rkyv::with::RefAsBox\">RefAsBox</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rkyv/with/mod.rs.html#397\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rkyv::with::Boxed"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()