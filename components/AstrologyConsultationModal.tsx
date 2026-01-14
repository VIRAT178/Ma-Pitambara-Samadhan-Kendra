'use client'
import { useState, useEffect } from 'react'
import { X, MessageSquare } from 'lucide-react'

export default function AstrologyConsultationModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Sticky Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center gap-2 animate-pulse"
        title="तुरंत परामर्श के लिए क्लिक करें"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="hidden md:inline text-sm font-semibold">तुरंत परामर्श</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">तुरंत परामर्श प्रक्रिया</h2>
                <p className="text-purple-100 mt-1">ज्योतिष परामर्श सेवा</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2 rounded-full transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Introduction */}
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
                <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-3">
                  आपके प्रश्नों के उत्तर देने के लिए...
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  हमें एक कुंडली फॉर्मेट तैयार करना होगा जो PDF के रूप में आपको मिलेगा। इस फॉर्मेट में आपकी डिटेल के आधार पर ग्रहों की स्थिति, नक्षत्र की स्थिति, कुंडली में बनने वाले योग और दोष, और अभी की चल रही दशाओं का वर्णन होगा।
                </p>
              </div>

              {/* Format Details */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-4">
                  📋 कुंडली फॉर्मेट में शामिल है:
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-2xl">✓</span>
                    <span><strong>चलित कुंडली</strong> - ग्रहों की वर्तमान स्थिति</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">✓</span>
                    <span><strong>वर्ष फल</strong> - वर्षांतरी कुंडली</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">✓</span>
                    <span><strong>नवमांश कुंडली</strong> - विस्तृत विश्लेषण</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">✓</span>
                    <span><strong>भाग्यशाली रत्न और रुद्राक्ष</strong> - संपूर्ण जानकारी</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">✓</span>
                    <span><strong>शुभ और अशुभ ग्रह</strong> - उपाय के साथ</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">✓</span>
                    <span><strong>ईष्ट देवता की जानकारी</strong></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">✓</span>
                    <span><strong>दान और उपाय</strong> - नकारात्मक प्रभाव कम करने के लिए</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-2xl">✓</span>
                    <span><strong>मुख्य बीज मंत्र</strong> - ग्रहों को सकारात्मक करने के लिए</span>
                  </li>
                </ul>
              </div>

              {/* Required Information */}
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-700">
                <h3 className="text-lg font-bold text-orange-900 dark:text-orange-100 mb-4">
                  📝 आवश्यक जानकारी:
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                  <div className="flex gap-3">
                    <span className="font-bold text-orange-600 dark:text-orange-400">(1)</span>
                    <span>आपका नाम</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-orange-600 dark:text-orange-400">(2)</span>
                    <span>जन्म तारीख</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-orange-600 dark:text-orange-400">(3)</span>
                    <span>जन्म समय</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-orange-600 dark:text-orange-400">(4)</span>
                    <span>जन्म स्थान</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-orange-600 dark:text-orange-400">(5)</span>
                    <span>वर्तमान वजन</span>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700">
                <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-4">
                  ⚙️ प्रक्रिया:
                </h3>
                <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex gap-3">
                    <span className="font-bold text-green-600 dark:text-green-400 min-w-fit">1.</span>
                    <span>अपना नाम, जेंडर, डेट ऑफ बर्थ, जन्म समय, जन्म स्थान भेजें</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-green-600 dark:text-green-400 min-w-fit">2.</span>
                    <span>अपने 5 मुख्य प्रश्न लिखकर भेजें</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-green-600 dark:text-green-400 min-w-fit">3.</span>
                    <span>पेमेंट करें और स्क्रीन शॉट भेजें</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-green-600 dark:text-green-400 min-w-fit">4.</span>
                    <span>पेमेंट के बाद 3 दिन में आपका अपॉइंटमेंट तय होगा</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-green-600 dark:text-green-400 min-w-fit">5.</span>
                    <span>कॉल के दौरान रिकॉर्डिंग चालू करें (संदर्भ के लिए)</span>
                  </li>
                </ol>
              </div>

              {/* Pricing */}
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-700">
                <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-100 mb-4">
                  💰 शुल्क:
                </h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div className="flex justify-between items-center">
                    <span>5 प्रश्नों के साथ संपूर्ण परामर्श + कुंडली PDF</span>
                    <span className="font-bold text-lg text-indigo-600 dark:text-indigo-400">₹1100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>कुंडली मिलान / एक प्रश्न का उत्तर</span>
                    <span className="font-bold text-lg text-indigo-600 dark:text-indigo-400">₹251</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>मुहूर्त के लिए</span>
                    <span className="font-bold text-lg text-indigo-600 dark:text-indigo-400">₹501</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>कुंडली का वीडियो विश्लेषण (Zoom)</span>
                    <span className="font-bold text-lg text-indigo-600 dark:text-indigo-400">₹3100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>ज्योतिष कोर्स</span>
                    <span className="font-bold text-lg text-indigo-600 dark:text-indigo-400">₹11000</span>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-700">
                <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-4">
                  💳 भुगतान विवरण:
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-bold text-red-600 dark:text-red-400 mb-2">🏦 बैंक हस्तांतरण:</p>
                    <p>खाता धारक: Pt Shubham Sharma</p>
                    <p>बैंक: Bank of India</p>
                    <p>खाता संख्या: 913810110006672</p>
                    <p>IFSC Code: BKID0009138</p>
                  </div>
                  <div>
                    <p className="font-bold text-red-600 dark:text-red-400 mb-2">📱 डिजिटल भुगतान:</p>
                    <p>Google Pay: 9522748858</p>
                    <p>Phone Pay: 9522748858</p>
                    <p>Paytm: 9522748858</p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6 border border-purple-300 dark:border-purple-600">
                <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-4">
                  📞 हमसे संपर्क करें:
                </h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>
                    <span className="font-bold">ज्योतिष पंडित S.K. शास्त्री</span><br/>
                    P.G. & Masters in ASTROLOGY<br/>
                    Gold Medalist 🎖️
                  </p>
                  <p className="text-lg font-bold text-purple-600 dark:text-purple-400">
                    WhatsApp: <a href="https://wa.me/919479908066" target="_blank" rel="noreferrer" className="hover:underline">9479908066</a>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ✓ परामर्श शुल्क में प्रश्न का उत्तर, उपाय, रत्न और रुद्राक्ष परामर्श शामिल है।<br/>
                    ✓ उपाय आपको चैट बॉक्स में भी भेजे जाएंगे।
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="sticky bottom-0 bg-gray-100 dark:bg-gray-700 p-6 border-t border-gray-200 dark:border-gray-600 flex gap-4">
              <a
                href="https://wa.me/919479908066"
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition text-center"
              >
                WhatsApp पर संपर्क करें
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-lg transition"
              >
                बंद करें
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
