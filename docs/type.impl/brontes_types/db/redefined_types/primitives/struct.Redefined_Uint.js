(function() {var type_impls = {
"brontes_types":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#46-56\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.195/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#49-55\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.195/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;D&gt;(deserializer: D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, D::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.195/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.195/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.195/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","brontes_types::db::redefined_types::primitives::Redefined_U256"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RedefinedConvert%3CUint%3CBITS,+LIMBS%3E%3E-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#24\">source</a><a href=\"#impl-RedefinedConvert%3CUint%3CBITS,+LIMBS%3E%3E-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; RedefinedConvert&lt;Uint&lt;BITS, LIMBS&gt;&gt; for <a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.from_source\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#24\">source</a><a href=\"#method.from_source\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">from_source</a>(src: Uint&lt;BITS, LIMBS&gt;) -&gt; Self</h4></section><section id=\"method.to_source\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#24\">source</a><a href=\"#method.to_source\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">to_source</a>(self) -&gt; Uint&lt;BITS, LIMBS&gt;</h4></section></div></details>","RedefinedConvert<Uint<BITS, LIMBS>>","brontes_types::db::redefined_types::primitives::Redefined_U256"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Into%3CUint%3CBITS,+LIMBS%3E%3E-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#24\">source</a><a href=\"#impl-Into%3CUint%3CBITS,+LIMBS%3E%3E-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;Uint&lt;BITS, LIMBS&gt;&gt; for <a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#24\">source</a><a href=\"#method.into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html#tymethod.into\" class=\"fn\">into</a>(self) -&gt; Uint&lt;BITS, LIMBS&gt;</h4></section></summary><div class='docblock'>Converts this type into the (usually inferred) input type.</div></details></div></details>","Into<Uint<BITS, LIMBS>>","brontes_types::db::redefined_types::primitives::Redefined_U256"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#18\">source</a><a href=\"#impl-Debug-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#18\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","brontes_types::db::redefined_types::primitives::Redefined_U256"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#36-44\">source</a><a href=\"#impl-Serialize-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#37-43\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;S&gt;(&amp;self, serializer: S) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","brontes_types::db::redefined_types::primitives::Redefined_U256"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3CRedefined_Uint%3CBITS,+LIMBS%3E,+__D%3E-for-%3CRedefined_Uint%3CBITS,+LIMBS%3E+as+Archive%3E::Archived\" class=\"impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#26\">source</a><a href=\"#impl-Deserialize%3CRedefined_Uint%3CBITS,+LIMBS%3E,+__D%3E-for-%3CRedefined_Uint%3CBITS,+LIMBS%3E+as+Archive%3E::Archived\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;__D: Fallible + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; Deserialize&lt;<a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;, __D&gt; for Archived&lt;<a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;&gt;<div class=\"where\">where\n    [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">LIMBS</a>]: Archive,\n    Archived&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">LIMBS</a>]&gt;: Deserialize&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">LIMBS</a>], __D&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#26\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deserialize</a>(\n    &amp;self,\n    deserializer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __D</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;, __D::Error&gt;</h4></section></summary><div class='docblock'>Deserializes using the given deserializer</div></details></div></details>","Deserialize<Redefined_Uint<BITS, LIMBS>, __D>","brontes_types::db::redefined_types::primitives::Redefined_U256"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#58-62\">source</a><a href=\"#impl-Default-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#59-61\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","brontes_types::db::redefined_types::primitives::Redefined_U256"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#22\">source</a><a href=\"#impl-PartialEq-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#22\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","brontes_types::db::redefined_types::primitives::Redefined_U256"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Archive-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#27\">source</a><a href=\"#impl-Archive-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; Archive for <a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;<div class=\"where\">where\n    [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">LIMBS</a>]: Archive,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Archived\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Archived\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Archived</a> = <a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.ArchivedRedefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::ArchivedRedefined_Uint\">ArchivedRedefined_Uint</a>&lt;BITS, LIMBS&gt;</h4></section></summary><div class='docblock'>The archived representation of this type. <a>Read more</a></div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Resolver\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Resolver\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Resolver</a> = <a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_UintResolver.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_UintResolver\">Redefined_UintResolver</a>&lt;BITS, LIMBS&gt;</h4></section></summary><div class='docblock'>The resolver for this type. It must contain all the additional information from serializing\nneeded to make the archived type from the normal type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.resolve\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#27\">source</a><a href=\"#method.resolve\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a class=\"fn\">resolve</a>(\n    &amp;self,\n    pos: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    resolver: Self::Resolver,\n    out: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut </a>Self::Archived\n)</h4></section></summary><div class='docblock'>Creates the archived version of this value at the given position and writes it to the given\noutput. <a>Read more</a></div></details></div></details>","Archive","brontes_types::db::redefined_types::primitives::Redefined_U256"],["<section id=\"impl-Copy-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#20\">source</a><a href=\"#impl-Copy-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;</h3></section>","Copy","brontes_types::db::redefined_types::primitives::Redefined_U256"],["<section id=\"impl-Eq-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#21\">source</a><a href=\"#impl-Eq-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;</h3></section>","Eq","brontes_types::db::redefined_types::primitives::Redefined_U256"],["<section id=\"impl-StructuralEq-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#21\">source</a><a href=\"#impl-StructuralEq-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;</h3></section>","StructuralEq","brontes_types::db::redefined_types::primitives::Redefined_U256"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#23\">source</a><a href=\"#impl-Hash-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#23\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __H</a>)</h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","brontes_types::db::redefined_types::primitives::Redefined_U256"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize%3C__S%3E-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#25\">source</a><a href=\"#impl-Serialize%3C__S%3E-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;__S: Fallible + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; Serialize&lt;__S&gt; for <a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;<div class=\"where\">where\n    [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">LIMBS</a>]: Serialize&lt;__S&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#25\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">serialize</a>(&amp;self, serializer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __S</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self::Resolver, __S::Error&gt;</h4></section></summary><div class='docblock'>Writes the dependencies for the object and returns a resolver that can create the archived\ntype.</div></details></div></details>","Serialize<__S>","brontes_types::db::redefined_types::primitives::Redefined_U256"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#19\">source</a><a href=\"#impl-Clone-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#19\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","brontes_types::db::redefined_types::primitives::Redefined_U256"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CUint%3CBITS,+LIMBS%3E%3E-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#24\">source</a><a href=\"#impl-From%3CUint%3CBITS,+LIMBS%3E%3E-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Uint&lt;BITS, LIMBS&gt;&gt; for <a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#24\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(src: Uint&lt;BITS, LIMBS&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Uint<BITS, LIMBS>>","brontes_types::db::redefined_types::primitives::Redefined_U256"],["<section id=\"impl-StructuralPartialEq-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brontes_types/db/redefined_types/primitives.rs.html#22\">source</a><a href=\"#impl-StructuralPartialEq-for-Redefined_Uint%3CBITS,+LIMBS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"brontes_types/db/redefined_types/primitives/struct.Redefined_Uint.html\" title=\"struct brontes_types::db::redefined_types::primitives::Redefined_Uint\">Redefined_Uint</a>&lt;BITS, LIMBS&gt;</h3></section>","StructuralPartialEq","brontes_types::db::redefined_types::primitives::Redefined_U256"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()