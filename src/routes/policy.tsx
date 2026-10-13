import { createFileRoute } from '@tanstack/react-router'
import { seo } from '#/utils/seo';

export const Route = createFileRoute('/policy')({
  head: () => ({
    meta: [
      ...seo({
        title: "AFC | Policy",
        description: "Read AFC’s policies and guidelines covering privacy, website use, and other important information for our customers and visitors.",
        link: "/policy"
      })
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="min-w-0">
      <section className="policy-page page-wrap py-8">
        <div className="flex flex-col gap-y-8">
          <div className="policy-section">
            <div>
              <h3>PRIVACY POLICY</h3>
              <p>Last updated: <strong>December 09, 2025</strong></p>
            </div>

            <p>This Privacy Notice for <strong>Arthur's Fried Chicken</strong> (doing business as <strong>AFC</strong>) ("we," "us," or "our") describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:</p>
            <ul>
              <li>Visit our website at <a href="http://www.arthursfriedchicken.com">http://www.arthursfriedchicken.com</a>, or any website of ours that links to this privacy notice</li>
              <li>Engage with us in other related ways, including any sales, marketing, or events</li>
            </ul>

            <p><strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services.</p>
          </div>

          <div className="policy-section">
            <h3>SUMMARY OF KEY POINTS</h3>
            <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services. <a href="#personalinfo">Learn more</a>.</p>
            <p><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</p>
            <p><strong>Do we collect information from third parties?</strong> We do not collect any information from third parties.</p>
            <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. <a href="#infouse">Learn more</a>.</p>
            <p><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations (e.g., business transfers). <a href="#whoshare">Learn more</a>.</p>
            <p><strong>How do we keep your information safe?</strong> We have organizational and technical processes to protect your personal information. <a href="#infosafe">Learn more</a>.</p>
            <p><strong>What are your rights?</strong> Depending on where you are located, you may have certain rights regarding your personal information. <a href="#privacyrights">Learn more</a>.</p>
            <p><strong>How do you exercise your rights?</strong> The easiest way is by contacting us or submitting a <a href="https://app.termly.io/dsar/5f819b70-7fde-4f0c-9325-ddbc7831bacc" target="_blank">data subject access request</a>.</p>
          </div>

          <div className="policy-section">
            <h3>TABLE OF CONTENTS</h3>
            <ol>
              <li><a href="#infocollect">WHAT INFORMATION DO WE COLLECT?</a></li>
              <li><a href="#infouse">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
              <li><a href="#whoshare">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
              <li><a href="#inforetain">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
              <li><a href="#infosafe">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
              <li><a href="#infominors">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
              <li><a href="#privacyrights">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
              <li><a href="#DNT">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
              <li><a href="#policyupdates">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
              <li><a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
              <li><a href="#request">HOW CAN YOU REVIEW, UPDATE, OR DELETE YOUR DATA?</a></li>
            </ol>
          </div>

          <div className="policy-section">
            <h3 id="infocollect">1. WHAT INFORMATION DO WE COLLECT?</h3>
            <h3>Personal information you disclose to us</h3>
            <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
            <p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
            <p>All personal information that you provide must be true, complete, and accurate, and you must notify us of any changes.</p>
          </div>

          <div className="policy-section">
            <h3 id="infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</h3>
            <p>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
            <p>We process your personal information for these purposes, including:</p>
            <ul>
              <li>To determine the effectiveness of our marketing and promotional campaigns.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h3 id="whoshare">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h3>
            <p>We may need to share your personal information in the following situations:</p>
            <ul>
              <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h3 id="inforetain">4. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
            <p>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless a longer retention period is required by law.</p>
            <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it.</p>
          </div>

          <div className="policy-section">
            <h3 id="infosafe">5. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
            <p>We have implemented appropriate technical and organizational security measures designed to protect your personal information. However, no transmission over the internet or storage technology can be guaranteed to be 100% secure.</p>
          </div>

          <div className="policy-section">
            <h3 id="infominors">6. DO WE COLLECT INFORMATION FROM MINORS?</h3>
            <p>We do not knowingly collect data from or market to children under 18 years of age.</p>
          </div>

          <div className="policy-section">
            <h3 id="privacyrights">7. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
            <p>Depending on your location, you may have the right to access, correct, or delete your personal information, or withdraw consent. To exercise these rights, please contact us.</p>
          </div>

          <div className="policy-section">
            <h3 id="DNT">8. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
            <p>Most browsers include a Do-Not-Track feature, but there is currently no uniform standard. We do not currently respond to DNT signals.</p>
          </div>

          <div className="policy-section">
            <h3 id="policyupdates">9. DO WE MAKE UPDATES TO THIS NOTICE?</h3>
            <p>Yes, we will update this notice as necessary to stay compliant with relevant laws. We may notify you of material changes.</p>

          </div>
          <div className="policy-section">
            <h3 id="contact">10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
            <p>If you have questions or comments, you may contact us at:</p>
            <p>
              <strong>Arthur's Fried Chicken</strong><br />
              Poblacion 8, Midsayap, Cotabato, Philippines<br />
            </p>
          </div>

          <div className="policy-section">
            <h3 id="request">11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h3>
            <p>You may have the right to request access to, correction, or deletion of your personal information. To make such a request, please <a href="https://app.termly.io/dsar/5f819b70-7fde-4f0c-9325-ddbc7831bacc" target="_blank">submit a data subject access request</a> or contact us directly.</p>
          </div>

        </div>
      </section>
    </main>
  )
}
