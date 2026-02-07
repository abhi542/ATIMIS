
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | ATIMIS',
    description: 'Privacy Policy for ATIMIS - detailing how we collect, use, and protect your data.',
};

export default function PrivacyPolicy() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="container mx-auto px-6 py-12 md:py-20 max-w-4xl">
            <div className="space-y-8">
                {/* Header */}
                <div className="border-b border-white/10 pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
                    <p className="text-zinc-400">Last updated: {currentDate}</p>
                </div>

                {/* Intro */}
                <div className="prose prose-invert max-w-none">
                    <p className="text-lg text-zinc-300 leading-relaxed">
                        At <strong>ATIMIS</strong>, we are committed to protecting the privacy of individuals
                        who visit our website and engage with our services. This Privacy Policy explains how we collect, use, store,
                        and protect personal information in accordance with applicable Indian laws, including the Information Technology
                        Act and related rules.
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed mt-4">
                        By using our website, you agree to the terms of this Privacy Policy.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-12">

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">1. Information We Collect</h2>
                        <p className="text-zinc-300 mb-4">
                            We collect only the information that you voluntarily provide to us through our website.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 bg-white/5 p-6 rounded-lg border border-white/10">
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-zinc-100">Personal Information</h3>
                                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                                    <li>Full name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Company or organization name</li>
                                    <li>Any information you submit through contact forms, inquiries, or service requests</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-zinc-100">We do NOT collect:</h3>
                                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                                    <li>Device information</li>
                                    <li>IP addresses</li>
                                    <li>Browser or operating system details</li>
                                    <li>Location data</li>
                                    <li>Cookies or tracking data</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">2. Purpose of Data Collection</h2>
                        <p className="text-zinc-300 mb-4">
                            We collect and use personal information solely for legitimate business purposes, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
                            <li>Responding to inquiries and communication requests</li>
                            <li>Providing information about our AI and technology services</li>
                            <li>Engaging in business discussions or proposals</li>
                            <li>Fulfilling contractual or pre-contractual obligations</li>
                            <li>Maintaining internal records for operational purposes</li>
                        </ul>
                        <p className="text-zinc-400 mt-4 italic border-l-2 border-zinc-700 pl-4">
                            We do not use your information for automated decision-making or profiling.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">3. AI Services and Data Handling</h2>
                        <p className="text-zinc-300 mb-4">As an AI technology solutions provider:</p>
                        <ul className="space-y-3">
                            <li className="flex gap-3">
                                <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                <span className="text-zinc-300">Any data shared with us for project execution is handled strictly as per client agreements</span>
                            </li>
                            <li className="flex gap-3">
                                <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                <span className="text-zinc-300">Client data is used only for delivering the agreed services</span>
                            </li>
                            <li className="flex gap-3">
                                <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                <span className="text-zinc-300">We do not reuse, sell, or train generalized AI models using client data</span>
                            </li>
                            <li className="flex gap-3">
                                <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                <span className="text-zinc-300">Confidentiality and data isolation are maintained throughout service delivery</span>
                            </li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">4. Data Sharing and Disclosure</h2>
                        <p className="text-zinc-300 mb-4">
                            We do not sell, rent, or trade personal information. Information may be shared only:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
                            <li>When required by law, regulation, or government authority</li>
                            <li>To comply with legal obligations or enforce contractual rights</li>
                            <li>With explicit consent from the individual</li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">5. Data Storage and Security</h2>
                        <p className="text-zinc-300 mb-4">
                            We implement reasonable technical and organizational safeguards to protect personal information against:
                        </p>
                        <ul className="grid grid-cols-2 gap-4 mb-4">
                            <li className="bg-white/5 p-3 rounded text-zinc-300 text-center text-sm border border-white/5">Unauthorized access</li>
                            <li className="bg-white/5 p-3 rounded text-zinc-300 text-center text-sm border border-white/5">Loss or misuse</li>
                            <li className="bg-white/5 p-3 rounded text-zinc-300 text-center text-sm border border-white/5">Alteration</li>
                            <li className="bg-white/5 p-3 rounded text-zinc-300 text-center text-sm border border-white/5">Disclosure</li>
                        </ul>
                        <p className="text-zinc-400 text-sm">
                            While we take appropriate measures, no electronic transmission or storage system is completely secure.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">6. Data Retention</h2>
                        <p className="text-zinc-300 mb-2">Personal information is retained only for as long as:</p>
                        <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4 mb-4">
                            <li>Necessary to fulfill the purpose for which it was collected</li>
                            <li>Required to comply with legal, regulatory, or contractual obligations</li>
                        </ul>
                        <p className="text-zinc-300">Once no longer required, the data is securely deleted or anonymized.</p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">7. User Rights</h2>
                        <p className="text-zinc-300 mb-4">As a user, you have the right to:</p>
                        <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
                            <li>Request access to your personal information</li>
                            <li>Request correction or deletion of your data</li>
                            <li>Withdraw consent for future communication</li>
                        </ul>
                        <p className="text-zinc-300 mt-4">Requests can be made by contacting us using the details provided below.</p>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">8. Third-Party Links</h2>
                        <p className="text-zinc-300">
                            Our website may contain links to external websites. We are not responsible for the privacy practices or
                            content of third-party sites. Users are advised to review their privacy policies independently.
                        </p>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">9. Changes to This Privacy Policy</h2>
                        <p className="text-zinc-300">
                            We may update this Privacy Policy periodically to reflect changes in legal requirements or business practices.
                            Any updates will be posted on this page with a revised “Last updated” date.
                        </p>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">10. Contact Information</h2>
                        <p className="text-zinc-300 mb-4">
                            For any questions, concerns, or requests related to this Privacy Policy, please contact:
                        </p>
                        <div className="bg-white/5 p-6 rounded-lg border border-white/10 space-y-3">
                            <p className="text-xl font-bold text-white">ATIMIS</p>
                            <p className="text-zinc-300">
                                <span className="text-zinc-500 w-24 inline-block">Email:</span>
                                <a href="mailto:contact@atimis.in" className="text-blue-400 hover:text-blue-300 transition-colors">contact@atimis.in</a>
                            </p>
                            <p className="text-zinc-300">
                                <span className="text-zinc-500 w-24 inline-block">Address:</span>
                                Bengaluru, India
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
