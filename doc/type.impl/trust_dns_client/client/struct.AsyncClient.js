(function() {var type_impls = {
"trust_dns_client":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsyncClient\" class=\"impl\"><a class=\"src rightside\" href=\"src/trust_dns_client/client/async_client.rs.html#49-94\">source</a><a href=\"#impl-AsyncClient\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"trust_dns_client/client/struct.AsyncClient.html\" title=\"struct trust_dns_client::client::AsyncClient\">AsyncClient</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/trust_dns_client/client/async_client.rs.html#59-69\">source</a><h4 class=\"code-header\">pub fn <a href=\"trust_dns_client/client/struct.AsyncClient.html#tymethod.new\" class=\"fn\">new</a>&lt;F, S&gt;(\n    stream: F,\n    stream_handle: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn DnsStreamHandle&gt;,\n    signer: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"trust_dns_client/rr/dnssec/struct.Signer.html\" title=\"struct trust_dns_client::rr::dnssec::Signer\">Signer</a>&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"trust_dns_client/client/struct.AsyncClientConnect.html\" title=\"struct trust_dns_client::client::AsyncClientConnect\">AsyncClientConnect</a>&lt;DnsMultiplexerConnect&lt;F, S, <a class=\"struct\" href=\"trust_dns_client/rr/dnssec/struct.Signer.html\" title=\"struct trust_dns_client::rr::dnssec::Signer\">Signer</a>&gt;, DnsMultiplexer&lt;S, <a class=\"struct\" href=\"trust_dns_client/rr/dnssec/struct.Signer.html\" title=\"struct trust_dns_client::rr::dnssec::Signer\">Signer</a>&gt;&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"AsyncClientConnect&lt;DnsMultiplexerConnect&lt;F, S, Signer&gt;, DnsMultiplexer&lt;S, Signer&gt;&gt;\">ⓘ</a><div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;S, ProtoError&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,\n    S: DnsClientStream + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,</div></h4></section></summary><div class=\"docblock\"><p>Spawns a new AsyncClient Stream. This uses a default timeout of 5 seconds for all requests.</p>\n<h5 id=\"arguments\"><a class=\"doc-anchor\" href=\"#arguments\">§</a>Arguments</h5>\n<ul>\n<li><code>stream</code> - A stream of bytes that can be used to send/receive DNS messages\n(see TcpClientStream or UdpClientStream)</li>\n<li><code>stream_handle</code> - The handle for the <code>stream</code> on which bytes can be sent/received.</li>\n<li><code>signer</code> - An optional signer for requests, needed for Updates with Sig0, otherwise not needed</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_timeout\" class=\"method\"><a class=\"src rightside\" href=\"src/trust_dns_client/client/async_client.rs.html#81-93\">source</a><h4 class=\"code-header\">pub fn <a href=\"trust_dns_client/client/struct.AsyncClient.html#tymethod.with_timeout\" class=\"fn\">with_timeout</a>&lt;F, S&gt;(\n    stream: F,\n    stream_handle: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn DnsStreamHandle&gt;,\n    timeout_duration: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>,\n    signer: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"trust_dns_client/rr/dnssec/struct.Signer.html\" title=\"struct trust_dns_client::rr::dnssec::Signer\">Signer</a>&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"trust_dns_client/client/struct.AsyncClientConnect.html\" title=\"struct trust_dns_client::client::AsyncClientConnect\">AsyncClientConnect</a>&lt;DnsMultiplexerConnect&lt;F, S, <a class=\"struct\" href=\"trust_dns_client/rr/dnssec/struct.Signer.html\" title=\"struct trust_dns_client::rr::dnssec::Signer\">Signer</a>&gt;, DnsMultiplexer&lt;S, <a class=\"struct\" href=\"trust_dns_client/rr/dnssec/struct.Signer.html\" title=\"struct trust_dns_client::rr::dnssec::Signer\">Signer</a>&gt;&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"AsyncClientConnect&lt;DnsMultiplexerConnect&lt;F, S, Signer&gt;, DnsMultiplexer&lt;S, Signer&gt;&gt;\">ⓘ</a><div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;S, ProtoError&gt;&gt; + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    S: DnsClientStream + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,</div></h4></section></summary><div class=\"docblock\"><p>Spawns a new AsyncClient Stream.</p>\n<h5 id=\"arguments-1\"><a class=\"doc-anchor\" href=\"#arguments-1\">§</a>Arguments</h5>\n<ul>\n<li><code>stream</code> - A stream of bytes that can be used to send/receive DNS messages\n(see TcpClientStream or UdpClientStream)</li>\n<li><code>timeout_duration</code> - All requests may fail due to lack of response, this is the time to\nwait for a response before canceling the request.</li>\n<li><code>stream_handle</code> - The handle for the <code>stream</code> on which bytes can be sent/received.</li>\n<li><code>signer</code> - An optional signer for requests, needed for Updates with Sig0, otherwise not needed</li>\n</ul>\n</div></details></div></details>",0,"trust_dns_client::client::async_client::ClientFuture"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsyncClient\" class=\"impl\"><a class=\"src rightside\" href=\"src/trust_dns_client/client/async_client.rs.html#96-113\">source</a><a href=\"#impl-AsyncClient\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"trust_dns_client/client/struct.AsyncClient.html\" title=\"struct trust_dns_client::client::AsyncClient\">AsyncClient</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.connect\" class=\"method\"><a class=\"src rightside\" href=\"src/trust_dns_client/client/async_client.rs.html#106-112\">source</a><h4 class=\"code-header\">pub fn <a href=\"trust_dns_client/client/struct.AsyncClient.html#tymethod.connect\" class=\"fn\">connect</a>&lt;F, S&gt;(connect_future: F) -&gt; <a class=\"struct\" href=\"trust_dns_client/client/struct.AsyncClientConnect.html\" title=\"struct trust_dns_client::client::AsyncClientConnect\">AsyncClientConnect</a>&lt;F, S&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"AsyncClientConnect&lt;F, S&gt;\">ⓘ</a><div class=\"where\">where\n    S: DnsRequestSender,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;S, ProtoError&gt;&gt; + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div></h4></section></summary><div class=\"docblock\"><p>Returns a future, which itself wraps a future which is awaiting connection.</p>\n<p>The connect_future should be lazy.</p>\n<h5 id=\"returns\"><a class=\"doc-anchor\" href=\"#returns\">§</a>Returns</h5>\n<p>This returns a tuple of Self a handle to send dns messages and an optional background.\nThe background task must be run on an executor before handle is used, if it is Some.\nIf it is None, then another thread has already run the background.</p>\n</div></details></div></details>",0,"trust_dns_client::client::async_client::ClientFuture"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DnsHandle-for-AsyncClient\" class=\"impl\"><a class=\"src rightside\" href=\"src/trust_dns_client/client/async_client.rs.html#123-130\">source</a><a href=\"#impl-DnsHandle-for-AsyncClient\" class=\"anchor\">§</a><h3 class=\"code-header\">impl DnsHandle for <a class=\"struct\" href=\"trust_dns_client/client/struct.AsyncClient.html\" title=\"struct trust_dns_client::client::AsyncClient\">AsyncClient</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Response\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Response\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Response</a> = DnsExchangeSend</h4></section></summary><div class='docblock'>The associated response from the response future, this should resolve to the Response message</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Error</a> = ProtoError</h4></section></summary><div class='docblock'>Error of the response, generally this will be <code>ProtoError</code></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.send\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/trust_dns_client/client/async_client.rs.html#127-129\">source</a><a href=\"#method.send\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">send</a>&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;DnsRequest&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static&gt;(\n    &amp;mut self,\n    request: R\n) -&gt; Self::Response</h4></section></summary><div class='docblock'>Send a message via the channel in the client <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_verifying_dnssec\" class=\"method trait-impl\"><a href=\"#method.is_verifying_dnssec\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">is_verifying_dnssec</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Only returns true if and only if this DNS handle is validating DNSSec. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lookup\" class=\"method trait-impl\"><a href=\"#method.lookup\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">lookup</a>(&amp;mut self, query: <a class=\"struct\" href=\"trust_dns_client/op/struct.Query.html\" title=\"struct trust_dns_client::op::Query\">Query</a>, options: DnsRequestOptions) -&gt; Self::Response</h4></section></summary><div class='docblock'>A <em>classic</em> DNS query <a>Read more</a></div></details></div></details>","DnsHandle","trust_dns_client::client::async_client::ClientFuture"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-AsyncClient\" class=\"impl\"><a class=\"src rightside\" href=\"src/trust_dns_client/client/async_client.rs.html#115-121\">source</a><a href=\"#impl-Clone-for-AsyncClient\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"trust_dns_client/client/struct.AsyncClient.html\" title=\"struct trust_dns_client::client::AsyncClient\">AsyncClient</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/trust_dns_client/client/async_client.rs.html#116-120\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","trust_dns_client::client::async_client::ClientFuture"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()