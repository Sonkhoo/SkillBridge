// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   BookOpen, Users, Award, Zap, Globe, Menu, X, Facebook, Twitter, Linkedin,
//   Mail, Phone, MapPin, Play, ArrowRight, Star, Shield, Target, Smartphone
// } from 'lucide-react';
// <AnimatedSection>
//             <footer className="bg-gray-800 text-white rounded-2xl shadow-xl p-10 max-w-7xl mx-auto">
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//                 {/* About */}
//                 <div>
//                   <h3 className="text-xl font-bold mb-4">{currentTranslation.footer.about}</h3>
//                   <p className="text-gray-300 mb-4">{currentTranslation.footer.aboutDesc}</p>
//                   <div className="flex space-x-4">
//                     <Facebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
//                     <Twitter className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
//                     <Linkedin className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
//                   </div>
//                 </div>

//                 {/* Quick Links */}
//                 <div>
//                   <h3 className="text-xl font-bold mb-4">{currentTranslation.footer.quickLinks}</h3>
//                   <ul className="space-y-2 text-gray-300">
//                     <li>{currentTranslation.footer.courses}</li>
//                     <li>{currentTranslation.footer.careers}</li>
//                     <li>{currentTranslation.footer.blog}</li>
//                     <li>{currentTranslation.footer.support}</li>
//                   </ul>
//                 </div>

//                 {/* Contact */}
//                 <div>
//                   <h3 className="text-xl font-bold mb-4">{currentTranslation.footer.contact}</h3>
//                   <div className="space-y-2 text-gray-300">
//                     <div className="flex items-center"><Mail className="w-5 h-5 mr-2" />{currentTranslation.footer.email}</div>
//                     <div className="flex items-center"><Phone className="w-5 h-5 mr-2" />{currentTranslation.footer.phone}</div>
//                     <div className="flex items-center"><MapPin className="w-5 h-5 mr-2" />{currentTranslation.footer.address}</div>
//                   </div>
//                 </div>

//                 {/* Follow Us */}
//                 <div>
//                   <h3 className="text-xl font-bold mb-4">{currentTranslation.footer.followUs}</h3>
//                   <p className="text-gray-300 mb-4">Stay updated with our latest courses and opportunities.</p>
//                   <div className="flex space-x-4">
//                     <Facebook className="w-8 h-8 text-gray-300 hover:text-blue-400 cursor-pointer" />
//                     <Twitter className="w-8 h-8 text-gray-300 hover:text-blue-400 cursor-pointer" />
//                     <Linkedin className="w-8 h-8 text-gray-300 hover:text-blue-400 cursor-pointer" />
//                   </div>
//                 </div>
//               </div>
//               <hr className="my-8 border-gray-700" />
//               <div className="flex flex-col md:flex-row justify-between items-center text-gray-300">
//                 <p>{currentTranslation.footer.copyright}</p>
//                 <div className="flex space-x-4 mt-4 md:mt-0">
//                   <span>{currentTranslation.footer.privacy}</span>
//                   <span>{currentTranslation.footer.terms}</span>
//                 </div>
//               </div>
//             </footer>
//           </AnimatedSection>
//           export default footer;