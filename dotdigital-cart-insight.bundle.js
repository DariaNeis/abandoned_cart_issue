(self.webpackChunkgcom_rhythm = self.webpackChunkgcom_rhythm || []).push([
  [13],
  {
    5235: () => {
      function t() {
        var t = window.dotDigitalCartInsights;
        document.addEventListener("visitorConsentCollected", function (e) {
          if (!0 === e.detail.marketingAllowed) {
            var n = {
              enableGuestAbandonedCart: !1,
              newsletterForms: ".privy-widget-form",
            };
            (function (t) {
              function e(t) {
                var e,
                  n =
                    (e = t.target.querySelector("input[type=email]")) && e.value
                      ? e.value
                      : null;
                n && r(n);
              }
              function r(t) {
                i("dm-subscriber", t, 365);
              }
              function i(e, n, r) {
                var i;
                n &&
                  ((i = new Date()).setTime(
                    i.getTime() + 24 * r * 60 * 60 * 1e3,
                  ),
                  (t.cookie =
                    e + "=" + n + "; expires=" + i.toGMTString() + "; path=/"));
              }
              function a(e) {
                for (
                  var n = e + "=", r = t.cookie.split(";"), i = 0;
                  i < r.length;
                  i++
                ) {
                  for (var a = r[i]; "" == a.charAt(0); )
                    a = a.substring(1, a.length);
                  if (0 == a.indexOf(n)) return a.substring(n.length, a.length);
                }
                return null;
              }
              n &&
                (n.enableGuestAbandonedCart &&
                  t.querySelectorAll(n.newsletterForms).forEach(function (t) {
                    t.addEventListener("submit", e, !1);
                  }),
                (n.emailSubmitted = a("dm-subscriber")),
                r(n.emailSubmitted),
                (n.cartId = a("cart")),
                i("dm-cart", n.cartId, 15));
            })(document),
              window.customerEmail && !0 === window.customerAcceptsMarketing
                ? n("identify", window.customerEmail)
                : n.enableGuestAbandonedCart &&
                  n.emailSubmitted &&
                  "" !== n.emailSubmitted &&
                  n("identify", n.emailSubmitted),
              n.cartId &&
                "" !== n.cartId &&
                n("cartInsight", {
                  programID: t.programId,
                  cartDelay: 30,
                  cartID: n.cartId,
                  cartPhase: "CUSTOMER_LOGIN",
                  currency: t.currency,
                  subtotal: t.subtotal,
                  discountAmount: t.discountAmount,
                  taxAmount: 0,
                  grandTotal: t.grandTotal,
                  cartUrl: t.cartUrl,
                  lineItems: t.lineItems,
                });
          }
        });
      }
      window.Shopify.loadFeatures(
        [{ name: "consent-tracking-api", version: "0.1" }],
        function (e) {
          e ||
            ("yes" ===
              window.Shopify.customerPrivacy.currentVisitorConsent()
                .marketing &&
              t());
        },
      ),
        document.addEventListener("visitorConsentCollected", function (e) {
          !0 === e.detail.marketingAllowed && t();
        });
    },
  },
  (t) => {
    t((t.s = 5235));
  },
]);
