(function() {var implementors = {
"alloy_primitives":[["impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"alloy_primitives/struct.Signed.html\" title=\"struct alloy_primitives::Signed\">Signed</a>&lt;BITS, LIMBS&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"enum\" href=\"alloy_primitives/enum.Sign.html\" title=\"enum alloy_primitives::Sign\">Sign</a>"]],
"chrono":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"chrono/struct.Duration.html\" title=\"struct chrono::Duration\">Duration</a>"]],
"crypto_bigint":[["impl&lt;const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;<a class=\"struct\" href=\"crypto_bigint/struct.Uint.html\" title=\"struct crypto_bigint::Uint\">Uint</a>&lt;LIMBS&gt;&gt;"],["impl&lt;MOD: <a class=\"trait\" href=\"crypto_bigint/modular/constant_mod/trait.ResidueParams.html\" title=\"trait crypto_bigint::modular::constant_mod::ResidueParams\">ResidueParams</a>&lt;LIMBS&gt;, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;<a class=\"struct\" href=\"crypto_bigint/modular/constant_mod/struct.Residue.html\" title=\"struct crypto_bigint::modular::constant_mod::Residue\">Residue</a>&lt;MOD, LIMBS&gt;"],["impl&lt;const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"crypto_bigint/modular/runtime_mod/struct.DynResidue.html\" title=\"struct crypto_bigint::modular::runtime_mod::DynResidue\">DynResidue</a>&lt;LIMBS&gt;"],["impl&lt;MOD: <a class=\"trait\" href=\"crypto_bigint/modular/constant_mod/trait.ResidueParams.html\" title=\"trait crypto_bigint::modular::constant_mod::ResidueParams\">ResidueParams</a>&lt;LIMBS&gt;, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"crypto_bigint/modular/constant_mod/struct.Residue.html\" title=\"struct crypto_bigint::modular::constant_mod::Residue\">Residue</a>&lt;MOD, LIMBS&gt;"],["impl&lt;const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;<a class=\"struct\" href=\"crypto_bigint/modular/runtime_mod/struct.DynResidue.html\" title=\"struct crypto_bigint::modular::runtime_mod::DynResidue\">DynResidue</a>&lt;LIMBS&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;<a class=\"struct\" href=\"crypto_bigint/struct.Limb.html\" title=\"struct crypto_bigint::Limb\">Limb</a>&gt;"]],
"curve25519_dalek":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;'a <a class=\"struct\" href=\"curve25519_dalek/scalar/struct.Scalar.html\" title=\"struct curve25519_dalek::scalar::Scalar\">Scalar</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"curve25519_dalek/ristretto/struct.RistrettoPoint.html\" title=\"struct curve25519_dalek::ristretto::RistrettoPoint\">RistrettoPoint</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;'a <a class=\"struct\" href=\"curve25519_dalek/edwards/struct.EdwardsPoint.html\" title=\"struct curve25519_dalek::edwards::EdwardsPoint\">EdwardsPoint</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"curve25519_dalek/edwards/struct.EdwardsPoint.html\" title=\"struct curve25519_dalek::edwards::EdwardsPoint\">EdwardsPoint</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"curve25519_dalek/scalar/struct.Scalar.html\" title=\"struct curve25519_dalek::scalar::Scalar\">Scalar</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;'a <a class=\"struct\" href=\"curve25519_dalek/ristretto/struct.RistrettoPoint.html\" title=\"struct curve25519_dalek::ristretto::RistrettoPoint\">RistrettoPoint</a>"]],
"elliptic_curve":[["impl&lt;C&gt; <a class=\"trait\" href=\"elliptic_curve/ops/trait.Neg.html\" title=\"trait elliptic_curve::ops::Neg\">Neg</a> for &amp;<a class=\"struct\" href=\"elliptic_curve/scalar/struct.ScalarPrimitive.html\" title=\"struct elliptic_curve::scalar::ScalarPrimitive\">ScalarPrimitive</a>&lt;C&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"elliptic_curve/trait.Curve.html\" title=\"trait elliptic_curve::Curve\">Curve</a>,</div>"],["impl&lt;C&gt; <a class=\"trait\" href=\"elliptic_curve/ops/trait.Neg.html\" title=\"trait elliptic_curve::ops::Neg\">Neg</a> for <a class=\"struct\" href=\"elliptic_curve/scalar/struct.ScalarPrimitive.html\" title=\"struct elliptic_curve::scalar::ScalarPrimitive\">ScalarPrimitive</a>&lt;C&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"elliptic_curve/trait.Curve.html\" title=\"trait elliptic_curve::Curve\">Curve</a>,</div>"],["impl&lt;C&gt; <a class=\"trait\" href=\"elliptic_curve/ops/trait.Neg.html\" title=\"trait elliptic_curve::ops::Neg\">Neg</a> for <a class=\"struct\" href=\"elliptic_curve/scalar/struct.NonZeroScalar.html\" title=\"struct elliptic_curve::scalar::NonZeroScalar\">NonZeroScalar</a>&lt;C&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"elliptic_curve/trait.CurveArithmetic.html\" title=\"trait elliptic_curve::CurveArithmetic\">CurveArithmetic</a>,</div>"]],
"ethers":[],
"ethers_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"ethers_core/types/struct.I256.html\" title=\"struct ethers_core::types::I256\">I256</a>"]],
"js_sys":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;<a class=\"struct\" href=\"js_sys/struct.Number.html\" title=\"struct js_sys::Number\">Number</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"js_sys/struct.BigInt.html\" title=\"struct js_sys::BigInt\">BigInt</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;<a class=\"struct\" href=\"js_sys/struct.BigInt.html\" title=\"struct js_sys::BigInt\">BigInt</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"js_sys/struct.Number.html\" title=\"struct js_sys::Number\">Number</a>"]],
"k256":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;'a <a class=\"struct\" href=\"k256/struct.ProjectivePoint.html\" title=\"struct k256::ProjectivePoint\">ProjectivePoint</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;<a class=\"struct\" href=\"k256/struct.Scalar.html\" title=\"struct k256::Scalar\">Scalar</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"k256/struct.Scalar.html\" title=\"struct k256::Scalar\">Scalar</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"k256/struct.AffinePoint.html\" title=\"struct k256::AffinePoint\">AffinePoint</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"k256/struct.ProjectivePoint.html\" title=\"struct k256::ProjectivePoint\">ProjectivePoint</a>"]],
"malachite_base":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"enum\" href=\"malachite_base/rounding_modes/enum.RoundingMode.html\" title=\"enum malachite_base::rounding_modes::RoundingMode\">RoundingMode</a>"]],
"malachite_nz":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"malachite_nz/natural/struct.Natural.html\" title=\"struct malachite_nz::natural::Natural\">Natural</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;'a <a class=\"struct\" href=\"malachite_nz/natural/struct.Natural.html\" title=\"struct malachite_nz::natural::Natural\">Natural</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;'a <a class=\"struct\" href=\"malachite_nz/integer/struct.Integer.html\" title=\"struct malachite_nz::integer::Integer\">Integer</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"malachite_nz/integer/struct.Integer.html\" title=\"struct malachite_nz::integer::Integer\">Integer</a>"]],
"malachite_q":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;'a <a class=\"struct\" href=\"malachite_q/struct.Rational.html\" title=\"struct malachite_q::Rational\">Rational</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"malachite_q/struct.Rational.html\" title=\"struct malachite_q::Rational\">Rational</a>"]],
"nu_ansi_term":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;<a class=\"struct\" href=\"nu_ansi_term/struct.Rgb.html\" title=\"struct nu_ansi_term::Rgb\">Rgb</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"nu_ansi_term/struct.Rgb.html\" title=\"struct nu_ansi_term::Rgb\">Rgb</a>"]],
"num_bigfloat":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"num_bigfloat/struct.BigFloat.html\" title=\"struct num_bigfloat::BigFloat\">BigFloat</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;<a class=\"struct\" href=\"num_bigfloat/struct.BigFloat.html\" title=\"struct num_bigfloat::BigFloat\">BigFloat</a>"]],
"num_bigint":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"enum\" href=\"num_bigint/enum.Sign.html\" title=\"enum num_bigint::Sign\">Sign</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;<a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>"]],
"num_complex":[["impl&lt;'a, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a>&lt;Output = T&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;'a <a class=\"struct\" href=\"num_complex/struct.Complex.html\" title=\"struct num_complex::Complex\">Complex</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a>&lt;Output = T&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"num_complex/struct.Complex.html\" title=\"struct num_complex::Complex\">Complex</a>&lt;T&gt;"]],
"num_rational":[["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;'a <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a>&lt;Output = T&gt;,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a>&lt;Output = T&gt;,</div>"]],
"ordered_float":[["impl&lt;T: <a class=\"trait\" href=\"num_traits/float/trait.FloatCore.html\" title=\"trait num_traits::float::FloatCore\">Float</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"ordered_float/struct.NotNan.html\" title=\"struct ordered_float::NotNan\">NotNan</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"ordered_float/struct.OrderedFloat.html\" title=\"struct ordered_float::OrderedFloat\">OrderedFloat</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"num_traits/float/trait.FloatCore.html\" title=\"trait num_traits::float::FloatCore\">Float</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;<a class=\"struct\" href=\"ordered_float/struct.NotNan.html\" title=\"struct ordered_float::NotNan\">NotNan</a>&lt;T&gt;"],["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;'a <a class=\"struct\" href=\"ordered_float/struct.OrderedFloat.html\" title=\"struct ordered_float::OrderedFloat\">OrderedFloat</a>&lt;T&gt;<div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a T</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a>,</div>"]],
"pathfinding":[["impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"num_traits/sign/trait.Signed.html\" title=\"trait num_traits::sign::Signed\">Signed</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"pathfinding/matrix/struct.Matrix.html\" title=\"struct pathfinding::matrix::Matrix\">Matrix</a>&lt;C&gt;"]],
"ruint":[["impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;<a class=\"struct\" href=\"ruint/struct.Uint.html\" title=\"struct ruint::Uint\">Uint</a>&lt;BITS, LIMBS&gt;"],["impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"ruint/struct.Uint.html\" title=\"struct ruint::Uint\">Uint</a>&lt;BITS, LIMBS&gt;"]],
"scale_info":[],
"substrate_bn":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"substrate_bn/struct.Fr.html\" title=\"struct substrate_bn::Fr\">Fr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"substrate_bn/struct.G1.html\" title=\"struct substrate_bn::G1\">G1</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"substrate_bn/struct.Fq.html\" title=\"struct substrate_bn::Fq\">Fq</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"substrate_bn/struct.Fq2.html\" title=\"struct substrate_bn::Fq2\">Fq2</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"substrate_bn/struct.G2.html\" title=\"struct substrate_bn::G2\">G2</a>"]],
"time":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"time/struct.Duration.html\" title=\"struct time::Duration\">Duration</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"time/struct.UtcOffset.html\" title=\"struct time::UtcOffset\">UtcOffset</a>"]],
"typenum":[["impl&lt;U: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;U&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"typenum/array/struct.ATerm.html\" title=\"struct typenum::array::ATerm\">ATerm</a>"],["impl&lt;V, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"typenum/array/struct.TArr.html\" title=\"struct typenum::array::TArr\">TArr</a>&lt;V, A&gt;<div class=\"where\">where\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a>,\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a>,</div>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"typenum/int/struct.Z0.html\" title=\"struct typenum::int::Z0\">Z0</a>"],["impl&lt;U: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;U&gt;"]],
"wasm_bindgen":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for <a class=\"struct\" href=\"wasm_bindgen/struct.JsValue.html\" title=\"struct wasm_bindgen::JsValue\">JsValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a> for &amp;<a class=\"struct\" href=\"wasm_bindgen/struct.JsValue.html\" title=\"struct wasm_bindgen::JsValue\">JsValue</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()